export interface Achievement {
  title: string;
  period: string;
  details: string[];
}

export const achievements: Achievement[] = [
  {
    title: "CodePulse 2024 Designathon — 1st Runner-up",
    period: "2024",
    details: [
      "Collaborated on a digital voting system concept in a UI/UX design competition at Saegis Campus."
    ]
  },
  {
    title: "Member of the Month — November",
    period: "2023/24",
    details: [
      "Recognized by the Rotaract Club of Saegis Campus for contributions to club activities."
    ]
  }
];

export const volunteering: Achievement[] = [
  {
    title: "Editor — ICT Club of Saegis Campus",
    period: "June 2025 – Present",
    details: [
      "Created event and workshop visuals; supported the Installation Ceremony, SIRC 2026, and Membership Day."
    ]
  },
  {
    title: "Member — ICT Club of Saegis Campus",
    period: "2024 – 2025",
    details: ["Supported Code Pulse and Gaming Tournament activities."]
  },
  {
    title: "Editor — Rotaract Club of Saegis Campus",
    period: "June 2024 – May 2025",
    details: ["Created social media and event visuals and supported club activities."]
  },
  {
    title: "Professional Development Avenue Member — Rotaract Club",
    period: "October 2022 – June 2024",
    details: [
      "Supported club initiatives, event coordination, and professional development activities."
    ]
  },
  {
    title: "Member — Leo Club of Saegis Campus",
    period: "October 2022 – October 2023",
    details: ["Supported public relations and club projects."]
  },
  {
    title: "Fourth Semester Batch Representative",
    period: "Saegis Campus",
    details: ["Helped with student communication and coordination."]
  }
];

export type TimelineKind = "Experience" | "Education" | "Certifications";

export interface TimelineEntry {
  title: string;
  organization: string;
  period: string;
  type: TimelineKind;
  description: string;
}

export const timelineEntries: TimelineEntry[] = [
  {
    title: "Trainee Software Engineer",
    organization: "Bizadvisor · Full-time · On-site, Sri Lanka",
    period: "November 2025 – Present",
    type: "Experience",
    description:
      "Gaining experience in software-related projects, interface development, design implementation, and team collaboration."
  },
  {
    title: "Graphic and UI/UX Designer Intern",
    organization: "Bizadvisor (Pvt) Ltd",
    period: "April – October 2025",
    type: "Experience",
    description:
      "Designed responsive website layouts, contact forms, and email templates in Figma while working on client-focused digital designs."
  },
  {
    title: "BSc (Hons) in Computer Science",
    organization: "Saegis Campus · Final-Year Undergraduate",
    period: "2022 – Present",
    type: "Education",
    description:
      "Expected graduation November 2026. Academic work in software development, web technologies, databases, systems analysis, project management, and research."
  },
  {
    title: "Foundation in ICT",
    organization: "ESOFT Metro Campus",
    period: "November 2021 – April 2022",
    type: "Education",
    description: "Foundation studies in information and communication technology."
  },
  {
    title: "Foundation in English",
    organization: "ESOFT Metro Campus",
    period: "November 2021 – April 2022",
    type: "Education",
    description: "Foundation studies in English language."
  },
  {
    title: "Certificate in Applied Information Technology (CAIT)",
    organization: "Sri Lanka Telecom Training Centre",
    period: "Certificate",
    type: "Education",
    description: "Applied information technology training."
  },
  {
    title: "Certificate in Digital Entrepreneur Course (CIDE)",
    organization: "TBS — The Business School",
    period: "Certificate",
    type: "Education",
    description: "Graphic design and digital entrepreneurship. B — Merit Pass."
  },
  {
    title: "Secondary Education",
    organization: "Princess of Wales' College",
    period: "Up to G.C.E. Advanced Level",
    type: "Education",
    description: "Participated in the Science Society and Chess Team."
  },
  {
    title: "Fundamental AI Concepts",
    organization: "Microsoft",
    period: "May 2024",
    type: "Certifications",
    description: "Foundational concepts in artificial intelligence."
  },
  {
    title: "Project Management Foundations",
    organization: "LinkedIn Learning",
    period: "December 2024",
    type: "Certifications",
    description: "Project management fundamentals."
  },
  {
    title: "Learning Microsoft Project",
    organization: "LinkedIn Learning",
    period: "March 2025",
    type: "Certifications",
    description: "Planning and managing projects with Microsoft Project."
  },
  {
    title: "UI/UX for Beginners",
    organization: "Great Learning",
    period: "July 2024",
    type: "Certifications",
    description: "Foundational user interface and user experience concepts."
  },
  {
    title: "Front End Development — HTML",
    organization: "Great Learning",
    period: "October 2023",
    type: "Certifications",
    description: "HTML fundamentals for frontend development."
  },
  {
    title: "Front End Development — CSS",
    organization: "Great Learning",
    period: "November 2023",
    type: "Certifications",
    description: "CSS fundamentals for frontend development."
  },
  {
    title: "Python for Beginners",
    organization: "University of Moratuwa",
    period: "June 2022",
    type: "Certifications",
    description: "Introductory Python programming."
  }
];
