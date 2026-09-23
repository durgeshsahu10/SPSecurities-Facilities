import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDb, getFirebaseStorage, isFirebaseConfigured } from "./firebase";

export type Job = {
  id: string;
  title: string;
  department: "Security" | "Facilities" | "Operations" | "Corporate";
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  /** When true, applicants for this role must upload a resume (PDF/Word). */
  requireResume: boolean;
  createdAt?: string;
};

export type JobInput = Omit<Job, "id" | "createdAt">;

export type Application = {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  role: string;
  experience: string;
  about: string;
  resumeUrl?: string;
  resumeName?: string;
  createdAt?: string;
};

export type Enquiry = {
  id: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  message: string;
  createdAt?: unknown;
};

const LOCAL_KEY = "sp-jobs";

const seedJobs: Job[] = [
  {
    id: "seed-1",
    title: "Security Guard (Male)",
    department: "Security",
    location: "Hinjewadi, Pune",
    type: "Full-time",
    experience: "0–3 years",
    salary: "₹16,000 – ₹20,000 / month",
    requireResume: false,
    description:
      "Gate and lobby duty at an IT park. PSARA training provided. Must be 10th pass, physically fit and willing to work rotational shifts.",
  },
  {
    id: "seed-2",
    title: "Lady Security Guard",
    department: "Security",
    location: "Kharadi, Pune",
    type: "Full-time",
    experience: "0–2 years",
    salary: "₹16,500 – ₹21,000 / month",
    requireResume: false,
    description:
      "Frisking, reception support and visitor management at a corporate campus. Day shifts with weekly off and ESIC/PF benefits.",
  },
  {
    id: "seed-3",
    title: "Housekeeping Supervisor",
    department: "Facilities",
    location: "Andheri East, Mumbai",
    type: "Full-time",
    experience: "2–5 years",
    salary: "₹22,000 – ₹28,000 / month",
    requireResume: false,
    description:
      "Lead a housekeeping team of 12 at a commercial tower. Roster planning, consumable stock control and client reporting.",
  },
  {
    id: "seed-4",
    title: "Operations Executive",
    department: "Operations",
    location: "Baner, Pune",
    type: "Full-time",
    experience: "3–6 years",
    salary: "₹30,000 – ₹40,000 / month",
    requireResume: false,
    description:
      "Own site audits, deployment and client escalations across 15+ sites in west Pune. Two-wheeler and smartphone required.",
  },
];

function readLocal(): Job[] {
  if (typeof window === "undefined") return seedJobs;
  try {
    const raw = window.localStorage.getItem(LOCAL_KEY);
    return raw ? (JSON.parse(raw) as Job[]) : seedJobs;
  } catch {
    return seedJobs;
  }
}

function writeLocal(jobs: Job[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LOCAL_KEY, JSON.stringify(jobs));
}

export async function listJobs(): Promise<Job[]> {
  const db = getDb();
  if (!isFirebaseConfigured || !db) return readLocal();

  const snap = await getDocs(
    query(collection(db, "jobs"), orderBy("createdAt", "desc")),
  );
  return snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as JobInput),
  })) as Job[];
}

export async function createJob(input: JobInput): Promise<void> {
  const db = getDb();
  if (!isFirebaseConfigured || !db) {
    writeLocal([{ ...input, id: `local-${Date.now()}` }, ...readLocal()]);
    return;
  }
  await addDoc(collection(db, "jobs"), {
    ...input,
    createdAt: serverTimestamp(),
  });
}

export async function removeJob(id: string): Promise<void> {
  const db = getDb();
  if (!isFirebaseConfigured || !db) {
    writeLocal(readLocal().filter((j) => j.id !== id));
    return;
  }
  await deleteDoc(doc(db, "jobs", id));
}

/** Contact enquiries and job applications share this helper. */
export async function submitDocument(
  collectionName: "enquiries" | "applications",
  payload: Record<string, unknown>,
): Promise<void> {
  const db = getDb();
  if (!isFirebaseConfigured || !db) {
    console.info(`[demo mode] ${collectionName} submission`, payload);
    return;
  }
  await addDoc(collection(db, collectionName), {
    ...payload,
    createdAt: serverTimestamp(),
  });
}

const RESUME_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
export const MAX_RESUME_BYTES = 5 * 1024 * 1024;

/**
 * Uploads an applicant resume to Storage (`resumes/…`).
 * Returns the download URL + original name. In demo mode there is no
 * Storage, so it validates the file and returns null (caller keeps the name).
 */
export async function uploadResume(
  file: File,
): Promise<{ url: string; name: string } | null> {
  const okType =
    RESUME_MIME_TYPES.includes(file.type) || /\.(pdf|docx?)$/i.test(file.name);
  if (!okType) {
    throw new Error(
      "Resume must be a PDF or Word document (.pdf, .doc, .docx).",
    );
  }
  if (file.size > MAX_RESUME_BYTES) {
    throw new Error("Resume is too large — please keep it under 5 MB.");
  }
  const storage = getFirebaseStorage();
  if (!isFirebaseConfigured || !storage) return null;
  const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_").slice(0, 80);
  const path = `resumes/${Date.now()}-${safeName}`;
  await uploadBytes(ref(storage, path), file, { contentType: file.type });
  return { url: await getDownloadURL(ref(storage, path)), name: file.name };
}

export async function listApplications(): Promise<Application[]> {
  const db = getDb();
  // Demo submissions are only console-logged, so there is nothing to list.
  if (!isFirebaseConfigured || !db) return [];

  const snap = await getDocs(
    query(collection(db, "applications"), orderBy("createdAt", "desc")),
  );
  return snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<Application, "id">),
  })) as Application[];
}

export async function removeApplication(id: string): Promise<void> {
  const db = getDb();
  if (!isFirebaseConfigured || !db) return;
  await deleteDoc(doc(db, "applications", id));
}

export async function listEnquiries(): Promise<Enquiry[]> {
  const db = getDb();
  // Demo submissions are only console-logged, so there is nothing to list.
  if (!isFirebaseConfigured || !db) return [];

  const snap = await getDocs(
    query(collection(db, "enquiries"), orderBy("createdAt", "desc")),
  );
  return snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<Enquiry, "id">),
  })) as Enquiry[];
}

export async function removeEnquiry(id: string): Promise<void> {
  const db = getDb();
  if (!isFirebaseConfigured || !db) return;
  await deleteDoc(doc(db, "enquiries", id));
}
