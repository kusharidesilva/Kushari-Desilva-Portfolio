export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    description: "Clean interfaces, responsive layouts, and interactive user flows.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Bootstrap",
      "Tailwind CSS"
    ]
  },
  {
    title: "Backend & Database",
    description: "Academic and project experience with server-side logic and data.",
    skills: ["PHP", "MySQL", "Java", "C#", "REST basics", "SOAP basics"]
  },
  {
    title: "UI/UX & Design",
    description: "Practical design thinking from user flows to polished visuals.",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Flow Design",
      "Responsive UI Design",
      "Visual Design",
      "Branding",
      "Social Media Design"
    ]
  },
  {
    title: "Tools",
    description: "Daily tools for building, testing, collaborating, and designing.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "XAMPP",
      "Composer",
      "Selenium",
      "JMeter",
      "PHPUnit",
      "Canva",
      "Photoshop-style tools"
    ]
  },
  {
    title: "Research & Academic",
    description: "Exploring education technology, AI, and data-informed learning.",
    skills: [
      "Literature Review",
      "Research Gap Analysis",
      "Education Technology",
      "AI in Education",
      "Data Analysis basics"
    ]
  }
];
