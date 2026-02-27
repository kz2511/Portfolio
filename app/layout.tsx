import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Head from "next/head";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kunalzaveri.dev"),
  title: "Kunal's Portfolio — Sr. AI & Data Engineer",
  description:
    "Explore Kunal Zaveri's portfolio — Sr. AI Developer with 5+ years building LLM applications, RAG pipelines, ETL systems, and AI-powered backends across Python, FastAPI, Apache Spark, and AWS.",

  openGraph: {
    title: "Kunal's Portfolio — Sr. AI & Data Engineer",
    description:
      "Explore Kunal Zaveri's portfolio — Sr. AI Developer specializing in LLMs, Generative AI, RAG pipelines, and scalable data engineering.",
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
    title: "Kunal's Portfolio — Sr. AI & Data Engineer",
    description:
      "Explore Kunal Zaveri's portfolio — Sr. AI Developer specializing in LLMs, Generative AI, RAG pipelines, and scalable data engineering.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Yahia's Portfolio",
              url: "https://portfolio25-one.vercel.app",
              description:
                "Step into Yahia's world of digital craftsmanship. Explore a portfolio that blends cutting-edge web development, interactive 3D designs, and seamless user experiences to leave a lasting impression.",
            }),
          }}
        />
      </Head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
