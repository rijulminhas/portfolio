import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const title = "Rijul Minhas — Full-Stack Developer";
const description =
  "Rijul Minhas is a Full-Stack Developer specializing in Next.js, React, TypeScript, Node.js and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: title,
    template: "%s — Rijul Minhas",
  },
  description,
  keywords: [
    "Rijul Minhas",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    title,
    description,
    url: site.siteUrl,
    siteName: title,
    images: [{ url: site.photo, width: 1200, height: 1200, alt: site.name }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [site.photo],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeInitScript = `(function(){try{var s=localStorage.getItem('theme');var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-text-primary overflow-x-hidden">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
