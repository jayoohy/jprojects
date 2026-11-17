/** Fast start, soft landing. `t` runs from 0 to 1. */
export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}
