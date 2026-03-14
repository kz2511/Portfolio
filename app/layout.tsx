import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Head from "next/head";

export const metadata: Metadata = {
  metadataBase: new URL("https://kunalzaveri.dev"),
  title: "Kunal's Portfolio — Product Engineer",
  description:
    "Explore Kunal Zaveri's portfolio.",

  openGraph: {
    title: "Kunal's Portfolio — Product Engineer",
    description:
      "Explore Kunal Zaveri's portfolio.",
    url: "https://kunalzaveri.dev",
    siteName: "Kunal Zaveri's Portfolio",
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Kunal Zaveri's Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunal's Portfolio — Product Engineer",
    description:
      "Explore Kunal Zaveri's portfolio.",
    images: ["/portfolio.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="canonical" href="https://portfolio25-one.vercel.app" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body
        suppressHydrationWarning
        className="antialiased"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
