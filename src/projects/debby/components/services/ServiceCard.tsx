import type { Service } from "@/projects/debby/data/types";
import { accentStyles } from "@/projects/debby/utils/accent";
import { formatNumber } from "@/projects/debby/utils/formatNumber";
import { Check } from "@/projects/debby/components/ui/icons";

/** One bookable package. Double bezel: a pale tray around a colour core. */
export function ServiceCard({ service }: { service: Service }) {
  const accent = accentStyles[service.accent];

  return (
    <div className="h-full rounded-[2rem] bg-debby-ink/5 p-2 ring-1 ring-debby-ink/10">
      <article
        className={`relative flex h-full flex-col rounded-[calc(2rem-0.5rem)] p-7 ${accent.bg} ${accent.text}`}
      >
        {service.highlight && (
          <span className="absolute -top-3 right-6 rotate-3 rounded-full bg-debby-ink px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-debby-cream animate-wiggle">
            Most booked
          </span>
        )}

        <h3 className="font-debby-display text-3xl font-extrabold tracking-tight">{service.name}</h3>
        <p className="mt-2 text-lg">{service.summary}</p>

        <p className="mt-6 font-debby-display text-5xl font-extrabold tracking-tight">
          {service.startingPrice === null ? (
            "Ask for a quote"
          ) : (
            <>
              <span className="mr-2 align-middle text-sm font-semibold uppercase tracking-[0.18em]">
                from
              </span>
              ${formatNumber(service.startingPrice)}
            </>
          )}
        </p>

        <ul className="mt-6 space-y-3 border-t border-debby-ink/20 pt-6">
          {service.includes.map((line) => (
            <li key={line} className="flex gap-3 text-base">
              <Check className="mt-0.5 size-5 shrink-0" />
              {line}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
