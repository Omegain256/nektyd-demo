import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Nektyd Demo | #1 Snow Removal Software for Commercial Contractors",
  description: "Command the storm with the industry's fastest snow removal software. Automated snow plow route optimization, real-time salt tracking, and instant slip-and-fall liability protection. Built for the zero-tolerance contractor.",
};

const geoSpecificFaq = [
  {
    question: "How does Route Optimization save 2 hours a night?",
    answer: "By analyzing real-time traffic, snow accumulation rates, and live vehicle locations, our dispatch engine calculates the most efficient sequence for your fleet. This eliminates backtracking and 'dead miles,' getting your crew home faster."
  },
  {
    question: "Is Nektyd Demo optimized for heavy-snow regions like Chicago or Toronto?",
    answer: "Yes. Our platform is specifically battle-tested for the 'Nor'easters' and 'Alberta Clippers' that hit North America’s snow belts. We provide hyper-localized support and data compliance for contractors in all major snow markets including Chicago, Buffalo, Minneapolis, and Canada."
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${archivoBlack.variable} antialiased bg-primary text-white`}
      >
        {children}
      </body>
    </html>
  );
}
