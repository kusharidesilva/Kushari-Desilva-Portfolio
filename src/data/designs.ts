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
  tags?: string[];
  gallery?: DesignGalleryItem[];
}

export interface DesignGalleryItem {
  title: string;
  category: string;
  image: string;
  alt: string;
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
    title: "Design Works",
    category: "Branding",
    description:
      "Graphic design work including flyers, logos, business cards, and promotional designs.",
    image: "/images/design-works.webp",
    tags: ["Branding", "Social Media Post Designs", "Creative Designs"],
    gallery: [
      {
        title: "UAE Visa Promotion",
        category: "Social Media Design",
        image: "/images/design-works/uae-visa-promotion.webp",
        alt: "Blue Alban Tours and Travels UAE visa promotional social media design"
      },
      {
        title: "Festive Travel Promotion",
        category: "Social Media Design",
        image: "/images/design-works/festive-travel-promotion.webp",
        alt: "Red festive Alban Tours and Travels promotion design"
      },
      {
        title: "RJ Sports Logo",
        category: "Branding and Logo Design",
        image: "/images/design-works/rj-sports-logo.webp",
        alt: "Red, white, and black RJ basketball sports logo design"
      }
    ]
  },
  {
    title: "E-commerce Interface Visuals",
    category: "UI Graphics",
    description:
      "Product-focused visual layouts for online store browsing and conversion-friendly screens.",
    image: "/images/ecommerce-ui.webp"
  }
];
