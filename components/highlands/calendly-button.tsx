"use client"

import { useState } from 'react'
import { Dialog } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface CalendlyButtonProps {
  variant?: 'default' | 'outline' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg'
  className?: string
  children: React.ReactNode
}

export function CalendlyButton({
  variant = 'default',
  size = 'default',
  className = '',
  children
}: CalendlyButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)

    // Track with Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'lead', {
        event_category: 'engagement',
        event_label: 'calendly_modal_opened'
      })
    }

    // Track with Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead')
    }
  }

  return (
    <>
      <Button
        onClick={handleOpenModal}
        variant={variant}
        size={size}
        className={className}
      >
        {children}
      </Button>

      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        maxWidth="4xl"
      >
        <div className="w-full h-[600px]">
          {/* Calendly inline widget embed */}
          <iframe
            src="https://calendly.com/your-calendly-username/15min"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a meeting"
            className="rounded-lg"
          />
        </div>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Can&apos;t find a good time? Email me at{' '}
          <a href="mailto:hello@robfraser.dev" className="text-primary hover:underline">
            hello@robfraser.dev
          </a>
        </p>
      </Dialog>
    </>
  )
}
