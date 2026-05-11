import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "./ServiceCard";
import { CaseStudy } from "./CaseStudy";
import { services, serviceAudience } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section id="services" data-screen-label="03 Services" className="border-b border-line">
      <SectionHeader
        num="03"
        kicker="Services"
        title={
          <>
            I&apos;ll build it <em className="italic text-accent">for you.</em>
          </>
        }
        meta={
          <>
            CA firms · Corporates · Startups
            <br />
            Spreadsheet or document — I make it dramatically better
          </>
        }
      />

      <div className="px-6 pb-20 pt-10 md:pl-[calc(var(--col-w)+56px)] md:pr-14">
        <div className="grid grid-cols-1 border-l border-t border-line md:grid-cols-2">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 rounded-chip border border-line bg-bg-1 px-6 py-5 font-mono text-[12px]">
          <span className="text-[10.5px] uppercase tracking-[0.08em] text-ink-4">
            {"// Built for"}
          </span>
          <div className="flex flex-wrap gap-2">
            {serviceAudience.map((c) => (
              <span
                key={c}
                className="rounded-[2px] border border-line-2 bg-bg-3 px-2.5 py-1 text-[11px] text-ink-2"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <CaseStudy />
      </div>
    </section>
  );
}
