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
  const { resetExtension, setLanguage } = useExtensionStore();

  // Reset extension and set default language to English on entering the page
  useEffect(() => {
    resetExtension();
    setLanguage('en');
  }, [resetExtension, setLanguage]);

  return (
    <div className="h-screen flex flex-col bg-background relative">
      {/* Navigation and Tour Buttons */}
      <div className="fixed bottom-6 left-6 z-40 flex gap-3">
        <Link href="/">
          <Button variant="outline" size="sm" className="bg-white/95 backdrop-blur-sm shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 border-gray-200">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        <Button 
          onClick={startTour}
          variant="default" 
          size="sm" 
          className="relative text-white font-semibold backdrop-blur-sm shadow-2xl border-2 border-white/20 transition-all duration-300 animate-pulse hover:animate-none hover:scale-105 hover:shadow-2xl"
          style={{
            background: '#49A4EF',
            boxShadow: '0 0 30px rgba(73, 164, 239, 0.8), 0 0 60px rgba(73, 164, 239, 0.6), 0 0 90px rgba(73, 164, 239, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)'
          }}
        >
          <Play className="h-4 w-4 mr-2 drop-shadow-md" />
          <span className="drop-shadow-md">Start Tour</span>
          {/* Glowing ring effect */}
          <div 
            className="absolute inset-0 rounded-md opacity-40 blur-md -z-10 animate-ping"
            style={{
              background: '#49A4EF'
            }}
          ></div>
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
