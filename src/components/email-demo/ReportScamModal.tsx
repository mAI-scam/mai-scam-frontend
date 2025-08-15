"use client";

import { useState } from "react";
import {
  X,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Send,
  Shield,
  Globe,
  Mail,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useExtensionStore, Language } from "@/lib/store/extensionStore";
import { ReportScamModalData } from "@/data/email-demo/ReportScamModalData";

interface ReportScamModalProps {
  isOpen: boolean;
  onClose: () => void;
  emailSender?: string;
  emailSubject?: string;
}

export function ReportScamModal({
  isOpen,
  onClose,
  emailSender = "service@secure-banknegara-verification.com",
  emailSubject = "PENTING: Akaun Anda Telah Dibekukan - Tindakan Segera Diperlukan",
}: ReportScamModalProps) {
  const { selectedLanguage } = useExtensionStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [reportId] = useState(() => {
    // Only generate ID on client-side to avoid hydration mismatch
    if (typeof window === "undefined") return "";
    return `EMR-${Date.now().toString(36).toUpperCase()}`;
  });
  const t = ReportScamModalData[selectedLanguage];

  if (!isOpen) return null;

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate API calls to different services
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    // EDIT POSITIONING: This modal covers full screen - adjust 'p-4' for edge spacing
    <div className="fixed inset-0 bg-black/60 z-[9997] flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full max-h-[60vh] overflow-y-auto">
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
                    <Mail className="h-8 w-8 text-orange-600" />
                    <div className="flex-1">
                      <div className="font-medium text-orange-900">
                        {t.reportBee}
                      </div>
                      <div className="text-sm text-orange-700">
                        {t.reportBeeDesc}
                      </div>
                    </div>
                    <Badge variant="secondary">Email</Badge>
                  </div>
                </div>
              </div>

              {/* Email Details */}
              <div className="space-y-4">
                <div>
                  <label className="font-medium text-sm">{t.emailSender}</label>
                  <div className="mt-1 p-2 bg-gray-100 rounded border text-sm font-mono">
                    {emailSender}
                  </div>
                </div>

                <div>
                  <label className="font-medium text-sm">
                    {t.emailSubject}
                  </label>
                  <div className="mt-1 p-2 bg-gray-100 rounded border text-sm">
                    {emailSubject}
                  </div>
                </div>

                <div>
                  <label className="font-medium text-sm">
                    {t.reportCategory}
                  </label>
                  <div className="mt-1">
                    <Badge variant="destructive">{t.phishing}</Badge>
                  </div>
                </div>
              </div>

              {/* Threat Details */}
              <div>
                <h4 className="font-medium mb-3">{t.reportDetails}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.falseUrgency}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.suspiciousUrl}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.fakeBankingEmail}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.requestCredentials}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.rewardTactics}</span>
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
                  <Mail className="h-4 w-4 text-orange-600" />
                  <span>ReportBee</span>
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
