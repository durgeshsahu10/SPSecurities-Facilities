import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import { Loader2, LogOut, Plus, Trash2, ShieldAlert } from "lucide-react";
import { toast } from "sonner";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase";
import {
  listJobs,
  createJob,
  removeJob,
  type Job,
  type JobInput,
} from "@/lib/jobs";

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
};

function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [form, setForm] = useState<JobInput>(emptyJob);
  const [busy, setBusy] = useState(false);

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
  }, [signedIn]);

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

  return (
    <div className="mx-auto max-w-7xl px-4 py-14">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Admin console</p>
          <h1 className="mt-2 text-3xl font-semibold text-ink">
            Career openings
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
            jobs are stored only in this browser and the admin login is
            bypassed. Follow the Firebase setup steps in
            <code className="mx-1 rounded bg-card px-1.5 py-0.5">
              README.md
            </code>{" "}
            to enable real storage and password-protected access.
          </p>
        </div>
      ) : null}

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <form
          onSubmit={addJob}
          className="rounded-2xl border border-border bg-card p-7 shadow-card"
        >
          <h2 className="text-xl font-semibold text-ink">Add a job opening</h2>
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
                options={["Security", "Facilities", "Operations", "Corporate"]}
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
    </div>
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
