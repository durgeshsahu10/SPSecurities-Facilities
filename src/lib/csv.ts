/** Small client-side helpers for the admin inbox tables. */

export type CsvColumn = {
  key: string;
  label: string;
};

function escapeCell(value: unknown): string {
  const s = value == null ? "" : String(value);
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

/** Builds a CSV and downloads it as a file (used by the Download buttons). */
export function downloadCSV(
  filename: string,
  columns: CsvColumn[],
  rows: Record<string, unknown>[],
): void {
  const lines = [
    columns.map((c) => escapeCell(c.label)).join(","),
    ...rows.map((row) => columns.map((c) => escapeCell(row[c.key])).join(",")),
  ];
  const blob = new Blob([lines.join("\r\n")], {
    type: "text/csv;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/**
 * Formats Firestore timestamps (Timestamp objects, ISO strings, or millis)
 * for table cells. Returns `empty` when there is no usable value.
 */
export function formatTimestamp(value: unknown, empty = "—"): string {
  if (value == null) return empty;
  if (typeof value === "string" || typeof value === "number") {
    const d = new Date(value);
    return Number.isNaN(d.getTime())
      ? String(value)
      : d.toLocaleString("en-IN");
  }
  if (typeof value === "object") {
    const v = value as { toDate?: () => Date; seconds?: number };
    try {
      if (typeof v.toDate === "function")
        return v.toDate().toLocaleString("en-IN");
      if (typeof v.seconds === "number")
        return new Date(v.seconds * 1000).toLocaleString("en-IN");
    } catch {
      return empty;
    }
  }
  return empty;
}
