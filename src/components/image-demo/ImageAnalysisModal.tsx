"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ScamImage } from "@/components/image-demo/ImageGallery";
import {
  Shield,
  AlertTriangle,
  X,
  Eye,
  ArrowLeft,
  ScanLine,
  Home,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useExtensionStore, Language } from "@/lib/store/extensionStore";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ReportScamImageModal } from "./ReportScamImageModal";
import { useRouter } from "next/navigation";

interface ImageAnalysisModalProps {
  image: ScamImage | null;
  onClose: () => void;
}

const translations = {
  en: {
    title: "Image Analysis Warning",
    subtitle: "OCR detected suspicious content",
    scanning: "Scanning image content...",
    usingOcr: "Using OCR technology to extract text",
    scannedImage: "Scanned Image",
    scamDetected: "Scam Detected",
    extractedText: "OCR Extracted Text",
    riskIndicators: "🚨 Risk Indicators Found:",
    recommendedActions: "✅ Recommended Actions:",
    dontClick: "Don't click any links or scan QR codes",
    deleteMessage: "Delete this message/image",
    reportScam: "Report this scam to authorities",
    warnOthers: "Warn friends and family about similar scams",
    closeAndReturn: "Close & Return to Safety",
    viewOriginal: "View Original Image (Understand Risk)",
    hideOriginal: "Hide Original Image",
    reportFraud: "REPORT FRAUD",
    backToHome: "Back to Home"
  },
  ms: {
    title: "Analisis Imej Amaran",
    subtitle: "OCR mengesan kandungan mencurigakan",
    scanning: "Mengimbas kandungan imej...",
    usingOcr: "Menggunakan teknologi OCR untuk ekstrak teks",
    scannedImage: "Imej Yang Diimbas",
    scamDetected: "Penipuan Dikesan",
    extractedText: "Teks Diekstrak OCR",
    riskIndicators: "🚨 Petunjuk Risiko Yang Ditemui:",
    recommendedActions: "✅ Tindakan Yang Disyorkan:",
    dontClick: "Jangan klik sebarang pautan atau imbas kod QR",
    deleteMessage: "Padam mesej/imej ini",
    reportScam: "Laporkan penipuan ini kepada pihak berkuasa",
    warnOthers: "Ingatkan rakan dan keluarga tentang penipuan serupa",
    closeAndReturn: "Tutup & Kembali Selamat",
    viewOriginal: "Lihat Imej Asal (Fahami Risiko)",
    hideOriginal: "Sembunyikan Imej Asal",
    reportFraud: "LAPORKAN PENIPUAN",
    backToHome: "Kembali ke Halaman Utama"
  },
  zh: {
    title: "图片分析警告",
    subtitle: "OCR检测到可疑内容",
    scanning: "正在扫描图片内容...",
    usingOcr: "使用OCR技术提取文字",
    scannedImage: "扫描的图片",
    scamDetected: "检测到诈骗",
    extractedText: "OCR提取的文字",
    riskIndicators: "🚨 发现的风险指标：",
    recommendedActions: "✅ 建议采取的行动：",
    dontClick: "不要点击任何链接或扫描二维码",
    deleteMessage: "删除此消息/图片",
    reportScam: "向相关部门举报此诈骗",
    warnOthers: "提醒朋友和家人注意类似骗局",
    closeAndReturn: "关闭并返回安全",
    viewOriginal: "查看原图（了解风险）",
    hideOriginal: "隐藏原图",
    reportFraud: "举报欺诈",
    backToHome: "返回主页"
  }
};

