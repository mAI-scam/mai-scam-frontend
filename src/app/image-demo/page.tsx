"use client";

import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { ScamImage } from "@/components/image-demo/ImageGallery";
import { ImageAnalysisModal } from "@/components/image-demo/ImageAnalysisModal";
import { WebExtensionOverlay } from "@/components/email-demo/WebExtensionOverlay";
import { FacebookHeader } from "@/components/image-demo/FacebookHeader";
import { FacebookSidebar } from "@/components/image-demo/FacebookSidebar";
import { FacebookFeed } from "@/components/image-demo/FacebookFeed";
import { FacebookScamBlockOverlay } from "@/components/image-demo/FacebookScamBlockOverlay";
import { useExtensionStore } from "@/lib/store/extensionStore";
import { Shield, AlertTriangle, Facebook } from "lucide-react";
import { useSocialMediaTour } from "@/lib/useSocialMediaTour";

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
  const [showBlockOverlay, setShowBlockOverlay] = useState<PostScamImage | null>(null);
  const { isActive, resetExtension, setLanguage } = useExtensionStore();
  const { startTour } = useSocialMediaTour();

  // Reset extension and set default language to English on entering the page
  useEffect(() => {
    resetExtension();
    setLanguage("en");
  }, [resetExtension, setLanguage]);

  const handleImageClick = (scamImage: PostScamImage) => {
    if (isActive) {
      // Show the blocking overlay instead of analysis modal for Facebook demo
      setShowBlockOverlay(scamImage);
    }
  };

  const handleCloseBlockOverlay = () => {
    setShowBlockOverlay(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative" style={{ '--banner-height': '76px' } as React.CSSProperties}>
      {/* Demo Instructions Banner */}
      <div className="bg-blue-50 border-b border-blue-200 py-3 px-4 text-center sticky top-0 z-50">
        {/* Return to Home Button - Now positioned within banner */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 flex gap-2">
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/90 backdrop-blur-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Button 
            onClick={startTour}
            variant="default" 
            size="sm" 
            className="bg-primary/90 backdrop-blur-sm"
          >
            <Play className="h-4 w-4 mr-2" />
            Start Tour
          </Button>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Facebook className="h-5 w-5 text-blue-600" />
            <span className="font-semibold text-blue-800">Social Media Scam Detection Demo</span>
          </div>
          <p className="text-sm text-blue-700">
            {!isActive ? (
              <>
                <AlertTriangle className="h-4 w-4 inline mr-1" />
                <span className="font-semibold">Extension not active!</span> Activate mAIscam extension first, then click on any suspicious image in posts to analyze and block scam content with AI-powered OCR.
              </>
            ) : (
              <>
                <Shield className="h-4 w-4 inline mr-1" />
                <span className="font-semibold">AI Protection Active!</span> Our connected AI agents are monitoring posts. Click on any flagged image to see real-time scam detection and automated blocking in action.
              </>
            )}
          </p>
        </div>
      </div>

      {/* Facebook Interface */}
      <FacebookHeader />
      
      <div className="flex">
        <FacebookSidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 lg:ml-80 min-h-screen">
          <div className="py-6 px-4">
            <FacebookFeed onImageClick={handleImageClick} />
          </div>
        </div>
      </div>

      {/* Web Extension Overlay */}
      <div id="image-overlay">
        <WebExtensionOverlay />
      </div>

      {/* Facebook Scam Block Overlay */}
      {showBlockOverlay && (
        <FacebookScamBlockOverlay
          scamImage={showBlockOverlay}
          onClose={handleCloseBlockOverlay}
        />
      )}

      {/* Original Image Analysis Modal (fallback) */}
      <ImageAnalysisModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
