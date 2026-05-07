export type RatioInputs = {
  ca: number;
  cl: number;
  inv: number;
  ni: number;
  rev: number;
  eq: number;
  debt: number;
};

export type Verdict = "good" | "warn" | "bad";

export const defaultInputs: RatioInputs = {
  ca: 850,
  cl: 420,
  inv: 220,
  ni: 180,
  rev: 1200,
  eq: 950,
  debt: 380,
};

export function computeRatios(v: RatioInputs) {
  const cur = v.ca / v.cl;
  const quick = (v.ca - v.inv) / v.cl;
  const npm = (v.ni / v.rev) * 100;
  const de = v.debt / v.eq;
  const roe = (v.ni / v.eq) * 100;
  const zScore = 2.4 + npm / 20;
  return { cur, quick, npm, de, roe, zScore };
}

export function healthScore(v: RatioInputs): number {
  const { cur, quick, npm, de, roe } = computeRatios(v);
  const raw =
    (cur / 2) * 25 +
    (quick / 1.5) * 20 +
    (npm / 20) * 25 +
    (1 - de / 2) * 15 +
    (roe / 25) * 15;
  return Math.round(Math.max(0, Math.min(100, raw)));
}

// Higher value is better
export function judge(value: number, good: number, warn: number): Verdict {
  if (value >= good) return "good";
  if (value >= warn) return "warn";
  return "bad";
}

// Lower value is better
export function judgeInverse(value: number, good: number, warn: number): Verdict {
  if (value <= good) return "good";
  if (value <= warn) return "warn";
  return "bad";
}

export function scoreVerdict(score: number): string {
  if (score >= 75)
    return "Strong fundamentals. Liquidity and profitability both healthy.";
  if (score >= 50)
    return "Mixed signals. Worth a deeper look — book an audit.";
  return "Multiple distress flags. This is exactly what I help fix.";
}
