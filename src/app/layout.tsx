import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const serifCondensed = localFont({
  src: "../../public/fonts/SerrifCondensed_Regular.woff2",
  variable: "--font-heading",
  display: "swap",
  weight: "400",
});

const circular = localFont({
  src: "../../public/fonts/lineto-circular-bold.woff2",
  variable: "--font-body",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "toogood | AI websites and apps",
  description: "Describe what you want to build and let AI create a fully functional web application, database, and backend for you.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "toogood | AI websites and apps",
    description: "Build websites and web apps like e-commerce stores, CRMs, and SaaS platforms in minutes with AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${serifCondensed.variable} ${circular.variable} font-sans font-normal antialiased`}>
        {children}
      </body>
    </html>
  );
}
