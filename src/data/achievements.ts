export interface Achievement {
  title: string;
  period: string;
  details: string[];
}

export const achievements: Achievement[] = [
  {
    title: "1st Runner-up - Saegis Campus CodePulse 2024 Designathon",
    period: "2024",
    details: [
      "Designed a digital voting system concept for Sri Lanka.",
      "Collaborated in a team-based UI/UX challenge.",
      "Completed first designathon participation with a winning placement."
    ]
  },
  {
    title: "Editor - Rotaract Club of Saegis Campus 2024/25",
    period: "2024/25",
    details: ["Contributed to creative content and visual communication."]
  },
  {
    title: "Graphic Designer Since 2022",
    period: "2022 - Present",
    details: ["Built freelance and online entrepreneurship experience through KD Creations."]
  },
  {
    title: "BSc (Hons) in Computer Science Undergraduate",
    period: "2022 - Present",
    details: ["Studying at Saegis Campus, Nugegoda."]
  }
];

export interface TimelineEntry {
  title: string;
  organization: string;
  period: string;
  type: "Education" | "Experience";
  description: string;
}

export const timelineEntries: TimelineEntry[] = [
  {
    title: "BSc (Hons) in Computer Science",
    organization: "Saegis Campus",
    period: "2022 - Present",
    type: "Education",
    description:
      "Undergraduate studies focused on software development, systems, research, and computing foundations."
  },
  {
    title: "Graphic Designer / Online Entrepreneur",
    organization: "KD Creations",
    period: "2022 - Present",
    type: "Experience",
    description:
      "Creates social media posts, brand visuals, promotional designs, and client-focused digital graphics."
  },
  {
    title: "CAIT Course",
    organization: "SLT Training Center",
    period: "2022",
    type: "Education",
    description: "Completed foundational IT and technology training."
  },
  {
    title: "Certificate in Online Designer",
    organization: "The Business School",
    period: "2022",
    type: "Education",
    description: "Built online design and digital creative skills."
  },
  {
    title: "FIT / FIE",
    organization: "ESOFT Metro Campus",
    period: "2021 - 2022",
    type: "Education",
    description: "Completed early computing and English foundation studies."
  },
  {
    title: "UI/UX and Web Development Projects",
    organization: "Academic and Client Work",
    period: "Ongoing",
    type: "Experience",
    description:
      "Designs prototypes, web interfaces, and practical academic systems across multiple project domains."
  }
];
