"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, FileText, Github, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container mx-auto px-4 md:px-6 py-4 md:py-8">
      <nav className="flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
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
        </Link>

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
            href="/installation"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Installation
          </Link>
          <a
            href="https://mai-scam-admin.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            <BarChart3 className="h-4 w-4" />
            Dashboard
          </a>
          <Link
            href="/policy"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Policy
          </Link>
          <a
            href="https://github.com/mAI-scam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
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
              href="/installation"
              className="text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Installation
            </Link>
            <a
              href="https://mai-scam-admin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-muted flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </a>
            <Link
              href="/policy"
              className="text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Policy
            </Link>
            <a
              href="https://github.com/mAI-scam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-muted flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
