"use client";

import { Menu, Search, HelpCircle, Settings, Grid3X3 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function GmailHeader() {
  return (
    <header className="flex items-center justify-between px-3 md:px-4 py-2 border-b bg-white">
      {/* Left section - Menu and Logo */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-8 w-8 md:h-10 md:w-10"
        >
          <Menu className="h-4 w-4 md:h-5 md:w-5" />
        </Button>

        <div className="flex items-center space-x-1 md:space-x-2">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-destructive rounded flex items-center justify-center">
            <span className="text-destructive-foreground font-medium text-xs md:text-sm">
              M
            </span>
          </div>
          <span className="text-foreground text-lg md:text-xl font-medium">
            Gmail
          </span>
        </div>
      </div>

      {/* Center section - Search bar */}
      <div className="flex-1 max-w-xs md:max-w-2xl mx-2 md:mx-8">
        <div className="relative">
          <Search className="absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search mail"
            className={cn(
              "w-full px-8 md:px-10 py-1.5 md:py-2 rounded-lg transition-colors text-sm md:text-base",
              "bg-muted hover:bg-muted/80 focus:bg-background",
              "border border-transparent focus:border-border",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            )}
          />
        </div>
      </div>

      {/* Right section - Action buttons */}
      <div className="flex items-center space-x-1">
        {/* Hide some buttons on mobile to save space */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-8 w-8 md:h-10 md:w-10 hidden md:flex"
        >
          <HelpCircle className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-8 w-8 md:h-10 md:w-10 hidden md:flex"
        >
          <Settings className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-8 w-8 md:h-10 md:w-10"
        >
          <Grid3X3 className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
        <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center ml-1 md:ml-2">
          <span className="text-primary-foreground text-xs md:text-sm">S</span>
        </div>
      </div>
    </header>
  );
}
