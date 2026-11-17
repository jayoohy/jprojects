import { describe, expect, it } from "vitest";
import { creator } from "./creator";

describe("creator sample data", () => {
  it("is flagged as sample content", () => {
    expect(creator.isSampleContent).toBe(true);
  });

  it("has every section the page needs", () => {
    expect(creator.name).not.toBe("");
    expect(creator.pitch).not.toBe("");
    expect(creator.work.length).toBeGreaterThanOrEqual(3);
    expect(creator.work.length).toBeLessThanOrEqual(6);
    expect(creator.stats.length).toBeGreaterThanOrEqual(3);
    expect(creator.stats.length).toBeLessThanOrEqual(4);
    expect(creator.services).toHaveLength(3);
    expect(creator.process.length).toBeGreaterThanOrEqual(3);
    expect(creator.process.length).toBeLessThanOrEqual(4);
    expect(creator.brands.length).toBeGreaterThan(0);
  });

  it("uses a TikTok https link for the hire button", () => {
    expect(creator.contact.url.startsWith("https://")).toBe(true);
    expect(new URL(creator.contact.url).hostname).toContain("tiktok.com");
  });

  it("describes every photo with alt text", () => {
    expect(creator.portrait.alt.length).toBeGreaterThan(10);
    for (const item of creator.work) {
      if (item.image) expect(item.image.alt.length).toBeGreaterThan(10);
    }
  });

  it("gives every service at least one included item", () => {
    for (const service of creator.services) {
      expect(service.includes.length).toBeGreaterThan(0);
    }
  });
});
