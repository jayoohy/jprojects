import { describe, expect, it } from "vitest";
import { formatMonth } from "./formatMonth";

describe("formatMonth", () => {
  it("shows a short month and year", () => {
    expect(formatMonth("2026-11-17")).toBe("Nov 2026");
  });

  it("does not shift the month at the start or end of a month", () => {
    expect(formatMonth("2026-12-01")).toBe("Dec 2026");
    expect(formatMonth("2026-11-30")).toBe("Nov 2026");
  });
});
