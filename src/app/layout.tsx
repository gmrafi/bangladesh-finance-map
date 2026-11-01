import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "FinanceMap Bangladesh",
  description:
    "Your Money. Your City. Better Decisions. An all-in-one financial & geographic decision intelligence platform for Bangladesh.",
  openGraph: {
    title: "FinanceMap Bangladesh",
    description:
      "Your Money. Your City. Better Decisions. An all-in-one financial & geographic decision intelligence platform for Bangladesh.",
    type: "website",
    locale: "en_BD",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinanceMap Bangladesh",
    description:
      "Your Money. Your City. Better Decisions. An all-in-one financial & geographic decision intelligence platform for Bangladesh.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Never disable user zoom for accessibility
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="flex min-h-screen flex-col font-sans antialiased bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
