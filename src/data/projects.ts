import { designWorks } from "@/data/designs";
import type { DesignGalleryItem } from "@/data/designs";

export type ProjectCategory =
  | "All Projects"
  | "Full-Stack"
  | "Frontend"
  | "UI/UX Design"
  | "Client Projects"
  | "Academic Projects"
  | "Game Development"
  | "Graphic Design";

export interface ProjectLink {
  label: string;
  href: string;
  type: "project" | "prototype" | "github" | "case-study";
}

export interface Project {
  title: string;
  category: string;
  categories?: ProjectCategory[];
  secondaryCategory?: string;
  description: string;
  technologies: string[];
  image?: string;
  role?: string;
  period?: string;
  details?: string[];
  note?: string;
  highlight?: string;
  featured?: boolean;
  links?: ProjectLink[];
  gallery?: DesignGalleryItem[];
}

export const projectCategories: ProjectCategory[] = [
  "All Projects",
  "Full-Stack",
  "Frontend",
  "UI/UX Design",
  "Client Projects",
  "Academic Projects",
  "Game Development",
  "Graphic Design"
];

const legacyProjects: Project[] = [
  {
    title: "API Flora - Online Flower Shop System",
    category: "Web Development",
    secondaryCategory: "Academic Project",
    description:
      "A customer-centric online flower shopping platform with registration, login, browsing, cart, wishlist, checkout, orders, and admin-side features.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "XAMPP"],
    image: "/images/api-flora-creative.webp",
    highlight:
      "Backend and user-side functionality with Selenium, PHPUnit, and JMeter testing work.",
    featured: true
  },
  {
    title: "Digital Voting System - CodePulse 2024 Designathon",
    category: "UI/UX Design",
    description:
      "A secure digital voting concept for Sri Lanka with citizen authentication, candidate selection, submission feedback, and transparent voting flow.",
    technologies: ["Figma", "UX Research", "Prototype", "User Flow"],
    image: "/images/digital-voting-creative.webp",
    highlight: "1st Runner-up at Saegis Campus CodePulse 2024 Designathon.",
    featured: true,
    links: [
      {
        label: "View Prototype",
        href: "https://www.figma.com/proto/cxXdDvlyWbZOr4vXuHUPW3/Pixel-Innovators---Digital-voting-system-for-sri-lanka's-upcoming-election?page-id=0%3A1&node-id=61-121&node-type=frame&viewport=148%2C453%2C0.1&t=eCWInAw65PgNrI4w-1&scaling=scale-down&content-scaling=fixed",
        type: "prototype"
      }
    ]
  },
  {
    title: "Event Booking & Management System UI/UX",
    category: "UI/UX Design",
    description:
      "A clean event booking and management app interface designed to improve event discovery, booking, and organizer workflows.",
    technologies: ["Figma", "Wireframes", "Prototype", "Responsive UI"],
    image: "/images/event-booking-creative.webp",
    links: [
      {
        label: "View Prototype",
        href: "https://www.figma.com/proto/Hmf9RM4groCUwYlyT252tG/Event-booking-and-management-app?page-id=0%3A1&node-id=2-2&node-type=frame&viewport=283%2C187%2C0.27&t=F0iwGj0AZUFuUGlq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2",
        type: "prototype"
      }
    ]
  },
  {
    title: "Safari Travel Website UI",
    category: "UI/UX Design",
    secondaryCategory: "Client Project",
    description:
      "A UI design for an international client running a Sri Lankan safari travel business, focused on clarity, usability, and visual appeal.",
    technologies: ["Figma", "Client UI", "Visual Design"],
    image: "/images/travel.webp"
  },
  {
    title: "Restaurant Menu UI/UX Design",
    category: "UI/UX Design",
    description:
      "A visually appealing restaurant menu interface that helps users browse dishes easily and quickly.",
    technologies: ["Figma", "Mobile UI", "Prototype"],
    image: "/images/restaurant-menu-creative.webp",
    links: [
      {
        label: "View Prototype",
        href: "https://www.figma.com/proto/DzoWqsM6dwlnfwKZooVLVw/Restaurant-menu?page-id=0%3A1&node-id=10-2&viewport=-15097%2C350%2C0.76&t=SRoOoLJ9rU4WnKUy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10%3A2&show-proto-sidebar=1",
        type: "prototype"
      }
    ]
  },
  {
    title: "E-commerce Website UI/UX Design",
    category: "UI/UX Design",
    description:
      "A clean online store interface designed to make product browsing and purchasing easier for customers.",
    technologies: ["Figma", "E-commerce UX", "Prototype"],
    image: "/images/ecommerce-ui-creative.webp",
    links: [
      {
        label: "View Prototype",
        href: "https://www.figma.com/proto/SdkkSGkPdEtYMSZujSzzIx/E-Commerce-Website?page-id=0%3A1&node-id=1-2&viewport=475%2C-1517%2C0.71&t=5Wk6D9dieguelY0K-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2",
        type: "prototype"
      }
    ]
  }
];

