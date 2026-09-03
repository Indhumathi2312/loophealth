import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bitter = localFont({
  src: "../../public/fonts/666d5f0577358823e328f10b_Bitter-VariableFont_wght.woff2",
  variable: "--font-heading",
  display: "swap",
});

const workSans = localFont({
  src: [
    {
      path: "../../public/fonts/636de11d93894c239b2cddc1_work-sans-v18-latin-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/636de11d5f2ba9782547e232_work-sans-v18-latin-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/636de11d0ab43edaf07a1214_work-sans-v18-latin-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/636de11ddab8790a5b6a3255_work-sans-v18-latin-700.woff2",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loop Health | Super-charged healthcare benefits",
  description: "Comprehensive health benefits, group insurance, and HR tools for modern teams.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Loop Health | Super-charged healthcare benefits",
    description: "Comprehensive health benefits, group insurance, and HR tools for modern teams.",
    type: "website",
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link href="https://cdn.prod.website-files.com/619b33946e0527b5a12bec15/css/loop-rebrand.webflow.shared.324b48a49.min.css" rel="stylesheet" type="text/css" crossOrigin="anonymous"/>
      </head>
      <body className={`${bitter.variable} ${workSans.variable} font-sans font-normal antialiased`} suppressHydrationWarning>
        {children}
        <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=619b33946e0527b5a12bec15" strategy="beforeInteractive" crossOrigin="anonymous" />
        <Script src="https://cdn.prod.website-files.com/619b33946e0527b5a12bec15/js/webflow.c63fc74d4.js" strategy="lazyOnload" crossOrigin="anonymous" />
      </body>
    </html>
  );
}
