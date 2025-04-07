'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Input, ShimmerButton } from '@/components/ui';

export function OnPageSEONewsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <div className="bg-card/95 border-y border-primary/20 py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute left-1/4 top-0 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute right-1/4 bottom-0 w-[500px] h-[500px] bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="relative">
            <h2 className="text-foreground mb-4">Get Your Free SEO Analysis</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Discover untapped opportunities to increase your organic traffic
              and outrank your competitors
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <ShimmerButton type="submit" variant="solid">
                  <span>Get Analysis</span>
                  <Send className="w-4 h-4" />
                </ShimmerButton>
              </div>
              <p className="text-sm text-foreground/60 mt-4">
                Join 500+ businesses that have improved their search rankings
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
