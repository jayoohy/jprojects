import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { HireButton } from "./HireButton";
import { creator } from "@/projects/debby/data/creator";

describe("HireButton", () => {
  it("links to the creator's TikTok", () => {
    render(<HireButton />);
    const link = screen.getByRole("link", { name: /work with me/i });
    expect(link).toHaveAttribute("href", creator.contact.url);
  });

  it("opens in a new tab safely", () => {
    render(<HireButton />);
    const link = screen.getByRole("link", { name: /work with me/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link.getAttribute("rel")).toContain("noopener");
    expect(link.getAttribute("rel")).toContain("noreferrer");
  });

  it("tells screen readers it opens a new tab", () => {
    render(<HireButton />);
    expect(screen.getByText(/opens tiktok in a new tab/i)).toBeInTheDocument();
  });

  it("renders no form fields", () => {
    const { container } = render(<HireButton />);
    expect(container.querySelector("form, input, textarea, select")).toBeNull();
  });
});
