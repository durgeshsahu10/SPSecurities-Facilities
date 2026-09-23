import { createServerFn } from "@tanstack/react-start";
import { sendAdminNotification, type NotificationKind } from "./notify.server";

/**
 * Best-effort admin email notification. The forms call this AFTER the
 * Firestore write succeeds, so a mail failure never blocks the submission.
 * If SMTP is not configured the server logs a warning and returns sent:false.
 */
export const notifyAdminFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    const d = data as { kind?: unknown; fields?: unknown };
    if (d?.kind !== "application" && d?.kind !== "enquiry") {
      throw new Error("Invalid notification kind.");
    }
    if (typeof d?.fields !== "object" || d.fields === null) {
      throw new Error("Invalid notification fields.");
    }
    const fields: Record<string, string> = {};
    for (const [key, value] of Object.entries(
      d.fields as Record<string, unknown>,
    )) {
      fields[String(key).slice(0, 40)] = String(value ?? "").slice(0, 2000);
    }
    return { kind: d.kind as NotificationKind, fields };
  })
  .handler(async ({ data }) => {
    const sent = await sendAdminNotification(data.kind, data.fields);
    return { sent };
  });
