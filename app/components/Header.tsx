'use client';

import { Menu, Bell, User } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-bold">
              T
            </div>
            <span className="text-xl font-bold">TrendBet</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-text-primary hover:text-primary transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-200">
              Markets
            </a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-200">
              Profile
            </a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-200">
              Leaderboard
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>
            <button className="hidden md:block px-4 py-2 bg-primary hover:bg-accent rounded-lg font-semibold transition-all duration-200">
              Connect
            </button>
            <button 
              className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20 animate-fade-in">
            <nav className="flex flex-col gap-3">
              <a href="#" className="px-4 py-2 hover:bg-primary/10 rounded-lg transition-colors duration-200">
                Home
              </a>
              <a href="#" className="px-4 py-2 hover:bg-primary/10 rounded-lg transition-colors duration-200">
                Markets
              </a>
              <a href="#" className="px-4 py-2 hover:bg-primary/10 rounded-lg transition-colors duration-200">
                Profile
              </a>
              <a href="#" className="px-4 py-2 hover:bg-primary/10 rounded-lg transition-colors duration-200">
                Leaderboard
              </a>
              <button className="mx-4 mt-2 px-4 py-2 bg-primary hover:bg-accent rounded-lg font-semibold transition-all duration-200">
                Connect Wallet
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
