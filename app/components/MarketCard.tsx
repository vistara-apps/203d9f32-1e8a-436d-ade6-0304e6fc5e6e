'use client';

import { TrendingUp, Users, Clock } from 'lucide-react';

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
}

export function MarketCard({ market }: MarketCardProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatTimeRemaining = (endTime: Date) => {
    const now = new Date();
    const diff = endTime.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return `${days}d ${hours}h`;
    return `${hours}h`;
  };

  return (
    <div className="bg-surface rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card cursor-pointer group">
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
        {market.outcomes.slice(0, 2).map((outcome, index) => (
          <button
            key={index}
            className="px-3 py-2 bg-bg hover:bg-primary/20 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent hover:border-primary/40"
          >
            {outcome}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-primary/10">
        <div>
          <div className="flex items-center gap-1 text-text-secondary text-xs mb-1">
            <Users className="w-3 h-3" />
            <span>Volume</span>
          </div>
          <p className="text-sm font-bold">{formatCurrency(market.volume)}</p>
        </div>
        <div>
          <div className="flex items-center gap-1 text-text-secondary text-xs mb-1">
            <Users className="w-3 h-3" />
            <span>Players</span>
          </div>
          <p className="text-sm font-bold">{market.participants}</p>
        </div>
        <div>
          <div className="flex items-center gap-1 text-text-secondary text-xs mb-1">
            <Clock className="w-3 h-3" />
            <span>Ends</span>
          </div>
          <p className="text-sm font-bold">{formatTimeRemaining(market.endTime)}</p>
        </div>
      </div>
    </div>
  );
}
