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
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ImageAnalysisModalProps {
  image: ScamImage | null;
  onClose: () => void;
}

const analysisResults = {
  1: {
    // Government Aid Scam
    headline: {
      chinese: "假冒政府公告！这并非官方通知！",
      malay: "AMARAN PENIPUAN! Ini BUKAN notis rasmi kerajaan!",
    },
    explanation: {
      chinese:
        "这张海报看起来像政府的通知，但它承诺免费送电脑和提供太多好处。政府通常不会这样送东西或要求您通过非官方的渠道联系。如果一个优惠听起来好得不真实，那很可能是骗局。",
      malay:
        "Poster ini kelihatan seperti notis kerajaan, tetapi ia menjanjikan komputer percuma dan terlalu banyak faedah. Kerajaan biasanya tidak memberi hadiah seperti ini atau meminta anda menghubungi melalui saluran tidak rasmi.",
    },
    risks: [
      "免费电脑/平板电脑的承诺太不现实",
      "要求通过非官方渠道联系",
      "使用紧急语言制造压力",
      "缺少官方政府网站链接",
    ],
  },
  2: {
    // SMS Scam
    headline: {
      malay: "AMARAN SCAM SMS! Jangan klik pautan ini!",
      chinese: "短信诈骗警告！不要点击此链接！",
    },
    explanation: {
      malay:
        "Mesej ini kononnya dari J&T Express tapi pautan yang diberi (jtexpress.ftaysh.help/my) nampak pelik dan bukan laman web rasmi mereka. Syarikat kurier takkan minta anda sahkan alamat melalui pautan macam ni. Ini adalah cubaan nak curi maklumat peribadi anda.",
      chinese:
        "这条消息声称来自J&T Express，但提供的链接看起来很奇怪，不是他们的官方网站。快递公司不会要求您通过这样的链接确认地址。",
    },
    risks: [
      "Pautan mencurigakan bukan dari domain rasmi",
      "Mesej mendesak dalam 24 jam",
      "Meminta maklumat peribadi",
      "Nombor telefon dari luar negara (+63)",
    ],
  },
  3: {
    // Investment Scam
    headline: {
      chinese: "警告！这可能是投资诈骗！",
      malay: "AMARAN! Ini mungkin penipuan pelaburan!",
    },
    explanation: {
      chinese:
        "这张海报说投资回报非常高，比如每年12%，而且看起来风险很低。但是，真正的投资很少能保证这么高的回报。这很可能是骗子用来引诱您投资然后卷走资金的伎俩。",
      malay:
        "Poster ini menjanjikan pulangan pelaburan yang sangat tinggi, seperti 12% setahun, dan kelihatan berisiko rendah. Walau bagaimanapun, pelaburan sebenar jarang menjamin pulangan setinggi ini.",
    },
    risks: [
      "12%年回报率不切实际",
      "最低存款RM10,000太高",
      '声称"稳定安全"但缺少监管信息',
      "针对公务员的特定目标群体",
    ],
  },
  4: {
    // Giveaway Scam
    headline: {
      malay: "AWAS! Imej Ini Mungkin Penipuan Hadiah!",
      chinese: "警告！这可能是虚假赠品骗局！",
    },
    explanation: {
      malay:
        "Poster ini janji kredit Touch n Go RM50 percuma dari Hotlink. Tawaran yang terlalu bagus dan minta cepat-cepat ni selalu jadi taktik penipu. Syarikat Hotlink yang betul akan umum promosi di laman web atau aplikasi rasmi mereka, bukan macam gambar ni yang terus suruh tuntut tanpa syarat jelas.",
      chinese:
        "这张海报承诺来自Hotlink的免费RM50 Touch n Go信用。过于优惠且紧急的优惠通常是骗子的策略。",
    },
    risks: [
      "Tawaran RM50 percuma tanpa syarat jelas",
      "Menggunakan jenama Hotlink tanpa kebenaran",
      "Peluang Terhad untuk ciptakan rasa terdesak",
      "Tiada terma dan syarat yang sah",
    ],
  },
};

