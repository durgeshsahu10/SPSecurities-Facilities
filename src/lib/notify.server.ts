import nodemailer from "nodemailer";

/**
 * Server-only email sender (this file never ships to the browser).
 * Uses any SMTP provider — documented with Gmail App Passwords in
 * firebasesetup.md. All settings come from server environment variables
 * (never VITE_* — those would leak into the client bundle).
 */

export type NotificationKind = "application" | "enquiry";

function env(name: string): string | undefined {
  const v = process.env[name];
  return v && v.length > 0 ? v : undefined;
}

export const ADMIN_EMAIL = env("ADMIN_EMAIL") ?? "Monikak@spgroupcorps.com";

export function isEmailConfigured(): boolean {
  return Boolean(env("SMTP_HOST") && env("SMTP_USER") && env("SMTP_PASS"));
}

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  company: "Company / Society",
  phone: "Phone",
  email: "Email",
  city: "City",
  role: "Role applied for",
  experience: "Experience",
  about: "About",
  service: "Service required",
  message: "Requirement",
  resumeName: "Resume file",
  resumeUrl: "Resume link",
};

function prettyLabel(key: string): string {
  return (
    FIELD_LABELS[key] ??
    key.replace(/[_-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

export async function sendAdminNotification(
  kind: NotificationKind,
  fields: Record<string, string>,
): Promise<boolean> {
  if (!isEmailConfigured()) {
    console.warn(
      "[email] SMTP is not configured — skipping admin notification.",
    );
    return false;
  }

  const port = Number(env("SMTP_PORT") ?? "587");
  const transporter = nodemailer.createTransport({
    host: env("SMTP_HOST"),
    port,
    secure: port === 465,
    auth: { user: env("SMTP_USER"), pass: env("SMTP_PASS") },
  });

  const isApplication = kind === "application";
  const subject = isApplication
    ? `New job application — ${fields["role"] || "General"} (${fields["name"] || "Unknown"})`
    : `New website enquiry — ${fields["service"] || "General"} (${fields["name"] || "Unknown"})`;

  const lines = Object.entries(fields)
    .filter(([, value]) => value && value.trim().length > 0)
    .map(([key, value]) => `${prettyLabel(key)}: ${value.trim()}`);

  const text = [
    isApplication
      ? "A new job application was submitted on the SP Securities website."
      : "A new enquiry was submitted on the SP Securities website.",
    "",
    ...lines,
    "",
    "—",
    "View all submissions any time at /admin (sign-in required).",
  ].join("\n");

  await transporter.sendMail({
    from: env("SMTP_FROM") ?? env("SMTP_USER"),
    to: ADMIN_EMAIL,
    replyTo:
      fields["email"] && fields["email"].includes("@")
        ? fields["email"]
        : undefined,
    subject,
    text,
  });
  return true;
}
