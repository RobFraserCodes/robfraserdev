"use client"

import { Button } from '@/components/ui/button'

interface CalendlyButtonProps {
  variant?: 'default' | 'outline' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg'
  className?: string
  children: React.ReactNode
}

// Replace this URL with your Google Calendar appointment scheduling link
// To get your link: Google Calendar > Settings > Appointments > Create appointment schedule
// Then copy the "Booking page" URL
const GOOGLE_CALENDAR_BOOKING_URL = 'https://calendar.app.google/R1jBh1jUaLD1e8Qo6'

/*
  SUGGESTED SERVICE DESCRIPTION FOR GOOGLE CALENDAR:
  
  Free 15-Minute Website Audit
  
  Let's discuss your current website and explore how a modern, mobile-ready site could help your Highland business. 
  
  In this quick 15-minute call, I'll:
  - Review your current online presence
  - Identify quick wins to improve your site
  - Explain my £499 fixed-price website package (delivered in 7-10 days)
  - Answer any questions about getting your business online
  
  No obligation — just honest advice and a clear plan if we're a good fit.
  
  Based in Inverness, serving Highland businesses across Scotland.
*/

export function CalendlyButton({
  variant = 'default',
  size = 'default',
  className = '',
  children
}: CalendlyButtonProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Track with Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'lead', {
        event_category: 'engagement',
        event_label: 'google_calendar_booking_opened'
      })
    }

    // Track with Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead')
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      asChild
    >
      <a
        href={GOOGLE_CALENDAR_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleLinkClick}
      >
        {children}
      </a>
    </Button>
  )
}
