import { describe, expect, it } from "vitest";
import { portfolio, projects } from "./projects";

describe("projects data", () => {
  it("has a unique, URL-safe slug for every project", () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9-]+$/);
  });

  it("does not list sub-pages such as the bad version", () => {
    for (const project of projects) expect(project.slug).not.toContain("/");
  });

  it("gives every project a title, description and valid date", () => {
    for (const project of projects) {
      expect(project.title).not.toBe("");
      expect(project.description).not.toBe("");
      expect(Number.isNaN(Date.parse(project.madeOn))).toBe(false);
    }
  });

  it("links to the portfolio over https", () => {
    expect(portfolio.url.startsWith("https://")).toBe(true);
  });
});
