"use client";

import {
  Shield,
  AlertTriangle,
  ArrowLeft,
  ExternalLink,
  Home,
  Flag,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useExtensionStore, Language } from "@/lib/store/extensionStore";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ReportScamModal } from "./ReportScamModal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { WebsiteBlockingOverlayData as translations } from "@/data/website-demo/WebsiteBlockingOverlayData";

export function WebsiteBlockingOverlay() {
  const { isAnalyzing, riskScore, riskLevel, explanation, selectedLanguage } =
    useExtensionStore();
  const [showFinalWarning, setShowFinalWarning] = useState(false);
  const [allowAccess, setAllowAccess] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const router = useRouter();
  const t = translations[selectedLanguage];

  if (allowAccess) return null;

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
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <Card className="max-w-2xl w-full shadow-2xl animate-in slide-in-from-bottom-4 duration-500">
        <CardContent className="p-0">
          {/* Header */}
          <div className="bg-red-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="h-10 w-10" />
                <div>
                  <h1 className="text-2xl font-bold">{t.title}</h1>
                  <p className="text-red-100">{t.subtitle}</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-1">
                <LanguageSelector />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {isAnalyzing ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                <p className="text-gray-600">{t.analyzing}</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                    <span className="text-lg font-semibold">
                      {t.riskAnalysis}
                    </span>
                  </div>
                  <Badge variant="destructive" className="text-lg px-3 py-1">
                    {t.risk}: {t.veryHigh} - {riskScore}%
                  </Badge>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold mb-3">{t.whyDangerous}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                      <p>{t.lowPrices}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                      <p>{t.suspiciousUrl}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                      <p>{t.urgency}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                      <p>{t.fakeReviews}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                      <p>{t.paymentRisk}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-sm mb-2">
                    {t.whatMayHappen}
                  </h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• {t.loseMoneyRisk}</li>
                    <li>• {t.creditCardRisk}</li>
                    <li>• {t.personalDataRisk}</li>
                    <li>• {t.fakeGoodsRisk}</li>
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 flex-wrap">
                  <Button
                    size="lg"
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    onClick={() => window.history.back()}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {t.backToSafety}
                  </Button>
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white border-orange-600 shadow-lg"
                    onClick={handleReport}
                  >
                    <Flag className="h-4 w-4 mr-2" />
                    {t.reportFraud}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleBackToHome}
                  >
                    <Home className="h-4 w-4 mr-2" />
                    {t.backToHome}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-red-600 border-red-600 hover:bg-red-50"
                    onClick={handleContinue}
                  >
                    {t.continueRisk}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Final warning modal */}
      {showFinalWarning && (
        <div className="fixed inset-0 bg-black/50 z-60 flex items-center justify-center p-4">
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
        websiteUrl="deal-raya-123.com"
      />
    </div>
  );
}
