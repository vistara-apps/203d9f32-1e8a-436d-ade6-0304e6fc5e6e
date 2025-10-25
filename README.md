# TrendBet - Socialized Prediction Markets on Base

A Next.js Base Mini App enabling Farcaster users to engage in prediction markets directly within their social feed.

## Features

- 🔥 **Trending Market Curation**: Automated identification of trending topics on Farcaster
- ⚡ **Gasless Betting**: Frame-native betting with gas-sponsored transactions
- 🏆 **Onchain Reputation**: Build verifiable reputation as a skilled forecaster
- 🚀 **Dynamic Market Creation**: User-driven market creation with viral sharing
- 💎 **BASE Theme**: Modern UI with Base blue accents and dark theme

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet Integration**: OnchainKit, Coinbase Wallet
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with custom BASE theme
- **TypeScript**: Full type safety

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Configure environment**:
```bash
cp .env.local.example .env.local
# Add your OnchainKit API key
```

3. **Run development server**:
```bash
npm run dev
```

4. **Open in browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
trendbet/
├── app/
│   ├── components/
│   │   ├── Providers.tsx      # OnchainKit & React Query setup
│   │   ├── Header.tsx         # Navigation header
│   │   ├── MarketCard.tsx     # Market display component
│   │   └── StatsCard.tsx      # Statistics display
│   ├── globals.css            # BASE theme styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── public/
│   └── .well-known/
│       └── farcaster.json     # Mini App manifest
└── package.json
```

## BASE Theme

The app uses a custom BASE theme with:
- Dark blue background (#0a1929)
- Base blue accents (#0052ff)
- Rounded borders and modern shadows
- Responsive design tokens
- Smooth animations

## Mini App Integration

- **MiniKit**: Farcaster user context and social features
- **OnchainKit**: Wallet connection and gasless transactions
- **Frame Support**: Native Farcaster Frame integration
- **Notifications**: Push notifications for market events

## Business Model

- 2-5% platform fee on winning payouts
- Gas sponsorship via Paymaster
- Micro-transaction based revenue

## License

MIT
