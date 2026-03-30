import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://kunalzaveri.dev"),
  title: {
    default: "Kunal Zaveri — AI & Data Engineer Portfolio",
    template: "%s | Kunal Zaveri"
  },
  description:
    "Portfolio of Kunal Zaveri, an experienced Product Engineer specializing in AI, Data Engineering, LLMs, and Modern Web Development. Explore my projects and experience.",
  keywords: [
    "Kunal Zaveri",
    "Product Engineer",
    "Data Engineer",
    "AI Engineer",
    "LLM",
    "Machine Learning",
    "Next.js",
    "React",
    "Portfolio",
    "Software Engineer"
  ],
  authors: [{ name: "Kunal Zaveri" }],
  creator: "Kunal Zaveri",
  alternates: {
    canonical: "https://kunalzaveri.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Kunal Zaveri — AI & Data Engineer Portfolio",
    description:
      "Explore Kunal Zaveri's portfolio. Specializing in AI, Data Engineering, and full-stack development.",
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
    title: "Kunal Zaveri — AI & Data Engineer Portfolio",
    description:
      "Explore Kunal Zaveri's portfolio. Specializing in AI, Data Engineering, and full-stack development.",
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
