import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useCountUp } from "./useCountUp";

function mockReducedMotion(reduce: boolean) {
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation((query: string) => ({
      matches: reduce && query.includes("reduce"),
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
}

describe("useCountUp", () => {
  beforeEach(() => mockReducedMotion(false));
  afterEach(() => vi.unstubAllGlobals());

  it("stays at 0 until it is told to start", () => {
    const { result } = renderHook(() => useCountUp(100, { start: false }));
    expect(result.current).toBe(0);
  });

  it("jumps straight to the target when reduced motion is on", () => {
    mockReducedMotion(true);
    const { result } = renderHook(() => useCountUp(100, { start: true }));
    expect(result.current).toBe(100);
  });

  it("stays at 0 with reduced motion until started", () => {
    mockReducedMotion(true);
    const { result } = renderHook(() => useCountUp(100, { start: false }));
    expect(result.current).toBe(0);
  });
});
