import { Mail, Globe, Camera, LucideIcon } from "lucide-react";
import { colorSchemes, type ColorScheme } from "@/data/DemoInstructionData";

export type FeatureCardItem = {
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
  colorScheme: ColorScheme;
};

export const FeatureCardData: FeatureCardItem[] = [
  {
    title: "Email Protection",
    description:
      "Analyzes emails for phishing attempts and scam indicators with explanations in your native language",
    link: "/email-demo",
    icon: Mail,
    colorScheme: "brown",
  },
  {
    title: "Website Blocking",
    description:
      "Automatically blocks high-risk websites and provides real-time warnings for suspicious sites",
    link: "/website-demo",
    icon: Globe,
    colorScheme: "orange",
  },
  {
    title: "Social Media Analysis",
    description:
      "Extract and analyze text from images to identify potential scams in screenshots and photos",
    link: "/image-demo",
    icon: Camera,
    colorScheme: "purple",
  },
];

// Helper function to get color styles for feature cards
export const getFeatureCardStyles = (colorScheme: ColorScheme) => {
  const colors = colorSchemes[colorScheme];
  return {
    // Card background and border - same as demo banners
    cardBg: colors.bg,
    cardBorder: colors.border,
    // Icon styling
    iconColor: colors.iconColor,
    iconBg:
      colorScheme === "brown"
        ? "bg-stone-100 group-hover:bg-stone-200"
        : colorScheme === "orange"
        ? "bg-orange-100 group-hover:bg-orange-200"
        : "bg-purple-100 group-hover:bg-purple-200",
    // Text colors - same as demo banners
    titleColor: colors.titleColor,
    textColor: colors.textColor,
  };
};
