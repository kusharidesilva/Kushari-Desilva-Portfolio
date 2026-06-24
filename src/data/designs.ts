export type DesignCategory =
  | "Social Media Posts"
  | "Event Designs"
  | "Branding"
  | "Client Designs"
  | "UI Graphics";

export interface DesignWork {
  title: string;
  category: DesignCategory;
  description: string;
  image: string;
}

export const designCategories: Array<"All" | DesignCategory> = [
  "All",
  "Social Media Posts",
  "Event Designs",
  "Branding",
  "Client Designs",
  "UI Graphics"
];

export const designWorks: DesignWork[] = [
  {
    title: "KD Creations Design Work",
    category: "Branding",
    description:
      "Graphic design work including flyers, logos, business cards, and promotional designs.",
    image: "/images/kd-creations.png"
  },
  {
    title: "Social Media Post Designs",
    category: "Social Media Posts",
    description:
      "Creative posts for awareness, motivation, events, Father's Day, Poson events, and promotions.",
    image: "/images/social-media.png"
  },
  {
    title: "Saegis ICT Club Designs",
    category: "Event Designs",
    description:
      "Club-related designs including posts, tie designs, wristband designs, and event branding concepts.",
    image: "/images/kd-creations.png"
  },
  {
    title: "Bizadvisor Social Media & Cover Designs",
    category: "Client Designs",
    description:
      "Modern teaser posts, Facebook covers, LinkedIn covers, and dashboard launch visuals.",
    image: "/images/social-media.png"
  },
  {
    title: "Vehicle Rental Promotional Designs",
    category: "Client Designs",
    description:
      "Creative social media post concepts and promotional visuals for vehicle rental services.",
    image: "/images/social-media.png"
  },
  {
    title: "Event Invitation Designs",
    category: "Event Designs",
    description:
      "Clean and culturally suitable event invitation designs, including Poson-related campus event posts.",
    image: "/images/social-media.png"
  },
  {
    title: "Flower Shop UI Graphics",
    category: "UI Graphics",
    description:
      "Soft, floral interface graphics for online flower shopping and product browsing experiences.",
    image: "/images/flower-shop-uiux.png"
  },
  {
    title: "E-commerce Interface Visuals",
    category: "UI Graphics",
    description:
      "Product-focused visual layouts for online store browsing and conversion-friendly screens.",
    image: "/images/ecommerce-ui.png"
  }
];
