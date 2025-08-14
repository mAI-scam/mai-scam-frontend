// src/components/image-demo/ReportScamImageModal.tsx
"use client";

import { useMemo, useState } from "react";
import {
  X,
  AlertTriangle,
  CheckCircle,
  Send,
  Shield,
  Globe,
  MessageCircle,
  Facebook,
  Instagram,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useExtensionStore, Language } from "@/lib/store/extensionStore";
import { getReportScamStrings } from "@/data/image-demo/ReportScamImageModalData";
import { ImageAnalysisCases } from "@/data/image-demo/ImageAnalysisModalData";

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
  platform = "facebook",
}: ReportScamImageModalProps) {
  const { selectedLanguage, reportScam, markImageReported } = useExtensionStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [reportId] = useState(() => {
    // Only generate ID on client-side to avoid hydration mismatch
    if (typeof window === 'undefined') return '';
    return `MSI-${Date.now().toString(36).toUpperCase()}`;
  });

  const t = getReportScamStrings(selectedLanguage);

  // Tailored risks per image (same source as the analysis modal)
  const caseCopy = useMemo(() => {
    if (!scamImage) return null;
    const data = ImageAnalysisCases[scamImage.id];
    if (!data) return null;
    return {
      risks: data.risks[selectedLanguage] ?? data.risks.en,
    };
  }, [scamImage?.id, selectedLanguage]);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate API calls to different services
    await new Promise((resolve) => setTimeout(resolve, 2500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Mark as reported in global store for the demo
    if (scamImage?.id != null) {
      try {
        await reportScam("image", { imageId: scamImage.id, source: "social" });
      } finally {
        markImageReported(scamImage.id);
      }
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  const getCategoryByScamType = () => {
    if (!scamImage) return t.fakeGov;

    switch (scamImage.category) {
      case "Government":
        return t.fakeGov;
      case "Investment":
        return t.investmentScam;
      case "Giveaway":
        return t.giveawayScam;
      case "SMS":
        return t.phishingSms;
      default:
        return t.impersonation;
    }
  };

  const getPlatformIcon = () => {
    switch (platform) {
      case "facebook":
        return <Facebook className="h-8 w-8 text-blue-600" />;
      case "instagram":
        return <Instagram className="h-8 w-8 text-pink-600" />;
      case "whatsapp":
        return <MessageCircle className="h-8 w-8 text-green-600" />;
      case "telegram":
        return <Send className="h-8 w-8 text-blue-500" />;
      default:
        return <Facebook className="h-8 w-8 text-blue-600" />;
    }
  };

  const getPlatformName = () => {
    switch (platform) {
      case "facebook":
        return t.facebook;
      case "instagram":
        return t.instagram;
      case "whatsapp":
        return t.whatsapp;
      case "telegram":
        return t.telegram;
      default:
        return t.facebook;
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
                      <div className="font-medium text-blue-900">
                        {t.googleSafeBrowsing}
                      </div>
                      <div className="text-sm text-blue-700">
                        {t.googleDesc}
                      </div>
                    </div>
                    <Badge variant="secondary">API</Badge>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border">
                    <Shield className="h-8 w-8 text-purple-600" />
                    <div className="flex-1">
                      <div className="font-medium text-purple-900">
                        {t.phishTank}
                      </div>
                      <div className="text-sm text-purple-700">
                        {t.phishTankDesc}
                      </div>
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
                      <div className="font-medium text-orange-900">
                        {t.socialPlatform}
                      </div>
                      <div className="text-sm text-orange-700">
                        {t.socialDesc}
                      </div>
                    </div>
                    <Badge variant="secondary">Platform</Badge>
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="space-y-4">
                <div>
                  <label className="font-medium text-sm">
                    {t.contentSource}
                  </label>
                  <div className="mt-1 p-2 bg-gray-100 rounded border text-sm font-mono">
                    {t.platform} {getPlatformName()} -{" "}
                    {scamImage?.title || "Scam Post"}
                  </div>
                </div>

                <div>
                  <label className="font-medium text-sm">
                    {t.reportCategory}
                  </label>
                  <div className="mt-1">
                    <Badge variant="destructive">
                      {getCategoryByScamType()}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Tailored Threat Details */}
              <div>
                <h4 className="font-medium mb-3">{t.reportDetails}</h4>
                <div className="space-y-2 text-sm">
                  {caseCopy?.risks?.length ? (
                    caseCopy.risks.map((risk, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{risk}</span>
                      </div>
                    ))
                  ) : (
                    <>
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
                    </>
                  )}
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
              <h3 className="text-xl font-bold text-green-800 mb-2">
                {t.reportSuccess}
              </h3>
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
