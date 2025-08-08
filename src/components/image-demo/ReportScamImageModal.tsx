"use client";

import { useState } from "react";
import { X, AlertTriangle, CheckCircle, Send, Shield, Globe, MessageCircle, Facebook, Instagram } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useExtensionStore, Language } from "@/lib/store/extensionStore";

const translations = {
  en: {
    title: "Report Scam Image/Post",
    subtitle: "Help protect others by reporting this fraudulent content",
    reportingTo: "Reporting to:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "Global image and content protection service",
    phishTank: "PhishTank",
    phishTankDesc: "Community-driven anti-phishing service",
    mcmc: "MCMC (Malaysia)",
    mcmcDesc: "Malaysian Communications & Multimedia Commission",
    socialPlatform: "Social Media Platform",
    socialDesc: "Direct report to platform's safety team",
    contentSource: "Content Source:",
    reportCategory: "Threat Category:",
    fakeGov: "Fake Government Notice",
    investmentScam: "Investment Fraud",
    giveawayScam: "Fake Giveaway/Contest",
    phishingSms: "Phishing SMS Screenshot",
    impersonation: "Brand Impersonation",
    reportDetails: "What makes this content suspicious:",
    fakeOffers: "Unrealistic offers or free items",
    govImpersonation: "Impersonates government agencies",
    urgencyTactics: "Creates false urgency and pressure",
    suspiciousLinks: "Contains suspicious links or QR codes",
    personalInfoRequest: "Requests personal/financial information",
    brandMisuse: "Unauthorized use of legitimate brand logos",
    submitReport: "Submit Report",
    submitting: "Submitting...",
    reportSuccess: "Report Submitted Successfully!",
    successMessage: "Thank you for helping keep social media safe. The content has been reported to:",
    reportId: "Report ID:",
    close: "Close",
    cancel: "Cancel",
    platform: "Platform:",
    facebook: "Facebook",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    instagram: "Instagram"
  },
  ms: {
    title: "Laporkan Imej/Post Penipuan",
    subtitle: "Bantu melindungi orang lain dengan melaporkan kandungan penipuan ini",
    reportingTo: "Melaporkan ke:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "Perkhidmatan perlindungan imej dan kandungan global",
    phishTank: "PhishTank",
    phishTankDesc: "Perkhidmatan anti-phishing komuniti",
    mcmc: "MCMC (Malaysia)",
    mcmcDesc: "Suruhanjaya Komunikasi dan Multimedia Malaysia",
    socialPlatform: "Platform Media Sosial",
    socialDesc: "Laporan terus ke pasukan keselamatan platform",
    contentSource: "Sumber Kandungan:",
    reportCategory: "Kategori Ancaman:",
    fakeGov: "Notis Kerajaan Palsu",
    investmentScam: "Penipuan Pelaburan",
    giveawayScam: "Giveaway/Pertandingan Palsu",
    phishingSms: "Tangkapan Skrin SMS Phishing",
    impersonation: "Penyamaran Jenama",
    reportDetails: "Apa yang menjadikan kandungan ini mencurigakan:",
    fakeOffers: "Tawaran atau barangan percuma yang tidak realistik",
    govImpersonation: "Menyamar sebagai agensi kerajaan",
    urgencyTactics: "Mencipta ketergesaan dan tekanan palsu",
    suspiciousLinks: "Mengandungi pautan atau kod QR yang mencurigakan",
    personalInfoRequest: "Meminta maklumat peribadi/kewangan",
    brandMisuse: "Penggunaan logo jenama sah tanpa kebenaran",
    submitReport: "Hantar Laporan",
    submitting: "Menghantar...",
    reportSuccess: "Laporan Berjaya Dihantar!",
    successMessage: "Terima kasih kerana membantu menjaga keselamatan media sosial. Kandungan telah dilaporkan ke:",
    reportId: "ID Laporan:",
    close: "Tutup",
    cancel: "Batal",
    platform: "Platform:",
    facebook: "Facebook",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    instagram: "Instagram"
  },
  zh: {
    title: "举报诈骗图片/帖子",
    subtitle: "通过举报此欺诈内容来帮助保护他人",
    reportingTo: "举报至:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "全球图像和内容保护服务",
    phishTank: "PhishTank",
    phishTankDesc: "社区驱动的反钓鱼服务",
    mcmc: "MCMC (马来西亚)",
    mcmcDesc: "马来西亚通讯与多媒体委员会",
    socialPlatform: "社交媒体平台",
    socialDesc: "直接向平台安全团队举报",
    contentSource: "内容来源:",
    reportCategory: "威胁类别:",
    fakeGov: "虚假政府通知",
    investmentScam: "投资欺诈",
    giveawayScam: "虚假赠品/竞赛",
    phishingSms: "钓鱼短信截图",
    impersonation: "品牌冒充",
    reportDetails: "使此内容可疑的原因:",
    fakeOffers: "不切实际的优惠或免费物品",
    govImpersonation: "冒充政府机构",
    urgencyTactics: "制造虚假紧迫感和压力",
    suspiciousLinks: "包含可疑链接或二维码",
    personalInfoRequest: "要求个人/财务信息",
    brandMisuse: "未经授权使用合法品牌标志",
    submitReport: "提交举报",
    submitting: "提交中...",
    reportSuccess: "举报提交成功！",
    successMessage: "感谢您帮助保持社交媒体安全。内容已举报至:",
    reportId: "举报ID:",
    close: "关闭",
    cancel: "取消",
    platform: "平台:",
    facebook: "Facebook",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    instagram: "Instagram"
  }
};

