"use client";

import { ExternalLink, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SafeSiteRedirectData } from "@/data/website-demo/SafeSiteRedirectData";

interface SafeSiteRedirectProps {
  currentUrl: string;
  safeUrl: string;
  onRedirect: (url: string) => void;
  language: string;
}

export function SafeSiteRedirect({
  currentUrl,
  safeUrl,
  onRedirect,
  language,
}: SafeSiteRedirectProps) {
  const t =
    SafeSiteRedirectData[language as keyof typeof SafeSiteRedirectData] ||
    SafeSiteRedirectData.en;

  const handleRedirect = () => {
    onRedirect(safeUrl);
  };

  return (
    <Card className="border-green-200 bg-green-50/80 backdrop-blur-sm shadow-lg">
      <CardContent className="p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="h-8 w-8 text-green-600" />
            <h3 className="text-xl font-bold text-green-800">{t.title}</h3>
          </div>
          <p className="text-green-700 text-sm">{t.subtitle}</p>
        </div>

        {/* Site Comparison */}
        <div className="space-y-4 mb-6">
          {/* Current Site */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-red-700">
                {t.currentSite}
              </span>
              <Badge variant="destructive" className="text-xs">
                {t.suspicious}
              </Badge>
            </div>
            <p className="text-red-600 font-mono text-sm break-all">
              {currentUrl}
            </p>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="h-6 w-6 text-green-600" />
          </div>

          {/* Safe Site */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-green-700">
                {t.safeSite}
              </span>
              <div className="flex gap-1">
                <Badge
                  variant="secondary"
                  className="text-xs bg-green-100 text-green-700"
                >
                  <CheckCircle className="h-3 w-3 mr-1" />
                  {t.verified}
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-xs bg-green-100 text-green-700"
                >
                  <Shield className="h-3 w-3 mr-1" />
                  {t.secure}
                </Badge>
              </div>
            </div>
            <p className="text-green-600 font-mono text-sm break-all">
              {safeUrl}
            </p>
            <p className="text-green-600 text-xs mt-2">{t.description}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={handleRedirect}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
            size="lg"
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            {t.redirectButton}
          </Button>

          <Button
            onClick={handleRedirect}
            variant="outline"
            className="w-full border-green-300 text-green-700 hover:bg-green-50"
          >
            <ArrowRight className="h-4 w-4 mr-2" />
            {t.redirectButtonSecondary}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
