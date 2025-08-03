"use client";

import { useState } from "react";
import { X, AlertTriangle, CheckCircle, ExternalLink, Send, Shield, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useExtensionStore, Language } from "@/lib/store/extensionStore";

const translations = {
  en: {
    title: "Report Scam Website",
    subtitle: "Help protect others by reporting this fraudulent website",
    reportingTo: "Reporting to:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "Global web protection service",
    phishTank: "PhishTank",
    phishTankDesc: "Community-driven anti-phishing service",
    mcmc: "MCMC (Malaysia)",
    mcmcDesc: "Malaysian Communications & Multimedia Commission",
    websiteUrl: "Website URL:",
    reportCategory: "Threat Category:",
    phishing: "Phishing Website",
    fraudulent: "Fraudulent E-commerce",
    malware: "Malware Distribution",
    reportDetails: "What makes this site suspicious:",
    lowPrices: "Unrealistic low prices on branded items",
    suspiciousUrl: "Suspicious domain name mimicking legitimate sites",
    urgencyTactics: "Excessive urgency and pressure tactics",
    fakeReviews: "Fake customer reviews and testimonials",
    unsecurePayment: "Requests for direct bank transfers",
    submitReport: "Submit Report",
    submitting: "Submitting...",
    reportSuccess: "Report Submitted Successfully!",
    successMessage: "Thank you for helping keep the internet safe. The website has been reported to:",
    reportId: "Report ID:",
    close: "Close",
    cancel: "Cancel"
  },
  ms: {
    title: "Laporkan Laman Web Penipuan",
    subtitle: "Bantu melindungi orang lain dengan melaporkan laman web penipuan ini",
    reportingTo: "Melaporkan ke:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "Perkhidmatan perlindungan web global",
    phishTank: "PhishTank",
    phishTankDesc: "Perkhidmatan anti-phishing komuniti",
    mcmc: "MCMC (Malaysia)",
    mcmcDesc: "Suruhanjaya Komunikasi dan Multimedia Malaysia",
    websiteUrl: "URL Laman Web:",
    reportCategory: "Kategori Ancaman:",
    phishing: "Laman Web Phishing",
    fraudulent: "E-dagang Penipuan",
    malware: "Pengedaran Malware",
    reportDetails: "Apa yang menjadikan laman ini mencurigakan:",
    lowPrices: "Harga rendah yang tidak realistik untuk barangan berjenama",
    suspiciousUrl: "Nama domain mencurigakan meniru laman sah",
    urgencyTactics: "Taktik tekanan dan ketergesaan berlebihan",
    fakeReviews: "Ulasan dan testimoni pelanggan palsu",
    unsecurePayment: "Meminta pemindahan bank secara langsung",
    submitReport: "Hantar Laporan",
    submitting: "Menghantar...",
    reportSuccess: "Laporan Berjaya Dihantar!",
    successMessage: "Terima kasih kerana membantu menjaga keselamatan internet. Laman web telah dilaporkan ke:",
    reportId: "ID Laporan:",
    close: "Tutup",
    cancel: "Batal"
  },
  zh: {
    title: "举报诈骗网站",
    subtitle: "通过举报此欺诈网站来帮助保护他人",
    reportingTo: "举报至:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "全球网络保护服务",
    phishTank: "PhishTank",
    phishTankDesc: "社区驱动的反钓鱼服务",
    mcmc: "MCMC (马来西亚)",
    mcmcDesc: "马来西亚通讯与多媒体委员会",
    websiteUrl: "网站URL:",
    reportCategory: "威胁类别:",
    phishing: "钓鱼网站",
    fraudulent: "欺诈性电子商务",
    malware: "恶意软件分发",
    reportDetails: "使此网站可疑的原因:",
    lowPrices: "品牌商品的不现实低价",
    suspiciousUrl: "模仿合法网站的可疑域名",
    urgencyTactics: "过度的紧迫性和压力策略",
    fakeReviews: "虚假的客户评论和推荐",
    unsecurePayment: "要求直接银行转账",
    submitReport: "提交举报",
    submitting: "提交中...",
    reportSuccess: "举报提交成功！",
    successMessage: "感谢您帮助保持互联网安全。网站已举报至:",
    reportId: "举报ID:",
    close: "关闭",
    cancel: "取消"
  }
};

interface ReportScamModalProps {
  isOpen: boolean;
  onClose: () => void;
  websiteUrl?: string;
}

export function ReportScamModal({ isOpen, onClose, websiteUrl = "deal-raya-123.com" }: ReportScamModalProps) {
  const { selectedLanguage } = useExtensionStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [reportId] = useState(() => `MSR-${Date.now().toString(36).toUpperCase()}`);
  const t = translations[selectedLanguage];

  if (!isOpen) return null;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API calls to different services
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4">
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
                </div>
              </div>

              {/* Website Details */}
              <div className="space-y-4">
                <div>
                  <label className="font-medium text-sm">{t.websiteUrl}</label>
                  <div className="mt-1 p-2 bg-gray-100 rounded border text-sm font-mono">
                    {websiteUrl}
                  </div>
                </div>

                <div>
                  <label className="font-medium text-sm">{t.reportCategory}</label>
                  <div className="mt-1">
                    <Badge variant="destructive">{t.fraudulent}</Badge>
                  </div>
                </div>
              </div>

              {/* Threat Details */}
              <div>
                <h4 className="font-medium mb-3">{t.reportDetails}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.lowPrices}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.suspiciousUrl}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.urgencyTactics}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.fakeReviews}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.unsecurePayment}</span>
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