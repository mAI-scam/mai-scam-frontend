"use client";
// test

import Link from "next/link";
import Image from "next/image";
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
import { FeatureCardData } from "@/data/main/FeatureCardData";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-6 pb-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-12 mx-auto">
          {/* Identity Text */}
          <div className="font-bold mb-6 py-4">
            {/* Title */}
            <h1 className="text-6xl md:text-8xl text-[#49A4EF]">
              <span>m</span>
              <span className="text-[#EB6700]">AI</span>
              <span>scam</span>
            </h1>
            {/* Subtitle */}
            <h2 className="text-xl md:text-3xl text-[#6FBDF4]">
              an MCP-Powered Web Extension
            </h2>
          </div>

          {/* Buttons */}
          {/* <div className="flex justify-center gap-4 mb-6">
            <Button asChild size="lg">
              <Link href="/email-demo">Try Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#features">Learn More</a>
            </Button>
          </div> */}

          {/* Description */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left max-w-4xl mx-auto">
            <p className="text-sm text-blue-800">
              <strong>📱 Browser Extension Demo:</strong> This website
              demonstrates how the mAIscam Chrome extension works in real
              browsers. The actual extension integrates seamlessly into your
              browsing experience to protect against scams across emails,
              websites, and social media platforms.
            </p>
          </div>

          {/* Problem */}
          {/* <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left max-w-2xl mx-auto">
            <p className="text-sm text-red-800">
              <strong>The Problem:</strong> Financial scams devastate Southeast
              Asia with cybercrime surging 82% and generating $43.8B annually.
              Criminal syndicates exploit 63% social media penetration and
              linguistic diversity, while current solutions remain reactive and
              lack cultural intelligence.
            </p>
          </div> */}

          {/* Features Section */}
          <div id="features" className="grid md:grid-cols-3 gap-8 max-w-5xl">
            {FeatureCardData.map((item, idx) => (
              <FeatureCard key={idx} {...item} />
            ))}
          </div>
        </section>

        {/* Instructions Section */}
        <section className="mb-12 max-w-5xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">
                    How to Experience the Web Extension Demo
                  </h3>
                  <ol className="space-y-1 text-sm text-gray-700">
                    <li>
                      1. Choose a demo scenario below (Email Client, Website, or
                      Social Media Feed)
                    </li>
                    <li>
                      2. Click{" "}
                      <span className="font-semibold">
                        &quot;Activate mAIscam&quot;
                      </span>{" "}
                      to simulate the browser extension being active
                    </li>
                    <li>
                      3. Interact with the simulated environment to see how the
                      extension detects and blocks scams
                    </li>
                    <li>
                      4. In Social Media demo: Click on AI-flagged images to see
                      OCR analysis in action
                    </li>
                    <li className="text-blue-700 font-medium">
                      🔧 Note: This simulates the actual Chrome extension
                      experience
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Our Features */}
        <section className="mb-12 flex max-w-5xl mx-auto gap-8">
          {/* Left - Content */}
          <Card className="flex-2">
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                Our Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Badge className="w-8 h-8 rounded-full p-0 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">1</span>
                </Badge>
                <div>
                  <h4 className="font-semibold mb-1">
                    Connected AI Agent Network
                  </h4>
                  <p className="text-muted-foreground">
                    Multi-agent system using MCP to access real-time threat
                    intelligence, financial APIs, and regulatory feeds while
                    analyzing emails, websites, and OCR-extracted webpage
                    images. Provides instant fraud scores with cross-verified
                    explanations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Badge className="w-8 h-8 rounded-full p-0 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">2</span>
                </Badge>
                <div>
                  <h4 className="font-semibold mb-1">
                    Adaptive Response AI Agents
                  </h4>
                  <p className="text-muted-foreground">
                    Decision-making agents automatically block high-risk sites,
                    coordinating via MCP integrations to notify authorities and
                    anti-fraud platforms while continuously evolving through
                    reinforcement learning.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Badge className="w-8 h-8 rounded-full p-0 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">3</span>
                </Badge>
                <div>
                  <h4 className="font-semibold mb-1">
                    Cultural Intelligence & MCP Evolution
                  </h4>
                  <p className="text-muted-foreground">
                    Supports 13 Southeast Asian languages with contextual,
                    culturally-tailored threat explanations. The MCP-powered
                    ecosystem continuously evolves through reinforcement
                    learning, autonomously improving regional scam pattern
                    recognition.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right - Image */}
          <Card className="flex-1">
            <div className="relative w-full h-64 md:h-full">
              <Image
                src="/images/main_our_features_1.jpg" // replace with your image path
                alt="Our Features Illustration"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </Card>
        </section>

        {/* Why mAIscam */}
        <section className="flex max-w-5xl mx-auto gap-8">
          {/* Left - Image */}
          <Card className="flex-1">
            <div className="relative w-full h-64 md:h-full">
              <Image
                src="/images/main_why_maiscam_1.jpg" // replace with your image path
                alt="Why mAIscam Illustration"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </Card>

          {/* Right - Content */}
          <Card className="flex-2">
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                Why mAIscam
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                mAIscam goes beyond traditional scam detection by combining
                real-time MCP-powered intelligence, adaptive AI agents, and
                cultural context awareness. This ensures scam detection is not
                only accurate, but also relevant to diverse Southeast Asian
                communities.
              </p>
              <p>
                With multilingual support, integration into everyday browsing,
                and automated coordination with trusted anti-fraud platforms,
                mAIscam empowers users to make informed decisions and stay
                protected against evolving digital threats.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 mt-16 border-t">
        <div className="text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} mAIscam Web Extension Demo. Showcasing
            browser-based scam protection for Southeast Asia.
          </p>
          <p className="text-sm mt-2">
            This demo website simulates the actual Chrome extension
            functionality.
          </p>
        </div>
      </footer>
    </div>
  );
}