interface ReportScamImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  scamImage?: {
    id: number;
    title: string;
    description: string;
    category: string;
  } | null;
  platform?: "facebook" | "whatsapp" | "telegram" | "instagram";
}

export function ReportScamImageModal({ 
  isOpen, 
  onClose, 
  scamImage,
  platform = "facebook" 
}: ReportScamImageModalProps) {
  const { selectedLanguage } = useExtensionStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [reportId] = useState(() => `MSI-${Date.now().toString(36).toUpperCase()}`);
  const t = translations[selectedLanguage];

  if (!isOpen) return null;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API calls to different services
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  const getCategoryByScamType = () => {
    if (!scamImage) return t.fakeGov;
    
    switch(scamImage.category) {
      case "Government": return t.fakeGov;
      case "Investment": return t.investmentScam;
      case "Giveaway": return t.giveawayScam;
      case "SMS": return t.phishingSms;
      default: return t.impersonation;
    }
  };

  const getPlatformIcon = () => {
    switch(platform) {
      case "facebook": return <Facebook className="h-8 w-8 text-blue-600" />;
      case "instagram": return <Instagram className="h-8 w-8 text-pink-600" />;
      case "whatsapp": return <MessageCircle className="h-8 w-8 text-green-600" />;
      case "telegram": return <Send className="h-8 w-8 text-blue-500" />;
      default: return <Facebook className="h-8 w-8 text-blue-600" />;
    }
  };

  const getPlatformName = () => {
    switch(platform) {
      case "facebook": return t.facebook;
      case "instagram": return t.instagram;
      case "whatsapp": return t.whatsapp;
      case "telegram": return t.telegram;
      default: return t.facebook;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[70] flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              {t.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{t.subtitle}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="h-6 w-6 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="space-y-6">
          {!isSuccess ? (
            <>
              {/* Reporting Services */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  {t.reportingTo}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border">
                    <Globe className="h-8 w-8 text-blue-600" />
                    <div className="flex-1">
                      <div className="font-medium text-blue-900">{t.googleSafeBrowsing}</div>
                      <div className="text-sm text-blue-700">{t.googleDesc}</div>
                    </div>
                    <Badge variant="secondary">API</Badge>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border">
                    <Shield className="h-8 w-8 text-purple-600" />
                    <div className="flex-1">
                      <div className="font-medium text-purple-900">{t.phishTank}</div>
                      <div className="text-sm text-purple-700">{t.phishTankDesc}</div>
                    </div>
                    <Badge variant="secondary">Community</Badge>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border">
                    <AlertTriangle className="h-8 w-8 text-green-600" />
                    <div className="flex-1">
                      <div className="font-medium text-green-900">{t.mcmc}</div>
                      <div className="text-sm text-green-700">{t.mcmcDesc}</div>
                    </div>
                    <Badge variant="secondary">Regulatory</Badge>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border">
                    {getPlatformIcon()}
                    <div className="flex-1">
                      <div className="font-medium text-orange-900">{t.socialPlatform}</div>
                      <div className="text-sm text-orange-700">{t.socialDesc}</div>
                    </div>
                    <Badge variant="secondary">Platform</Badge>
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="space-y-4">
                <div>
                  <label className="font-medium text-sm">{t.contentSource}</label>
                  <div className="mt-1 p-2 bg-gray-100 rounded border text-sm font-mono">
                    {t.platform} {getPlatformName()} - {scamImage?.title || "Scam Post"}
                  </div>
                </div>

                <div>
                  <label className="font-medium text-sm">{t.reportCategory}</label>
                  <div className="mt-1">
                    <Badge variant="destructive">{getCategoryByScamType()}</Badge>
                  </div>
                </div>
              </div>

              {/* Threat Details */}
              <div>
                <h4 className="font-medium mb-3">{t.reportDetails}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.fakeOffers}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.govImpersonation}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.urgencyTactics}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.suspiciousLinks}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.personalInfoRequest}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.brandMisuse}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1"
                >
                  {t.cancel}
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex-1 bg-red-600 hover:bg-red-700"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {t.submitting}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {t.submitReport}
                    </>
                  )}
                </Button>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">{t.reportSuccess}</h3>
              <p className="text-gray-600 mb-6">{t.successMessage}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Globe className="h-4 w-4 text-blue-600" />
                  <span>Google Safe Browsing</span>
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-purple-600" />
                  <span>PhishTank</span>
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <AlertTriangle className="h-4 w-4 text-green-600" />
                  <span>MCMC Malaysia</span>
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  {getPlatformIcon()}
                  <span>{getPlatformName()}</span>
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="text-sm">
                  <span className="font-medium">{t.reportId}</span> {reportId}
                </div>
              </div>

              <Button onClick={handleClose} className="w-full">
                {t.close}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}