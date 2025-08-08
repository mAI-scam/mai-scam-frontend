import { create } from "zustand";
import {
  EmailExplanations,
  WebsiteExplanations,
} from "@/data/email-demo/EmailExplanationData";
import { ScamKeywords } from "@/data/email-demo/ScamKeywords";
import type { LanguageCode } from "@/data/store/Languages";

export type Language = LanguageCode;
export type RiskLevel = "low" | "medium" | "high";

type EmailScamData = {
  subject: string;
  body: string;
  url?: string;
};

type WebsiteScamData = {
  url: string;
};

type ImageScamData = {
  imageId: number | string;
  description?: string;
  source?: "social" | "messaging" | "WhatsApp/Social Media";
  url?: string;
};

type ScamReportData = EmailScamData | WebsiteScamData | ImageScamData;

interface ExtensionState {
  isActive: boolean;
  isAnalyzing: boolean;
  riskScore: number | null;
  riskLevel: "low" | "medium" | "high" | null;
  explanation: string | null;
  analysisType: "email" | "website" | null;
  selectedLanguage: Language;
  toggleExtension: () => void;
  analyzeContent: (content: string, type: "email" | "website") => void;
  resetAnalysis: () => void;
  resetExtension: () => void;
  setLanguage: (language: Language) => void;
  reportScam: (
    type: "email" | "website" | "image",
    data?: ScamReportData
  ) => Promise<void>;
}

export const useExtensionStore = create<ExtensionState>((set, get) => ({
  isActive: false,
  isAnalyzing: false,
  riskScore: null,
  riskLevel: null,
  explanation: null,
  analysisType: null,
  selectedLanguage: "ms",

  toggleExtension: () =>
    set((state) => ({
      isActive: !state.isActive,
      riskScore: null,
      riskLevel: null,
      explanation: null,
      analysisType: null,
    })),

  analyzeContent: async (content: string, type: "email" | "website") => {
    set({ isAnalyzing: true, analysisType: type });

    // Simulate API call to LLM with realistic delay
    await new Promise((resolve) => setTimeout(resolve, 2500));

    const lang = get().selectedLanguage;

    if (type === "email") {
      const foundKeywords = ScamKeywords.filter((keyword) =>
        content.toLowerCase().includes(keyword.toLowerCase())
      );

      const baseScore = Math.min(foundKeywords.length * 12, 90);
      const riskScore = baseScore + Math.floor(Math.random() * 5) + 5;

      let riskLevel: RiskLevel = "low";
      if (riskScore >= 80) riskLevel = "high";
      else if (riskScore >= 50) riskLevel = "medium";

      const explanation =
        EmailExplanations[riskLevel][
          lang as keyof (typeof EmailExplanations)[typeof riskLevel]
        ] ?? EmailExplanations[riskLevel]["en"];

      set({
        isAnalyzing: false,
        riskScore,
        riskLevel,
        explanation,
      });
    } else if (type === "website") {
      // Website analysis - always high risk for the demo
      const riskScore = 95 + Math.floor(Math.random() * 4);

      const explanation =
        WebsiteExplanations[lang as keyof typeof WebsiteExplanations] ??
        WebsiteExplanations["en"];

      set({
        isAnalyzing: false,
        riskScore,
        riskLevel: "high",
        explanation: explanation,
      });
    }
  },

  resetAnalysis: () =>
    set({
      riskScore: null,
      riskLevel: null,
      explanation: null,
      analysisType: null,
    }),

  resetExtension: () =>
    set({
      isActive: false,
      isAnalyzing: false,
      riskScore: null,
      riskLevel: null,
      explanation: null,
      analysisType: null,
    }),

  setLanguage: (language: Language) => set({ selectedLanguage: language }),

  reportScam: async (
    type: "email" | "website" | "image",
    data?: ScamReportData
  ) => {
    // Mock implementation for demo purposes
    console.log(`Reporting ${type} scam:`, data);

    if (type === "email") {
      // Mock: Forward to Anti-Phishing Working Group
      alert(
        "Demo: Email akan diteruskan ke reportphishing@apwg.org\n\nDalam implementasi sebenar, email ini akan dihantar secara automatik."
      );
    } else if (type === "website") {
      // Mock: Report to Google Safe Browsing and PhishTank
      const url = data?.url || "deal-raya-123.com";
      alert(
        `Demo: Laman web akan dilaporkan ke:\n\n1. Google Safe Browsing\n2. PhishTank (https://www.phishtank.com/)\n\nURL: ${url}\n\nDalam implementasi sebenar, laporan akan dihantar melalui API.`
      );
    } else if (type === "image") {
      // Mock: Report based on source
      alert(
        "Demo: Imej penipuan akan dilaporkan berdasarkan sumber\n\nJika dari media sosial, akan dilaporkan ke platform tersebut.\nJika dari WhatsApp/Telegram, akan dilaporkan ke MCMC."
      );
    }

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
  },
}));
