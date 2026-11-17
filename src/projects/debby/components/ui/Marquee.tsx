import { Star } from "./icons";

type MarqueeProps = {
  items: string[];
  /** Colour classes for the strip, for example "bg-debby-ink text-debby-cream". */
  className?: string;
};

/** An endlessly scrolling strip of words. The second copy is hidden from screen readers. */
export function Marquee({ items, className = "bg-debby-ink text-debby-cream" }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-8 whitespace-nowrap">
          <span className="font-debby-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
            {item}
          </span>
          <Star className="size-5 text-debby-pink" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`overflow-hidden py-5 ${className}`}>
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