const newProjects: Project[] = [
  {
    title: "Skill Swap Hub — Final Year Research Project",
    category: "Full-Stack",
    categories: ["Full-Stack", "Academic Projects"],
    description:
      "A student-focused skill-sharing platform developed as my final-year research project at Saegis Campus. It connects verified student providers with people looking for services.",
    image: "/images/skill-swap-hub.webp",
    technologies: ["Next.js", "Firebase", "UI/UX Design"],
    period: "January – September 2026",
    details: [
      "Researched the feasibility and adoption of student skill sharing in Sri Lanka.",
      "Designed and implemented provider profiles, service discovery, communication, reviews, and administration features.",
      "Completed requirements analysis, surveys, and system evaluation."
    ],
    highlight: "Final-year BSc (Hons) in Computer Science research at Saegis Campus.",
    featured: true,
    links: [
      {
        label: "Live Website",
        href: "https://dev10.d3pibkcqsyhg6d.amplifyapp.com/",
        type: "project"
      }
    ]
  },
  {
    title: "Beyond Wild & Tours — Safari Website UI/UX",
    category: "Client Project",
    categories: ["Client Projects", "UI/UX Design"],
    description:
      "Responsive website interface design for a Sri Lankan safari and tourism business, focused on clear navigation and destination discovery.",
    image: "/images/beyond-wild-tours.webp",
    technologies: ["Figma", "Responsive UI", "Prototyping"],
    role: "UI/UX Designer",
    period: "April – May 2026",
    details: [
      "Designed website interfaces and travel content presentation.",
      "Planned responsive layouts, visual consistency, and intuitive navigation.",
      "My role was UI/UX design, not website development."
    ],
    featured: true,
    links: [
      { label: "Live Website", href: "https://www.beyondwildtours.com/", type: "project" },
      {
        label: "View Figma Design",
        href: "https://www.figma.com/proto/0y7tsHNyeLE2hLQb6rd2Op/Safari-Website?page-id=0%3A1&node-id=17-251&viewport=45%2C144%2C0.13&t=t9doHKgiPm3LImT7-1&scaling=min-zoom&content-scaling=fixed",
        type: "prototype"
      }
    ]
  },
  {
    title: "HerShy Travels — Travel Website UI/UX",
    category: "Client Project",
    categories: ["Client Projects", "UI/UX Design"],
    description:
      "Travel website interface designed for a US-based client, helping visitors explore Sri Lankan destinations, tours, and experiences.",
    image: "/images/hershy-travels.webp",
    technologies: ["Figma", "Responsive UI", "Prototyping"],
    role: "UI/UX Designer",
    period: "November 2025 – January 2026",
    details: [
      "Designed the website interface and Figma prototype.",
      "Planned responsive layouts and user-friendly travel exploration flows.",
      "My role was UI/UX design, not website development."
    ],
    featured: true,
    links: [
      { label: "Live Website", href: "https://hershytravels.com/", type: "project" },
      {
        label: "View Figma Design",
        href: "https://www.figma.com/proto/a1Dtr07Ujc1LrtcTTRoX3X/HerShy-Travel-Website?page-id=0%3A1&node-id=1-2&viewport=137%2C274%2C0.57&t=lBELSG2ISTEhhU4n-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2",
        type: "prototype"
      }
    ]
  },
  {
    title: "Shopora — E-commerce Frontend Website",
    category: "Frontend",
    categories: ["Frontend"],
    description:
      "A responsive storefront focused on product discovery and a smooth demonstration shopping experience.",
    image: "/images/shopora.webp",
    technologies: ["Responsive UI", "E-commerce Frontend"],
    period: "October 2026",
    details: [
      "Product browsing, categories, search, filters, wishlist, cart, demo checkout, and order-tracking interface."
    ],
    note: "Checkout is a demonstration; this is not a live payment-processing platform.",
    links: [{ label: "Live Website", href: "https://shopora-2zw.pages.dev/", type: "project" }]
  },
  {
    title: "VELORA — Luxury Restaurant Website",
    category: "Frontend",
    categories: ["Frontend"],
    description:
      "A fine-dining frontend with an elegant responsive interface, menu exploration, imagery, and smooth interactions.",
    image: "/images/velora.webp",
    technologies: ["Responsive UI", "Frontend Development"],
    period: "October 2026",
    details: [
      "Restaurant story, dining sections, gallery, contact information, and reservation enquiry interface."
    ],
    links: [
      {
        label: "Live Website",
        href: "https://velora.kusharidesilva3.workers.dev/",
        type: "project"
      }
    ]
  },
  {
    title: "Hogwarts — Interactive Frontend Experience",
    category: "Frontend",
    categories: ["Frontend"],
    description:
      "An unofficial fan-made interactive website exploring responsive design, animation, and immersive frontend interfaces.",
    image: "/images/hogwarts-experience.webp",
    technologies: ["Responsive UI", "Interactive Frontend"],
    period: "October 2026",
    details: ["Fantasy-inspired pages, interactive UI, and animations."],
    note: "Unofficial fan-made educational portfolio project. Harry Potter and related properties belong to their respective rights holders.",
    links: [
      { label: "Live Website", href: "https://hogwarts-experience-b8r.pages.dev/", type: "project" }
    ]
  },
  {
    title: "Lunea Nail Art Studio — Beauty Website",
    category: "Frontend",
    categories: ["Frontend"],
    description:
      "A responsive beauty studio frontend for exploring services, nail inspiration, pricing, and appointment enquiries.",
    image: "/images/lunea-nail-art.webp",
    technologies: ["Responsive UI", "Frontend Development"],
    period: "September – October 2026",
    details: [
      "Services, gallery, pricing, contact and WhatsApp integration, and an appointment enquiry flow."
    ],
    links: [
      {
        label: "Live Website",
        href: "https://nail-art-web.kusharidesilva3.workers.dev/",
        type: "project"
      }
    ]
  },
  {
    title: "BlogNest — Responsive Blog Website",
    category: "Frontend",
    categories: ["Frontend"],
    description:
      "A frontend blog website with organized content categories, readable layouts, and simple navigation.",
    image: "/images/blognest.webp",
    technologies: ["Responsive UI", "Frontend Development"],
    details: ["Blog browsing and category-based content presentation."],
    links: [{ label: "Live Website", href: "https://blog-exs.pages.dev/", type: "project" }]
  },
  {
    title: "Bunny's Magical Adventure — Browser Game",
    category: "Game Development",
    categories: ["Game Development", "Frontend"],
    description:
      "A colorful browser game built to explore interactive frontend development, animation, and game design.",
    image: "/images/bunnys-magical-adventure.webp",
    technologies: ["Browser Game", "Interactive UI"],
    links: [
      {
        label: "Live Website",
        href: "https://bunnys-magical-adventure.pages.dev/",
        type: "project"
      }
    ]
  }
];

