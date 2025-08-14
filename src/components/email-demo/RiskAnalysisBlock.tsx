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
  const { riskScore, riskLevel, explanation, detailedExplanation, selectedLanguage, showRiskAnalysis, setShowRiskAnalysis, isAnalyzing, analysisType } =
    useExtensionStore();
  const [showReportModal, setShowReportModal] = useState(false);
  const [showDetailed, setShowDetailed] = useState(false);
  const t = RiskAnalysisData[selectedLanguage];
  const extensionT = ExtensionData[selectedLanguage];

  // Show the popup if we're analyzing email content OR if we have results and should show them
  const shouldShow = (isAnalyzing && analysisType === "email") || (riskScore && showRiskAnalysis);
  
  if (!shouldShow) return null;

  const handleReport = () => {
    setShowReportModal(true);
  };

  const computedRiskLabel = riskScore ? t.high.toUpperCase() : "";

  return (
    <div
      id="risk-details"
      className="mb-4 fixed z-50 sm:top-24 top-20 left-1/2 -translate-x-1/2 sm:w-[36rem] w-[92vw] max-w-[95vw]"
    >
      {/* Language Selector */}
      <div className="flex justify-end mb-4">
        <LanguageSelector />
      </div>

      {/* Risk Analysis Card */}
      <Card
        data-tour="risk-analysis"
        className={`border-l-4 shadow-2xl ${
          isAnalyzing 
            ? "border-l-blue-500"
            : riskLevel === "high"
            ? "border-l-red-500"
            : riskLevel === "medium"
            ? "border-l-yellow-500"
            : "border-l-green-500"
        }`}
      >
        <CardContent className="p-6">
          {isAnalyzing ? (
            // Analyzing state
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-1">
                  {extensionT.analyzing}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our AI is scanning this email for potential scam indicators.
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowRiskAnalysis(false)}
                className="h-6 w-6 p-0 hover:bg-gray-100 ml-auto"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            // Results state
            <>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-gray-600" />
                  <h3 className="text-lg font-semibold text-red-600">
                    {t.risk}: {computedRiskLabel}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="destructive" className="text-base px-3 py-1">
                    {t.risk}: {computedRiskLabel}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowRiskAnalysis(false)}
                    className="h-6 w-6 p-0 hover:bg-gray-100"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <p className="text-sm text-gray-700 mb-4 leading-relaxed whitespace-pre-line">
                {showDetailed ? detailedExplanation : explanation}
              </p>

              {/* See More/Less Button */}
              {detailedExplanation && explanation !== detailedExplanation && (
                <div className="mb-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowDetailed(!showDetailed)}
                    className="text-blue-600 hover:text-blue-700 p-0 h-auto font-normal"
                  >
                    {showDetailed ? t.seeLess : t.seeMore}
                  </Button>
                </div>
              )}

              {riskLevel === "high" && (
                <>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">{t.falseUrgency}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">{t.suspiciousPromo}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">{t.lackPersonalization}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">{t.fraudPotential}</span>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-sm mb-2">
                      {t.recommendedAction}
                    </h4>
                    <p className="text-sm text-gray-700">
                      {t.recommendedActionText}
                    </p>
                  </div>
                </>
              )}

              <div className="flex gap-3">
                <Button
                  variant="destructive"
                  className="font-medium"
                  onClick={handleReport}
                >
                  {t.reportFraud}
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setShowRiskAnalysis(false)}
                >
                  {t.dismiss}
                </Button>
              </div>
            </>
          )}
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
