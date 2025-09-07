"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Shield, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container mx-auto px-4 md:px-6 py-4 md:py-8">
      <nav className="flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 md:w-8 md:h-8 object-cover">
            <Image
              src="/logo.png"
              alt="mAIscam Logo"
              width={128}
              height={128}
              suppressHydrationWarning
            />
          </div>

          <span className="text-lg md:text-2xl font-bold text-[#49A4EF]">
            <span>m</span>
            <span className="text-[#EB6700]">AI</span>
            <span>scam</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/email-demo"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Email Demo
          </Link>
          <Link
            href="/website-demo"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Website Demo
          </Link>
          <Link
            href="/image-demo"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Social Media Demo
          </Link>
          <Link
            href="/policy"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Policy
          </Link>

          {/* Admin Button */}
          <Link
            href={isAuthenticated ? "/admin" : "/login"}
            className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#49A4EF] to-[#EB6700] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <Shield className="h-4 w-4" />
            Admin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t pt-4">
          <div className="flex flex-col space-y-3">
            <Link
              href="/email-demo"
              className="text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Email Demo
            </Link>
            <Link
              href="/website-demo"
              className="text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Website Demo
            </Link>
            <Link
              href="/image-demo"
              className="text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Social Media Demo
            </Link>
            <Link
              href="/policy"
              className="text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Policy
            </Link>

            {/* Admin Button - Mobile */}
            <Link
              href={isAuthenticated ? "/admin" : "/login"}
              className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#49A4EF] to-[#EB6700] text-white rounded-lg hover:opacity-90 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              <Shield className="h-4 w-4" />
              Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
