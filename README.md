# TrendBet - Socialized Prediction Markets on Base

A Next.js Base Mini App enabling Farcaster users to engage in prediction markets directly within their social feed.

## Features

- 🔥 Trending market curation from Farcaster activity
- ⚡ Gasless betting and payouts via OnchainKit
- 🏆 Onchain reputation and social signaling
- 🚀 Dynamic market creation and viral sharing
- 📱 Mobile-first, Frame-native experience

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with BASE theme
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
# Add your OnchainKit API key
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/       # Reusable UI components
├── globals.css      # Global styles with BASE theme
├── layout.tsx       # Root layout with providers
└── page.tsx         # Main landing page

public/
└── .well-known/
    └── farcaster.json  # Mini App manifest
```

## BASE Theme

The app uses the BASE theme with:
- Dark blue background (#0a1929)
- Base blue accents (#0052ff)
- Rounded borders and modern design
- Mobile-first responsive layout

## Deployment

Deploy to Vercel:

```bash
npm run build
vercel deploy
```

## License

MIT
