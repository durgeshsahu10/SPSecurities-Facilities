import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import {
  Loader2,
  LogOut,
  Plus,
  Trash2,
  ShieldAlert,
  ImagePlus,
  Briefcase,
  Inbox,
  Image as ImageIcon,
  Lock,
  Download,
  Mail,
} from "lucide-react";
import { toast } from "sonner";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase";
import {
  listJobs,
  createJob,
  removeJob,
  listApplications,
  removeApplication,
  listEnquiries,
  removeEnquiry,
  type Job,
  type JobInput,
  type Application,
  type Enquiry,
} from "@/lib/jobs";
import { downloadCSV, formatTimestamp } from "@/lib/csv";
import {
  listGalleryImages,
  uploadGalleryImage,
  removeGalleryImage,
  galleryCategories,
  type GalleryImage,
} from "@/lib/gallery";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
  head: () => ({
    meta: [
      { title: "Admin — Manage Job Openings | SP Securities" },
      {
        name: "description",
        content: "Internal admin console for managing career listings.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Admin | SP Securities" },
      { property: "og:description", content: "Internal admin console." },
      { property: "og:type", content: "website" },
    ],
  }),
});

const emptyJob: JobInput = {
  title: "",
  department: "Security",
  location: "",
  type: "Full-time",
  experience: "",
  salary: "",
  description: "",
  requireResume: false,
};

type AdminTab = "jobs" | "applications" | "enquiries" | "gallery";

/** Signed out automatically after this long without any activity. */
const IDLE_TIMEOUT_MS = 120 * 60 * 1000;

