import { describe, expect, it } from "vitest";
import { formatNumber } from "./formatNumber";

describe("formatNumber", () => {
  it("compacts millions and thousands", () => {
    expect(formatNumber(1_200_000, { compact: true })).toBe("1.2M");
    expect(formatNumber(128_000, { compact: true })).toBe("128K");
    expect(formatNumber(85_000, { compact: true })).toBe("85K");
  });

  it("leaves small numbers readable when compact", () => {
    expect(formatNumber(42, { compact: true })).toBe("42");
  });

  it("adds thousands separators when not compact", () => {
    expect(formatNumber(1500)).toBe("1,500");
  });

  it("respects a fixed number of decimals", () => {
    expect(formatNumber(7.4, { decimals: 1 })).toBe("7.4");
    expect(formatNumber(7, { decimals: 1 })).toBe("7.0");
  });
});
