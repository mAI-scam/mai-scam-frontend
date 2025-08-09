'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { FakeBrowserBar } from '@/components/website-demo/FakeBrowserBar';
import { ScamSiteHeader } from '@/components/website-demo/ScamSiteHeader';
import { FlashSaleBanner } from '@/components/website-demo/FlashSaleBanner';
import { ProductGrid } from '@/components/website-demo/ProductGrid';
import { SocialProofSection } from '@/components/website-demo/SocialProofSection';
import { WebsiteBlockingOverlay } from '@/components/website-demo/WebsiteBlockingOverlay';
import { WebExtensionOverlay } from '@/components/email-demo/WebExtensionOverlay';
import { UrgencyPopups } from '@/components/website-demo/UrgencyPopups';
import { useExtensionStore } from '@/lib/store/extensionStore';
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Shield, CreditCard, Phone } from 'lucide-react';

export default function WebsiteDemoPage() {
  const { isActive, analyzeContent, resetExtension } = useExtensionStore();
  const websiteUrl = 'shoppe123.com';

  // Reset extension to inactive state when entering the page
  useEffect(() => {
    resetExtension();
  }, [resetExtension]);

  useEffect(() => {
    if (isActive) {
      // Simulate analyzing the entire website content
      analyzeContent(`${websiteUrl} flash sale murah iPhone PS5 Coach 90% discount`, 'website');
    }
  }, [isActive, analyzeContent]);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Return to Home Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <Link href="/">
          <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm shadow-lg">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
      
      {/* Fake Browser UI */}
      <FakeBrowserBar websiteUrl={websiteUrl} />
      
      {/* Scam Website Content */}
      <div className={`bg-white ${isActive ? 'filter blur-sm' : ''}`}>
        <ScamSiteHeader />
        <FlashSaleBanner />
        
        {/* Trust Badges (Fake) */}
        <div className="bg-gray-100 py-4">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <Shield className="h-8 w-8 text-orange-500" />
                <span className="text-sm font-medium">100% Original</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Truck className="h-8 w-8 text-orange-500" />
                <span className="text-sm font-medium">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CreditCard className="h-8 w-8 text-orange-500" />
                <span className="text-sm font-medium">Secure Payment</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Phone className="h-8 w-8 text-orange-500" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        <ProductGrid />
        <SocialProofSection />

        {/* Payment Methods (Suspicious) */}
        <div className="container mx-auto px-4 py-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Cara Pembayaran</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <Badge variant="outline" className="px-3 py-2">FPX</Badge>
                <Badge variant="outline" className="px-3 py-2">Touch n Go</Badge>
                <Badge variant="outline" className="px-3 py-2">GrabPay</Badge>
                <Badge variant="outline" className="px-3 py-2">Bank Transfer</Badge>
              </div>
              <p className="text-sm text-gray-600">
                *Untuk pemprosesan lebih cepat, sila transfer terus ke akaun bank kami: 
                <span className="font-medium"> Maybank 162345678901</span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer (Minimal) */}
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto px-4 text-center text-sm">
            <p>© {new Date().getFullYear()} Deal Raya Malaysia. Hak Cipta Terpelihara.</p>
            <p className="text-gray-400 mt-1">Contact: support@deal-raya-123.com | WhatsApp: +60123456789</p>
          </div>
        </footer>
        
        {/* Urgency Popups (only show when extension is not active) */}
        {!isActive && <UrgencyPopups />}
      </div>

      {/* Web Extension Overlay (small indicator) */}
      <div className="relative">
        <WebExtensionOverlay />
      </div>

      {/* Blocking Overlay (appears when extension is active) */}
      {isActive && <WebsiteBlockingOverlay websiteUrl={websiteUrl} />}
    </div>
  );
}
