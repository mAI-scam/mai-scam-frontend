"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
import { useExtensionStore } from "@/lib/store/extensionStore";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ReportScamImageModal } from "./ReportScamImageModal";
import {
  getImageAnalysisStrings,
  ImageAnalysisCases,
} from "@/data/image-demo/ImageAnalysisModalData";

interface ImageAnalysisModalProps {
  image: ScamImage | null;
  onClose: () => void;
}

export function ImageAnalysisModal({
  image,
  onClose,
}: ImageAnalysisModalProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [showOriginal, setShowOriginal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const { selectedLanguage } = useExtensionStore();
  const router = useRouter();

  // UI strings (safe fallback handled inside the helper)
  const t = useMemo(
    () => getImageAnalysisStrings(selectedLanguage),
    [selectedLanguage]
  );

  // Localized analysis copy for the current image
  const caseCopy = useMemo(() => {
    if (!image) return null;
    const data = ImageAnalysisCases[image.id];
    if (!data) return null;
    return {
      headline: data.headline[selectedLanguage] ?? data.headline.en,
      explanation: data.explanation[selectedLanguage] ?? data.explanation.en,
      risks: data.risks[selectedLanguage] ?? data.risks.en,
    };
  }, [image?.id, selectedLanguage]);

  // Reset analysis state on image change
  useEffect(() => {
    if (!image) return;
    setIsAnalyzing(true);
    setShowOriginal(false);
    const timer = setTimeout(() => setIsAnalyzing(false), 2500);
    return () => clearTimeout(timer);
  }, [image?.id]);

  if (!image) return null;

  const handleReport = () => setShowReportModal(true);
  const handleBackToHome = () => router.push("/");

  return (
    // EDIT POSITIONING: This modal covers full screen - adjust 'p-4' for edge spacing
    <div className="fixed inset-0 bg-black/90 z-[9996] flex items-center justify-center p-4">
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
                aria-label="Close"
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
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600" />
                  <ScanLine className="absolute inset-0 h-16 w-16 animate-pulse text-red-600" />
                </div>
                <p className="mt-4 text-lg">{t.scanning}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {t.usingOcr}
                </p>
              </div>
            ) : (
              <>
                {/* Image + OCR text */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-3">{t.scannedImage}</h3>
                    <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={image.image}
                        alt={image.title}
                        fill
                        className={`object-contain ${
                          !showOriginal ? "blur-sm" : ""
                        }`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                      {!showOriginal && (
                        <div className="absolute inset-0 bg-red-600/20 flex items-center justify-center">
                          <Badge
                            variant="destructive"
                            className="text-lg px-4 py-2"
                          >
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

                {/* Warning */}
                {caseCopy && (
                  <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-red-800 mb-2">
                          {caseCopy.headline}
                        </h2>
                        <p className="text-red-700 leading-relaxed">
                          {caseCopy.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Risks */}
                {caseCopy && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold mb-3">{t.riskIndicators}</h4>
                    <ul className="space-y-2">
                      {caseCopy.risks.map((risk, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                          <span>{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Recommendations */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-green-800 mb-2">
                    {t.recommendedActions}
                  </h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• {t.dontClick}</li>
                    <li>• {t.deleteMessage}</li>
                    <li>• {t.reportScam}</li>
                    <li>• {t.warnOthers}</li>
                  </ul>
                </div>

                {/* Actions */}
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
                    onClick={() => setShowOriginal((s) => !s)}
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

      {/* Report Modal */}
      <ReportScamImageModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        scamImage={image}
        platform="whatsapp"
      />
    </div>
  );
}
