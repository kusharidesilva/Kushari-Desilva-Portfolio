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
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Web Design"
    ]
  },
  {
    title: "Backend & Databases",
    description: "Academic and project experience with server-side logic and data.",
    skills: [
      "PHP",
      "MySQL",
      "Firebase",
      "Java",
      "Python",
      "C#",
      "REST API fundamentals",
      "SOAP basics"
    ]
  },
  {
    title: "UI/UX & Design",
    description: "Practical design thinking from user flows to polished visuals.",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Flows",
      "Responsive UI Design",
      "User-Centered Design",
      "Visual Design",
      "Branding"
    ]
  },
  {
    title: "Development Tools",
    description: "Tools used across development and academic projects.",
    skills: ["Git", "GitHub", "VS Code", "XAMPP", "Composer"]
  },
  {
    title: "Deployment & Platforms",
    description: "Platforms used to publish projects and prototypes.",
    skills: ["Cloudflare Pages", "Cloudflare Workers", "AWS Amplify", "Firebase"]
  },
  {
    title: "Project Management",
    description: "Planning and coordinating practical digital work.",
    skills: [
      "Agile Methodologies",
      "Project Planning",
      "Risk Management",
      "Stakeholder Coordination",
      "Jira",
      "Microsoft Project"
    ]
  },
  {
    title: "Testing & Research",
    description: "Academic testing and research methods.",
    skills: [
      "Selenium",
      "JMeter",
      "PHPUnit",
      "Requirements Analysis",
      "Literature Review",
      "Survey Analysis"
    ]
  },
  {
    title: "Professional Skills",
    description: "Working with teams and clients.",
    skills: [
      "Teamwork",
      "Leadership",
      "Communication",
      "Problem-Solving",
      "Time Management",
      "Client Communication"
    ]
  }
];
