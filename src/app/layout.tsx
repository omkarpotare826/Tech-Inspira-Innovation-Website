import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans, Alex_Brush } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Tech Inspira Innovation — Premium Web Development, UI/UX Design & Digital Solutions",
  description:
    "We build stunning websites, mobile apps, and AI-powered solutions for growing businesses. Fast delivery, affordable pricing, and 30-day free support. Based in India.",
  keywords: [
    "web development",
    "UI/UX design",
    "digital agency India",
    "website design Pune",
    "mobile app development",
    "AI automation",
    "SEO services",
    "Tech Inspira",
  ],
  authors: [{ name: "Tech Inspira Innovation" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Tech Inspira Innovation — Build Something Amazing",
    description:
      "Premium web development, UI/UX design & AI solutions. Fast delivery from ₹4,999. 30-day free support included.",
    url: "https://www.techinspirainnovation.in",
    siteName: "Tech Inspira Innovation",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Inspira Innovation — Premium Digital Agency",
    description:
      "We build stunning websites, mobile apps, and AI-powered solutions. Based in India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${plusJakarta.variable} ${alexBrush.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#020617] text-slate-100 overflow-x-hidden selection:bg-[#00a8ff]/30 selection:text-white">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
