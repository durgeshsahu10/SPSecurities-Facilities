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
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { getDb, getFirebaseStorage, isFirebaseConfigured } from "./firebase";

/** Tags used to segregate gallery photos (same set as the gallery filter). */
export const galleryCategories = [
  "Security",
  "Facilities",
  "Technical",
  "Team",
  "Sites",
] as const;

export type GalleryImage = {
  id: string;
  /** Public URL — Firebase download URL, or a local data URL in demo mode. */
  url: string;
  alt: string;
  category: string;
  /** Storage object path (e.g. "gallery/1729-photo.jpg") — absent in demo mode. */
  storagePath?: string;
  createdAt?: string;
};

export type GalleryImageInput = {
  file: File;
  alt: string;
  category: string;
};

const LOCAL_KEY = "sp-gallery";
/** Rejected above this size (Firebase Storage can take larger files). */
const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;
/** Demo mode keeps photos in localStorage, so cap them tighter. */
const DEMO_MAX_UPLOAD_BYTES = 2.5 * 1024 * 1024;

function assertValidFile(file: File, maxBytes: number) {
  if (!file.type.startsWith("image/")) {
    throw new Error("Please choose an image file (JPG, PNG or WebP).");
  }
  if (file.size > maxBytes) {
    const mb = Math.round(maxBytes / (1024 * 1024));
    throw new Error(`Image is too large — please keep it under ${mb} MB.`);
  }
}

function sanitizeFileName(name: string) {
  return name.replace(/[^a-zA-Z0-9.\-_]/g, "_").slice(0, 80);
}

function readLocal(): GalleryImage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(LOCAL_KEY);
    return raw ? (JSON.parse(raw) as GalleryImage[]) : [];
  } catch {
    return [];
  }
}

function writeLocal(photos: GalleryImage[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LOCAL_KEY, JSON.stringify(photos));
  } catch {
    // localStorage full (large photos) — keep the in-memory state only.
  }
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Could not read the image file."));
    reader.readAsDataURL(file);
  });
}

export async function listGalleryImages(): Promise<GalleryImage[]> {
  const db = getDb();
  if (!isFirebaseConfigured || !db) return readLocal();

  const snap = await getDocs(
    query(collection(db, "gallery"), orderBy("createdAt", "desc")),
  );
  return snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<GalleryImage, "id">),
  })) as GalleryImage[];
}

/** Uploads the photo to Storage (`gallery/…`) and records it in Firestore. */
export async function uploadGalleryImage(
  input: GalleryImageInput,
): Promise<GalleryImage> {
  const db = getDb();
  const storage = getFirebaseStorage();

  if (!isFirebaseConfigured || !db || !storage) {
    assertValidFile(input.file, DEMO_MAX_UPLOAD_BYTES);
    const url = await readFileAsDataUrl(input.file);
    const photo: GalleryImage = {
      id: `local-${Date.now()}`,
      url,
      alt: input.alt.trim() || input.file.name,
      category: input.category,
    };
    const next = [photo, ...readLocal()];
    writeLocal(next);
    return photo;
  }

  assertValidFile(input.file, MAX_UPLOAD_BYTES);
  const storagePath = `gallery/${Date.now()}-${sanitizeFileName(input.file.name)}`;
  await uploadBytes(ref(storage, storagePath), input.file, {
    contentType: input.file.type,
  });
  const url = await getDownloadURL(ref(storage, storagePath));
  const docRef = await addDoc(collection(db, "gallery"), {
    url,
    alt: input.alt.trim() || input.file.name,
    category: input.category,
    storagePath,
    createdAt: serverTimestamp(),
  });
  return {
    id: docRef.id,
    url,
    alt: input.alt.trim() || input.file.name,
    category: input.category,
    storagePath,
  };
}

export async function removeGalleryImage(photo: GalleryImage): Promise<void> {
  const db = getDb();
  const storage = getFirebaseStorage();
  if (!isFirebaseConfigured || !db) {
    writeLocal(readLocal().filter((p) => p.id !== photo.id));
    return;
  }
  // Remove the file first (best effort), then the Firestore record.
  if (photo.storagePath) {
    try {
      await deleteObject(ref(storage!, photo.storagePath));
    } catch {
      // File already gone or transient error — still remove the record.
    }
  }
  await deleteDoc(doc(db, "gallery", photo.id));
}
