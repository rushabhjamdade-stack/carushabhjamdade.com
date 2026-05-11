import type { PremiumProduct } from "@/lib/premiumData";

export function ProductCard({ product }: { product: PremiumProduct }) {
  const isWaitlist = product.price === "WAITLIST";
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-soft border bg-bg-1 transition-colors ${
        product.featured
          ? "border-accent shadow-[0_0_0_1px_rgba(110,231,167,0.2)]"
          : "border-line hover:border-line-2"
      }`}
    >
      {product.badgeLabel && (
        <span className="absolute right-4 top-[-10px] rounded-[2px] bg-accent px-2 py-1 font-mono text-[10px] font-bold tracking-[0.08em] text-[#0b0d0c]">
          {product.badgeLabel}
        </span>
      )}
      <div className="flex items-center justify-between border-b border-line px-5 py-4 font-mono text-[11px] text-ink-4">
        <span className="text-ink-2">{product.ver}</span>
        <span
          className={`font-semibold ${
            isWaitlist ? "text-[10.5px] tracking-[0.1em] text-accent-2" : "text-[14px] text-accent"
          }`}
        >
          {product.price}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-6 pb-7 pt-6">
        <h3 className="mb-3.5 font-serif text-[24px] font-normal leading-[1.1] tracking-[-0.01em]">
          {product.title}
        </h3>
        <p className="mb-4 text-[13.5px] leading-[1.5] text-ink-2">{product.sub}</p>
        <div className="mb-4 border-l-2 border-accent bg-bg px-3.5 py-3 font-mono text-[11px] leading-[1.55] text-ink-3">
          {product.quote}
        </div>
        <ul className="mb-6 list-none">
          {product.bullets.map((b, i) => (
            <li
              key={i}
              className="relative border-b border-dashed border-line py-1.5 pl-[18px] font-mono text-[11.5px] leading-[1.5] text-ink-2 before:absolute before:left-0 before:font-bold before:text-accent before:content-['+']"
            >
              {b}
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <a
            href={isWaitlist ? "#newsletter" : "#newsletter"}
            className={`block rounded-chip border px-3 py-3 text-center font-mono text-[12px] font-medium transition-colors ${
              product.featured
                ? "border-accent bg-accent text-[#0b0d0c] hover:bg-[#84efb6]"
                : "border-line-2 text-ink hover:border-accent hover:bg-accent hover:text-[#0b0d0c]"
            }`}
          >
            {product.cta}
          </a>
        </div>
      </div>
    </div>
  );
}
