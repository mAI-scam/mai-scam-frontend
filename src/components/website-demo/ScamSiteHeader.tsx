"use client";

import { Search, ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export function ScamSiteHeader() {
  return (
    <header className="bg-orange-500 text-white">
      {/* Top bar */}
      <div className="bg-orange-600 text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span>Seller Centre</span>
            <span>|</span>
            <span>Start Selling</span>
            <span>|</span>
            <span>Download App</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Notifications</span>
            <span>Help</span>
            <span>English/BM</span>
            <span>Sign Up | Login</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold">Deal Raya</div>
            <Badge className="bg-yellow-400 text-black">MALAYSIA</Badge>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl rounded">
            <div className="relative">
              <Input
                placeholder="Flash Sale iPhone 16 Pro Max RM999 Only!"
                className="w-full pl-4 pr-12 py-2 rounded-xl bg-white text-black"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-2 bg-orange-600 hover:bg-orange-700 rounded-xl"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-2 mt-2 text-sm">
              <span>iPhone Murah</span>
              <span>PS5 Sale</span>
              <span>Beg Branded</span>
              <span>Gaming PC</span>
              <span>K-pop Merch</span>
            </div>
          </div>

          {/* Cart */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-6 w-6" />
            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1">
              99+
            </Badge>
          </Button>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-6 mt-4 text-sm">
          <Button variant="ghost" className="text-white hover:text-white p-0">
            <Menu className="h-4 w-4 mr-2" />
            Categories
          </Button>
          <span>Flash Deals</span>
          <span>Super Brand Day</span>
          <span>Free Shipping</span>
          <span>Coins & Rewards</span>
          <span>Shocking Sale</span>
          <span>Mall</span>
        </div>
      </div>
    </header>
  );
}
