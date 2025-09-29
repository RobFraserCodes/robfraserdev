import type { Metadata } from "next"
import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/config/site"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
      "freelance web developer UK",
      "custom web applications",
      "mobile app design",
      "web development services",
      "React developer",
      "Next.js developer",
      "UI/UX design",
      "business website development",
      "e-commerce development",
      "responsive web design"
    ],
    authors: [
      {
        name: "Rob Fraser",
        url: "https://www.robfraser.dev",
      },
    ],
    creator: "robfraser.dev",
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Rob Fraser Dev - Custom Web & Mobile Development",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: "@robfrasercodes",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: `${siteConfig.url}/manifest.ts`,
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rob Fraser",
    "jobTitle": "Freelance Web Developer & Designer",
    "description": "UK-based freelance developer specializing in custom web applications and mobile app design",
    "url": "https://www.robfraser.dev",
    "sameAs": [
      "https://twitter.com/robfrasercodes",
      "https://github.com/robfrasercodes",
      "https://www.linkedin.com/in/robfrasercodes/",
      "https://www.instagram.com/robfraserdev/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Inverness",
      "addressRegion": "Scotland",
      "addressCountry": "GB"
    },
    "offers": {
      "@type": "Service",
      "name": "Custom Web Development",
      "description": "Custom web applications and mobile app design services",
      "provider": {
        "@type": "Person",
        "name": "Rob Fraser"
      }
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased",
      fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
