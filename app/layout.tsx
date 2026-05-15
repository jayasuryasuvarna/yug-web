import "./globals.css";
import { Inter, Fraunces } from "next/font/google";
import type { Metadata } from "next";
import Footer from "./components/footer";
import Header from "./components/header";

export const metadata: Metadata = {
  title: {
    default: "YUG Estates — Handpicked farmland & river-attached plots in South Bangalore",
    template: "%s · YUG Estates",
  },
  description:
    "An authentic real-estate marketplace for owner-verified farmland, river-attached plots, and villa land in South Bangalore. Every listing visited, photographed, and priced in plain rupees.",
  metadataBase: new URL("https://yugestates.com"),
  openGraph: {
    title: "YUG Estates — Handpicked farmland & river-attached plots",
    description:
      "Owner-verified farmland and river-attached plots in South Bangalore. Every listing visited and photographed by our team.",
    type: "website",
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "opsz"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-stone-50 text-stone-900 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-stone-900 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to main content
        </a>
        <section className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
