import type { Metadata } from "next";
// @ts-expect-error -- Next.js handles global CSS imports.
import "./globals.css";

export const metadata: Metadata = {
  title: "Kushari Desilva | Portfolio",
  description:
    "Modern portfolio for Kushari Desilva, Computer Science undergraduate, UI/UX designer, graphic designer, and web developer.",
  openGraph: {
    title: "Kushari Desilva | Portfolio",
    description:
      "Designing clean digital experiences with creativity and code.",
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
