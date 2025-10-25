'use client';

import { TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

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

interface MarketCardProps {
  market: Market;
  index: number;
}

export function MarketCard({ market, index }: MarketCardProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(value);
  };

  const formatTimeRemaining = (endTime: Date) => {
    const now = new Date();
    const diff = endTime.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return `${days}d remaining`;
  };

  return (
    <div 
      className="bg-surface rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card cursor-pointer group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
          {market.category}
        </span>
        {market.trending && (
          <div className="flex items-center gap-1 text-warning">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-semibold">Trending</span>
          </div>
        )}
      </div>

      {/* Topic */}
      <h3 className="text-lg font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors duration-200">
        {market.topic}
      </h3>

      {/* Outcomes */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {market.outcomes.slice(0, 2).map((outcome, idx) => (
          <button
            key={idx}
            className="px-3 py-2 bg-bg hover:bg-primary/20 rounded-lg text-sm font-medium transition-all duration-200 border border-primary/10 hover:border-primary/30"
          >
            {outcome}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-primary/10">
        <div className="flex items-center gap-2 text-text-secondary text-sm">
          <DollarSign className="w-4 h-4 text-success" />
          <span>{formatCurrency(market.totalLiquidity)}</span>
        </div>
        <div className="flex items-center gap-2 text-text-secondary text-sm">
          <Users className="w-4 h-4 text-accent" />
          <span>{market.participants}</span>
        </div>
        <div className="flex items-center gap-2 text-text-secondary text-sm col-span-2">
          <Clock className="w-4 h-4 text-warning" />
          <span>{formatTimeRemaining(market.endTime)}</span>
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full mt-4 px-4 py-2 bg-primary hover:bg-accent rounded-lg font-semibold transition-all duration-200 transform group-hover:scale-105">
        Place Bet
      </button>
    </div>
  );
}
