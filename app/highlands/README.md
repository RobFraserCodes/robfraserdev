# Highlands Lead-Gen Landing Page

Single-purpose landing page to convert local Highland business owners into booked 15-minute website audits.

## Routes

- **Main page**: `/highlands`
- **Thank you page**: `/highlands/thank-you`

## Setup Instructions

### 1. Add Your Calendly URL

Edit `components/highlands/calendly-button.tsx` and replace the placeholder URL:

```tsx
src="https://calendly.com/your-calendly-username/15min"
```

Replace with your actual Calendly booking URL.

### 2. Configure Analytics

Edit `app/highlands/layout.tsx` and replace the placeholder IDs:

- **Google Analytics**: Replace `G-XXXXXXX` with your GA measurement ID
- **Meta Pixel**: Replace `XXXXXXXXXX` with your Facebook Pixel ID

### 3. Add Images

Add the following images to `/public/highlands/`:

- `hero.jpg` - Highland landscape or business scene (recommended: 1200x800px)
- `about.jpg` - Headshot or another Highland landscape (recommended: 600x600px)
- Portfolio images (optional, currently using placeholders)

### 4. Update Portfolio Section

Edit `app/highlands/page.tsx` around line 430 to add real portfolio projects:

```tsx
{
  title: 'Your Project Name',
  description: 'Brief description',
  link: 'https://example.com'
}
```

### 5. Update Contact Information

The page uses `hello@robfraser.dev` as the contact email. Update this in:
- `app/highlands/page.tsx` (footer section)
- `app/highlands/thank-you/page.tsx`
- `components/highlands/calendly-button.tsx`

## Features Implemented

✅ Hero section with strong CTA
✅ "Why It Matters" pain points section
✅ Offer card with pricing and add-ons
✅ 3-step process timeline
✅ Portfolio showcase (placeholder content)
✅ Testimonials section
✅ About/Local trust section
✅ Final CTA section
✅ Calendly modal integration
✅ Thank you page with clear next steps
✅ Google Analytics tracking
✅ Meta Pixel tracking
✅ SEO metadata and Open Graph tags
✅ JSON-LD structured data for LocalBusiness
✅ Mobile-responsive design
✅ Dark mode support
✅ Accessibility features (ARIA labels, focus states)

## Analytics Events

The following events are tracked:

- **Lead**: Fired when Calendly modal is opened
- **PageView**: Tracked on page load (standard)

Conversions should be tracked via the `/highlands/thank-you` URL.

## Customization

### Colors

The page uses the site's Tailwind theme. Primary color can be adjusted in `tailwind.config.ts`.

### Copy

All copy is in `app/highlands/page.tsx`. Search for specific headings to edit sections.

### Layout

The page uses a max-width container (max-w-7xl for most sections) with consistent py-20 vertical spacing.

## Testing

Before launch:

1. Test Calendly integration - ensure modal opens and booking works
2. Test thank-you page redirect
3. Verify analytics tracking with browser dev tools
4. Test on mobile devices (responsive design)
5. Check dark mode appearance
6. Test all CTAs
7. Verify all email links work

## Notes

- The page uses Headless UI for the modal (already in project dependencies)
- All components are TypeScript with proper types
- The page is client-side rendered where needed ("use client" directives)
- SEO metadata includes noindex for thank-you page (conversion tracking only)
