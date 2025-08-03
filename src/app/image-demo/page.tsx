"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ImageGallery, ScamImage } from "@/components/image-demo/ImageGallery";
import { ImageAnalysisModal } from "@/components/image-demo/ImageAnalysisModal";
import { WebExtensionOverlay } from "@/components/email-demo/WebExtensionOverlay";
import { useExtensionStore } from "@/lib/store/extensionStore";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScanLine, Shield, Globe, AlertTriangle } from "lucide-react";

export default function ImageDemoPage() {
  const [selectedImage, setSelectedImage] = useState<ScamImage | null>(null);
  const { isActive } = useExtensionStore();

  const handleImageClick = (image: ScamImage) => {
    if (isActive) {
      setSelectedImage(image);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 relative">
      {/* Return to Home Button */}
      <div className="absolute top-4 left-4 z-50">
        <Link href="/">
          <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
      
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <ScanLine className="h-12 w-12 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Image Analysis Demo</h1>
          <p className="text-xl text-muted-foreground">
            See how mAIscam uses{" "}
            <span className="font-semibold">
              Optical Character Recognition (OCR)
            </span>{" "}
            and <span className="font-semibold">Cultural Intelligence</span> to
            detect scams hidden within images
          </p>
        </div>

        {/* How it Works */}
        <Card className="max-w-4xl mx-auto mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">How the Demo Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Activate Extension</h3>
                <p className="text-sm text-muted-foreground">
                  Click the &quot;Activate mAIscam&quot; button to enable the
                  protection
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Choose an Image</h3>
                <p className="text-sm text-muted-foreground">
                  Click on any scam image example below to analyze it
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-red-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">View Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  See instant OCR extraction and localized scam warnings
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <Card>
            <CardContent className="p-6">
              <Shield className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">OCR Technology</h3>
              <p className="text-sm text-muted-foreground">
                Extracts text from images instantly, even from screenshots and
                photos
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Globe className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="font-semibold mb-2">Multi-Language Support</h3>
              <p className="text-sm text-muted-foreground">
                Analyzes content in Malay, Chinese, and other SEA languages
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <AlertTriangle className="h-8 w-8 text-red-600 mb-3" />
              <h3 className="font-semibold mb-2">Cultural Intelligence</h3>
              <p className="text-sm text-muted-foreground">
                Recognizes region-specific scam patterns and tactics
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Extension Status Alert */}
        {!isActive && (
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="border-yellow-200 bg-yellow-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <p className="text-sm">
                    <span className="font-semibold">Extension not active!</span>{" "}
                    Please activate mAIscam extension first to analyze images.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Image Gallery */}
      <ImageGallery onImageClick={handleImageClick} />

      {/* Web Extension Overlay */}
      <WebExtensionOverlay />

      {/* Image Analysis Modal */}
      <ImageAnalysisModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
