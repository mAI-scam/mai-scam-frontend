"use client";

import { Shield, AlertTriangle, ArrowLeft, ExternalLink, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useExtensionStore, Language } from "@/lib/store/extensionStore";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useState } from "react";
import { useRouter } from "next/navigation";

const translations = {
  en: {
    title: "THIS WEBSITE MAY BE A SCAM!",
    subtitle: "Be careful, prices are too cheap to be real!",
    analyzing: "Analyzing website...",
    riskAnalysis: "Risk Analysis",
    risk: "RISK",
    veryHigh: "VERY HIGH",
    whyDangerous: "Why is this website dangerous?",
    lowPrices: "We detected extraordinarily low prices for branded items (iPhone RM999, PS5 RM599). This is a common tactic scammers use to attract victims.",
    suspiciousUrl: "The website URL \"deal-raya-123.com\" looks suspicious and may be trying to imitate popular shopping platforms like Shopee or Lazada.",
    urgency: "There are excessive prompts to buy immediately with fake timers and \"limited stock\" - these are psychological manipulation techniques.",
    fakeReviews: "Customer reviews appear fake - all 5 stars with generic comments. No negative or neutral reviews.",
    paymentRisk: "This website may ask for credit card information or payment to personal accounts, not through secure payment gateways.",
    whatMayHappen: "What may happen if you continue?",
    loseMoneyRisk: "Your money will be lost without receiving any items",
    creditCardRisk: "Your credit card information may be stolen",
    personalDataRisk: "Your personal data may be misused",
    fakeGoodsRisk: "You may receive fake or poor quality goods",
    backToSafety: "Back to Safety",
    continueRisk: "Continue at Your Own Risk",
    finalWarning: "Final Warning!",
    finalWarningText: "You are about to enter a very risky website. We are not responsible for any losses.",
    cancel: "Cancel",
    understandRisk: "I Understand the Risk",
    reportFraud: "REPORT FRAUD",
    reportingScam: "Reporting scam...",
    backToHome: "Back to Home"
  },
  ms: {
    title: "LAMAN WEB INI MUNGKIN SCAM!",
    subtitle: "Berhati-hati, harga terlalu murah untuk jadi kenyataan!",
    analyzing: "Menganalisis laman web...",
    riskAnalysis: "Analisis Risiko",
    risk: "RISIKO",
    veryHigh: "SANGAT TINGGI",
    whyDangerous: "Mengapa laman web ini berbahaya?",
    lowPrices: "Kami mengesan harga yang luar biasa rendah untuk barangan berjenama (iPhone RM999, PS5 RM599). Ini adalah taktik lazim penipu untuk menarik mangsa.",
    suspiciousUrl: "URL laman web \"deal-raya-123.com\" kelihatan mencurigakan dan mungkin cuba meniru platform membeli-belah popular seperti Shopee atau Lazada.",
    urgency: "Terdapat gesaan melampau untuk membeli segera dengan timer palsu dan \"stok terhad\" - ini adalah teknik manipulasi psikologi.",
    fakeReviews: "Ulasan pelanggan kelihatan palsu - semua 5 bintang dengan komen generik. Tiada ulasan negatif atau neutral.",
    paymentRisk: "Laman web ini mungkin meminta maklumat kad kredit atau pembayaran ke akaun persendirian, bukan melalui payment gateway yang selamat.",
    whatMayHappen: "⚠️ Apa yang mungkin berlaku jika anda teruskan?",
    loseMoneyRisk: "Wang anda akan hilang tanpa menerima sebarang barang",
    creditCardRisk: "Maklumat kad kredit anda mungkin dicuri",
    personalDataRisk: "Data peribadi anda mungkin disalahgunakan",
    fakeGoodsRisk: "Anda mungkin menerima barang palsu atau tidak berkualiti",
    backToSafety: "Kembali ke Keselamatan",
    continueRisk: "Teruskan Dengan Risiko Sendiri",
    finalWarning: "Amaran Terakhir!",
    finalWarningText: "Anda akan memasuki laman web yang sangat berisiko. Kami tidak bertanggungjawab atas sebarang kerugian.",
    cancel: "Batal",
    understandRisk: "Saya Faham Risikonya",
    reportFraud: "LAPORKAN PENIPUAN",
    reportingScam: "Melaporkan penipuan...",
    backToHome: "Kembali ke Halaman Utama"
  },
  zh: {
    title: "此网站可能是诈骗！",
    subtitle: "小心，价格太便宜了不真实！",
    analyzing: "正在分析网站...",
    riskAnalysis: "风险分析",
    risk: "风险",
    veryHigh: "非常高",
    whyDangerous: "为什么这个网站危险？",
    lowPrices: "我们检测到品牌商品的价格异常低（iPhone RM999，PS5 RM599）。这是骗子用来吸引受害者的常见策略。",
    suspiciousUrl: "网站URL\"deal-raya-123.com\"看起来可疑，可能试图模仿Shopee或Lazada等流行购物平台。",
    urgency: "有过度的催促立即购买，使用假计时器和\"库存有限\" - 这些是心理操纵技巧。",
    fakeReviews: "客户评论看起来是假的 - 都是5星，评论内容通用。没有负面或中性评论。",
    paymentRisk: "此网站可能要求信用卡信息或付款到个人账户，而不是通过安全的支付网关。",
    whatMayHappen: "⚠️ 如果您继续，可能会发生什么？",
    loseMoneyRisk: "您的钱会丢失而不会收到任何物品",
    creditCardRisk: "您的信用卡信息可能被盗",
    personalDataRisk: "您的个人数据可能被滥用",
    fakeGoodsRisk: "您可能会收到假货或劣质商品",
    backToSafety: "返回安全",
    continueRisk: "自担风险继续",
    finalWarning: "最后警告！",
    finalWarningText: "您即将进入一个非常危险的网站。我们对任何损失不承担责任。",
    cancel: "取消",
    understandRisk: "我了解风险",
    reportFraud: "举报欺诈",
    reportingScam: "正在举报诈骗...",
    backToHome: "返回主页"
  }
};

export function WebsiteBlockingOverlay() {
  const { isAnalyzing, riskScore, riskLevel, explanation, selectedLanguage, reportScam } = useExtensionStore();
  const [showFinalWarning, setShowFinalWarning] = useState(false);
  const [allowAccess, setAllowAccess] = useState(false);
  const [isReporting, setIsReporting] = useState(false);
  const router = useRouter();
  const t = translations[selectedLanguage];

  if (allowAccess) return null;

  const handleContinue = () => {
    setShowFinalWarning(true);
  };

  const handleFinalContinue = () => {
    setAllowAccess(true);
  };

  const handleReport = async () => {
    setIsReporting(true);
    await reportScam("website", { url: "deal-raya-123.com" });
    setIsReporting(false);
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
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
              <LanguageSelector />
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
                    <span className="text-lg font-semibold">{t.riskAnalysis}</span>
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
                  <h4 className="font-semibold text-sm mb-2">{t.whatMayHappen}</h4>
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
                    variant="destructive"
                    onClick={handleReport}
                    disabled={isReporting}
                  >
                    {isReporting ? t.reportingScam : t.reportFraud}
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
              <h3 className="text-lg font-bold text-center mb-2">{t.finalWarning}</h3>
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
    </div>
  );
}