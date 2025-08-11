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
  detailedExplanation: string | null;
  analysisType: "email" | "website" | null;
  selectedLanguage: Language;
  // Image reporting state (social media demo)
  reportedImageIds: string[];
  isImageReported: (imageId: number | string) => boolean;
  markImageReported: (imageId: number | string) => void;
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
  detailedExplanation: null,
  analysisType: null,
  selectedLanguage: "en",
  reportedImageIds: [],

  isImageReported: (imageId: number | string) => {
    const id = String(imageId);
    return get().reportedImageIds.includes(id);
  },

  markImageReported: (imageId: number | string) => {
    const id = String(imageId);
    set((state) => {
      if (state.reportedImageIds.includes(id)) return state;
      return { reportedImageIds: [...state.reportedImageIds, id] };
    });
  },

  toggleExtension: () =>
    set((state) => ({
      isActive: !state.isActive,
      riskScore: null,
      riskLevel: null,
      explanation: null,
      detailedExplanation: null,
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
        EmailExplanations[riskLevel].short[
          lang as keyof (typeof EmailExplanations)[typeof riskLevel]["short"]
        ] ?? EmailExplanations[riskLevel].short["en"];

      const detailedExplanation =
        EmailExplanations[riskLevel].detailed[
          lang as keyof (typeof EmailExplanations)[typeof riskLevel]["detailed"]
        ] ?? EmailExplanations[riskLevel].detailed["en"];

      set({
        isAnalyzing: false,
        riskScore,
        riskLevel,
        explanation,
        detailedExplanation,
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
      detailedExplanation: null,
      analysisType: null,
    }),

  resetExtension: () =>
    set({
      isActive: false,
      isAnalyzing: false,
      riskScore: null,
      riskLevel: null,
      explanation: null,
      detailedExplanation: null,
      analysisType: null,
      // Intentionally do not reset reportedImageIds so reported state persists during demo navigation
    }),

  setLanguage: (language: Language) =>
    set((state) => {
      let newExplanation = state.explanation;
      let newDetailedExplanation = state.detailedExplanation;
      if (state.analysisType === "email" && state.riskLevel) {
        newExplanation =
          EmailExplanations[state.riskLevel].short[
            language as keyof (typeof EmailExplanations)[typeof state.riskLevel]["short"]
          ] ?? EmailExplanations[state.riskLevel].short["en"];
        newDetailedExplanation =
          EmailExplanations[state.riskLevel].detailed[
            language as keyof (typeof EmailExplanations)[typeof state.riskLevel]["detailed"]
          ] ?? EmailExplanations[state.riskLevel].detailed["en"];
      } else if (state.analysisType === "website") {
        newExplanation =
          WebsiteExplanations[language as keyof typeof WebsiteExplanations] ??
          WebsiteExplanations["en"];
      }
      return { 
        selectedLanguage: language, 
        explanation: newExplanation,
        detailedExplanation: newDetailedExplanation 
      };
    }),

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
      // No native alerts for image reporting; rely on in-app success modal
      if (data && "imageId" in (data as ImageScamData) && (data as ImageScamData).imageId !== undefined) {
        const id = String((data as ImageScamData).imageId);
        set((state) => {
          if (state.reportedImageIds.includes(id)) return state;
          return { reportedImageIds: [...state.reportedImageIds, id] };
        });
      }
    }

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
  },
}));
