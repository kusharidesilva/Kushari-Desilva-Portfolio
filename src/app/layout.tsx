import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kushari Desilva | Portfolio",
  description:
    "Portfolio of Kushari Desilva, final-year Computer Science undergraduate, trainee software engineer, frontend developer, and UI/UX designer.",
  icons: {
    icon: "/images/title.jpg",
    shortcut: "/images/title.jpg"
  },
  openGraph: {
    title: "Kushari Desilva | Portfolio",
    description:
      "Full-stack research, frontend websites, real client UI/UX projects, and academic work by Kushari Desilva.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
