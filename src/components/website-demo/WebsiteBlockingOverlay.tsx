"use client";

import {
  Shield,
  AlertTriangle,
  ExternalLink,
  Home,
  Flag,
  CornerUpRight,
  X,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useExtensionStore } from "@/lib/store/extensionStore";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ReportScamModal } from "./ReportScamModal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { WebsiteBlockingOverlayData } from "@/data/website-demo/WebsiteBlockingOverlayData";

interface WebsiteBlockingOverlayProps {
  websiteUrl?: string;
}

function getLegitimateSuggestion(url: string | undefined): string | null {
  if (!url) return null;

  // Extract domain from URL (remove protocol, path, etc.)
  const domain = url
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .split("/")[0];
  const mapping: Record<string, string> = {
    "shoppe123.com": "shopee.com.my",
    "shoppee-my.com": "shopee.com.my",
    "lazada-malaysia.net": "lazada.com.my",
    "deal-raya-123.com": "shopee.com.my",
  };

  return mapping[domain] ?? null;
}

export function WebsiteBlockingOverlay({
  websiteUrl = "shoppe123.com",
}: WebsiteBlockingOverlayProps) {
  const { selectedLanguage, showWebsiteBlocking, setShowWebsiteBlocking } =
    useExtensionStore();
  const [showFinalWarning, setShowFinalWarning] = useState(false);
  const [allowAccess, setAllowAccess] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showDetailed, setShowDetailed] = useState(false);
  const router = useRouter();
  const t =
    WebsiteBlockingOverlayData[selectedLanguage] ??
    WebsiteBlockingOverlayData.en;
  const suggestedDomain = getLegitimateSuggestion(websiteUrl);

  // Debug logging
  console.log("Website URL:", websiteUrl);
  console.log("Suggested Domain:", suggestedDomain);

  if (allowAccess || !showWebsiteBlocking) return null;

  const handleContinue = () => {
    setShowFinalWarning(true);
  };

  const handleFinalContinue = () => {
    setAllowAccess(true);
  };

  const handleReport = () => {
    setShowReportModal(true);
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div
      // EDIT POSITIONING: This overlay covers full screen - adjust 'p-4' for edge spacing
      className="fixed inset-0 bg-gradient-to-br from-red-900/95 via-red-800/95 to-red-900/95 z-[9995] flex items-center justify-center p-4"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="fixed top-4 right-4 z-[9996]">
        <LanguageSelector />
      </div>

      <Card
        data-tour="risk-analysis"
        className="max-w-2xl max-h-[90vh] w-full border-red-200 bg-white/95 backdrop-blur-sm shadow-2xl overflow-y-auto"
      >
        <CardContent className="p-8">
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowWebsiteBlocking(false)}
              className="h-8 w-8 p-0 hover:bg-red-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Header */}
          <div className="text-center mb-6">
            <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-4 animate-pulse" />
            <h1 className="text-2xl font-bold text-red-700 mb-2">{t.title}</h1>
            <p className="text-red-600 font-medium">{t.subtitle}</p>
          </div>

          {/* Risk Analysis */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-red-600" />
                <h3 className="text-lg font-semibold text-red-700">
                  {t.riskAnalysis}
                </h3>
              </div>
              <Badge variant="destructive" className="text-base px-3 py-1">
                {t.risk}: {t.veryHigh}
              </Badge>
            </div>

            <h4 className="font-semibold text-gray-800 mb-3">
              {t.whyDangerous}
            </h4>

            {/* Short/Detailed Explanation */}
            <div className="text-sm text-gray-700 leading-relaxed">
              {showDetailed ? (
                <div className="space-y-3">
                  <p>• {t.detailedExplanation.lowPrices}</p>
                  <p>• {t.detailedExplanation.suspiciousUrl}</p>
                  <p>• {t.detailedExplanation.urgency}</p>
                  <p>• {t.detailedExplanation.fakeReviews}</p>
                  <p>• {t.detailedExplanation.paymentRisk}</p>
                </div>
              ) : (
                <p>{t.shortExplanation}</p>
              )}
            </div>

            {/* See More/Less Button */}
            <div className="mt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowDetailed(!showDetailed)}
                className="text-blue-600 hover:text-blue-700 p-0 h-auto font-normal"
              >
                {showDetailed ? t.seeLess : t.seeMore}
              </Button>
            </div>
          </div>

          {/* What May Happen */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">
              {t.whatMayHappen}
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>{t.loseMoneyRisk}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>{t.creditCardRisk}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>{t.personalDataRisk}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>{t.fakeGoodsRisk}</span>
              </div>
            </div>
          </div>

          {/* Suggested Alternative */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-green-800 mb-2">
              {t.didYouMean}
            </h4>
            <div className="flex items-center gap-3">
              <span className="text-green-700 font-medium">
                {suggestedDomain || "shopee.com.my"}
              </span>
              <Button
                variant="outline"
                size="sm"
                className="text-green-700 border-green-300 hover:bg-green-100"
                onClick={() =>
                  window.open(
                    `https://${suggestedDomain || "shopee.com.my"}`,
                    "_blank"
                  )
                }
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                {t.goToSafeSite}
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <Button
                variant="default"
                className="flex-1 bg-green-600 hover:bg-green-700"
                onClick={handleBackToHome}
              >
                <Home className="h-4 w-4 mr-2" />
                {t.backToSafety}
              </Button>
              <Button
                data-tour="website-report-button"
                variant="destructive"
                onClick={handleReport}
                className="flex-1"
              >
                <Flag className="h-4 w-4 mr-2" />
                {t.reportFraud}
              </Button>
            </div>
            <Button
              variant="outline"
              onClick={handleContinue}
              className="w-full border-red-300 text-red-700 hover:bg-red-50"
            >
              <CornerUpRight className="h-4 w-4 mr-2" />
              {t.continueRisk}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Final warning modal */}
      {showFinalWarning && (
        // EDIT POSITIONING: Final warning modal - adjust 'p-4' for edge spacing
        <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4">
          <Card className="max-w-md">
            <CardContent className="p-6">
              <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-center mb-2">
                {t.finalWarning}
              </h3>
              <p className="text-center text-gray-600 mb-6">
                {t.finalWarningText}
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowFinalWarning(false)}
                >
                  {t.cancel}
                </Button>
                <Button
                  variant="destructive"
                  className="flex-1"
                  onClick={handleFinalContinue}
                >
                  {t.understandRisk}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Report Scam Modal */}
      <ReportScamModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        websiteUrl={websiteUrl}
      />
    </div>
  );
}