const analysisResults = {
  1: {
    // Government Aid Scam
    headline: {
      en: "FAKE GOVERNMENT NOTICE! This is NOT an official notification!",
      ms: "AMARAN PENIPUAN! Ini BUKAN notis rasmi kerajaan!",
      zh: "假冒政府公告！这并非官方通知！"
    },
    explanation: {
      en: "This poster looks like a government notice, but it promises free computers and offers too many benefits. Governments usually don't give away items like this or ask you to contact through unofficial channels. If an offer sounds too good to be true, it's likely a scam.",
      ms: "Poster ini kelihatan seperti notis kerajaan, tetapi ia menjanjikan komputer percuma dan terlalu banyak faedah. Kerajaan biasanya tidak memberi hadiah seperti ini atau meminta anda menghubungi melalui saluran tidak rasmi.",
      zh: "这张海报看起来像政府的通知，但它承诺免费送电脑和提供太多好处。政府通常不会这样送东西或要求您通过非官方的渠道联系。如果一个优惠听起来好得不真实，那很可能是骗局。"
    },
    risks: {
      en: [
        "Free computer/tablet promises are unrealistic",
        "Requests to contact through unofficial channels",
        "Uses urgent language to create pressure",
        "Lacks official government website links"
      ],
      ms: [
        "Janji komputer/tablet percuma tidak realistik",
        "Meminta hubungi melalui saluran tidak rasmi",
        "Menggunakan bahasa mendesak untuk cipta tekanan",
        "Tiada pautan laman web kerajaan rasmi"
      ],
      zh: [
        "免费电脑/平板电脑的承诺太不现实",
        "要求通过非官方渠道联系",
        "使用紧急语言制造压力",
        "缺少官方政府网站链接"
      ]
    }
  },
  2: {
    // SMS Scam
    headline: {
      en: "SMS SCAM WARNING! Don't click this link!",
      ms: "AMARAN SCAM SMS! Jangan klik pautan ini!",
      zh: "短信诈骗警告！不要点击此链接！"
    },
    explanation: {
      en: "This message claims to be from J&T Express but the provided link (jtexpress.ftaysh.help/my) looks suspicious and is not their official website. Courier companies won't ask you to confirm addresses through such links. This is an attempt to steal your personal information.",
      ms: "Mesej ini kononnya dari J&T Express tapi pautan yang diberi (jtexpress.ftaysh.help/my) nampak pelik dan bukan laman web rasmi mereka. Syarikat kurier takkan minta anda sahkan alamat melalui pautan macam ni. Ini adalah cubaan nak curi maklumat peribadi anda.",
      zh: "这条消息声称来自J&T Express，但提供的链接看起来很奇怪，不是他们的官方网站。快递公司不会要求您通过这样的链接确认地址。"
    },
    risks: {
      en: [
        "Suspicious link not from official domain",
        "Urgent message within 24 hours",
        "Requests personal information",
        "Phone number from foreign country (+63)"
      ],
      ms: [
        "Pautan mencurigakan bukan dari domain rasmi",
        "Mesej mendesak dalam 24 jam",
        "Meminta maklumat peribadi",
        "Nombor telefon dari luar negara (+63)"
      ],
      zh: [
        "可疑链接不是来自官方域名",
        "24小时内的紧急消息",
        "要求个人信息",
        "来自国外的电话号码（+63）"
      ]
    }
  },
  3: {
    // Investment Scam
    headline: {
      en: "WARNING! This may be an investment scam!",
      ms: "AMARAN! Ini mungkin penipuan pelaburan!",
      zh: "警告！这可能是投资诈骗！"
    },
    explanation: {
      en: "This poster promises very high investment returns, like 12% per year, and appears low risk. However, real investments rarely guarantee such high returns. This is likely a trick used by scammers to lure you to invest and then run away with your funds.",
      ms: "Poster ini menjanjikan pulangan pelaburan yang sangat tinggi, seperti 12% setahun, dan kelihatan berisiko rendah. Walau bagaimanapun, pelaburan sebenar jarang menjamin pulangan setinggi ini.",
      zh: "这张海报说投资回报非常高，比如每年12%，而且看起来风险很低。但是，真正的投资很少能保证这么高的回报。这很可能是骗子用来引诱您投资然后卷走资金的伎俩。"
    },
    risks: {
      en: [
        "12% annual return is unrealistic",
        "Minimum deposit RM10,000 is too high",
        "Claims \"stable and safe\" but lacks regulatory info",
        "Targets specific group of civil servants"
      ],
      ms: [
        "12% pulangan tahunan tidak realistik",
        "Deposit minimum RM10,000 terlalu tinggi",
        "Dakwa \"stabil dan selamat\" tapi tiada info pengawalseliaan",
        "Sasaran kumpulan khusus penjawat awam"
      ],
      zh: [
        "12%年回报率不切实际",
        "最低存款RM10,000太高",
        "声称\"稳定安全\"但缺少监管信息",
        "针对公务员的特定目标群体"
      ]
    }
  },
  4: {
    // Giveaway Scam
    headline: {
      en: "BEWARE! This Image May Be a Fake Giveaway Scam!",
      ms: "AWAS! Imej Ini Mungkin Penipuan Hadiah!",
      zh: "警告！这可能是虚假赠品骗局！"
    },
    explanation: {
      en: "This poster promises free RM50 Touch n Go credit from Hotlink. Offers that are too good and urgent are often scammer tactics. Real Hotlink would announce promotions on their official website or app, not like this image that directly asks you to claim without clear terms.",
      ms: "Poster ini janji kredit Touch n Go RM50 percuma dari Hotlink. Tawaran yang terlalu bagus dan minta cepat-cepat ni selalu jadi taktik penipu. Syarikat Hotlink yang betul akan umum promosi di laman web atau aplikasi rasmi mereka, bukan macam gambar ni yang terus suruh tuntut tanpa syarat jelas.",
      zh: "这张海报承诺来自Hotlink的免费RM50 Touch n Go信用。过于优惠且紧急的优惠通常是骗子的策略。"
    },
    risks: {
      en: [
        "Free RM50 offer without clear terms",
        "Uses Hotlink brand without authorization",
        "Limited Opportunity to create urgency",
        "No legitimate terms and conditions"
      ],
      ms: [
        "Tawaran RM50 percuma tanpa syarat jelas",
        "Menggunakan jenama Hotlink tanpa kebenaran",
        "Peluang Terhad untuk ciptakan rasa terdesak",
        "Tiada terma dan syarat yang sah"
      ],
      zh: [
        "免费RM50优惠没有明确条款",
        "未经授权使用Hotlink品牌",
        "有限机会制造紧迫感",
        "没有合法的条款和条件"
      ]
    }
  }
};

