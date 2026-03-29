const companyEmail = "sagar.kumar@dancingelephantlabs.com";

const createMailtoLink = (subject: string) =>
  `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}`;

export const company = {
  name: "Dancing Elephant Labs",
  email: companyEmail,
  description: "Build with specialized expertise and demo-led approach."
};

export type ExpertiseArea = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  capabilities: string[];
  demoHref: string;
  demoLabel: string;
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    slug: "ssi",
    name: "SSI & Verifiable Credentials",
    summary: "Standards-based digital trust products for issuers, holders, and verifiers.",
    description:
      "We design and build SSI ecosystems across web and mobile, from credential workflows to trust infrastructure and product UX.",
    capabilities: [
      "Issuer, verifier, and admin portals",
      "Wallet experiences and credential exchange flows",
      "Trust registries, schema lifecycle, and backend services"
    ],
    demoHref: createMailtoLink("Demo request - SSI & Verifiable Credentials"),
    demoLabel: "Request demo access"
  },
  {
    slug: "cryptocurrency",
    name: "Crypto Trading Platforms",
    summary: "Custom trading platforms, portfolio trackers, and DeFi dashboards for crypto-native businesses.",
    description:
      "We build secure, scalable, and user-friendly crypto trading and portfolio management platforms, integrating with major exchanges and DeFi protocols.",
    capabilities: [
      "Integration with centralized exchanges and DeFi protocols",
      "AMM decentralized exchange platforms",
      "Perpetual DEX platforms with leverage and margin trading",
    ],
    demoHref: createMailtoLink("Demo request - Crypto Trading Platforms"),
    demoLabel: "Request demo access"
  }
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  initials: string;
  contactHref?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "SK",
    role: "Solutions Architect",
    bio:
      "Sagar leads discovery, architecture, and delivery across custom software engagements, with deep hands-on expertise in SSI and product-oriented engineering.",
    expertise: [
      "SSI / Verifiable Credentials",
      "Solution architecture",
      "Backend systems",
      "Product delivery"
    ],
    initials: "SK",
    contactHref: createMailtoLink("Let's build with Dancing Elephant Labs")
  },
  {
    name: "LD",
    role: "Mobile Application developer",
    bio:
      "Labhesh is expert in building ios and android mobile applications",
    expertise: [
      "Mobile Application Developer"
    ],
    initials: "LD",
    contactHref: createMailtoLink("Let's build with Dancing Elephant Labs")
  }
];
