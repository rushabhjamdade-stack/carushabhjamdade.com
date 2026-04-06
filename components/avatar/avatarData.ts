export const avatarStates: Record<string, { message: string }> = {
  hero: {
    message:
      "Welcome! I'm Rushabh — yes, a CA who codes. No, I don't do your taxes.",
  },
  whatido: {
    message: "I wear three hats. Somehow they all fit.",
  },
  products: {
    message: "Built all of these solo. Claude and chai are my co-founders.",
  },
  about: {
    message: "PwC taught me to audit. I taught myself to automate the audit.",
  },
  content: {
    message: "I write about what I build. Novel concept, I know.",
  },
  tools: {
    message: "Excel + AI = unstoppable. These tools save CAs hours every week.",
  },
  resources: {
    message: "Free tools! No catch. Okay, maybe I'll ask for your email.",
  },
  booking: {
    message: "Pick a slot. I promise I'm nicer than your last auditor.",
  },
  newsletter: {
    message: "One email a week. Less annoying than your CA exam notifications.",
  },
};

export const bonusQuips = [
  "My debugging process: console.log, chai, pray, repeat.",
  "Yes, I left a Fortune 500 job to make PDFs smarter. I'm fine.",
  "I've written more TypeScript than audit reports at this point.",
  "Claude is my co-founder. We don't argue about equity.",
  "AI in Finance isn't the future — it's what I shipped last Tuesday.",
  "51 financial ratios. Automated. Before breakfast. (Okay, before lunch.)",
  "My LinkedIn says 'AI Product Builder.' My mom says 'why not government job?'",
  "If you're reading this, you either want to hire me or you're my mom. Hi, mom.",
  "I've mass-produced more MVPs than my CA batchmates have filed ITRs.",
  "Powered by Next.js, Claude, Supabase, and an unreasonable amount of optimism.",
];

export const easterEggs: Record<number, string> = {
  5: "Whoa, someone's curious!",
  10: "Okay okay, you found the Easter egg. Here's a secret — I built this entire site with AI.",
  20: "You're still clicking? We should definitely be friends. Book a call already!",
};

export function getTimeOfDayMessage(): string {
  const hour = new Date().getHours();
  if (hour < 6) {
    return "Late night browsing? Same. I'm probably deploying a hotfix right now.";
  } else if (hour < 12) {
    return "Good morning! Best time to build things.";
  } else if (hour < 17) {
    return "Afternoon chai break? Me too. Let me know if you need anything.";
  } else if (hour < 21) {
    return "Evening mode. Still building, still shipping.";
  } else {
    return "Still working? A true founder. Or a CA during filing season.";
  }
}

export function getReturnVisitorMessage(): string | null {
  if (typeof window === "undefined") return null;
  const visited = localStorage.getItem("rj_visited");
  if (visited) {
    return "Welcome back! Missed me? I've probably shipped something new since you were here.";
  }
  localStorage.setItem("rj_visited", "true");
  return null;
}
