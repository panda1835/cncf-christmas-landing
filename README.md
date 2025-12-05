# A Thousand Wishes - CNCF Holiday Campaign

A Next.js landing page for CNCF's "A Thousand Wishes" campaign, bringing joy and hope to underprivileged children in Vietnam and Mongolia.

## SEO Features

This project includes comprehensive SEO optimizations:

- ✅ **Enhanced Metadata**: Open Graph, Twitter Cards, and comprehensive meta tags
- ✅ **Structured Data**: JSON-LD schema for better search engine understanding
- ✅ **Dynamic Sitemap**: Auto-generated XML sitemap at `/sitemap.xml`
- ✅ **Robots.txt**: Proper crawler directives at `/robots.txt`
- ✅ **Open Graph Image**: Auto-generated social sharing image
- ✅ **Web Manifest**: PWA capabilities with manifest.json
- ✅ **Security Headers**: X-Frame-Options, CSP, and other security headers
- ✅ **Performance**: Image optimization, compression, and caching
- ✅ **Semantic HTML**: Proper ARIA roles and semantic structure
- ✅ **Google Analytics**: Integrated with @next/third-parties

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Required environment variables:

- `NEXT_PUBLIC_GA_ID`: Your Google Analytics ID (e.g., G-XXXXXXXXXX)
- `NEXT_PUBLIC_SITE_URL`: Your production URL (e.g., https://athousandwishes.cncf.io)
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: (Optional) Google Search Console verification code

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build

```bash
npm run build
npm start
```

## SEO Checklist

When deploying, make sure to:

1. ✅ Set `NEXT_PUBLIC_SITE_URL` to your production domain
2. ✅ Configure Google Analytics with `NEXT_PUBLIC_GA_ID`
3. ✅ Verify Google Search Console and add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
4. ✅ Submit sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`
5. ✅ Test Open Graph tags with [OpenGraph.xyz](https://www.opengraph.xyz/)
6. ✅ Test Twitter Cards with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
7. ✅ Check structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
8. ✅ Test mobile-friendliness with [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
9. ✅ Run Lighthouse audit in Chrome DevTools

## Technologies

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Fonts**: Google Fonts (Geist, Lobster, Be Vietnam Pro, Montserrat)
- **Analytics**: Google Analytics (@next/third-parties)
- **UI Components**: Radix UI, Lucide React

## Learn More

To learn more about Next.js SEO:

- [Next.js SEO Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Next.js Sitemap Documentation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [Web.dev SEO Guide](https://web.dev/learn/seo/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

**Important**: Don't forget to set your environment variables in Vercel project settings!

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
