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
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Signal frame ready for MiniKit
    setIsReady(true);
  }, []);

  // Mock trending markets data
  const trendingMarkets: Market[] = [
    {
      id: '1',
      topic: 'Will ETH reach $4000 by end of month?',
      category: 'Crypto',
      outcomes: ['Yes', 'No'],
      totalLiquidity: 12500,
      volume: 8900,
      endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      participants: 234,
      trending: true,
    },
    {
      id: '2',
      topic: 'Base TVL to surpass $10B this quarter?',
      category: 'DeFi',
      outcomes: ['Yes', 'No'],
      totalLiquidity: 8700,
      volume: 5400,
      endTime: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      participants: 156,
      trending: true,
    },
    {
      id: '3',
      topic: 'Next Farcaster feature launch?',
      category: 'Social',
      outcomes: ['Channels 2.0', 'Video Support', 'NFT Frames', 'Other'],
      totalLiquidity: 6200,
      volume: 3800,
      endTime: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
      participants: 189,
      trending: true,
    },
  ];

  const stats = [
    { label: 'Active Markets', value: '127', icon: TrendingUp, change: '+12%' },
    { label: 'Total Volume', value: '$2.4M', icon: Zap, change: '+28%' },
    { label: 'Top Predictors', value: '1.2K', icon: Trophy, change: '+8%' },
    { label: 'Community', value: '12.5K', icon: Users, change: '+15%' },
  ];

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading TrendBet...</p>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Socialized Prediction Markets
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Bet on trending topics, build your reputation, and earn rewards on Base
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </section>

        {/* Trending Markets Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Trending Markets</h2>
            </div>
            <button className="px-4 py-2 bg-surface hover:bg-primary/20 rounded-lg transition-all duration-200 text-sm font-medium">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingMarkets.map((market) => (
              <MarketCard key={market.id} market={market} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Predicting?</h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Connect your wallet to place bets, create markets, and build your onchain reputation
          </p>
          <button className="px-8 py-3 bg-primary hover:bg-accent rounded-lg font-semibold transition-all duration-200 shadow-glow hover:shadow-lg transform hover:scale-105">
            Connect Wallet
          </button>
        </section>
      </main>
    </div>
  );
}