const graphicProjects: Project[] = designWorks
  .filter((design) => design.title !== "E-commerce Interface Visuals")
  .map((design) => ({
    title: design.title,
    category: "Graphic Design",
    categories: ["Graphic Design"],
    description: design.description,
    technologies: design.tags ?? [design.category],
    image: design.image,
    gallery: design.gallery
  }));

export const projects: Project[] = [
  ...newProjects,
  ...legacyProjects
    .filter((project) => project.title !== "Safari Travel Website UI")
    .sort((a, b) => {
      const priority = ["E-commerce Website UI/UX Design", "Restaurant Menu UI/UX Design"];
      const aIndex = priority.indexOf(a.title);
      const bIndex = priority.indexOf(b.title);
      if (aIndex === -1 && bIndex === -1) return 0;
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    })
    .map((project) => ({
      ...project,
      featured: false,
      categories:
        project.category === "Web Development"
          ? project.technologies.includes("PHP")
            ? (["Full-Stack", "Academic Projects"] as ProjectCategory[])
            : (["Frontend", "Academic Projects"] as ProjectCategory[])
          : project.category === "UI/UX Design"
            ? ((project.title.includes("Designathon") || project.title.includes("Event Booking")
                ? ["UI/UX Design", "Academic Projects"]
                : ["UI/UX Design"]) as ProjectCategory[])
            : [project.category as ProjectCategory]
    })),
  ...graphicProjects
];
