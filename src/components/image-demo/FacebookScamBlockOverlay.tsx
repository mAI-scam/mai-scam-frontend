"use client";

import { useState } from "react";
import { Shield, AlertTriangle, X, Eye, EyeOff, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useExtensionStore } from "@/lib/store/extensionStore";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ReportScamImageModal } from "./ReportScamImageModal";

const translations = {
  en: {
    scamDetected: "SCAM POST DETECTED",
    protectedBy: "Protected by mAIscam Extension",
    warning: "This post contains scam content",
    description: "Our AI detected suspicious patterns that match known scam tactics",
    riskLevel: "Risk Level",
    high: "HIGH RISK",
    hidePost: "Hide This Post",
    showPost: "Show Post (I Understand the Risk)",
    reportScam: "Report Scam",
    whyBlocked: "Why was this blocked?",
    reasons: [
      "Fake government announcements",
      "Unrealistic offers or promises",
      "Requests for personal information",
      "Suspicious links or domains",
      "Impersonation of legitimate brands"
    ]
  },
  ms: {
    scamDetected: "POST PENIPUAN DIKESAN",
    protectedBy: "Dilindungi oleh Sambungan mAIscam",
    warning: "Post ini mengandungi kandungan penipuan",
    description: "AI kami mengesan corak mencurigakan yang sepadan dengan taktik penipuan yang diketahui",
    riskLevel: "Tahap Risiko",
    high: "RISIKO TINGGI",
    hidePost: "Sembunyikan Post Ini",
    showPost: "Tunjuk Post (Saya Faham Risikonya)",
    reportScam: "Laporkan Penipuan",
    whyBlocked: "Mengapa ini disekat?",
    reasons: [
      "Pengumuman kerajaan palsu",
      "Tawaran atau janji yang tidak realistik",
      "Permintaan maklumat peribadi",
      "Pautan atau domain yang mencurigakan",
      "Penyamaran jenama yang sah"
    ]
  },
  zh: {
    scamDetected: "检测到诈骗帖子",
    protectedBy: "受 mAIscam 扩展保护",
    warning: "此帖子包含诈骗内容",
    description: "我们的AI检测到与已知诈骗策略相匹配的可疑模式",
    riskLevel: "风险等级",
    high: "高风险",
    hidePost: "隐藏此帖子",
    showPost: "显示帖子（我了解风险）",
    reportScam: "举报诈骗",
    whyBlocked: "为什么被阻止？",
    reasons: [
      "虚假政府公告",
      "不切实际的优惠或承诺",
      "个人信息请求",
      "可疑链接或域名",
      "冒充合法品牌"
    ]
  }
};

interface FacebookScamBlockOverlayProps {
  scamImage: {
    id: number;
    title: string;
    description: string;
    riskLevel: string;
    language: string;
    category: string;
    content: string;
  };
  onClose: () => void;
}

export function FacebookScamBlockOverlay({ scamImage, onClose }: FacebookScamBlockOverlayProps) {
  const [showPost, setShowPost] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const { selectedLanguage } = useExtensionStore();
  const t = translations[selectedLanguage];

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
                <span className="text-sm font-medium text-orange-800">{t.riskLevel}:</span>
              </div>
              <Badge variant="destructive" className="bg-red-600">
                {t.high}
              </Badge>
            </div>

            {/* Why Blocked */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">{t.whyBlocked}</h4>
              <ul className="space-y-2">
                {t.reasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{reason}</span>
                  </li>
                ))}
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
                  {showPost ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
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
              
              <Button
                onClick={onClose}
                variant="outline"
                className="w-full"
              >
                Continue Browsing Safely
              </Button>
            </div>

            {/* Post Preview (when showing) */}
            {showPost && (
              <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                <div className="flex items-start gap-2 mb-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <p className="text-sm text-yellow-800 font-medium">
                    WARNING: You chose to view this potentially dangerous content
                  </p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <p className="text-sm text-gray-600 mb-2">Scam Content Preview:</p>
                  <p className="text-sm font-mono bg-gray-100 p-2 rounded">{scamImage.content}</p>
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