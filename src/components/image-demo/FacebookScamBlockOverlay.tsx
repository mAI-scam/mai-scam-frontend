"use client";

import { useState } from "react";
import { Shield, AlertTriangle, X, Eye, EyeOff, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useExtensionStore } from "@/lib/store/extensionStore";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ReportScamImageModal } from "./ReportScamImageModal";
import { LanguageCode } from "@/data/store/Languages";
import { FacebookScamBlockData } from "@/data/image-demo/FacebookScamBlockData";

const SUPPORTED = Object.keys(FacebookScamBlockData) as LanguageCode[];
const isLanguageCode = (v: string): v is LanguageCode =>
  (SUPPORTED as readonly string[]).includes(v);

interface FacebookScamBlockOverlayProps {
  scamImage: {
    id: number;
    title: string;
    description: string;
    riskLevel: string;
    language: string;
    category: string;
    content: string;
    imageSrc?: string;
  };
  onClose: () => void;
}

export function FacebookScamBlockOverlay({
  scamImage,
  onClose,
}: FacebookScamBlockOverlayProps) {
  const [showPost, setShowPost] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const { selectedLanguage } = useExtensionStore();

  // ✅ guard + fallback = no “possibly undefined”
  const lang: LanguageCode = isLanguageCode(selectedLanguage)
    ? selectedLanguage
    : "en";
  const t = FacebookScamBlockData[lang];

  const getTailoredReasons = (): string[] => {
    const src = scamImage.imageSrc || "";
    if (src.includes("scam_giveaway_example")) return t.reasonsGiveaway ?? t.reasons;
    if (src.includes("scam_gov_aid_example")) return t.reasonsGovAid ?? t.reasons;
    if (src.includes("scam_sms_example")) return t.reasonsSms ?? t.reasons;
    if (src.includes("scam_investment_example")) return t.reasonsInvestment ?? t.reasons;
    return t.reasons;
  };

  const handleReport = () => {
    setShowReportModal(true);
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-0">
          {/* Header */}
          <div className="bg-red-600 text-white p-6 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Shield className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{t.scamDetected}</h2>
                  <p className="text-red-100 text-sm">{t.protectedBy}</p>
                  <Badge className="bg-white/20 text-white text-xs mt-1">
                    🔍 OCR + AI Agent Analysis
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <LanguageSelector />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Warning */}
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-red-800 mb-1">{t.warning}</h3>
                <p className="text-red-700 text-sm">{t.description}</p>
              </div>
            </div>

            {/* Risk Level */}
            <div className="flex items-center justify-between p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div>
                <span className="text-sm font-medium text-orange-800">
                  {t.riskLevel}:
                </span>
              </div>
              <Badge variant="destructive" className="bg-red-600">
                {t.high}
              </Badge>
            </div>

            {/* Why Blocked - image specific rationale */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">{t.whyBlocked}</h4>
              <ul className="space-y-2">
                {(() => {
                  const reasons = getTailoredReasons();
                  return reasons.map((reason, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{reason}</span>
                    </li>
                  ));
                })()}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t">
              <div className="flex gap-3">
                <Button
                  onClick={() => setShowPost(!showPost)}
                  variant="outline"
                  className="flex-1"
                >
                  {showPost ? (
                    <EyeOff className="h-4 w-4 mr-2" />
                  ) : (
                    <Eye className="h-4 w-4 mr-2" />
                  )}
                  {showPost ? t.hidePost : t.showPost}
                </Button>
                <Button
                  onClick={handleReport}
                  className="flex-1 bg-red-600 hover:bg-red-700"
                >
                  <Flag className="h-4 w-4 mr-2" />
                  {t.reportScam}
                </Button>
              </div>

              <Button onClick={onClose} variant="outline" className="w-full">
                Continue Browsing Safely
              </Button>
            </div>

            {/* Post Preview (when showing) */}
            {showPost && (
              <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                <div className="flex items-start gap-2 mb-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <p className="text-sm text-yellow-800 font-medium">
                    WARNING: You chose to view this potentially dangerous
                    content
                  </p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <p className="text-sm text-gray-600 mb-2">
                    Scam Content Preview:
                  </p>
                  <p className="text-sm font-mono bg-gray-100 p-2 rounded">
                    {scamImage.content}
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Comprehensive Report Modal */}
      <ReportScamImageModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        scamImage={scamImage}
        platform="facebook"
      />
    </div>
  );
}
