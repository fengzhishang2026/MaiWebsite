import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WheatWatch — Precision Dental Restorations, Delivered Globally",
  description:
    "Premium Dental Lab Solutions — high-quality dentures, implants, and dental restorations crafted with CAD/CAM technology for overseas clinics.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