export function ImageAnalysisModal({
  image,
  onClose,
}: ImageAnalysisModalProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [showOriginal, setShowOriginal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const { selectedLanguage } = useExtensionStore();
  const router = useRouter();
  const t = translations[selectedLanguage];

  useEffect(() => {
    if (image) {
      setIsAnalyzing(true);
      setShowOriginal(false);
      const timer = setTimeout(() => setIsAnalyzing(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [image]);

  if (!image) return null;

  const analysis = analysisResults[image.id as keyof typeof analysisResults];

  const handleReport = () => {
    setShowReportModal(true);
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-red-600 text-white p-6 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-10 w-10" />
              <div>
                <h1 className="text-2xl font-bold">{t.title}</h1>
                <p className="text-red-100">{t.subtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white hover:bg-red-700"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <CardContent className="p-6">
            {isAnalyzing ? (
              <div className="text-center py-12">
                <div className="relative inline-flex">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600"></div>
                  <ScanLine className="absolute inset-0 h-16 w-16 animate-pulse text-red-600" />
                </div>
                <p className="mt-4 text-lg">{t.scanning}</p>
                <p className="text-sm text-muted-foreground mt-2">{t.usingOcr}</p>
              </div>
            ) : (
              <>
                {/* Image Preview */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-3">{t.scannedImage}</h3>
                    <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={image.image}
                        alt={image.title}
                        fill
                        className={`object-contain ${
                          !showOriginal ? "filter blur-sm" : ""
                        }`}
                      />
                      {!showOriginal && (
                        <div className="absolute inset-0 bg-red-600/20 flex items-center justify-center">
                          <Badge variant="destructive" className="text-lg px-4 py-2">
                            {t.scamDetected}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <ScanLine className="h-5 w-5" />
                      {t.extractedText}
                    </h3>
                    <div className="bg-gray-100 p-4 rounded-lg h-[300px] overflow-y-auto">
                      <p className="text-sm font-mono whitespace-pre-wrap">
                        {image.content}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Warning Message */}
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-red-800 mb-2">
                        {analysis.headline[selectedLanguage]}
                      </h2>
                      <p className="text-red-700 leading-relaxed">
                        {analysis.explanation[selectedLanguage]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Risk Indicators */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold mb-3">{t.riskIndicators}</h4>
                  <ul className="space-y-2">
                    {analysis.risks[selectedLanguage].map((risk: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommendations */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-green-800 mb-2">{t.recommendedActions}</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• {t.dontClick}</li>
                    <li>• {t.deleteMessage}</li>
                    <li>• {t.reportScam}</li>
                    <li>• {t.warnOthers}</li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 flex-wrap">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    onClick={onClose}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {t.closeAndReturn}
                  </Button>
                  <Button 
                    size="lg" 
                    variant="destructive"
                    onClick={handleReport}
                  >
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
                    onClick={() => setShowOriginal(!showOriginal)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    {showOriginal ? t.hideOriginal : t.viewOriginal}
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </div>
      </Card>

      {/* Comprehensive Report Modal */}
      <ReportScamImageModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        scamImage={image}
        platform="whatsapp"
      />
    </div>
  );
}