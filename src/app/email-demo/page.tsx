'use client';

import { GmailHeader } from '@/components/email-demo/GmailHeader';
import { GmailSidebar } from '@/components/email-demo/GmailSidebar';
import { EmailContent } from '@/components/email-demo/EmailContent';
import { WebExtensionOverlay } from '@/components/email-demo/WebExtensionOverlay';

export default function EmailDemoPage() {
  return (
    <div className="h-screen flex flex-col bg-background relative">
      <GmailHeader />
      
      <div className="flex flex-1 overflow-hidden">
        <GmailSidebar />
        <EmailContent />
      </div>
      
      <WebExtensionOverlay />
    </div>
  );
}
