"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, FileText, CreditCard, Gift } from "lucide-react";
import { useExtensionStore } from "@/lib/store/extensionStore";

const scamImages = [
  {
    id: 1,
    title: "Fake Government Aid",
    subtitle: "2025 MADANI Business Benefits",
    description: "Poster offering free laptops/tablets from government",
    image: "/images/scam_gov_aid_example.jpeg",
    icon: FileText,
    category: "Government",
    language: "chinese",
    riskLevel: "high",
    content:
      "老板们的政府津贴即将开放申请! 2025 MADANI 商家福利! FREE! 申请成功可免费得到手提电脑/平板电脑!",
  },
  {
    id: 2,
    title: "SMS Parcel Scam",
    subtitle: "J&T Express Alert",
    description: "Fake delivery notification with phishing link",
    image: "/images/scam_sms_example.jpeg",
    icon: Smartphone,
    category: "SMS",
    language: "malay",
    riskLevel: "high",
    content:
      "J&T Express Courier: I regret to inform you that the label on your order is damaged. Please confirm your address online within 24 hours.",
  },
  {
    id: 3,
    title: "Investment Fraud",
    subtitle: "ANGKASA 12% Returns",
    description: "Unrealistic investment returns promise",
    image: "/images/scam_investment_example.jpg",
    icon: CreditCard,
    category: "Investment",
    language: "chinese",
    riskLevel: "high",
    content:
      "让您的储蓄为您赚钱! 年回酬高达12% Simpanan Pintar, Pulangan Sehingga 12% Setahun!",
  },
  {
    id: 4,
    title: "Fake Giveaway",
    subtitle: "Hotlink RM50 Credit",
    description: "Impersonating telco for fake Touch n Go credits",
    image: "/images/scam_giveaway_example.jpg",
    icon: Gift,
    category: "Giveaway",
    language: "malay",
    riskLevel: "high",
    content:
      "GIVEAWAY RM50 HOTLINK POSTPAID 5G PERCUMA RM50 Kredit TNG Touch n Go eWallet CREDIT PELUANG TERHAD",
  },
];

export type ScamImage = (typeof scamImages)[number];

interface ImageGalleryProps {
  onImageClick: (image: ScamImage) => void;
}

export function ImageGallery({ onImageClick }: ImageGalleryProps) {
  const { isActive } = useExtensionStore();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Scam Image Examples</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Click on any image below to see how mAIscam uses OCR and cultural
          intelligence to detect scams hidden within screenshots and images
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {scamImages.map((image) => (
          <Card
            key={image.id}
            className="overflow-hidden cursor-pointer hover:shadow-xl transition-all transform hover:scale-[1.02]"
            onClick={() => onImageClick(image)}
          >
            <div className="relative aspect-[4/3] bg-gray-100">
              <Image
                src={image.image}
                alt={image.title}
                fill
                className={`object-cover ${isActive ? 'filter blur-sm' : ''}`}
              />
              {isActive && (
                <Badge variant="destructive" className="absolute top-2 right-2">
                  High Risk
                </Badge>
              )}
            </div>

            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-lg ${
                    image.category === "Government"
                      ? "bg-blue-100"
                      : image.category === "SMS"
                      ? "bg-green-100"
                      : image.category === "Investment"
                      ? "bg-purple-100"
                      : "bg-orange-100"
                  }`}
                >
                  <image.icon
                    className={`h-5 w-5 ${
                      image.category === "Government"
                        ? "text-blue-600"
                        : image.category === "SMS"
                        ? "text-green-600"
                        : image.category === "Investment"
                        ? "text-purple-600"
                        : "text-orange-600"
                    }`}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {image.subtitle}
                  </p>
                  <p className="text-sm mt-1">{image.description}</p>

                  <div className="flex items-center gap-2 mt-3">
                    <Badge variant="outline" className="text-xs">
                      {image.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {image.language === "chinese" ? "中文" : "Bahasa"}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
