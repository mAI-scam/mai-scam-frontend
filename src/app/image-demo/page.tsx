"use client";

import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { ScamImage } from "@/components/image-demo/ImageGallery";
import { ImageAnalysisModal } from "@/components/image-demo/ImageAnalysisModal";

import { FacebookSidebar } from "@/components/image-demo/FacebookSidebar";
import { FacebookFeed } from "@/components/image-demo/FacebookFeed";
import { FacebookScamBlockOverlay } from "@/components/image-demo/FacebookScamBlockOverlay";
import { FacebookSafeContentOverlay } from "@/components/image-demo/FacebookSafeContentOverlay";
import { useExtensionStore } from "@/lib/store/extensionStore";
import { Facebook } from "lucide-react";
import { useSocialMediaTour } from "@/lib/useSocialMediaTour";
import { Header } from "@/components/Header";
import { ScrollProvider } from "@/lib/ScrollContext";

type PostScamImage = {
  id: number;
  title: string;
  description: string;
  riskLevel: string;
  language: string;
  category: string;
  content: string;
};

export default function ImageDemoPage() {
  const [selectedImage, setSelectedImage] = useState<ScamImage | null>(null);
  const [showBlockOverlay, setShowBlockOverlay] =
    useState<PostScamImage | null>(null);
  const [showSafeOverlay, setShowSafeOverlay] = useState<PostScamImage | null>(
    null
  );
  const { isActive, resetExtension, setLanguage } = useExtensionStore();
  const { startTour } = useSocialMediaTour();

  // Reset extension and set default language to English on entering the page
  useEffect(() => {
    resetExtension();
    setLanguage("en");
  }, [resetExtension, setLanguage]);

  const handleImageClick = (scamImage: PostScamImage) => {
    if (isActive) {
      // Check if it's a low-risk (safe) content
      if (scamImage.riskLevel === "low") {
        setShowSafeOverlay(scamImage);
      } else {
        // Show the blocking overlay for scam content
        setShowBlockOverlay(scamImage);
      }
    }
  };

  const handleCloseBlockOverlay = () => {
    setShowBlockOverlay(null);
  };

  const handleCloseSafeOverlay = () => {
    setShowSafeOverlay(null);
  };

  return (
    <ScrollProvider>
      <div className="min-h-screen bg-gray-100 relative">
        {/* Unified Header Component */}
        <Header
          demoType="image"
          title="Social Media Scam Detection Demo"
          icon={<Facebook className="h-5 w-5" />}
          onStartTour={startTour}
          colorScheme="purple"
          websiteUrl="facebook.com"
        />

        {/* Desktop: Show sidebar and content */}
        <div className="hidden lg:block">
          <FacebookSidebar />
          <div className="flex">
            {/* Main Content Area */}
            <div className="flex-1 lg:ml-80 min-h-screen">
              <div className="py-6 px-4">
                <FacebookFeed onImageClick={handleImageClick} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Show only content, no sidebar */}
        <div className="lg:hidden">
          <div className="py-6 px-4">
            <FacebookFeed onImageClick={handleImageClick} />
          </div>
        </div>

        {/* Facebook Scam Block Overlay */}
        {showBlockOverlay && (
          <FacebookScamBlockOverlay
            scamImage={showBlockOverlay}
            onClose={handleCloseBlockOverlay}
          />
        )}

        {/* Facebook Safe Content Overlay */}
        {showSafeOverlay && (
          <FacebookSafeContentOverlay
            safeImage={showSafeOverlay}
            onClose={handleCloseSafeOverlay}
          />
        )}

        {/* Original Image Analysis Modal (fallback) */}
        <ImageAnalysisModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      </div>
    </ScrollProvider>
  );
}
