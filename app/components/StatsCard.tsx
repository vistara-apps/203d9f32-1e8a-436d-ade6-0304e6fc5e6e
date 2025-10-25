'use client';

import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  change: string;
}

export function StatsCard({ label, value, icon: Icon, change }: StatsCardProps) {
  const isPositive = change.startsWith('+');

  return (
    <div className="bg-surface rounded-xl p-4 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card">
      <div className="flex items-center justify-between mb-2">
        <span className="text-text-secondary text-sm">{label}</span>
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold">{value}</span>
        <span className={`text-xs font-semibold ${isPositive ? 'text-success' : 'text-danger'}`}>
          {change}
        </span>
      </div>
    </div>
  );
}
