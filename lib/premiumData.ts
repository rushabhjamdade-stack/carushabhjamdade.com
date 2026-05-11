import { premiumToolkits } from "./constants";

export type PremiumProduct = {
  id: string;
  ver: string;
  price: string;
  title: string;
  sub: string;
  quote: string;
  bullets: string[];
  cta: string;
  featured?: boolean;
  badgeLabel?: string;
};

export const premiumProducts: PremiumProduct[] = premiumToolkits.map((p, i) => {
  const isAvailable = p.status === "available";
  return {
    id: p.id,
    ver: isAvailable ? p.tag : "COMING SOON",
    price: isAvailable ? (p.price ?? "—") : "WAITLIST",
    title: p.title,
    sub: p.description,
    quote: `"${p.proofLine}"`,
    bullets: p.highlights,
    cta: isAvailable ? "Purchase — coming soon" : "Notify me",
    featured: i === 0 && isAvailable,
    badgeLabel: i === 0 && isAvailable ? "BEST SELLER" : undefined,
  };
});
