"use client";

import { Globe } from "lucide-react";
import { Header } from "@/components/Header";
import { ScrollProvider } from "@/lib/ScrollContext";
import { FlashSaleBanner } from "@/components/website-demo/FlashSaleBanner";
import { ProductGrid } from "@/components/website-demo/ProductGrid";
import { SocialProofSection } from "@/components/website-demo/SocialProofSection";
import { WebsiteBlockingOverlay } from "@/components/website-demo/WebsiteBlockingOverlay";

import { UrgencyPopups } from "@/components/website-demo/UrgencyPopups";
import { useExtensionStore } from "@/lib/store/extensionStore";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Shield, CreditCard, Phone } from "lucide-react";
import { useWebsiteTour } from "@/lib/useWebsiteTour";

export default function WebsiteDemoPage() {
  const { isActive, analyzeContent, resetExtension, setLanguage } =
    useExtensionStore();
  const websiteUrl = "shoppe123.com/flash-sale";
  const { startTour } = useWebsiteTour();

  // Reset extension and set default language to English on entering the page
  useEffect(() => {
    resetExtension();
    setLanguage("en");
  }, [resetExtension, setLanguage]);

  useEffect(() => {
    if (isActive) {
      // Simulate analyzing the entire website content
      analyzeContent(
        `${websiteUrl} flash sale murah iPhone PS5 Coach 90% discount`,
        "website"
      );
    }
  }, [isActive, analyzeContent]);

  return (
    <ScrollProvider>
      <div className="min-h-screen bg-gray-50 relative">
        {/* Unified Header Component */}
        <Header
          demoType="website"
          title="Website Scam Detection Demo"
          icon={<Globe className="h-5 w-5" />}
          onStartTour={startTour}
          colorScheme="orange"
          websiteUrl={websiteUrl}
        />

        {/* Scam Website Content */}
        <div className={`bg-white ${isActive ? "filter blur-sm" : ""}`}>
          <FlashSaleBanner />

          {/* Trust Badges (Fake) */}
          <div className="bg-gray-100 py-4">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Shield className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
                  <span className="text-xs md:text-sm font-medium">
                    100% Original
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Truck className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
                  <span className="text-xs md:text-sm font-medium">
                    Free Shipping
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <CreditCard className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
                  <span className="text-xs md:text-sm font-medium">
                    Secure Payment
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Phone className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
                  <span className="text-xs md:text-sm font-medium">
                    24/7 Support
                  </span>
                </div>
              </div>
            </div>
          </div>

          <ProductGrid />
          <SocialProofSection />

          {/* Payment Methods (Suspicious) */}
          <div className="container mx-auto px-4 py-4 md:py-8">
            <Card data-tour="suspicious-payment">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">
                  Cara Pembayaran
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-4 mb-3 md:mb-4">
                  <Badge
                    variant="outline"
                    className="px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm"
                  >
                    FPX
                  </Badge>
                  <Badge
                    variant="outline"
                    className="px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm"
                  >
                    Touch n Go
                  </Badge>
                  <Badge
                    variant="outline"
                    className="px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm"
                  >
                    GrabPay
                  </Badge>
                  <Badge
                    variant="outline"
                    className="px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm"
                  >
                    Bank Transfer
                  </Badge>
                </div>
                <p className="text-xs md:text-sm text-gray-600">
                  *Untuk pemprosesan lebih cepat, sila transfer terus ke akaun
                  bank kami:
                  <span className="font-medium"> Maybank 162345678901</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Footer (Minimal) */}
          <footer className="bg-gray-800 text-white py-3 md:py-4">
            <div className="container mx-auto px-4 text-center">
              <p className="text-xs md:text-sm">
                © {new Date().getFullYear()} Deal Raya Malaysia. Hak Cipta
                Terpelihara.
              </p>
              <p className="text-gray-400 mt-1 text-xs md:text-sm">
                Contact: support@deal-raya-123.com | WhatsApp: +60123456789
              </p>
            </div>
          </footer>

          {/* Urgency Popups (only show when extension is not active) */}
          {!isActive && <UrgencyPopups />}
        </div>

        {/* Blocking Overlay (appears when extension is active) */}
        {isActive && <WebsiteBlockingOverlay websiteUrl={websiteUrl} />}
      </div>
    </ScrollProvider>
  );
}
