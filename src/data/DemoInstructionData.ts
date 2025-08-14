export type ColorScheme = "brown" | "orange" | "purple";

export interface ColorSchemeConfig {
  bg: string;
  border: string;
  iconColor: string;
  titleColor: string;
  textColor: string;
  buttonBg: string;
  buttonShadow: string;
}

export const colorSchemes: Record<ColorScheme, ColorSchemeConfig> = {
  brown: {
    bg: "bg-stone-50",
    border: "border-stone-300",
    iconColor: "text-stone-700",
    titleColor: "text-stone-800",
    textColor: "text-stone-700",
    buttonBg: "#78716c", // stone-600 - firewood brown
    buttonShadow:
      "0 0 30px rgba(120, 113, 108, 0.8), 0 0 60px rgba(120, 113, 108, 0.6), 0 0 90px rgba(120, 113, 108, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    iconColor: "text-orange-600",
    titleColor: "text-orange-800",
    textColor: "text-orange-700",
    buttonBg: "#ea580c", // orange-600
    buttonShadow:
      "0 0 30px rgba(234, 88, 12, 0.8), 0 0 60px rgba(234, 88, 12, 0.6), 0 0 90px rgba(234, 88, 12, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    iconColor: "text-purple-600",
    titleColor: "text-purple-800",
    textColor: "text-purple-700",
    buttonBg: "#9333ea", // purple-600
    buttonShadow:
      "0 0 30px rgba(147, 51, 234, 0.8), 0 0 60px rgba(147, 51, 234, 0.6), 0 0 90px rgba(147, 51, 234, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)",
  },
};
