// data/store/Languages.ts

export type LanguageCode =
  | "en"
  | "ms"
  | "zh"
  | "vi"
  | "th"
  | "fil"
  | "id"
  | "jv"
  | "su"
  | "km"
  | "lo"
  | "my"
  | "ta";

export type LanguageSelection = {
  code: LanguageCode;
  name: string;
  flag: string;
};

export const LanguageSelections: readonly LanguageSelection[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ms", name: "Bahasa Melayu", flag: "🇲🇾" },
  { code: "zh", name: "中文 (Chinese)", flag: "🇨🇳" },
  { code: "vi", name: "Tiếng Việt (Vietnamese)", flag: "🇻🇳" },
  { code: "th", name: "ภาษาไทย (Thai)", flag: "🇹🇭" },
  { code: "fil", name: "Filipino", flag: "🇵🇭" },
  { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "jv", name: "Basa Jawa (Javanese)", flag: "🇮🇩" },
  { code: "su", name: "Basa Sunda (Sundanese)", flag: "🇮🇩" },
  { code: "km", name: "ភាសាខ្មែរ (Khmer)", flag: "🇰🇭" },
  { code: "lo", name: "ພາສາລາວ (Lao)", flag: "🇱🇦" },
  { code: "my", name: "မြန်မာစာ (Burmese)", flag: "🇲🇲" },
  { code: "ta", name: "தமிழ் (Tamil)", flag: "🇸🇬" }, // You can adjust flag if needed
] as const;

// 👇 Now use language codes as source of truth
export const SupportedLanguages = LanguageSelections.map(
  (lang) => lang.code
) as readonly LanguageCode[];

export type SupportedLanguage = (typeof SupportedLanguages)[number];
