import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CalendlyButton } from '@/components/highlands/calendly-button'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Websites for Highland Businesses — Live in 10 Days | £499 Fixed',
  description: 'Modern, mobile-ready websites for Highland small businesses. £499 fixed price, delivered in 7–10 days. Based in Inverness.',
  openGraph: {
    title: 'Websites for Highland Businesses — Live in 10 Days | £499 Fixed',
    description: 'Modern, mobile-ready websites for Highland small businesses. £499 fixed price, delivered in 7–10 days. Based in Inverness.',
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.robfraser.dev/highlands',
    siteName: 'Rob Fraser Dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Websites for Highland Businesses — Live in 10 Days | £499 Fixed',
    description: 'Modern, mobile-ready websites for Highland small businesses. £499 fixed price, delivered in 7–10 days. Based in Inverness.',
    creator: '@robfrasercodes',
  },
  alternates: {
    canonical: '/highlands',
  },
}

export default function HighlandsLandingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rob Fraser Dev - Highland Web Design",
    "image": "https://www.robfraser.dev/highlands/hero.jpg",
    "@id": "https://www.robfraser.dev/highlands",
    "url": "https://www.robfraser.dev/highlands",
    "telephone": "",
    "priceRange": "£499",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Inverness",
      "addressRegion": "Scotland",
      "postalCode": "",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 57.4778,
      "longitude": -4.2247
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://twitter.com/robfrasercodes",
      "https://github.com/robfrasercodes",
      "https://www.linkedin.com/in/robfrasercodes/"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Based in Inverness
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                  Get a modern website live in 10 days — built locally in the Highlands.
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Clean, mobile-ready sites for small Scottish businesses. Fixed price. No jargon. No waiting months.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <CalendlyButton size="lg" className="text-lg px-8 py-6 h-auto">
                    Book a Free 15-Minute Website Audit
                  </CalendlyButton>

                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 h-auto"
                    asChild
                  >
                    <a href="#portfolio">See example sites</a>
                  </Button>
                </div>
              </div>

              <div className="relative h-[400px] lg:h-[600px]">
                {/* Placeholder for Highland hero image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">
                    Add Highland landscape image here
                    <br />
                    <span className="text-sm">/public/highlands/hero.jpg</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Why this matters
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Your site looks outdated
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Customers bounce when they see an old-fashioned website. First impressions matter.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  You&apos;re invisible on phones
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Most visitors are mobile. If your site doesn&apos;t work on phones, you&apos;re losing business.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Agencies are slow and expensive
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Waiting months and paying thousands doesn&apos;t make sense for a small business.
                </p>
              </Card>
            </div>

            <p className="text-center text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              I help Highland businesses look professional online, fast — so you can focus on running the business.
            </p>
          </div>
        </section>

        {/* Offer Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 lg:p-12 shadow-lg border-2 border-primary/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  The Launch-Ready Website
                </h2>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-primary">£499</span>
                  <span className="text-xl text-gray-600 dark:text-gray-400">fixed</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Included:</h3>
                <ul className="space-y-3">
                  {[
                    'One-page site (Home, Services, Contact)',
                    'Mobile & SEO ready',
                    'Domain + hosting setup support',
                    'Delivered in 7–10 days'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 p-6 bg-gray-50 dark:bg-slate-800 rounded-lg">
                <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Add-ons:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex justify-between">
                    <span>Online booking / CRM form</span>
                    <span className="font-semibold">+£100</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Monthly updates</span>
                    <span className="font-semibold">+£50/mo</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <CalendlyButton size="lg" className="text-lg px-8 py-6 h-auto w-full sm:w-auto">
                  Book Your Free Website Audit
                </CalendlyButton>
              </div>
            </Card>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Simple, stress-free process
            </h2>

            <div className="mt-12 relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 dark:bg-gray-700 -translate-y-1/2" />

              <div className="grid md:grid-cols-3 gap-8 relative">
                {[
                  {
                    number: '1',
                    title: 'Book Audit',
                    description: 'Quick call to scope what you need'
                  },
                  {
                    number: '2',
                    title: 'Preview in 5 Days',
                    description: 'Live demo before final payment'
                  },
                  {
                    number: '3',
                    title: 'Go Live',
                    description: 'We launch your new site together'
                  }
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-center">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center mt-12 text-gray-600 dark:text-gray-400 italic">
              No contracts. No jargon. Just a working website.
            </p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Recent Work for Scottish Businesses
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Café in Inverness',
                  description: 'One-page site with menu & hours.',
                  link: '#'
                },
                {
                  title: 'Highland Tour Company',
                  description: 'Bookings + itinerary highlights.',
                  link: '#'
                },
                {
                  title: 'Local Tradesman',
                  description: 'Services + quick quote form.',
                  link: '#'
                }
              ].map((project, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Portfolio image</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                  >
                    View live
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              What clients say
            </h2>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <svg className="w-10 h-10 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="flex-1">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Clear, quick, and the site looks great on phones.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">— Owner</span>, Inverness café
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* About / Local Trust Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Local. Fast. Reliable.
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  I&apos;m Rob, based in Inverness. I build fast, reliable websites that help Highland businesses show up professionally and get more enquiries.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  No outsourcing. No templates. Just clean, custom websites built for your business.
                </p>
              </div>

              <div className="order-1 md:order-2">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Add headshot or<br />Highland landscape<br />
                    <span className="text-sm">/public/highlands/about.jpg</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Your customers are searching. Let&apos;s make sure they find you.
            </h2>

            <CalendlyButton
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 h-auto mb-4"
            >
              Book Your Free Website Audit
            </CalendlyButton>

            <p className="text-sm text-white/80 max-w-2xl mx-auto">
              No obligation — you&apos;ll get honest advice and, if we&apos;re a fit, a clear plan and quote.
            </p>
          </div>
        </section>

        {/* Footer Mini */}
        <footer className="py-12 bg-gray-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Rob Fraser Dev — Web Design for Highland Businesses
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Based in Inverness, Scotland
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <a href="mailto:hello@robfraser.dev" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  hello@robfraser.dev
                </a>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Contact
                </Link>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Main Site
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} Rob Fraser Dev. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
