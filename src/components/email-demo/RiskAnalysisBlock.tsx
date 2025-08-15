"use client";

import { Shield, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useExtensionStore } from "@/lib/store/extensionStore";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ReportScamModal } from "./ReportScamModal";
import { useState } from "react";
import { RiskAnalysisData } from "@/data/email-demo/RiskAnalysisData";
import { ExtensionData } from "@/data/email-demo/ExtensionData";

export function RiskAnalysisBlock() {
  const {
    riskScore,
    riskLevel,
    explanation,
    detailedExplanation,
    selectedLanguage,
    showRiskAnalysis,
    setShowRiskAnalysis,
    isAnalyzing,
    analysisType,
  } = useExtensionStore();
  const [showReportModal, setShowReportModal] = useState(false);
  const [showDetailed, setShowDetailed] = useState(false);
  const t = RiskAnalysisData[selectedLanguage];
  const extensionT = ExtensionData[selectedLanguage];

  // Show the popup if we're analyzing email content OR if we have results and should show them
  const shouldShow =
    (isAnalyzing && analysisType === "email") ||
    (riskScore && showRiskAnalysis);

  if (!shouldShow) return null;

  const handleReport = () => {
    setShowReportModal(true);
  };

  const computedRiskLabel = riskScore ? t.high.toUpperCase() : "";

  return (
    // Full screen overlay with darkened background
    <div className="fixed inset-0 bg-black/80 z-[9995] flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardContent className="p-0">
          {/* Header */}
          <div
            className={`p-6 rounded-t-lg ${
              isAnalyzing
                ? "bg-blue-600 text-white"
                : riskLevel === "high"
                ? "bg-red-600 text-white"
                : riskLevel === "medium"
                ? "bg-yellow-600 text-white"
                : "bg-green-600 text-white"
            }`}
            data-tour="risk-analysis"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Shield className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">
                    {isAnalyzing ? extensionT.analyzing : t.risk}
                  </h2>
                  <p className="text-white/80 text-sm">
                    {isAnalyzing
                      ? "AI-powered email scanning"
                      : "Protected by mAIscam"}
                  </p>
                  <Badge className="bg-white/20 text-white text-xs mt-1">
                    🔍 AI Agent Analysis
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <LanguageSelector />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowRiskAnalysis(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {isAnalyzing ? (
              // Analyzing state
              <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-1">
                    {extensionT.analyzing}
                  </h3>
                  <p className="text-sm text-blue-700">
                    Our AI is scanning this email for potential scam indicators.
                  </p>
                </div>
              </div>
            ) : (
              // Results state
              <>
                {/* Risk Level */}
                <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div>
                    <span className="text-sm font-medium text-red-800">
                      {t.risk}:
                    </span>
                  </div>
                  <Badge variant="destructive" className="bg-red-600">
                    {computedRiskLabel}
                  </Badge>
                </div>

                {/* Explanation */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    Analysis Details
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                    {showDetailed ? detailedExplanation : explanation}
                  </p>

                  {/* See More/Less Button */}
                  {detailedExplanation &&
                    explanation !== detailedExplanation && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowDetailed(!showDetailed)}
                        className="text-blue-600 hover:text-blue-700 p-0 h-auto font-normal"
                      >
                        {showDetailed ? t.seeLess : t.seeMore}
                      </Button>
                    )}
                </div>

                {riskLevel === "high" && (
                  <>
                    {/* Risk Indicators */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">
                        Risk Indicators
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{t.falseUrgency}</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{t.suspiciousPromo}</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{t.lackPersonalization}</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{t.fraudPotential}</span>
                        </li>
                      </ul>
                    </div>

                    {/* Recommended Action */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-2">
                        {t.recommendedAction}
                      </h4>
                      <p className="text-sm text-gray-700">
                        {t.recommendedActionText}
                      </p>
                    </div>
                  </>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 pt-4 border-t">
                  <div className="flex gap-3">
                    <Button
                      data-tour="report-button"
                      variant="destructive"
                      className="flex-1"
                      onClick={handleReport}
                    >
                      {t.reportFraud}
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setShowRiskAnalysis(false)}
                    >
                      {t.dismiss}
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Report Scam Modal */}
      <ReportScamModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        emailSender="Bank Negara Malaysia <notifications@banknegara-my.info>"
        emailSubject="PENTING: Akaun Anda Telah Dibekukan - Tindakan Segera Diperlukan"
      />
    </div>
  );
}
