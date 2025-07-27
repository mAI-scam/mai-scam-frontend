'use client';

import { Menu, Search, HelpCircle, Settings, Grid3X3 } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function GmailHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b bg-background">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Menu className="h-5 w-5" />
        </Button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-destructive rounded flex items-center justify-center">
            <span className="text-destructive-foreground font-medium text-sm">M</span>
          </div>
          <span className="text-foreground text-xl">Gmail</span>
        </div>
      </div>
      
      <div className="flex-1 max-w-2xl mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search mail"
            className={cn(
              "w-full px-10 py-2 rounded-lg transition-colors",
              "bg-muted hover:bg-muted/80 focus:bg-background",
              "border border-transparent focus:border-border",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            )}
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-1">
        <Button variant="ghost" size="icon" className="rounded-full">
          <HelpCircle className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Grid3X3 className="h-5 w-5" />
        </Button>
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center ml-2">
          <span className="text-primary-foreground text-sm">S</span>
        </div>
      </div>
    </header>
  );
}
