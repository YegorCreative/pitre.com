/**
 * All public copy lives here so the site can be updated without hunting through templates.
 * Facts follow Brian L. Pitre’s résumé dated September 2, 2020, plus the two photographs
 * supplied for the site. The street address from the résumé is intentionally omitted.
 *
 * Contact form: set `formEndpoint` to a Formspree form URL (https://formspree.io/f/xxxxxxxx).
 * That URL is public by design. Do not put a private API key in this file.
 */

export type Era =
  | "mainframe"
  | "minicomputer"
  | "workstation"
  | "personal"
  | "internet"
  | "drone"
  | "service"
  | "education";

export interface Chapter {
  id: string;
  years: string;
  era: Era;
  title: string;
  kicker: string;
  text: string;
  href: string;
}

export interface Role {
  slug: string;
  org: string;
  role: string;
  years: string;
  sort: string;
  era: Era;
  founded: boolean;
  lede: string;
  points: string[];
}

export const site = {
  name: "Brian L. Pitre",
  shortName: "Brian Pitre",
  title: "Brian L. Pitre",
  description:
    "Brian L. Pitre — more than fifty years in computing, from IBM mainframes and personal computers to the commercial internet and drone training.",
  location: "Canandaigua, New York",
  phoneDisplay: "(585) 230-0550",
  phoneHref: "tel:+15852300550",
  formEndpoint: "",
  resumeNote: "Career facts follow Brian L. Pitre’s résumé of September 2, 2020.",
  roleLine: "Founder, sales leader, and drone-training co-founder",
} as const;

export const nav = [
  { href: "/biography/", label: "Biography" },
  { href: "/timeline/", label: "Timeline" },
  { href: "/ventures/", label: "Ventures" },
  { href: "/technology/", label: "Technology" },
  { href: "/leadership/", label: "Leadership" },
  { href: "/military/", label: "Service" },
  { href: "/contact/", label: "Contact" },
] as const;

export const eras: { id: Era | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "mainframe", label: "Mainframes" },
  { id: "service", label: "Service" },
  { id: "education", label: "Education" },
  { id: "minicomputer", label: "Minicomputers" },
  { id: "workstation", label: "CAD / CAM" },
  { id: "personal", label: "Personal computers" },
  { id: "internet", label: "Internet" },
  { id: "drone", label: "Drones" },
];

export const chapters: Chapter[] = [
  {
    id: "mainframes",
    years: "1967–1976",
    era: "mainframe",
    kicker: "IBM mainframes",
    title: "The machine room",
    text: "At Graphic Controls he moved from computer operator to programmer, systems analyst, and project manager. The machines were IBM 1401, 1440, 360, and 370 systems. The work was payroll, finance, and manufacturing.",
    href: "/technology/#mainframes",
  },
  {
    id: "minis",
    years: "1976–1982",
    era: "minicomputer",
    kicker: "Minicomputers",
    title: "Out of the computer room",
    text: "Data General, then a company of his own, then Prime Computer. He sold minicomputers into engineering, education, government, and business, and managed the Upstate New York branch at Prime.",
    href: "/technology/#minicomputers",
  },
  {
    id: "cad",
    years: "1982–1987",
    era: "workstation",
    kicker: "CAD / CAM",
    title: "Design on the screen",
    text: "Scientific Calculations made electronic-design software and, in 1984, sat on the INC 500. He then co-founded Cygnet Group to distribute personal-computer CAD/CAM tools.",
    href: "/technology/#cad",
  },
  {
    id: "pc",
    years: "1987–1993",
    era: "personal",
    kicker: "Personal computers",
    title: "The account and the dictionary",
    text: "Wang Laboratories put him on the Eastman Kodak account worldwide. Microlytics, a Xerox venture, licensed spell checkers, thesauri, and translators to Microsoft, Apple, Claris, and Lotus.",
    href: "/technology/#personal",
  },
  {
    id: "internet",
    years: "1993–2016",
    era: "internet",
    kicker: "The commercial internet",
    title: "Direct response, then the network",
    text: "He licensed data-compression software, sold the Kap Strap hat retainer, and built dockside.net. SMART Internet Marketing — email, surveys, sweepstakes, and tracking — was used by more than fifty organizations.",
    href: "/technology/#internet",
  },
  {
    id: "drones",
    years: "2013 onward",
    era: "drone",
    kicker: "Drones",
    title: "Teaching the aircraft",
    text: "SkyOp writes drone-training courseware, licenses it to partners, and teaches it directly. The classroom photograph shows him leading Introduction to sUAS.",
    href: "/ventures/skyop/",
  },
];

