"use client";

import { Mail } from "lucide-react";
import { GmailHeader } from "@/components/email-demo/GmailHeader";
import { GmailSidebar } from "@/components/email-demo/GmailSidebar";
import { EmailContent } from "@/components/email-demo/EmailContent";
import { useEmailTour } from "@/lib/useEmailTour";
import { useExtensionStore } from "@/lib/store/extensionStore";
import { useEffect } from "react";
import { DemoInstruction } from "@/components/DemoInstruction";
import { FakeBrowserBar } from "@/components/FakeBrowserBar";

export default function EmailDemoPage() {
  const { startTour } = useEmailTour();
  const { resetExtension, setLanguage } = useExtensionStore();

  // Reset extension and set default language to English on entering the page
  useEffect(() => {
    resetExtension();
    setLanguage("en");
  }, [resetExtension, setLanguage]);

  return (
    <div className="h-screen flex flex-col bg-background relative">
      {/* Demo Instructions Banner */}
      <DemoInstruction
        title="Email Scam Detection Demo"
        icon={<Mail className="h-5 w-5" />}
        onStartTour={startTour}
        colorScheme="brown"
        activeMessage="Our AI is analyzing this email for scam indicators. The extension will highlight suspicious content and provide protection recommendations."
        inactiveMessage="Activate mAIscam extension first to see real-time email scam detection and analysis in action."
      />

      {/* Fake Browser Bar */}
      <FakeBrowserBar websiteUrl="mail.google.com/mail/u/0/#inbox" />

      <GmailHeader />

      <div className="flex flex-1 overflow-hidden min-h-0">
        <GmailSidebar />
        <EmailContent />
      </div>
    </div>
  );
}
