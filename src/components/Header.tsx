"use client";

import { ReactNode } from "react";
import { DemoInstruction } from "@/components/DemoInstruction";
import { FakeBrowserBar } from "@/components/FakeBrowserBar";
import { GmailHeader } from "@/components/email-demo/GmailHeader";
import { FacebookHeader } from "@/components/image-demo/FacebookHeader";
import { ScamSiteHeader } from "@/components/website-demo/ScamSiteHeader";
import { useScrollContext } from "@/lib/ScrollContext";

interface HeaderProps {
  demoType: "email" | "image" | "website";
  title: string;
  icon: ReactNode;
  onStartTour: () => void;
  colorScheme: "brown" | "orange" | "purple";
  websiteUrl?: string;
}

export function Header({
  demoType,
  title,
  icon,
  onStartTour,
  colorScheme,
  websiteUrl,
}: HeaderProps) {
  const { scrollDirection, isAtTop } = useScrollContext();

  const getDemoHeader = () => {
    switch (demoType) {
      case "email":
        return <GmailHeader />;
      case "image":
        return <FacebookHeader />;
      case "website":
        return <ScamSiteHeader />;
      default:
        return null;
    }
  };

  const getDefaultWebsiteUrl = () => {
    switch (demoType) {
      case "email":
        return "mail.google.com/mail/u/0/#inbox";
      case "image":
        return "facebook.com";
      case "website":
        return "deal-raya-123.com";
      default:
        return "example.com";
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Demo Instructions Banner */}
      <DemoInstruction
        title={title}
        icon={icon}
        onStartTour={onStartTour}
        colorScheme={colorScheme}
      />

      {/* Fake Browser Bar */}
      <FakeBrowserBar websiteUrl={websiteUrl || getDefaultWebsiteUrl()} />

      {/* Demo-specific Header - Hidden when scrolling down, shown when scrolling up or at top */}
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          scrollDirection === "down" && !isAtTop
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        {getDemoHeader()}
      </div>
    </header>
  );
}
