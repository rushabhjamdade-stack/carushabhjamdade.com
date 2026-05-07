import type { Service } from "@/lib/constants";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const num = `0${index + 1}`.slice(-2);
  // Split the price like "₹5,000" → currency + amount so we can amber the amount
  const priceMatch = service.startPrice.match(/^(\D*)(.*)$/);
  const currency = priceMatch?.[1] ?? "";
  const amount = priceMatch?.[2] ?? service.startPrice;

  return (
    <div className="border-b border-r border-line p-8 transition-colors hover:bg-bg-1">
      <div className="mb-4 flex items-center gap-2.5 font-mono text-[10.5px] tracking-[0.1em] text-ink-4">
        <span className="font-semibold text-accent">{num}</span>
        <span>{service.tag}</span>
      </div>
      <h3 className="mb-3.5 font-serif text-[32px] font-normal leading-[1.05] tracking-[-0.02em]">
        {service.title}
      </h3>
      <p className="mb-5 max-w-[460px] text-[14.5px] leading-[1.5] text-ink-2">
        {service.description}
      </p>
      <ul className="mb-6 list-none">
        {service.highlights.map((b, i) => (
          <li
            key={i}
            className="relative border-b border-dashed border-line py-1.5 pl-[22px] font-mono text-[12px] leading-[1.5] text-ink-2 before:absolute before:left-0 before:text-accent before:content-['→']"
          >
            {b}
          </li>
        ))}
      </ul>
      <div className="flex items-baseline justify-between border-t border-line-2 pt-4 font-mono text-[12px] text-ink-3">
        <div>
          <div className="mb-1 text-[10px] uppercase tracking-[0.06em] text-ink-4">
            Starts at
          </div>
          <div className="text-[16px] font-semibold text-ink">
            {currency}
            <span className="text-accent">{amount}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="mb-1 text-[10px] uppercase tracking-[0.06em] text-ink-4">
            Turnaround
          </div>
          <div className="text-ink-2">{service.timeline}</div>
        </div>
      </div>
    </div>
  );
}
