"use client";

import { Shield, AlertTriangle, Info, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useExtensionStore, Language } from "@/lib/store/extensionStore";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ReportScamModal } from "./ReportScamModal";
import { useState } from "react";
import { RiskAnalysisData } from "@/data/email-demo/RiskAnalysisData";

export function RiskAnalysisBlock() {
  const { isAnalyzing, riskScore, riskLevel, explanation, selectedLanguage } =
    useExtensionStore();
  const [showReportModal, setShowReportModal] = useState(false);
  const t = RiskAnalysisData[selectedLanguage];

  if (!riskScore) return null;

  const handleReport = () => {
    setShowReportModal(true);
  };

  return (
    <div className="mb-4">
      {/* Language Selector */}
      <div className="flex justify-end mb-4">
        <LanguageSelector />
      </div>

      {/* Gmail-style spam warning */}
      <Alert className="mb-4 border-yellow-500 bg-yellow-50">
        <AlertDescription className="text-sm text-gray-700">
          <strong>{t.spamWarning}</strong>
        </AlertDescription>
        <Button variant="outline" size="sm" className="mt-2">
          {t.reportNotSpam}
        </Button>
      </Alert>

      {/* Risk Analysis Card */}
      <Card
        data-tour="risk-analysis"
        className={`border-l-4 ${
          riskLevel === "high"
            ? "border-l-red-500"
            : riskLevel === "medium"
            ? "border-l-yellow-500"
            : "border-l-green-500"
        }`}
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-gray-600" />
              <h3 className="text-lg font-semibold text-red-600">
                {t.highRiskWarning}
              </h3>
            </div>
            <Badge variant="destructive" className="text-base px-3 py-1">
              {t.risk}: {t[riskLevel || "high"].toUpperCase()}
            </Badge>
          </div>

          <p className="text-sm text-gray-700 mb-4 leading-relaxed whitespace-pre-line">
            {explanation}
          </p>

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
            <Button variant="outline">{t.dismiss}</Button>
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
