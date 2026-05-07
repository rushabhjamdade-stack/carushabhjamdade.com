import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "./ProductCard";
import { premiumProducts } from "@/lib/premiumData";

export function PremiumSection() {
  return (
    <section id="premium" data-screen-label="04 Premium" className="border-b border-line">
      <SectionHeader
        num="04"
        kicker="Premium Toolkits"
        title={
          <>
            Premium toolkits. <em className="italic text-accent">Grab, pay, ship.</em>
          </>
        }
        meta={
          <>
            Industry-specific Excel tools
            <br />
            Not templates you fill — systems that think
          </>
        }
      />

      <div className="px-6 pb-20 pt-10 md:pl-[calc(var(--col-w)+56px)] md:pr-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {premiumProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-8 rounded-chip border border-dashed border-line-2 px-6 py-4 text-center font-mono text-[12px] text-ink-3">
          Looking for something specific? I also build custom toolkits for any industry.{" "}
          <a href="#services" className="border-b border-dotted border-accent text-accent">
            → See Services
          </a>
        </div>
      </div>
    </section>
  );
}
