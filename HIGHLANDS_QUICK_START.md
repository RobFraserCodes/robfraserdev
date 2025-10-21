# Highlands Landing Page - Quick Start Guide

## ✅ What's Been Created

Your Highlands lead-gen landing page is ready! Here's what was built:

### Pages
- `/highlands` - Main landing page with all sections
- `/highlands/thank-you` - Conversion confirmation page

### Components
- `components/highlands/calendly-button.tsx` - Calendly modal with analytics tracking
- `components/ui/dialog.tsx` - Reusable modal component

### Features Implemented
- ✅ Hero section with "Book Free Audit" CTA
- ✅ "Why It Matters" pain points (3 cards)
- ✅ £499 fixed price offer card with add-ons
- ✅ 3-step process timeline
- ✅ Portfolio section (placeholder content)
- ✅ Testimonials
- ✅ About/Local trust section
- ✅ Final CTA
- ✅ Footer with contact info
- ✅ Calendly modal integration
- ✅ Google Analytics + Meta Pixel tracking
- ✅ SEO metadata & JSON-LD schema
- ✅ Mobile responsive
- ✅ Dark mode support
- ✅ Accessibility features

---

## 🚀 Before You Launch - 5 Minute Setup

### 1. Configure Calendly (REQUIRED)

Edit: `components/highlands/calendly-button.tsx`

**Line 41:** Replace the URL:
```tsx
src="https://calendly.com/your-calendly-username/15min"
```

With your actual Calendly link, e.g.:
```tsx
src="https://calendly.com/robfraser/15min-audit"
```

### 2. Add Analytics IDs (REQUIRED)

Edit: `app/highlands/layout.tsx`

**Line 12 & 20:** Google Analytics
```tsx
G-XXXXXXX  →  G-ABC123XYZ  // Your actual GA4 ID
```

**Line 35:** Meta Pixel
```tsx
XXXXXXXXXX  →  1234567890  // Your actual Pixel ID
```

### 3. Add Images (RECOMMENDED)

Add to `/public/highlands/`:
- `hero.jpg` - Highland landscape (1200x800px recommended)
- `about.jpg` - Headshot or landscape (600x600px recommended)

Or update the placeholder divs in `app/highlands/page.tsx` if using different names.

### 4. Update Portfolio (OPTIONAL)

Edit: `app/highlands/page.tsx` (around line 430)

Replace placeholder projects:
```tsx
{
  title: 'Café in Inverness',
  description: 'One-page site with menu & hours.',
  link: '#'  // ← Add real project URLs
}
```

### 5. Review Contact Email (RECOMMENDED)

The page uses `hello@robfraser.dev` throughout. If you want a different email:

**Search & replace in:**
- `app/highlands/page.tsx`
- `app/highlands/thank-you/page.tsx`
- `components/highlands/calendly-button.tsx`

---

## 🧪 Testing Checklist

Before going live, test:

- [ ] Click "Book Free Audit" button → Calendly modal opens
- [ ] Verify Calendly booking works in modal
- [ ] Click "See example sites" → scrolls to portfolio
- [ ] Visit `/highlands/thank-you` → displays correctly
- [ ] Test on mobile device (responsive design)
- [ ] Check dark mode appearance
- [ ] Verify all email links open mail client
- [ ] Open browser dev tools → check analytics fires

**Analytics verification:**
1. Open browser DevTools (F12)
2. Go to Console tab
3. Click "Book Free Audit" button
4. Look for GA & FB tracking events

---

## 📊 Tracking Conversions

**Conversion goal:** `/highlands/thank-you`

Set up conversion tracking in:
- **Google Analytics:** Create goal for `/highlands/thank-you` page view
- **Meta Ads:** Create custom conversion for thank-you page URL

**Events tracked:**
- `Lead` event when Calendly modal opens
- `PageView` on both main page and thank-you page

---

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts` to adjust the primary color theme.

### Edit Copy
All text is in `app/highlands/page.tsx` - just search for the heading you want to edit.

### Adjust Pricing
Search for "£499" in `app/highlands/page.tsx` to find the offer section.

### Add More Testimonials
Find the testimonials section (around line 450) and duplicate the Card component.

---

## 🔧 Build & Deploy

**Local development:**
```bash
npm run dev
```
Visit: http://localhost:3000/highlands

**Production build:**
```bash
npm run build
npm run start
```

**Deploy:**
The page is ready to deploy with Vercel, Netlify, or any Next.js host.

---

## 📁 File Structure

```
app/highlands/
  ├── page.tsx           # Main landing page
  ├── layout.tsx         # Analytics scripts
  ├── README.md          # Detailed documentation
  └── thank-you/
      └── page.tsx       # Conversion thank-you page

components/highlands/
  └── calendly-button.tsx  # CTA button with modal

components/ui/
  └── dialog.tsx         # Reusable modal component

public/highlands/
  └── (add your images here)
```

---

## ❓ Questions?

**Full documentation:** See `app/highlands/README.md`

**Common issues:**
- *Calendly not loading?* → Check the URL in calendly-button.tsx
- *Analytics not firing?* → Replace placeholder IDs in layout.tsx
- *Images not showing?* → Add images to /public/highlands/ folder

---

## 🎯 What to Do Next

1. ✅ Complete the 5-minute setup above
2. ✅ Run the testing checklist
3. ✅ Deploy to production
4. Set up ad campaigns pointing to `/highlands`
5. Monitor conversions via `/highlands/thank-you` URL

**Ready to launch!** 🚀
