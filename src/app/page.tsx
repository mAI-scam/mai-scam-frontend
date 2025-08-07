"use client";
// Test

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

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">mAIscam</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/email-demo"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Email Demo
            </Link>
            <Link
              href="/website-demo"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Website Demo
            </Link>
            <Link
              href="/image-demo"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Social Media Demo
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-primary">mAIscam</span> - MCP-Powered
            <span className="text-primary"> Web Extension</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Proactive, multilingual scam protection for Southeast Asia using
            connected AI agents and Model Context Protocol
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left max-w-3xl mx-auto">
            <p className="text-sm text-blue-800">
              <strong>📱 Browser Extension Demo:</strong> This website
              demonstrates how the mAIscam Chrome extension works in real
              browsers. The actual extension integrates seamlessly into your
              browsing experience to protect against scams across emails,
              websites, and social media platforms.
            </p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left max-w-2xl mx-auto">
            <p className="text-sm text-red-800">
              <strong>The Problem:</strong> Financial scams devastate Southeast
              Asia with cybercrime surging 82% and generating $43.8B annually.
              Criminal syndicates exploit 63% social media penetration and
              linguistic diversity, while current solutions remain reactive and
              lack cultural intelligence.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/email-demo">Try Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#features">Learn More</a>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-8 max-w-4xl mx-auto">
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
        </div>

        <div id="features" className="grid md:grid-cols-3 gap-8 mb-16">
          <Link href="/email-demo" className="group">
            <Card className="h-full hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email Protection Extension</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Experience how the browser extension&apos;s AI agents analyze
                  emails for phishing attempts using MCP threat intelligence
                  feeds with explanations in 13 SEA languages
                </CardDescription>
                <p className="text-primary mt-4 group-hover:underline">
                  Demo Extension in Email →
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/website-demo" className="group">
            <Card className="h-full hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Website Blocking Extension</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  See how the extension&apos;s adaptive AI agents automatically
                  block high-risk sites and coordinate via MCP to notify
                  authorities and anti-fraud platforms
                </CardDescription>
                <p className="text-green-600 mt-4 group-hover:underline">
                  Demo Extension on Website →
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/image-demo" className="group">
            <Card className="h-full hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Camera className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Social Media Protection Extension</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Simulate how the extension performs real-time scanning of
                  social media posts with OCR text extraction from images.
                  Connected AI agents automatically flag and block scam content
                  using MCP threat intelligence.
                </CardDescription>
                <p className="text-purple-600 mt-4 group-hover:underline">
                  Demo Extension on Social Media →
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Key Features */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Why mAIscam?</CardTitle>
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
                  analyzing emails, websites, and OCR-extracted webpage images.
                  Provides instant fraud scores with cross-verified
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
                  ecosystem continuously evolves through reinforcement learning,
                  autonomously improving regional scam pattern recognition.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
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
