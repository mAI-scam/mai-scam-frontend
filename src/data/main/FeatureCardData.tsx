import { Mail, Globe, Camera } from "lucide-react";

export type FeatureCardItem = {
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
  iconStyle: string;
  textColor: string;
};

export const FeatureCardData: FeatureCardItem[] = [
  {
    title: "Email Protection",
    description:
      "Instantly analyzes emails for phishing attempts and scam indicators with explanations in your native language",
    link: "/email-demo",
    icon: <Mail className="h-6 w-6 text-primary" />,
    iconStyle: "bg-primary/10 group-hover:bg-primary/20",
    textColor: "text-primary",
  },
  {
    title: "Website Blocking",
    description:
      "Automatically blocks high-risk websites and provides real-time warnings for suspicious sites",
    link: "/website-demo",
    icon: <Globe className="h-6 w-6 text-green-600" />,
    iconStyle: "bg-green-100 group-hover:bg-green-200",
    textColor: "text-green-600",
  },
  {
    title: "Image Analysis",
    description:
      "Extract and analyze text from images to identify potential scams in screenshots and photos",
    link: "/image-demo",
    icon: <Camera className="h-6 w-6 text-purple-600" />,
    iconStyle: "bg-purple-100 group-hover:bg-purple-200",
    textColor: "text-purple-600",
  },
];
