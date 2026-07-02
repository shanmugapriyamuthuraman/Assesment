# Chai Reader

An AI-powered book commerce platform for discovering and experiencing books — reading, chatting, and connecting with authors.

## Setup & Running

```bash
npm install
npm run dev       # Development at http://localhost:3000
npm run build     # Production build
npm start         # Run production build
```

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Next.js 16** (App Router) | SSR, file-based routing, Image optimization |
| Language | **TypeScript** | Type safety across components and data |
| Styling | **Tailwind CSS v4** | Utility-first, co-located styles, zero-runtime |
| Icons | **Lucide React** | Consistent, tree-shakable icon set |
| Images | **next/image** | Automatic WebP, lazy loading, responsive srcsets |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Browse / Home
│   ├── book/[id]/page.tsx  # Book detail
│   ├── author/[id]/page.tsx# Author profile
│   ├── best-sellers/       # Category pages
│   ├── new-arrivals/
│   ├── business/
│   ├── tech/
│   ├── classics/
│   ├── self-help/
│   ├── kids/
│   └── settings/
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Search, wishlist, cart, login
│   │   ├── Sidebar.tsx     # Navigation (responsive, collapsible on mobile)
│   │   └── Footer.tsx      # Links, brand info
│   ├── sections/
│   │   ├── HeroBanner.tsx  # Auto-rotating hero carousel
│   │   ├── GenrePills.tsx  # Interactive genre filter
│   │   ├── BookCarousel.tsx# Reusable horizontal scroll section
│   │   ├── RecommendedCarousel.tsx
│   │   ├── AuthorSpotlight.tsx
│   │   └── FamousAuthors.tsx
│   └── ui/
│       ├── BookCard.tsx    # Book thumbnail + Read & Chat button
│       └── AuthorCard.tsx  # Author avatar (circle / grid)
├── data/
│   └── mockData.ts         # Static book and author data
└── types/
    └── index.ts            # Shared TypeScript interfaces
```

## Screens Implemented

1. **Browse (Home)** — Hero banner, genre pills, New Arrivals, Recommended, Best Sellers, Speak with Authors, Famous Authors, Academics, Business, Tech, Classics, Footer
2. **Book Detail** — Cover, metadata, about, product details, author section, reviews, "You might also like"
3. **Author Profile** — Author bio, genre tags, book carousels, full book grid
4. **Category Pages** — New Arrivals, Best Sellers, Business, Tech, Classics, Self Help, Kids, Settings
5. **404** — Not found page with back navigation

## Assumptions

- Book covers and author photos use Unsplash as a placeholder CDN (Figma requires authentication to access assets). Visual compositions match the provided screenshots.
- The "Read & Chat" CTA navigates to the book detail page; a real implementation would open an in-app reader/chat modal.
- Login, Wishlist, and Cart are UI-only shells — auth is a separate feature.
- Mock data populates all sections; a real backend would expose REST/GraphQL endpoints.
- The "Speak with Authors" section would be powered by an LLM API in production.

## Capacitor Readiness

The architecture is mobile-friendly by design:

- **No `window`/`document` outside `"use client"` guards** — all browser APIs are contained in client components.
- **Relative URLs throughout** — no hardcoded domain assumptions that break Capacitor's `file://` origin.
- **Tailwind CSS only** — no web-specific CSS hacks.
- **Static-export compatible pages** — pages can be exported for Capacitor's Android/iOS WebView.
- To integrate: `npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios`, then `npx cap init` pointing `webDir` to `out/`.

## Trade-offs

- **Static mock data** over a database — keeps the project self-contained and fast to review.
- **Server Components** for all data-loading pages — reduces client JS bundle; interactive elements are isolated `"use client"` components.
- **No global state** (Redux/Zustand) — wishlist state is local per card; would add Zustand in a real app.
- **Unsplash for images** — avoids bundling large assets, but requires an internet connection.

## Improvements with More Time

1. Real search with debounce and a results page
2. In-app reader with pagination and progress tracking
3. LLM chat per book (streaming Claude API)
4. Auth flow (email / Google OAuth) with reading history
5. Wishlist & cart with persistence (localStorage → backend)
6. Skeleton loading states while data fetches
7. Dark mode support
8. Storybook component documentation
9. E2E tests with Playwright for the three main screens
10. Capacitor integration with native push notifications for new releases