export const roles: Role[] = [
  {
    slug: "graphic-controls",
    org: "Graphic Controls Corporation",
    role: "Project Manager / Senior Systems Analyst",
    years: "June 1967 – October 1976",
    sort: "1967-06",
    era: "mainframe",
    founded: false,
    lede: "His first long stay in the industry. The résumé includes military leave inside these years. He advanced from computer operator to programmer, systems analyst, and project lead.",
    points: [
      "Led projects in payroll, financial, and manufacturing applications.",
      "Worked on large-scale IBM systems: 1401, 1440, 360, and 370.",
      "The span includes military leave for U.S. Army service from 1968 to 1971.",
    ],
  },
  {
    slug: "us-army",
    org: "United States Army",
    role: "General Electronic Cryptographic Repairman",
    years: "1968 – 1971",
    sort: "1968-01",
    era: "service",
    founded: false,
    lede: "Military service during the Graphic Controls years. He served in Vietnam in 1969 and 1970.",
    points: [
      "Military occupational specialty 31S30, General Electronic Cryptographic Repairman.",
      "Held a Top Secret clearance with crypto access. The clearance described here is historical.",
      "Vietnam service, 1969–1970.",
    ],
  },
  {
    slug: "education",
    org: "State University of New York at Buffalo",
    role: "Business management",
    years: "1971 – 1976",
    sort: "1971-01",
    era: "education",
    founded: false,
    lede: "Studied while his Graphic Controls career continued. The résumé names Millard Fillmore College and a concentration in business management.",
    points: [
      "State University of New York at Buffalo, 1971–1976.",
      "Millard Fillmore College.",
      "Business management.",
    ],
  },
  {
    slug: "data-general",
    org: "Data General Corporation",
    role: "Sales Engineer",
    years: "September 1976 – September 1978",
    sort: "1976-09",
    era: "minicomputer",
    founded: false,
    lede: "Selling Data General minicomputers into engineering, education, government, data processing, and OEM accounts.",
    points: [
      "Three months after joining, received Salesman of the Quarter.",
      "Rookie of the Year at the end of that first year.",
      "Left as Senior Sales Engineer in charge of the Buffalo office and new-account leader for the Eastern Region.",
      "Sales each year were in excess of one million dollars.",
    ],
  },
  {
    slug: "collective-computer-marketing",
    org: "Collective Computer Marketing, Inc.",
    role: "Executive Vice President & Co-Founder",
    years: "September 1978 – September 1979",
    sort: "1978-09",
    era: "minicomputer",
    founded: true,
    lede: "A company taken from an idea to a written business plan, with capital raised through private and commercial avenues.",
    points: [
      "Primary markets were turnkey small-business systems and a high-level program generator.",
      "Products were based on Data General minicomputers and Zilog microcomputers.",
      "The résumé states the company was forced out of business by an employee theft of the newly completed program generator.",
    ],
  },
  {
    slug: "prime-computer",
    org: "Prime Computer, Inc.",
    role: "Branch Sales Manager",
    years: "September 1979 – March 1982",
    sort: "1979-09",
    era: "minicomputer",
    founded: false,
    lede: "Managed Prime’s Upstate New York field sales operation, selling general-purpose computers.",
    points: [
      "Directed four sales representatives and two technical support representatives.",
      "Campaigns in CAD/CAM, office automation, engineering, communications, and data processing.",
    ],
  },
  {
    slug: "scientific-calculations",
    org: "Scientific Calculations, Inc.",
    role: "Director of Sales — North America",
    years: "March 1982 – June 1985",
    sort: "1982-03",
    era: "workstation",
    founded: false,
    lede: "Reported directly to the president as part of senior management. Scientific Calculations was an industry leader in CAD/CAM products for electronic design automation.",
    points: [
      "Responsible for sales field operations, marketing direction, technical support, sales training, and national accounts.",
      "Built a field organization of more than sixty people.",
      "Corporate-wide sales in excess of $43 million.",
      "INC magazine ranked the company among the fastest-growing private companies in the 1984 INC 500.",
      "Hired as Eastern Region Manager and promoted to Director of Sales after building the top sales region in 1983.",
    ],
  },
  {
    slug: "cygnet-group",
    org: "Cygnet Group, Inc.",
    role: "Vice President & Co-Founder",
    years: "June 1985 – May 1987",
    sort: "1985-06",
    era: "workstation",
    founded: true,
    lede: "A distribution company for personal-computer CAD/CAM and engineering products, planned for a national market.",
    points: [
      "Wrote the business plan and attempted to secure venture-capital financing.",
      "Became a regional distributor for Viewlogic.",
      "Resold mechanical systems from Supercads and McDonnell Douglas 3D Graphixx.",
    ],
  },
  {
    slug: "wang",
    org: "Wang Laboratories, Inc.",
    role: "Account Executive — Eastman Kodak",
    years: "October 1987 – August 1989",
    sort: "1987-10",
    era: "personal",
    founded: false,
    lede: "Primary business interface between Wang Laboratories and Eastman Kodak on a worldwide basis.",
    points: [
      "Managed the direct marketing team into the local Kodak account.",
      "Responsible for $3.5 million in revenue annually.",
      "Systems included minicomputers, image systems, and PC LANs.",
    ],
  },
  {
    slug: "microlytics",
    org: "Selectronics / Microlytics, Inc.",
    role: "Vice President, Sales and Marketing",
    years: "August 1989 – February 1993",
    sort: "1989-08",
    era: "personal",
    founded: false,
    lede: "A Xerox venture company. He managed worldwide OEM licensing of linguistic software, and Selectronics’ handheld computers and custom electronic publishing.",
    points: [
      "Linguistic products included spell checkers, thesauri, and translators.",
      "Customers included Microsoft, Apple, Claris, and Lotus.",
      "Selectronics products were sold OEM and into the consumer-electronics market.",
      "Managed direct sales representatives, commission-only representatives, and distributors in the United States and overseas.",
      "Hired as Eastern Region Sales Manager and promoted to Director of Custom Products, then Vice President.",
    ],
  },
  {
    slug: "data-compression",
    org: "Data Compression, Inc.",
    role: "President & Founder",
    years: "December 1993 – January 1995",
    sort: "1993-12",
    era: "internet",
    founded: true,
    lede: "A software-licensing company for computerized data compression.",
    points: [
      "The toolkit compressed and decompressed general text and directory-listing data.",
      "Built as an interface that could be integrated into an application.",
      "Licensed for magnetic media, ROM, and CD-ROM telephone-directory applications.",
    ],
  },
  {
    slug: "dockside-equipment",
    org: "DockSide Equipment, Inc.",
    role: "President & Founder",
    years: "Founded 1984 · role February 1993 – February 1995",
    sort: "1993-02",
    era: "internet",
    founded: true,
    lede: "Founded in March 1984 as the Kap Strap Company. In May 1993 the Kap Strap hat retainer was sold to Ultimate Products, Inc. of Tampa, Florida, and the corporation was renamed DockSide Equipment, Inc.",
    points: [
      "The résumé dates his DockSide Equipment role from February 1993 to February 1995.",
      "The company created digital-marketing capabilities for manufacturers selling through electronic retailing.",
      "Channels named on the résumé: direct-response television, CD-ROM, and online via the internet.",
    ],
  },
  {
    slug: "dockside-net",
    org: "dockside.net Inc.",
    role: "President & Founder",
    years: "February 1995 – February 2016",
    sort: "1995-02",
    era: "internet",
    founded: true,
    lede: "SMART Internet Marketing, a suite of internet tools for mass email, surveys, sweepstakes, and marketing tracking.",
    points: [
      "Used by more than fifty companies and organizations, nationally and internationally.",
      "He was president and founder for the life of the company recorded on the résumé, through February 2016.",
    ],
  },
  {
    slug: "skyop",
    org: "SkyOp LLC",
    role: "Managing Member & Co-Founder",
    years: "January 2013 onward",
    sort: "2013-01",
    era: "drone",
    founded: true,
    lede: "The résumé, current as of September 2020, names him Managing Member and Co-Founder from January 2013 onward. SkyOp develops drone-training courseware, licenses it to partners, and delivers it to end users.",
    points: [
      "The stated purpose is the safe, lawful, and effective adoption of drone technology.",
      "Works with educational institutions, sUAS manufacturers, public-safety organizations, and businesses.",
      "Custom training aimed at revenue, cost savings, productivity, capacity, and jobs.",
      "A site photograph shows him teaching a SkyOp Introduction to sUAS session.",
    ],
  },
];

export const foundedCount = roles.filter((role) => role.founded).length;

export function href(path: string): string {
  const base = import.meta.env.BASE_URL;
  const clean = path.replace(/^\//, "");
  return `${base}${clean}`;
}

export function bySlug(slug: string): Role | undefined {
  return roles.find((role) => role.slug === slug);
}
