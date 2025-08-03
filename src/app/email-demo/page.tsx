'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { GmailHeader } from '@/components/email-demo/GmailHeader';
import { GmailSidebar } from '@/components/email-demo/GmailSidebar';
import { EmailContent } from '@/components/email-demo/EmailContent';
import { WebExtensionOverlay } from '@/components/email-demo/WebExtensionOverlay';

export default function EmailDemoPage() {
  return (
    <div className="h-screen flex flex-col bg-background relative">
      {/* Return to Home Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <Link href="/">
          <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm shadow-lg">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
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
