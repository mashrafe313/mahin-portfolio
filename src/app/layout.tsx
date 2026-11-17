
import type { Metadata, Viewport } from "next";
import {
  Playfair_Display,
  Inter,
  Space_Mono,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mahin Mashrafe | Developer Portfolio",
  description:
    "Personal portfolio of Mahin Mashrafe, showcasing web development projects, skills and experience.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>

      <body
        className={`${playfair.variable} ${inter.variable} ${spaceMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
