export type ProjectCategory =
  | "Web Development"
  | "UI/UX Design"
  | "Academic Projects"
  | "Research"
  | "Graphic Design";

export interface ProjectLink {
  label: string;
  href: string;
  type: "project" | "prototype" | "github" | "case-study";
}

export interface Project {
  title: string;
  category: ProjectCategory;
  secondaryCategory?: string;
  description: string;
  technologies: string[];
  image: string;
  highlight?: string;
  featured?: boolean;
  links?: ProjectLink[];
}

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Web Development",
  "UI/UX Design",
  "Academic Projects",
  "Research",
  "Graphic Design"
];

export const projects: Project[] = [
  {
    title: "API Flora - Online Flower Shop System",
    category: "Web Development",
    secondaryCategory: "Academic Project",
    description:
      "A customer-centric online flower shopping platform with registration, login, browsing, cart, wishlist, checkout, orders, and admin-side features.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "XAMPP"],
    image: "/images/api-flora.webp",
    highlight:
      "Backend and user-side functionality with Selenium, PHPUnit, and JMeter testing work.",
    featured: true,
    links: [
      {
        label: "View Project",
        href: "https://flowershop2024.000webhostapp.com/home.php",
        type: "project"
      }
    ]
  },
  {
    title: "Digital Voting System - CodePulse 2024 Designathon",
    category: "UI/UX Design",
    description:
      "A secure digital voting concept for Sri Lanka with citizen authentication, candidate selection, submission feedback, and transparent voting flow.",
    technologies: ["Figma", "UX Research", "Prototype", "User Flow"],
    image: "/images/digital-voting.webp",
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
    image: "/images/event-booking.webp",
    links: [
      {
        label: "View Prototype",
        href: "https://www.figma.com/proto/Hmf9RM4groCUwYlyT252tG/Event-booking-and-management-app?page-id=0%3A1&node-id=2-2&node-type=frame&viewport=283%2C187%2C0.27&t=F0iwGj0AZUFuUGlq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2",
        type: "prototype"
      }
    ]
  },
  {
    title: "Books Hub Website",
    category: "Web Development",
    description:
      "A reading platform concept with short stories, adventure, fantasy, horror, and mystery categories for leisure reading.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/images/kd-creations.webp"
  },
  {
    title: "Hogwarts Website",
    category: "Web Development",
    secondaryCategory: "Frontend Development",
    description:
      "A frontend website for Hogwarts with home page, syllabus, professors, houses, and character sections.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    image: "/images/hogwarts.webp",
    links: [
      {
        label: "View Project",
        href: "https://kusharidesilva.github.io/Hogwarts-website/",
        type: "project"
      }
    ]
  },
  {
    title: "Travel Website",
    category: "Web Development",
    secondaryCategory: "Frontend Development",
    description:
      "A frontend travel website with home, countries, and gallery sections designed for visual exploration.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/images/travel.webp",
    links: [
      {
        label: "View Project",
        href: "https://kusharidesilva.github.io/Travel-Website/",
        type: "project"
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
    image: "/images/restaurant-menu.webp",
    links: [
      {
        label: "View Prototype",
        href: "https://www.figma.com/proto/DzoWqsM6dwlnfwKZooVLVw/Restaurant-menu?node-id=10-2&starting-point-node-id=10%3A2&t=fC0cH8s57xd53HOa-1",
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
    image: "/images/ecommerce-ui.webp",
    links: [
      {
        label: "View Prototype",
        href: "https://www.figma.com/proto/SdkkSGkPdEtYMSZujSzzIx/E-Commerce-Website?node-id=1-2&starting-point-node-id=1%3A2&t=YG0076mVeyZ0nY2n-1",
        type: "prototype"
      }
    ]
  },
  {
    title: "Mobile App Signup Flow UI/UX",
    category: "UI/UX Design",
    description:
      "A simple mobile signup flow focused on reducing friction and improving user onboarding.",
    technologies: ["Figma", "Mobile UX", "Onboarding"],
    image: "/images/signup-flow.webp",
    links: [
      {
        label: "View Prototype",
        href: "https://www.figma.com/proto/ezghLACIpyJwG5GcrvuQRX/Mobile-App-Signup-Flow?node-id=1-3&node-type=canvas&t=7HkueDuxcW4sVSuL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3",
        type: "prototype"
      }
    ]
  },
  {
    title: "Email Template UI/UX Design",
    category: "UI/UX Design",
    description:
      "A professional email template design for marketing and promotional communication.",
    technologies: ["Figma", "Email Design", "Visual Layout"],
    image: "/images/email-template.webp",
    links: [
      {
        label: "View Design",
        href: "https://www.figma.com/design/TYTQDzgcmE91xeBqUkk0TA/Email-Template?node-id=0-1&t=FfczcDdaD02EVcAv-1",
        type: "prototype"
      }
    ]
  },
  {
    title: "Exam Management System",
    category: "Academic Projects",
    description:
      "A Java console-based exam management system with database connection and GPA-based best performer identification.",
    technologies: ["Java", "MySQL", "Console App"],
    image: "/images/kd-creations.webp"
  },
  {
    title: "SOAP Calculator Web Service",
    category: "Academic Projects",
    description:
      "A basic SOAP web service calculator with a Windows Forms client for service consumption practice.",
    technologies: ["C#", "ASP.NET Web Service", "Visual Studio"],
    image: "/images/kd-creations.webp"
  },
  {
    title: "OpenCV Computer Vision Exercises",
    category: "Academic Projects",
    description:
      "Practice tasks covering shapes, color models, webcam capture, overlays, image processing basics, and visual exercises.",
    technologies: ["Python", "OpenCV", "NumPy"],
    image: "/images/kd-creations.webp"
  },
  {
    title: "Reality TV Production Management System",
    category: "Academic Projects",
    description:
      "A web system concept for contestant management, episode planning, audience voting, location management, and production collaboration.",
    technologies: ["System Design", "Web Application", "Database Planning"],
    image: "/images/kd-creations.webp"
  }
];
