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
    <div className="bg-surface rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-primary/20 rounded-lg">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <span className={`text-sm font-semibold ${isPositive ? 'text-success' : 'text-danger'}`}>
          {change}
        </span>
      </div>
      <p className="text-text-secondary text-sm mb-1">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
