"use client";

import { Mail } from "lucide-react";
import { GmailSidebar } from "@/components/email-demo/GmailSidebar";
import { EmailContent } from "@/components/email-demo/EmailContent";
import { useEmailTour } from "@/lib/useEmailTour";
import { useExtensionStore } from "@/lib/store/extensionStore";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { ScrollProvider } from "@/lib/ScrollContext";

export default function EmailDemoPage() {
  const { startTour } = useEmailTour();
  const { resetExtension, setLanguage } = useExtensionStore();

  // Reset extension and set default language to English on entering the page
  useEffect(() => {
    resetExtension();
    setLanguage("en");
  }, [resetExtension, setLanguage]);

  return (
    <ScrollProvider>
      <div className="min-h-screen flex flex-col bg-background relative">
        {/* Mobile safe area top padding to prevent header from being hidden under URL bar */}
        <div
          className="md:hidden h-0"
          style={{ paddingTop: "env(safe-area-inset-top)" }}
        ></div>

        {/* Unified Header Component */}
        <Header
          demoType="email"
          title="Email Scam Detection Demo"
          icon={<Mail className="h-5 w-5" />}
          onStartTour={startTour}
          colorScheme="brown"
          websiteUrl="mail.google.com/mail/u/0/#inbox"
        />

        <div className="flex flex-1 min-h-0">
          {/* Desktop: Show sidebar and content side by side */}
          <div className="hidden md:flex md:flex-1 md:overflow-hidden">
            <GmailSidebar />
            <EmailContent />
          </div>

          {/* Mobile: Show only content, sidebar hidden */}
          <div className="md:hidden flex-1">
            <EmailContent />
          </div>
        </div>
      </div>
    </ScrollProvider>
  );
}
