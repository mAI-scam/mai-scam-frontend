"use client";

import { useState } from "react";
import { Shield, CheckCircle2, X, Eye, EyeOff, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useExtensionStore } from "@/lib/store/extensionStore";
import { LanguageSelector } from "@/components/LanguageSelector";
import { LanguageCode } from "@/data/store/Languages";
import { FacebookSafeContentData } from "@/data/image-demo/FacebookSafeContentData";

const SUPPORTED = Object.keys(FacebookSafeContentData) as LanguageCode[];
const isLanguageCode = (v: string): v is LanguageCode =>
  (SUPPORTED as readonly string[]).includes(v);

interface FacebookSafeContentOverlayProps {
  safeImage: {
    id: number;
    title: string;
    description: string;
    riskLevel: string;
    language: string;
    category: string;
    content: string;
    imageSrc?: string;
  };
  onClose: () => void;
}

export function FacebookSafeContentOverlay({
  safeImage,
  onClose,
}: FacebookSafeContentOverlayProps) {
  const [showPost, setShowPost] = useState(false);
  const { selectedLanguage } = useExtensionStore();

  // ✅ guard + fallback = no "possibly undefined"
  const lang: LanguageCode = isLanguageCode(selectedLanguage)
    ? selectedLanguage
    : "en";
  const t = FacebookSafeContentData[lang];

  return (
    // EDIT POSITIONING: This overlay covers full screen - adjust 'p-4' for edge spacing
    <div className="fixed inset-0 bg-black/80 z-[9994] flex items-center justify-center p-2 md:p-4">
      <Card className="max-w-2xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto">
        <CardContent className="p-0">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 md:p-6 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="p-1.5 md:p-2 bg-white/20 rounded-full">
                  <Shield className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold">
                    {t.safeContentDetected}
                  </h2>
                  <p className="text-green-100 text-xs md:text-sm">
                    {t.protectedBy}
                  </p>
                  <Badge className="bg-white/20 text-white text-xs mt-1">
                    🔍 OCR + AI Agent Analysis
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <LanguageSelector />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-white hover:bg-white/20 h-8 w-8 md:h-10 md:w-10"
                >
                  <X className="h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6 space-y-4 md:space-y-6">
            {/* Safe Content Notice */}
            <div className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-green-800 mb-1 text-sm md:text-base">
                  {t.safeContent}
                </h3>
                <p className="text-green-700 text-xs md:text-sm">
                  {t.description}
                </p>
              </div>
            </div>

            {/* Risk Level */}
            <div className="flex items-center justify-between p-3 md:p-4 bg-green-50 border border-green-200 rounded-lg">
              <div>
                <span className="text-xs md:text-sm font-medium text-green-800">
                  {t.riskLevel}:
                </span>
              </div>
              <Badge className="bg-green-600 text-white text-xs">{t.low}</Badge>
            </div>

            {/* Why Safe */}
            <div className="space-y-2 md:space-y-3">
              <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                {t.whySafe}
              </h4>
              <ul className="space-y-1.5 md:space-y-2">
                {t.reasons.map((reason, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs md:text-sm text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mt-1 md:mt-1.5 flex-shrink-0"></div>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 md:gap-3 pt-3 md:pt-4 border-t">
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <Button
                  onClick={() => setShowPost(!showPost)}
                  variant="outline"
                  className="flex-1 text-xs md:text-sm"
                >
                  {showPost ? (
                    <EyeOff className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                  ) : (
                    <Eye className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                  )}
                  {showPost ? t.hidePost : t.showPost}
                </Button>
                <Button
                  className="flex-1 bg-green-600 hover:bg-green-700 text-xs md:text-sm"
                  onClick={onClose}
                >
                  <ThumbsUp className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                  {t.trustContent}
                </Button>
              </div>

              <Button
                onClick={onClose}
                variant="outline"
                className="w-full text-xs md:text-sm"
              >
                Continue Browsing Safely
              </Button>
            </div>

            {/* Post Preview (when showing) */}
            {showPost && (
              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                <div className="flex items-start gap-2 mb-2 md:mb-3">
                  <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5" />
                  <p className="text-xs md:text-sm text-green-800 font-medium">
                    SAFE CONTENT: This image has been verified as legitimate
                    content
                  </p>
                </div>
                <div className="bg-white p-2 md:p-3 rounded border">
                  <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">
                    Content Preview:
                  </p>
                  <p className="text-xs md:text-sm font-mono bg-gray-100 p-2 rounded">
                    {safeImage.content}
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
