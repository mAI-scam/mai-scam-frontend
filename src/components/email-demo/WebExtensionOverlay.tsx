'use client';

import { Shield, X, AlertTriangle, CheckCircle, Info, Flag } from 'lucide-react';
import { useExtensionStore } from '@/lib/store/extensionStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LanguageSelector } from '@/components/LanguageSelector';
import { ReportScamModal } from './ReportScamModal';
import { useState } from 'react';

const translations = {
  en: {
    activateExtension: 'Activate mAIscam',
    extensionActive: 'mAIscam Active',
    analyzing: 'Analyzing email...',
    highRisk: 'High Risk',
    mediumRisk: 'Medium Risk',
    lowRisk: 'Low Risk',
    detailsInEmail: 'Full analysis shown in email.',
    viewWarning: 'View Warning Details',
    reportFraud: 'Report Fraud'
  },
  ms: {
    activateExtension: 'Aktifkan mAIscam',
    extensionActive: 'mAIscam Aktif',
    analyzing: 'Menganalisis e-mel...',
    highRisk: 'Risiko Tinggi',
    mediumRisk: 'Risiko Sederhana',
    lowRisk: 'Risiko Rendah',
    detailsInEmail: 'Analisis lengkap ditunjukkan dalam e-mel.',
    viewWarning: 'Lihat Butiran Amaran',
    reportFraud: 'Laporkan Penipuan'
  },
  zh: {
    activateExtension: '激活 mAIscam',
    extensionActive: 'mAIscam 已激活',
    analyzing: '正在分析电子邮件...',
    highRisk: '高风险',
    mediumRisk: '中等风险',
    lowRisk: '低风险',
    detailsInEmail: '完整分析显示在电子邮件中。',
    viewWarning: '查看警告详情',
    reportFraud: '举报欺诈'
  }
};

export function WebExtensionOverlay() {
  const { 
    isActive, 
    isAnalyzing, 
    riskScore, 
    riskLevel, 
    selectedLanguage,
    toggleExtension 
  } = useExtensionStore();
  const [showReportModal, setShowReportModal] = useState(false);

  const t = translations[selectedLanguage];

  if (!isActive) {
    return (
      <div className="fixed right-4 z-50 flex flex-col gap-2" style={{ top: 'calc(var(--banner-height, 0px) + 1rem)' }}>
        <LanguageSelector />
        <Button
          data-tour="activate-button"
          onClick={toggleExtension}
          className="shadow-lg"
        >
          <Shield className="h-5 w-5 mr-2" />
          {t.activateExtension}
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed right-4 z-50" style={{ top: 'calc(var(--banner-height, 0px) + 1rem)' }}>
      <Card className="w-80 shadow-xl" data-tour="active-extension">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold">{t.extensionActive}</span>
            </div>
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={toggleExtension}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {isAnalyzing ? (
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="text-sm text-muted-foreground">{t.analyzing}</p>
            </div>
          ) : riskScore !== null ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {riskLevel === 'high' ? (
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  ) : riskLevel === 'medium' ? (
                    <Info className="h-5 w-5 text-yellow-600" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                  <span className="font-medium">
                    {riskLevel === 'high' ? t.highRisk : 
                     riskLevel === 'medium' ? t.mediumRisk : 
                     t.lowRisk}
                  </span>
                </div>
                <Badge 
                  variant={riskLevel === 'high' ? 'destructive' : 'secondary'}
                  className="text-lg"
                >
                  {riskScore}%
                </Badge>
              </div>
              
              <p className="text-sm text-muted-foreground">
                {t.detailsInEmail}
              </p>
              
              {riskLevel === 'high' && (
                <div className="space-y-2">
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    className="w-full"
                  >
                    {t.viewWarning}
                  </Button>
                  <Button 
                    data-tour="report-button"
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => setShowReportModal(true)}
                  >
                    <Flag className="h-4 w-4 mr-2" />
                    {t.reportFraud}
                  </Button>
                </div>
              )}
            </div>
          ) : null}
        </CardContent>
      </Card>

      {/* Report Scam Modal */}
      <ReportScamModal 
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        emailSender="Bank Negara Malaysia <notifications@banknegara-my.info>"
        emailSubject="PENTING: Akaun Anda Telah Dibekukan - Tindakan Segera Diperlukan"
      />
    </div>
  );
}
