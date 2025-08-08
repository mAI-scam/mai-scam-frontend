"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Mail, Globe, Camera } from "lucide-react";
import Header from "@/components/main/Header";
import FeatureCard from "@/components/main/FeatureCard";
import { featureCardData } from "@/data/main/featureCardData";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span>Southeast Asia&apos;s First </span>
            <br />
            <span>
              <span className="text-[#EB6700]">AI-Powered </span>
              <span className="text-[#49A4EF]">Anti-Scam</span> Extension
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Protecting millions across 13 languages with real-time scam
            detection powered by SEA-LION LLM
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/email-demo">Try Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#features">Learn More</a>
            </Button>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section id="features" className="grid md:grid-cols-3 gap-8 mb-16">
          {featureCardData.map((item, idx) => (
            <FeatureCard key={idx} {...item} />
          ))}
        </section>

        {/* Instruction Section */}
        <section className="mb-8 max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">
                    How to Use mAIscam Demo
                  </h3>
                  <ol className="space-y-1 text-sm text-gray-700">
                    <li>
                      1. Click on any demo below (Email, Website, or Image)
                    </li>
                    <li>
                      2. Activate the extension by clicking{" "}
                      <span className="font-semibold">
                        &quot;Activate mAIscam&quot;
                      </span>{" "}
                      button
                    </li>
                    <li>
                      3. Interact with the demo to see real-time scam detection
                      in action
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Selling Points Section */}
        <section className="mb-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                Why mAIscam?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Badge className="w-8 h-8 rounded-full p-0 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">1</span>
                </Badge>
                <div>
                  <h4 className="font-semibold mb-1">Real-time Detection</h4>
                  <p className="text-muted-foreground">
                    Analyzes emails, websites, and OCR-extracted text from
                    images using SEA-LION LLM, providing instant fraud risk
                    scores with explanations in user-selectable SEA languages.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Badge className="w-8 h-8 rounded-full p-0 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">2</span>
                </Badge>
                <div>
                  <h4 className="font-semibold mb-1">Smart Blocking</h4>
                  <p className="text-muted-foreground">
                    Automatically blocks high-risk sites while offering informed
                    user choice, integrated reporting to relevant authorities
                    and anti-fraud platforms.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Badge className="w-8 h-8 rounded-full p-0 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">3</span>
                </Badge>
                <div>
                  <h4 className="font-semibold mb-1">Cultural Intelligence</h4>
                  <p className="text-muted-foreground">
                    Supports 13 Southeast Asian languages with contextual,
                    culturally-tailored threat explanations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 mt-16 border-t">
        <div className="text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} mAIscam. Protecting Southeast Asia from
            online scams.
          </p>
        </div>
      </footer>
    </div>
  );
}
