/** "2026-11-17" becomes "Nov 2026". Uses UTC so the month never shifts with the visitor's timezone. */
export function formatMonth(isoDate: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(isoDate));
}