export function ImageAnalysisModal({
  image,
  onClose,
}: ImageAnalysisModalProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [showOriginal, setShowOriginal] = useState(false);

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
  const isChineseContent = image.language === "chinese";

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-red-600 text-white p-6 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-10 w-10" />
              <div>
                <h1 className="text-2xl font-bold">
                  {isChineseContent ? "图片分析警告" : "Analisis Imej Amaran"}
                </h1>
                <p className="text-red-100">
                  {isChineseContent
                    ? "OCR检测到可疑内容"
                    : "OCR mengesan kandungan mencurigakan"}
                </p>
              </div>
            </div>
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

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <CardContent className="p-6">
            {isAnalyzing ? (
              <div className="text-center py-12">
                <div className="relative inline-flex">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600"></div>
                  <ScanLine className="absolute inset-0 h-16 w-16 animate-pulse text-red-600" />
                </div>
                <p className="mt-4 text-lg">
                  {isChineseContent
                    ? "正在扫描图片内容..."
                    : "Mengimbas kandungan imej..."}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {isChineseContent
                    ? "使用OCR技术提取文字"
                    : "Menggunakan teknologi OCR untuk ekstrak teks"}
                </p>
              </div>
            ) : (
              <>
                {/* Image Preview */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-3">
                      {isChineseContent ? "扫描的图片" : "Imej Yang Diimbas"}
                    </h3>
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
                          <Badge
                            variant="destructive"
                            className="text-lg px-4 py-2"
                          >
                            {isChineseContent
                              ? "检测到诈骗"
                              : "Penipuan Dikesan"}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <ScanLine className="h-5 w-5" />
                      {isChineseContent
                        ? "OCR提取的文字"
                        : "Teks Diekstrak OCR"}
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
                        {
                          analysis.headline[
                            image.language as "chinese" | "malay"
                          ]
                        }
                      </h2>
                      <p className="text-red-700 leading-relaxed">
                        {
                          analysis.explanation[
                            image.language as "chinese" | "malay"
                          ]
                        }
                      </p>
                    </div>
                  </div>
                </div>

                {/* Risk Indicators */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold mb-3">
                    {isChineseContent
                      ? "🚨 发现的风险指标："
                      : "🚨 Petunjuk Risiko Yang Ditemui:"}
                  </h4>
                  <ul className="space-y-2">
                    {analysis.risks.map((risk, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommendations */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-green-800 mb-2">
                    {isChineseContent
                      ? "✅ 建议采取的行动："
                      : "✅ Tindakan Yang Disyorkan:"}
                  </h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>
                      {isChineseContent
                        ? "• 不要点击任何链接或扫描二维码"
                        : "• Jangan klik sebarang pautan atau imbas kod QR"}
                    </li>
                    <li>
                      {isChineseContent
                        ? "• 删除此消息/图片"
                        : "• Padam mesej/imej ini"}
                    </li>
                    <li>
                      {isChineseContent
                        ? "• 向相关部门举报此诈骗"
                        : "• Laporkan penipuan ini kepada pihak berkuasa"}
                    </li>
                    <li>
                      {isChineseContent
                        ? "• 提醒朋友和家人注意类似骗局"
                        : "• Ingatkan rakan dan keluarga tentang penipuan serupa"}
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="lg"
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    onClick={onClose}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {isChineseContent
                      ? "关闭并返回安全"
                      : "Tutup & Kembali Selamat"}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-red-600 border-red-600 hover:bg-red-50"
                    onClick={() => setShowOriginal(!showOriginal)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    {showOriginal
                      ? isChineseContent
                        ? "隐藏原图"
                        : "Sembunyikan Imej Asal"
                      : isChineseContent
                      ? "查看原图（了解风险）"
                      : "Lihat Imej Asal (Fahami Risiko)"}
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
