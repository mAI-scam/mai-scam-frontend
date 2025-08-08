'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play } from 'lucide-react';
import { GmailHeader } from '@/components/email-demo/GmailHeader';
import { GmailSidebar } from '@/components/email-demo/GmailSidebar';
import { EmailContent } from '@/components/email-demo/EmailContent';
import { WebExtensionOverlay } from '@/components/email-demo/WebExtensionOverlay';
import { useEmailTour } from '@/lib/useEmailTour';
import { useExtensionStore } from '@/lib/store/extensionStore';
import { useEffect } from 'react';

export default function EmailDemoPage() {
  const { startTour } = useEmailTour();
  const { resetExtension } = useExtensionStore();

  // Reset extension to inactive state when entering the page
  useEffect(() => {
    resetExtension();
  }, [resetExtension]);

  return (
    <div className="h-screen flex flex-col bg-background relative">
      {/* Navigation and Tour Buttons */}
      <div className="fixed bottom-6 left-6 z-40 flex gap-3">
        <Link href="/">
          <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm shadow-lg">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        <Button 
          onClick={startTour}
          variant="default" 
          size="sm" 
          className="bg-primary/90 backdrop-blur-sm shadow-lg"
        >
          <Play className="h-4 w-4 mr-2" />
          Start Tour
        </Button>
      </div>
      
      <GmailHeader />
      
      <div className="flex flex-1 overflow-hidden">
        <GmailSidebar />
        <EmailContent />
      </div>
      
      <WebExtensionOverlay />
    </div>
  );
}
