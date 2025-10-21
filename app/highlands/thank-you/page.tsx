import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Thank You — Your Audit is Booked | Rob Fraser Dev',
  description: 'Thanks for booking your free website audit. I\'ll be in touch soon.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full mb-6">
            <svg
              className="w-8 h-8 text-green-600 dark:text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Thanks — you&apos;re booked in.
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            I&apos;ll review your details and confirm by email. If you need to tweak the time,
            just reply to the confirmation message.
          </p>
        </div>

        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            What happens next
          </h2>

          <ul className="space-y-4">
            {[
              {
                step: '1',
                title: 'Check your email',
                description: 'You\'ll receive a calendar invite and confirmation within a few minutes.'
              },
              {
                step: '2',
                title: 'Prepare for the call',
                description: 'Think about what you\'d like your website to achieve. No technical knowledge needed!'
              },
              {
                step: '3',
                title: 'We\'ll discuss your needs',
                description: 'During our 15-minute call, we\'ll talk about your business goals and I\'ll give you honest advice on the best approach.'
              },
              {
                step: '4',
                title: 'Get a clear plan',
                description: 'If we\'re a good fit, I\'ll send you a clear proposal with pricing, timeline, and next steps.'
              }
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/">
              Back to main site
            </Link>
          </Button>

          <Button asChild size="lg">
            <Link href="/highlands">
              Return to Highlands page
            </Link>
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Need to get in touch before the call?
          </p>
          <a
            href="mailto:hello@robfraser.dev"
            className="text-primary hover:underline font-medium"
          >
            Email me at hello@robfraser.dev
          </a>
        </div>
      </div>
    </main>
  )
}
