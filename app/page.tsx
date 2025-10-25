'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, Zap, Trophy, Users } from 'lucide-react';
import { MarketCard } from './components/MarketCard';
import { Header } from './components/Header';
import { StatsCard } from './components/StatsCard';

interface Market {
  id: string;
  topic: string;
  category: string;
  outcomes: string[];
  totalLiquidity: number;
  volume: number;
  endTime: Date;
  participants: number;
  trending: boolean;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mock data for trending markets
  const trendingMarkets: Market[] = [
    {
      id: '1',
      topic: 'Will ETH reach $5000 by end of Q1 2025?',
      category: 'Crypto',
      outcomes: ['Yes', 'No'],
      totalLiquidity: 125000,
      volume: 89000,
      endTime: new Date('2025-03-31'),
      participants: 1247,
      trending: true,
    },
    {
      id: '2',
      topic: 'Base TVL to exceed $10B in 2025?',
      category: 'DeFi',
      outcomes: ['Yes', 'No'],
      totalLiquidity: 98000,
      volume: 67000,
      endTime: new Date('2025-12-31'),
      participants: 892,
      trending: true,
    },
    {
      id: '3',
      topic: 'Next Farcaster feature launch?',
      category: 'Social',
      outcomes: ['Channels 2.0', 'Video Support', 'NFT Integration', 'Other'],
      totalLiquidity: 45000,
      volume: 32000,
      endTime: new Date('2025-06-30'),
      participants: 567,
      trending: true,
    },
  ];

  const stats = [
    { label: 'Total Volume', value: '$2.4M', icon: TrendingUp, change: '+12.5%' },
    { label: 'Active Markets', value: '127', icon: Zap, change: '+8' },
    { label: 'Top Predictors', value: '3.2K', icon: Trophy, change: '+156' },
    { label: 'Community', value: '12.8K', icon: Users, change: '+892' },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-12 animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Socialized Prediction Markets
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Bet on trending topics, build your reputation, and earn rewards on Base
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </section>

        {/* Trending Markets Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Trending Markets
            </h2>
            <button className="px-4 py-2 bg-surface hover:bg-primary/20 rounded-lg transition-all duration-200 text-sm font-medium">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingMarkets.map((market, index) => (
              <MarketCard key={market.id} market={market} index={index} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 text-center border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Predicting?</h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Connect your wallet to access gasless betting, build your onchain reputation, and compete with the community
          </p>
          <button className="px-8 py-3 bg-primary hover:bg-accent rounded-lg font-semibold transition-all duration-200 shadow-glow hover:shadow-lg transform hover:scale-105">
            Connect Wallet
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-surface mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center text-text-secondary text-sm">
          <p>© 2025 TrendBet. Built on Base with ❤️</p>
        </div>
      </footer>
    </div>
  );
}
