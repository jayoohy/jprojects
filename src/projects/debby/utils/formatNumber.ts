type FormatOptions = {
  /** 1200000 becomes "1.2M", 128000 becomes "128K". */
  compact?: boolean;
  /** Fixed number of decimals for non-compact numbers. */
  decimals?: number;
};

export function formatNumber(
  value: number,
  { compact = false, decimals = 0 }: FormatOptions = {},
): string {
  if (compact) {
    return new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(value);
  }

  return new Intl.NumberFormat("en", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}
