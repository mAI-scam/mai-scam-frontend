"use client";

import { Shield, AlertTriangle, Info, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useExtensionStore, Language } from "@/lib/store/extensionStore";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useState } from "react";

const translations = {
  en: {
    spamWarning: "Why is this message in spam? It is similar to messages that have been identified as spam in the past.",
    reportNotSpam: "Report not spam",
    highRiskWarning: "HIGH RISK WARNING",
    risk: "RISK",
    high: "HIGH",
    medium: "MEDIUM",
    low: "LOW",
    emailSubject: "The subject 'IMPORTANT: Your Account Has Been Frozen - Immediate Action Required' creates a sense of urgency, a common tactic in phishing attempts to encourage immediate action without careful consideration.",
    noPersonalization: "This email lacks legitimate personalization for real banking offers.",
    enterInfo: "Additionally, the instruction to 'enter information' is a major red flag and could be part of fraudulent practices to steal your credentials.",
    suspiciousLinks: "This email also contains several suspicious links that could potentially lead to malicious websites.",
    falseUrgency: "False urgency",
    suspiciousPromo: "Suspicious promotional offers",
    lackPersonalization: "Lack of personalization",
    fraudPotential: "Potential for fraudulent practices",
    recommendedAction: "Recommended Action:",
    recommendedActionText: "Do not interact with any links or download any attachments from this email. Mark the email as spam and delete it. If you're interested in verifying your account status, contact your bank directly through their official website or customer service to confirm.",
    reportFraud: "REPORT FRAUD",
    dismiss: "DISMISS",
    reportingScam: "Reporting scam..."
  },
  ms: {
    spamWarning: "Mengapa mesej ini dalam spam? Ia serupa dengan mesej yang telah dikenal pasti sebagai spam pada masa lalu.",
    reportNotSpam: "Laporkan bukan spam",
    highRiskWarning: "AMARAN RISIKO TINGGI",
    risk: "RISIKO",
    high: "TINGGI",
    medium: "SEDERHANA",
    low: "RENDAH",
    emailSubject: "Subjek 'PENTING: Akaun Anda Telah Dibekukan - Tindakan Segera Diperlukan' mencipta rasa keperluan segera, taktik biasa dalam percubaan pancingan data untuk mendorong tindakan segera tanpa pertimbangan yang teliti.",
    noPersonalization: "E-mel ini tidak mempunyai personalisasi yang sah untuk tawaran perbankan yang sebenar.",
    enterInfo: "Selain itu, arahan untuk 'masukkan maklumat' adalah amaran besar dan boleh menjadi sebahagian daripada amalan menipu untuk mencuri kredensial anda.",
    suspiciousLinks: "E-mel ini juga mengandungi beberapa pautan yang mencurigakan yang berpotensi membawa ke laman web berniat jahat.",
    falseUrgency: "Keperluan palsu",
    suspiciousPromo: "Tawaran promosi yang mencurigakan",
    lackPersonalization: "Kekurangan personalisasi",
    fraudPotential: "Potensi untuk amalan menipu",
    recommendedAction: "Tindakan Yang Disyorkan:",
    recommendedActionText: "Jangan berinteraksi dengan mana-mana pautan atau muat turun sebarang lampiran dari e-mel ini. Tandakan e-mel sebagai spam dan padamkannya. Jika anda berminat untuk mengesahkan status akaun anda, hubungi bank anda secara langsung melalui laman web rasmi mereka atau perkhidmatan pelanggan untuk mengesahkan.",
    reportFraud: "LAPORKAN PENIPUAN",
    dismiss: "TOLAK",
    reportingScam: "Melaporkan penipuan..."
  },
  zh: {
    spamWarning: "为什么此消息在垃圾邮件中？它与过去被识别为垃圾邮件的消息相似。",
    reportNotSpam: "报告非垃圾邮件",
    highRiskWarning: "高风险警告",
    risk: "风险",
    high: "高",
    medium: "中",
    low: "低",
    emailSubject: "主题"重要：您的账户已被冻结 - 需要立即采取行动"制造了紧迫感，这是网络钓鱼企图中的常见策略，鼓励立即采取行动而不仔细考虑。",
    noPersonalization: "此电子邮件缺乏真实银行优惠的合法个性化。",
    enterInfo: "此外，"输入信息"的指示是一个重大危险信号，可能是窃取您凭据的欺诈行为的一部分。",
    suspiciousLinks: "此电子邮件还包含几个可疑链接，可能会导致恶意网站。",
    falseUrgency: "虚假紧急性",
    suspiciousPromo: "可疑的促销优惠",
    lackPersonalization: "缺乏个性化",
    fraudPotential: "欺诈行为的可能性",
    recommendedAction: "建议采取的行动：",
    recommendedActionText: "不要与此电子邮件中的任何链接互动或下载任何附件。将电子邮件标记为垃圾邮件并删除。如果您有兴趣验证您的账户状态，请直接通过其官方网站或客户服务联系您的银行进行确认。",
    reportFraud: "举报欺诈",
    dismiss: "忽略",
    reportingScam: "正在举报诈骗..."
  }
};

export function RiskAnalysisBlock() {
  const { isAnalyzing, riskScore, riskLevel, explanation, selectedLanguage, reportScam } = useExtensionStore();
  const [isReporting, setIsReporting] = useState(false);
  const t = translations[selectedLanguage];

  if (!riskScore) return null;

  const handleReport = async () => {
    setIsReporting(true);
    await reportScam("email", { 
      subject: "PENTING: Akaun Anda Telah Dibekukan - Tindakan Segera Diperlukan",
      sender: "service@secure-banknegara-verification.com"
    });
    setIsReporting(false);
  };

  return (
    <div className="mb-4">
      {/* Language Selector */}
      <div className="flex justify-end mb-4">
        <LanguageSelector />
      </div>

      {/* Gmail-style spam warning */}
      <Alert className="mb-4 border-yellow-500 bg-yellow-50">
        <AlertDescription className="text-sm text-gray-700">
          <strong>{t.spamWarning}</strong>
        </AlertDescription>
        <Button variant="outline" size="sm" className="mt-2">
          {t.reportNotSpam}
        </Button>
      </Alert>

      {/* Risk Analysis Card */}
      <Card
        className={`border-l-4 ${
          riskLevel === "high"
            ? "border-l-red-500"
            : riskLevel === "medium"
            ? "border-l-yellow-500"
            : "border-l-green-500"
        }`}
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-gray-600" />
              <h3 className="text-lg font-semibold text-red-600">{t.highRiskWarning}</h3>
            </div>
            <Badge variant="destructive" className="text-base px-3 py-1">
              {t.risk}: {t[riskLevel || "high"].toUpperCase()}
            </Badge>
          </div>

          <p className="text-sm text-gray-700 mb-4 leading-relaxed whitespace-pre-line">
            {explanation}
          </p>

          {riskLevel === "high" && (
            <>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">{t.falseUrgency}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">{t.suspiciousPromo}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">{t.lackPersonalization}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">{t.fraudPotential}</span>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-sm mb-2">{t.recommendedAction}</h4>
                <p className="text-sm text-gray-700">
                  {t.recommendedActionText}
                </p>
              </div>
            </>
          )}

          <div className="flex gap-3">
            <Button 
              variant="destructive" 
              className="font-medium"
              onClick={handleReport}
              disabled={isReporting}
            >
              {isReporting ? t.reportingScam : t.reportFraud}
            </Button>
            <Button variant="outline">
              {t.dismiss}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}