function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [form, setForm] = useState<JobInput>(emptyJob);
  const [busy, setBusy] = useState(false);
  const [photos, setPhotos] = useState<GalleryImage[]>([]);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoAlt, setPhotoAlt] = useState("");
  const [photoCategory, setPhotoCategory] = useState<string>(
    galleryCategories[0],
  );
  const [uploading, setUploading] = useState(false);
  const [tab, setTab] = useState<AdminTab>("jobs");
  const [applications, setApplications] = useState<Application[]>([]);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [sessionExpired, setSessionExpired] = useState(false);

  const demoMode = !isFirebaseConfigured;

  useEffect(() => {
    const auth = getFirebaseAuth();
    if (!auth) {
      setChecking(false);
      return;
    }
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setChecking(false);
    });
  }, []);

  const signedIn = demoMode || Boolean(user);

  useEffect(() => {
    if (!signedIn) return;
    listJobs()
      .then(setJobs)
      .catch(() => toast.error("Could not load job list."));
    listGalleryImages()
      .then(setPhotos)
      .catch(() => toast.error("Could not load gallery photos."));
    listApplications()
      .then(setApplications)
      .catch(() => toast.error("Could not load applications."));
    listEnquiries()
      .then(setEnquiries)
      .catch(() => toast.error("Could not load enquiries."));
  }, [signedIn]);

  // Auto sign-out after 120 minutes without any mouse, keyboard, touch or
  // scroll activity. Runs only in the browser while signed in.
  useEffect(() => {
    if (!signedIn || sessionExpired) return;

    let timer: ReturnType<typeof setTimeout>;
    async function expireSession() {
      try {
        const auth = getFirebaseAuth();
        if (auth) await signOut(auth);
      } finally {
        setSessionExpired(true);
        toast.warning("Signed out after 120 minutes of inactivity.");
      }
    }
    function reset() {
      clearTimeout(timer);
      timer = setTimeout(expireSession, IDLE_TIMEOUT_MS);
    }

    const events = ["mousedown", "keydown", "touchstart", "scroll"] as const;
    events.forEach((ev) =>
      window.addEventListener(ev, reset, { passive: true }),
    );
    reset();
    return () => {
      clearTimeout(timer);
      events.forEach((ev) => window.removeEventListener(ev, reset));
    };
  }, [signedIn, sessionExpired]);

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const auth = getFirebaseAuth();
    if (!auth) return;
    const data = new FormData(e.currentTarget);
    setBusy(true);
    try {
      await signInWithEmailAndPassword(
        auth,
        String(data.get("email")),
        String(data.get("password")),
      );
      toast.success("Signed in.");
    } catch {
      toast.error("Invalid email or password.");
    } finally {
      setBusy(false);
    }
  }

  async function addJob(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    try {
      await createJob(form);
      setJobs(await listJobs());
      setForm(emptyJob);
      toast.success("Job opening published.");
    } catch {
      toast.error("Could not save the job.");
    } finally {
      setBusy(false);
    }
  }

  async function deleteJob(id: string) {
    try {
      await removeJob(id);
      setJobs(await listJobs());
      toast.success("Job removed.");
    } catch {
      toast.error("Could not remove the job.");
    }
  }

  function pickPhoto(file: File | null) {
    if (photoPreview) URL.revokeObjectURL(photoPreview);
    setPhotoFile(file);
    setPhotoPreview(file ? URL.createObjectURL(file) : null);
    if (file && !photoAlt) {
      setPhotoAlt(
        file.name
          .replace(/\.[^.]+$/, "")
          .replace(/[-_]+/g, " ")
          .trim(),
      );
    }
  }

  async function uploadPhoto(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!photoFile) {
      toast.error("Choose an image file first.");
      return;
    }
    setUploading(true);
    try {
      await uploadGalleryImage({
        file: photoFile,
        alt: photoAlt,
        category: photoCategory,
      });
      setPhotos(await listGalleryImages());
      if (photoPreview) URL.revokeObjectURL(photoPreview);
      setPhotoFile(null);
      setPhotoPreview(null);
      setPhotoAlt("");
      toast.success("Photo added to the gallery.");
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Could not upload the photo.",
      );
    } finally {
      setUploading(false);
    }
  }

  async function deletePhoto(photo: GalleryImage) {
    try {
      await removeGalleryImage(photo);
      setPhotos(await listGalleryImages());
      toast.success("Photo removed.");
    } catch {
      toast.error("Could not remove the photo.");
    }
  }

  async function deleteApplication(id: string) {
    try {
      await removeApplication(id);
      setApplications(await listApplications());
      toast.success("Application removed.");
    } catch {
      toast.error("Could not remove the application.");
    }
  }

  async function deleteEnquiry(id: string) {
    try {
      await removeEnquiry(id);
      setEnquiries(await listEnquiries());
      toast.success("Enquiry removed.");
    } catch {
      toast.error("Could not remove the enquiry.");
    }
  }

  if (checking) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="size-6 animate-spin text-gold-deep" />
      </div>
    );
  }

  if (!signedIn) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-4">
        <form
          onSubmit={login}
          className="w-full rounded-2xl border border-border bg-card p-8 shadow-card"
        >
          <h1 className="text-2xl font-semibold text-ink">Admin sign in</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Use the Firebase Authentication account created for the HR team.
          </p>
          <div className="mt-6 grid gap-4">
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40"
            />
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
              className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40"
            />
            <button
              disabled={busy}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold disabled:opacity-60"
            >
              {busy ? <Loader2 className="size-4 animate-spin" /> : null} Sign
              in
            </button>
          </div>
        </form>
      </div>
    );
  }

  if (sessionExpired) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-4">
        <div className="w-full rounded-2xl border border-border bg-card p-8 text-center shadow-card">
          <span className="mx-auto inline-flex rounded-lg bg-gradient-gold p-2.5 text-ink shadow-gold">
            <Lock className="size-5" />
          </span>
          <h1 className="mt-4 text-2xl font-semibold text-ink">
            Session expired
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            For security, you were signed out after 120 minutes of inactivity.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold"
          >
            Start new session
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-14">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Admin console</p>
          <h1 className="mt-2 text-3xl font-semibold text-ink">
            Manage website
          </h1>
        </div>
        {user ? (
          <button
            onClick={() => signOut(getFirebaseAuth()!)}
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-ink-soft hover:border-gold"
          >
            <LogOut className="size-4" /> Sign out
          </button>
        ) : null}
      </div>

      {demoMode ? (
        <div className="mt-6 flex gap-3 rounded-lg border border-gold bg-sand p-5">
          <ShieldAlert className="mt-0.5 size-5 shrink-0 text-gold-deep" />
          <p className="text-sm text-ink-soft">
            <strong>Demo mode.</strong> Firebase keys are not configured yet, so
            jobs and gallery photos are stored only in this browser and the
            admin login is bypassed. Follow the Firebase setup steps in
            <code className="mx-1 rounded bg-card px-1.5 py-0.5">
              README.md
            </code>{" "}
            to enable real storage and password-protected access.
          </p>
        </div>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-2">
        {(
          [
            {
              id: "jobs",
              label: `Job openings (${jobs.length})`,
              icon: Briefcase,
            },
            {
              id: "applications",
              label: `Applications (${applications.length})`,
              icon: Inbox,
            },
            {
              id: "enquiries",
              label: `Enquiries (${enquiries.length})`,
              icon: Mail,
            },
            {
              id: "gallery",
              label: `Gallery photos (${photos.length})`,
              icon: ImageIcon,
            },
          ] as const
        ).map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-xs font-semibold transition-colors ${
              tab === t.id
                ? "border-transparent bg-gradient-gold text-ink shadow-gold"
                : "border-border bg-card text-ink-soft hover:border-gold"
            }`}
          >
            <t.icon className="size-4" /> {t.label}
          </button>
        ))}
      </div>

      {tab === "jobs" ? (
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <form
            onSubmit={addJob}
            className="h-fit rounded-2xl border border-border bg-card p-7 shadow-card"
          >
            <h2 className="text-xl font-semibold text-ink">
              Add a job opening
            </h2>
            <div className="mt-6 grid gap-4">
              <AdminField
                label="Job title"
                value={form.title}
                onChange={(v) => setForm({ ...form, title: v })}
                required
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <AdminSelect
                  label="Department"
                  value={form.department}
                  options={[
                    "Security",
                    "Facilities",
                    "Operations",
                    "Corporate",
                  ]}
                  onChange={(v) =>
                    setForm({ ...form, department: v as Job["department"] })
                  }
                />
                <AdminSelect
                  label="Type"
                  value={form.type}
                  options={["Full-time", "Part-time", "Contract"]}
                  onChange={(v) => setForm({ ...form, type: v as Job["type"] })}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <AdminField
                  label="Location"
                  value={form.location}
                  onChange={(v) => setForm({ ...form, location: v })}
                  required
                />
                <AdminField
                  label="Experience"
                  value={form.experience}
                  onChange={(v) => setForm({ ...form, experience: v })}
                />
              </div>
              <AdminField
                label="Salary range"
                value={form.salary}
                onChange={(v) => setForm({ ...form, salary: v })}
              />
              <div>
                <label className="text-sm font-medium text-ink">
                  Description
                </label>
                <textarea
                  rows={4}
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <label className="flex cursor-pointer items-start gap-3 rounded-md border border-input bg-background px-4 py-3">
                <input
                  type="checkbox"
                  checked={form.requireResume}
                  onChange={(e) =>
                    setForm({ ...form, requireResume: e.target.checked })
                  }
                  className="mt-0.5 size-4 shrink-0 accent-gold-deep"
                />
                <span className="text-sm">
                  <span className="font-medium text-ink">
                    Require resume upload
                  </span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    Applicants for this role must attach a PDF or Word resume —
                    the upload field appears only for such roles.
                  </span>
                </span>
              </label>
              <button
                disabled={busy}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold disabled:opacity-60"
              >
                {busy ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Plus className="size-4" />
                )}{" "}
                Publish opening
              </button>
            </div>
          </form>

          <div>
            <h2 className="text-xl font-semibold text-ink">
              Published openings ({jobs.length})
            </h2>
            <div className="mt-6 grid gap-4">
              {jobs.map((j) => (
                <div
                  key={j.id}
                  className="rounded-xl border border-border bg-card p-5 shadow-card"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="eyebrow">{j.department}</p>
                      <h3 className="mt-1 text-lg font-semibold text-ink">
                        {j.title}
                      </h3>
                      {j.requireResume ? (
                        <p className="mt-1.5 inline-block rounded-full bg-sand px-3 py-0.5 text-xs font-semibold text-gold-deep">
                          Resume required
                        </p>
                      ) : null}
                      <p className="mt-1 text-xs text-muted-foreground">
                        {j.location} · {j.type} · {j.experience} · {j.salary}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {j.description}
                      </p>
                    </div>
                    <button
                      onClick={() => deleteJob(j.id)}
                      aria-label={`Remove ${j.title}`}
                      className="rounded-md border border-border p-2 text-destructive hover:border-destructive"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {tab === "applications" ? (
        <div className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-ink">
              Received applications ({applications.length})
            </h2>
            {applications.length > 0 ? (
              <button
                onClick={() =>
                  downloadCSV(
                    `applications-${new Date().toISOString().slice(0, 10)}.csv`,
                    [
                      { key: "name", label: "Name" },
                      { key: "phone", label: "Phone" },
                      { key: "email", label: "Email" },
                      { key: "city", label: "City" },
                      { key: "role", label: "Role" },
                      { key: "experience", label: "Experience" },
                      { key: "about", label: "About" },
                      { key: "resumeName", label: "Resume file" },
                      { key: "resumeUrl", label: "Resume link" },
                      { key: "submitted", label: "Submitted" },
                    ],
                    applications.map((a) => ({
                      name: a.name,
                      phone: a.phone,
                      email: a.email,
                      city: a.city,
                      role: a.role,
                      experience: a.experience,
                      about: a.about,
                      resumeName: a.resumeName ?? "",
                      resumeUrl: a.resumeUrl ?? "",
                      submitted: formatTimestamp(a.createdAt, ""),
                    })),
                  )
                }
                className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-4 py-2 text-xs font-semibold text-ink shadow-gold"
              >
                <Download className="size-4" /> Download CSV
              </button>
            ) : null}
          </div>
          {demoMode ? (
            <p className="mt-4 rounded-xl border border-dashed border-border bg-card p-8 text-center text-sm text-muted-foreground">
              Connect Firebase to receive applications here — demo submissions
              are only logged to the browser console.
            </p>
          ) : applications.length === 0 ? (
            <p className="mt-4 rounded-xl border border-dashed border-border bg-card p-8 text-center text-sm text-muted-foreground">
              No applications yet. New submissions from the careers page appear
              here instantly, and a copy is emailed to the admin.
            </p>
          ) : (
            <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-card shadow-card">
              <table className="w-full min-w-[900px] text-left text-sm">
                <thead>
                  <tr className="bg-sand text-xs tracking-wide text-ink uppercase">
                    <Th>Name</Th>
                    <Th>Phone</Th>
                    <Th>Email</Th>
                    <Th>City</Th>
                    <Th>Role</Th>
                    <Th>Experience</Th>
                    <Th>About</Th>
                    <Th>Resume</Th>
                    <Th>Submitted</Th>
                    <Th>
                      <span className="sr-only">Actions</span>
                    </Th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((a) => (
                    <tr
                      key={a.id}
                      className="border-t border-border align-top transition-colors hover:bg-sand/50"
                    >
                      <Td strong>{a.name || "—"}</Td>
                      <Td>{a.phone || "—"}</Td>
                      <Td>{a.email || "—"}</Td>
                      <Td>{a.city || "—"}</Td>
                      <Td>{a.role || "—"}</Td>
                      <Td>{a.experience || "—"}</Td>
                      <Td wide>{a.about || "—"}</Td>
                      <Td>
                        {a.resumeUrl ? (
                          <a
                            href={a.resumeUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="font-semibold text-gold-deep hover:underline"
                          >
                            View
                          </a>
                        ) : (
                          (a.resumeName ?? "—")
                        )}
                      </Td>
                      <Td>{formatTimestamp(a.createdAt)}</Td>
                      <Td>
                        <button
                          onClick={() => deleteApplication(a.id)}
                          aria-label={`Remove application from ${a.name}`}
                          className="rounded-md border border-border p-2 text-destructive hover:border-destructive"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : null}

      {tab === "enquiries" ? (
        <div className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-ink">
              Received enquiries ({enquiries.length})
            </h2>
            {enquiries.length > 0 ? (
              <button
                onClick={() =>
                  downloadCSV(
                    `enquiries-${new Date().toISOString().slice(0, 10)}.csv`,
                    [
                      { key: "name", label: "Name" },
                      { key: "company", label: "Company" },
                      { key: "phone", label: "Phone" },
                      { key: "email", label: "Email" },
                      { key: "service", label: "Service" },
                      { key: "city", label: "City" },
                      { key: "message", label: "Message" },
                      { key: "submitted", label: "Submitted" },
                    ],
                    enquiries.map((e) => ({
                      name: e.name,
                      company: e.company,
                      phone: e.phone,
                      email: e.email,
                      service: e.service,
                      city: e.city,
                      message: e.message,
                      submitted: formatTimestamp(e.createdAt, ""),
                    })),
                  )
                }
                className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-4 py-2 text-xs font-semibold text-ink shadow-gold"
              >
                <Download className="size-4" /> Download CSV
              </button>
            ) : null}
          </div>
          {demoMode ? (
            <p className="mt-4 rounded-xl border border-dashed border-border bg-card p-8 text-center text-sm text-muted-foreground">
              Connect Firebase to receive enquiries here — demo submissions are
              only logged to the browser console.
            </p>
          ) : enquiries.length === 0 ? (
            <p className="mt-4 rounded-xl border border-dashed border-border bg-card p-8 text-center text-sm text-muted-foreground">
              No enquiries yet. New submissions from the contact page appear
              here instantly, and a copy is emailed to the admin.
            </p>
          ) : (
            <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-card shadow-card">
              <table className="w-full min-w-[900px] text-left text-sm">
                <thead>
                  <tr className="bg-sand text-xs tracking-wide text-ink uppercase">
                    <Th>Name</Th>
                    <Th>Company</Th>
                    <Th>Phone</Th>
                    <Th>Email</Th>
                    <Th>Service</Th>
                    <Th>City</Th>
                    <Th>Message</Th>
                    <Th>Submitted</Th>
                    <Th>
                      <span className="sr-only">Actions</span>
                    </Th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((e) => (
                    <tr
                      key={e.id}
                      className="border-t border-border align-top transition-colors hover:bg-sand/50"
                    >
                      <Td strong>{e.name || "—"}</Td>
                      <Td>{e.company || "—"}</Td>
                      <Td>{e.phone || "—"}</Td>
                      <Td>{e.email || "—"}</Td>
                      <Td>{e.service || "—"}</Td>
                      <Td>{e.city || "—"}</Td>
                      <Td wide>{e.message || "—"}</Td>
                      <Td>{formatTimestamp(e.createdAt)}</Td>
                      <Td>
                        <button
                          onClick={() => deleteEnquiry(e.id)}
                          aria-label={`Remove enquiry from ${e.name}`}
                          className="rounded-md border border-border p-2 text-destructive hover:border-destructive"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : null}

      {tab === "gallery" ? (
        <div className="mt-10">
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-2 text-3xl font-semibold text-ink">
            Gallery photos
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Upload site photos with a tag. Tags power the filter buttons on the
            public gallery page.
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <form
              onSubmit={uploadPhoto}
              className="h-fit rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <h3 className="text-xl font-semibold text-ink">Add a photo</h3>
              <div className="mt-6 grid gap-4">
                <div>
                  <label
                    className="text-sm font-medium text-ink"
                    htmlFor="photo"
                  >
                    Image file (JPG, PNG or WebP, max 5 MB)
                  </label>
                  <input
                    key={photoFile ? "chosen" : "empty"}
                    id="photo"
                    type="file"
                    accept="image/*"
                    required={!photoFile}
                    onChange={(e) => pickPhoto(e.target.files?.[0] ?? null)}
                    className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none file:mr-4 file:rounded-md file:border-0 file:bg-sand file:px-4 file:py-2 file:text-sm file:font-semibold file:text-ink focus:border-gold focus:ring-2 focus:ring-ring/40"
                  />
                </div>
                {photoPreview ? (
                  <img
                    src={photoPreview}
                    alt="Upload preview"
                    className="h-44 w-full rounded-lg border border-border object-cover"
                  />
                ) : null}
                <AdminField
                  label="Caption (alt text)"
                  value={photoAlt}
                  onChange={setPhotoAlt}
                  required
                />
                <AdminSelect
                  label="Tag"
                  value={photoCategory}
                  options={[...galleryCategories]}
                  onChange={setPhotoCategory}
                />
                <button
                  disabled={uploading}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold disabled:opacity-60"
                >
                  {uploading ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <ImagePlus className="size-4" />
                  )}{" "}
                  Upload photo
                </button>
              </div>
            </form>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Published photos ({photos.length})
              </h3>
              {photos.length === 0 ? (
                <p className="mt-6 rounded-xl border border-dashed border-border bg-card p-8 text-center text-sm text-muted-foreground">
                  No photos yet. Upload the first one — it appears on the public
                  gallery page instantly.
                </p>
              ) : (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {photos.map((p) => (
                    <div
                      key={p.id}
                      className="overflow-hidden rounded-xl border border-border bg-card shadow-card"
                    >
                      <img
                        src={p.url}
                        alt={p.alt}
                        loading="lazy"
                        className="h-40 w-full object-cover"
                      />
                      <div className="flex items-start justify-between gap-3 p-4">
                        <div>
                          <p className="eyebrow">{p.category}</p>
                          <p className="mt-1 text-sm font-medium text-ink">
                            {p.alt}
                          </p>
                        </div>
                        <button
                          onClick={() => deletePhoto(p)}
                          aria-label={`Remove ${p.alt}`}
                          className="rounded-md border border-border p-2 text-destructive hover:border-destructive"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 font-semibold text-ink">{children}</th>;
}

function Td({
  children,
  strong,
  wide,
}: {
  children: React.ReactNode;
  strong?: boolean;
  wide?: boolean;
}) {
  return (
    <td
      className={`px-4 py-3 text-ink-soft ${strong ? "font-semibold text-ink" : ""} ${wide ? "max-w-xs break-words" : "whitespace-nowrap"}`}
    >
      {children}
    </td>
  );
}

function AdminField({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink">{label}</label>
      <input
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}

function AdminSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
