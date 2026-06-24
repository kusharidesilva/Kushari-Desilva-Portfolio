export interface ResearchItem {
  title: string;
  area: string;
  objective: string;
  technologies: string[];
  sdg: string;
}

export const researchItems: ResearchItem[] = [
  {
    title: "AI/ML in Higher Education Institutions",
    area: "Education Technology",
    objective:
      "Study how AI and machine learning can improve learning, administration, and personalization in higher education.",
    technologies: ["AI", "Machine Learning", "Learning Analytics"],
    sdg: "SDG 4 - Quality Education"
  },
  {
    title: "IoT and Immersive Technology Based Smart Classrooms",
    area: "Smart Education",
    objective:
      "Explore IoT, AR/VR, and immersive technologies that improve classroom engagement and smart learning environments.",
    technologies: ["IoT", "AR/VR", "Smart Classrooms"],
    sdg: "SDG 4 - Quality Education"
  },
  {
    title: "Gamified Learning Activities to Increase Student Engagement",
    area: "Education Technology",
    objective:
      "Study how gamification improves motivation, participation, and learning performance.",
    technologies: ["Gamification", "UX", "Engagement"],
    sdg: "SDG 4 - Quality Education"
  },
  {
    title: "Generative AI in Education",
    area: "AI in Education",
    objective:
      "Research how generative AI supports teaching, learning, content creation, and personalized support.",
    technologies: ["Generative AI", "Content Tools", "Personalization"],
    sdg: "SDG 4 - Quality Education"
  },
  {
    title: "AI for Personalized Learning",
    area: "AI / Adaptive Learning",
    objective:
      "Use AI to provide personalized learning pathways based on student performance and behavior.",
    technologies: ["Adaptive Learning", "Recommendation", "Data Analysis"],
    sdg: "SDG 4 - Quality Education"
  },
  {
    title: "AR/VR in Education",
    area: "Immersive Learning",
    objective:
      "Study how augmented and virtual reality improve learning through interactive simulations.",
    technologies: ["AR", "VR", "Simulation"],
    sdg: "SDG 4 - Quality Education"
  },
  {
    title: "Mental Health Trends on Social Media Using NLP",
    area: "NLP / Machine Learning",
    objective:
      "Analyze social media text to identify mental health-related trends using NLP and machine learning.",
    technologies: ["NLP", "Machine Learning", "Text Analysis"],
    sdg: "SDG 3 - Good Health"
  },
  {
    title: "AI-Powered CV Screening and Job Matching",
    area: "NLP / Machine Learning",
    objective:
      "Match candidates with suitable jobs through resume analysis and AI-based recommendation.",
    technologies: ["NLP", "Resume Parsing", "Recommendation"],
    sdg: "SDG 8 - Decent Work"
  },
  {
    title: "AI-Based Fake News Detection",
    area: "NLP / Machine Learning",
    objective:
      "Use text classification and NLP techniques to identify fake news and improve information trust.",
    technologies: ["NLP", "Classification", "Data Mining"],
    sdg: "SDG 16 - Strong Institutions"
  }
];
