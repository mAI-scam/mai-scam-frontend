"use client";
// Test

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Smartphone,
  Heart,
  Globe,
  Target,
  TrendingUp,
  AlertTriangle,
  Building,
  FileCheck,
} from "lucide-react";
import Header from "@/components/main/Header";
import FeatureCard from "@/components/main/FeatureCard";
import { FeatureCardData } from "@/data/main/FeatureCardData";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-4 md:px-6 pb-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-8 md:mb-12 mx-auto">
          {/* Identity Text */}
          <div className="font-bold mb-4 md:mb-6 py-4 md:py-6 w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 lg:justify-center max-w-6xl mx-auto px-4 lg:px-8">
              {/* Left side - Title and Subtitle */}
              <div className="lg:flex-1 text-center lg:text-left lg:pr-8">
                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#49A4EF]">
                  <span>m</span>
                  <span className="text-[#EB6700]">AI</span>
                  <span>scam</span>
                </h1>
                {/* Subtitle */}
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#6FBDF4] mt-2 whitespace-nowrap">
                  an <span className="text-[#EB6700]">AI-powered</span>{" "}
                  <span className="text-[#49A4EF]">anti-scam</span> Web
                  Extension
                </h2>

                {/* Description */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6 mt-4 text-left max-w-4xl">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📱</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-blue-900 mb-3 text-sm md:text-base">
                        Browser Extension Available!
                      </h3>
                      <div className="space-y-3 text-xs md:text-sm text-blue-800">
                        <p>
                          <strong>✅ Ready to Install:</strong> We have
                          successfully developed the extension prototype!{" "}
                          <Link
                            href="/installation"
                            className="text-blue-600 underline hover:text-blue-800 font-semibold"
                          >
                            Visit our installation page
                          </Link>{" "}
                          to download and try it out.
                        </p>
                        <p>
                          <strong>📺 Website Demo:</strong> We&apos;ve kept this
                          interactive website demo so you can understand how the
                          extension works without installing it first.
                        </p>
                        <div className="bg-blue-100 border border-blue-300 rounded-lg p-3 mt-3">
                          <p className="text-blue-900 font-medium">
                            <strong>💡 Important:</strong> The actual extension
                            has a different design and enhanced features
                            compared to this website demo, as we&apos;re
                            actively developing new capabilities.
                          </p>
                          <p className="text-blue-800 mt-2">
                            For the{" "}
                            <strong>
                              best experience with real-time protection
                            </strong>
                            , we recommend installing and using the actual
                            extension.
                          </p>
                        </div>
                        <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 mt-3">
                          <p className="text-amber-900 font-medium">
                            <strong>⏱️ First Detection Notice:</strong> Your first scam detection may take 15-30 seconds as our AI services boot up from AWS Lambda. Subsequent detections will be much faster (typically 2-5 seconds) as the services remain active.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - YouTube Videos */}
              <div className="lg:flex-1 mt-6 lg:mt-0 lg:pl-8">
                <div className="space-y-6">
                  {/* Pitching Video */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-lg">
                    <h3 className="text-lg font-bold text-center mb-4 text-gray-800">
                      🎯 Project Pitch
                    </h3>
                    <div
                      className="relative w-full"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/MUg4EGxcHro?rel=0&modestbranding=1"
                        title="mAIscam Project Pitch"
                        style={{ border: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                  {/* Demo Walkthrough Video */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-lg">
                    <h3 className="text-lg font-bold text-center mb-4 text-gray-800">
                      🔍 Demo Walkthrough
                    </h3>
                    <div
                      className="relative w-full"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/rNhK1GPuOu0?rel=0&modestbranding=1"
                        title="mAIscam Demo Walkthrough"
                        style={{ border: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div
            id="features"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-5xl"
          >
            {FeatureCardData.map((item, idx) => (
              <FeatureCard key={idx} {...item} />
            ))}
          </div>
        </section>

        {/* Instructions Section */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start gap-2 md:gap-3">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-sm md:text-base">
                    How to Experience mAIscam
                  </h3>
                  <ol className="space-y-1 text-xs md:text-sm text-gray-700">
                    <li>
                      <strong>🚀 Try the Real Extension:</strong> Visit our{" "}
                      <Link
                        href="/installation"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        installation page
                      </Link>{" "}
                      to download and install the actual browser extension for
                      the best experience
                    </li>
                    <li className="mt-2">
                      <strong>📱 Or Explore the Website Demo:</strong>
                    </li>
                    <li className="ml-4">
                      1. Choose a demo scenario below (Email Client, Website, or
                      Social Media Posts from Twitter & Facebook)
                    </li>
                    <li className="ml-4">
                      2. Click{" "}
                      <span className="font-semibold">
                        &quot;Activate mAIscam&quot;
                      </span>{" "}
                      to simulate the browser extension being active
                    </li>
                    <li className="ml-4">
                      3. Interact with the simulated environment to see how the
                      extension detects and blocks scams
                    </li>
                    <li className="text-blue-700 font-medium mt-2">
                      💡 Note: The website demo is for illustration purposes -
                      the actual extension offers the full experience with
                      real-time protection
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* GitHub Repository Section */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card className="border-2 border-gray-300 bg-gradient-to-r from-gray-50 to-slate-50">
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg md:text-xl">
                      💻 Open Source Project
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Explore our codebase, contribute, or review the
                      implementation
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://github.com/mAI-scam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View on GitHub
                  </a>
                  <div className="text-xs text-gray-500 flex items-center gap-1 justify-center">
                    ⭐ Backend • Extension • Frontend
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Admin Dashboard Section */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card className="border-2 border-purple-300 bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg md:text-xl">
                      📈 Admin Dashboard
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Visualize detection results and analysis insights in
                      real-time
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <a
                    href="https://mai-scam-admin.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                  >
                    <TrendingUp className="w-4 h-4" />
                    View Dashboard
                  </a>
                  <div className="text-xs text-gray-500 flex items-center gap-1 justify-center">
                    📊 Analytics • Reports • Insights
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-purple-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">📉</div>
                    <h4 className="font-semibold text-purple-800 text-sm">
                      Detection Analytics
                    </h4>
                    <p className="text-xs text-purple-600">
                      Real-time scam detection metrics
                    </p>
                  </div>
                  <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">📄</div>
                    <h4 className="font-semibold text-purple-800 text-sm">
                      Analysis Reports
                    </h4>
                    <p className="text-xs text-purple-600">
                      Comprehensive threat analysis
                    </p>
                  </div>
                  <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">🎨</div>
                    <h4 className="font-semibold text-purple-800 text-sm">
                      Visual Insights
                    </h4>
                    <p className="text-xs text-purple-600">
                      Interactive charts and graphs
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Safe Testing Section */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card className="border-orange-200 bg-orange-50">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start gap-2 md:gap-3">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-sm md:text-base text-orange-900">
                    🛡️ Safe Testing Environment
                  </h3>
                  <div className="space-y-2 text-xs md:text-sm text-orange-800">
                    <p>
                      <strong>For Your Safety:</strong> Want to test the website
                      scam detection feature with the real extension? We&apos;ve
                      created a safe, simulated phishing website for testing
                      purposes.
                    </p>
                    <div className="bg-orange-100 border border-orange-300 rounded-lg p-3 mt-3">
                      <p className="font-medium text-orange-900 mb-2">
                        🎯 Test Website:{" "}
                        <a
                          href="https://shoppe123.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-700 underline hover:text-orange-900 font-mono"
                        >
                          https://shoppe123.vercel.app/
                        </a>
                      </p>
                      <p className="text-orange-800 text-xs">
                        ⚠️ <strong>Important:</strong> This is a controlled,
                        harmless simulation designed specifically for testing.
                        Never use real phishing websites for testing as they
                        pose genuine security risks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Our Features */}
        <section className="mb-8 md:mb-12 flex max-w-5xl mx-auto gap-4 md:gap-8 flex-col md:flex-row">
          {/* Left - Content */}
          <Card className="flex-2">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center">
                Our Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              <div className="flex items-start space-x-3 md:space-x-4">
                <Badge className="w-6 h-6 md:w-8 md:h-8 rounded-full p-0 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-xs md:text-sm">1</span>
                </Badge>
                <div>
                  <h4 className="font-semibold mb-1 text-sm md:text-base">
                    Real-time Gmail Scam Protection
                  </h4>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    SEA-LION v4 powered email content analysis with URL/domain
                    validation via PhishTank database, phone number and email
                    address validation, and automated scam reporting. Provides
                    risk assessment (High/Medium/Low) with detailed
                    explanations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4">
                <Badge className="w-6 h-6 md:w-8 md:h-8 rounded-full p-0 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-xs md:text-sm">2</span>
                </Badge>
                <div>
                  <h4 className="font-semibold mb-1 text-sm md:text-base">
                    Social Media Post Multimodal Analysis
                  </h4>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Multimodal analysis (text + images) via SEA-LION v4 for
                    Twitter and Facebook posts with engagement metrics evaluation,
                    author credibility assessment, and visual scam detection.
                    Interactive post analysis across social media platforms.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4">
                <Badge className="w-6 h-6 md:w-8 md:h-8 rounded-full p-0 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-xs md:text-sm">3</span>
                </Badge>
                <div>
                  <h4 className="font-semibold mb-1 text-sm md:text-base">
                    Website Security & Validation
                  </h4>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Real-time URL validation, SSL certificate analysis, content
                    scraping and evaluation, and brand impersonation detection.
                    Instant legitimacy verification with AWS SageMaker scalable
                    AI processing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4">
                <Badge className="w-6 h-6 md:w-8 md:h-8 rounded-full p-0 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-xs md:text-sm">4</span>
                </Badge>
                <div>
                  <h4 className="font-semibold mb-1 text-sm md:text-base">
                    13 Southeast Asian Languages
                  </h4>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Native multilingual support including English, Bahasa
                    Malaysia, Chinese, Vietnamese, Thai, Filipino, Indonesian,
                    Javanese, Sundanese, Khmer, Lao, Myanmar, and Tamil with
                    culturally-tailored threat explanations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right - Image */}
          <Card className="flex-1 hidden md:block">
            <div className="relative w-full h-64 md:h-full">
              <Image
                src="/images/shaun.jpg" // replace with your image path
                alt="Our Features Illustration"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </Card>
        </section>

        {/* Problem Statement Section */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center text-red-800">
                🚨 The Crisis: Southeast Asia Under Siege
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              <div className="bg-white border border-red-200 rounded-lg p-4">
                <div className="text-center mb-4">
                  <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                    $43.8B
                  </div>
                  <p className="text-sm md:text-base text-red-800 font-semibold">
                    Annual revenue generated by cybercrime syndicates
                  </p>
                  <p className="text-xs text-red-600 mt-1">
                    <a
                      href="https://www.csis.org/analysis/cyber-scamming-goes-global-unveiling-southeast-asias-high-tech-fraud-factories"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-red-800"
                    >
                      Source: CSIS Report (Dec 2024)
                    </a>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white border border-red-200 rounded-lg p-3 text-center">
                  <div className="text-xl md:text-2xl font-bold text-red-600 mb-1">
                    82%
                  </div>
                  <p className="text-xs md:text-sm text-red-800">
                    Cybercrime surge (2021-2022)
                  </p>
                </div>
                <div className="bg-white border border-red-200 rounded-lg p-3 text-center">
                  <div className="text-xl md:text-2xl font-bold text-red-600 mb-1">
                    63%
                  </div>
                  <p className="text-xs md:text-sm text-red-800">
                    Social media penetration
                  </p>
                </div>
                <div className="bg-white border border-red-200 rounded-lg p-3 text-center">
                  <div className="text-xl md:text-2xl font-bold text-red-600 mb-1">
                    246K
                  </div>
                  <p className="text-xs md:text-sm text-red-800">
                    <a
                      href="https://controld.com/blog/phishing-statistics-industry-trends/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-red-900"
                    >
                      Phishing incidents (Thailand & Vietnam, H1 2023)
                    </a>
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-red-800 text-sm md:text-base">
                  Three Critical Challenges:
                </h4>

                <div className="flex items-start space-x-3">
                  <Badge className="w-6 h-6 md:w-7 md:h-7 rounded-full p-0 flex items-center justify-center flex-shrink-0 bg-red-600">
                    <span className="font-bold text-xs">1</span>
                  </Badge>
                  <div>
                    <h5 className="font-semibold text-red-800 text-xs md:text-sm mb-1">
                      Linguistic & Cultural Exploitation
                    </h5>
                    <p className="text-red-700 text-xs md:text-sm">
                      Criminal syndicates weaponize Southeast Asia&apos;s
                      linguistic diversity, targeting victims in native
                      languages with culturally-tailored attacks that generic
                      tools cannot detect.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Badge className="w-6 h-6 md:w-7 md:h-7 rounded-full p-0 flex items-center justify-center flex-shrink-0 bg-red-600">
                    <span className="font-bold text-xs">2</span>
                  </Badge>
                  <div>
                    <h5 className="font-semibold text-red-800 text-xs md:text-sm mb-1">
                      Weaponized Social Media
                    </h5>
                    <p className="text-red-700 text-xs md:text-sm">
                      Scammers exploit massive social media penetration through
                      platforms like Facebook for fraudulent offers, fake job
                      postings, and travel deals targeting vulnerable
                      populations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Badge className="w-6 h-6 md:w-7 md:h-7 rounded-full p-0 flex items-center justify-center flex-shrink-0 bg-red-600">
                    <span className="font-bold text-xs">3</span>
                  </Badge>
                  <div>
                    <h5 className="font-semibold text-red-800 text-xs md:text-sm mb-1">
                      Phishing Epidemic
                    </h5>
                    <p className="text-red-700 text-xs md:text-sm">
                      With{" "}
                      <a
                        href="https://controld.com/blog/phishing-statistics-industry-trends/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-red-900"
                      >
                        over 12 million blocked links in six months
                      </a>{" "}
                      and 36% of data breaches involving phishing, current
                      defenses are completely overwhelmed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-100 border border-red-300 rounded-lg p-3">
                <h4 className="font-bold text-red-800 text-sm md:text-base mb-2">
                  ⚠️ The Critical Gap: Existing Solutions Are Failing
                </h4>
                <ul className="space-y-2 text-xs md:text-sm text-red-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>
                      <strong>Passive & Reactive:</strong> Tools like
                      Singapore&apos;s CheckMate require manual input, offering
                      protection that&apos;s often too late.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>
                      <strong>Siloed & Context-Blind:</strong> Solutions like
                      Whoscall lack cultural intelligence needed for localized
                      threats across web, social media, and email.
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Solution Bridge Section */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <div className="bg-blue-100 border-2 border-blue-400 rounded-xl p-6 md:p-8 text-center shadow-xl">
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm md:text-base mb-4">
                💡 THE SOLUTION
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              To address these critical challenges, we created{" "}
              <span className="text-[#49A4EF]">m</span>
              <span className="text-[#EB6700]">AI</span>
              <span className="text-[#49A4EF]">scam</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              An{" "}
              <strong className="text-[#EB6700]">
                AI-powered, culturally intelligent
              </strong>{" "}
              web extension that provides{" "}
              <strong className="text-[#49A4EF]">real-time protection</strong>{" "}
              against scams across emails, websites, and social media platforms
              — specifically designed for Southeast Asia&apos;s linguistic
              diversity and threat landscape.
            </p>
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 text-sm md:text-base text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Proactive AI Detection</span>
                <span className="w-2 h-2 bg-green-500 rounded-full ml-4"></span>
                <span>Cultural Intelligence</span>
                <span className="w-2 h-2 bg-green-500 rounded-full ml-4"></span>
                <span>Real-time Protection</span>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise & Government Solutions */}
        <section className="mb-8 md:mb-12 flex max-w-5xl mx-auto gap-4 md:gap-8 flex-col md:flex-row">
          {/* Left - Image */}
          <Card className="flex-1 hidden md:block">
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
              <CardTitle className="text-2xl md:text-3xl text-center">
                Why mAIscam
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4 text-muted-foreground text-xs md:text-sm">
              <p>
                mAIscam protects organizations and nations from phishing and
                scam threats with{" "}
                <strong className="text-black">
                  multilingual, culturally aware AI
                </strong>{" "}
                built for Southeast Asia.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base text-black">
                      Advanced Threat Detection
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Across email, web, and social media to block malicious
                      content before it reaches users.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Building className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base text-black">
                      Nation-Scale Protection
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Enabling governments to safeguard citizens, run awareness
                      campaigns, and share intelligence with law enforcement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <FileCheck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base text-black">
                      Regulatory Compliance
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      With PDPA, GDPR, and other local cybersecurity
                      requirements.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Market Opportunity & Target Audience */}
        <section className="mb-8 md:mb-12 flex max-w-5xl mx-auto gap-4 md:gap-8 flex-col md:flex-row">
          {/* Left - Content */}
          <Card className="flex-2">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center">
                Market Opportunity & Target Audience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              {/* Target Audience Section */}
              <div>
                <h3 className="font-bold text-lg md:text-xl mb-4 text-black">
                  Target Audience Strategy
                </h3>

                {/* Go-to-Market Audience */}
                <div className="flex items-start space-x-3 md:space-x-4 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Smartphone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base text-black">
                      Go-to-Market Audience: Young Adults
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      <strong className="text-black">
                        Tech-savvy millennials and Gen Z (18-35 years)
                      </strong>{" "}
                      who are early adopters of browser extensions and digital
                      security tools. They serve as our
                      <strong className="text-black">
                        {" "}
                        digital ambassadors
                      </strong>
                      , helping to spread awareness and adoption of mAIscam
                      through their social networks and family connections.
                    </p>
                  </div>
                </div>

                {/* Primary Target Audience */}
                <div className="flex items-start space-x-3 md:space-x-4 mb-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base text-black">
                      Primary Target Audience: Elderly Users
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      <strong className="text-black">
                        Senior citizens (60+ years)
                      </strong>{" "}
                      who are most vulnerable to online scams due to limited
                      digital literacy and higher trust levels. This demographic
                      represents our{" "}
                      <strong className="text-black">
                        core protection mission
                      </strong>
                      , as they face the highest risk of financial losses from
                      sophisticated scam operations targeting their retirement
                      savings and personal information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Market Opportunity Section */}
              <div className="border-t pt-4 md:pt-6">
                <h3 className="font-bold text-lg md:text-xl mb-4 text-black">
                  Market Opportunity
                </h3>

                <div className="flex items-start space-x-3 md:space-x-4 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base text-black">
                      TAM
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      The{" "}
                      <strong className="text-black">
                        Total Addressable Market (TAM)
                      </strong>{" "}
                      for phishing protection is valued at approximately
                      <strong className="text-black">
                        {" "}
                        USD 7.2 billion
                      </strong>{" "}
                      globally. For broader context, the fraud detection and
                      prevention market is projected to reach{" "}
                      <strong className="text-black">USD 90 billion</strong> in
                      the coming years.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base text-black">
                      SAM
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Within this, the{" "}
                      <strong className="text-black">
                        Serviceable Available Market (SAM)
                      </strong>{" "}
                      in Asia-Pacific is estimated at around
                      <strong className="text-black"> USD 2.5 billion</strong>,
                      driven by rising phishing incidents and rapid digital
                      adoption in Southeast Asia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base text-black">
                      SOM
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Given our niche in multilingual, culturally aligned scam
                      detection, we project a{" "}
                      <strong className="text-black">
                        Serviceable Obtainable Market (SOM)
                      </strong>{" "}
                      of{" "}
                      <strong className="text-black">USD 25-75 million</strong>,
                      representing 5-10% of the Southeast Asian segment by 2033.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right - Image */}
          <Card className="flex-1 hidden md:block">
            <div className="relative w-full h-64 md:h-full">
              <Image
                src="/images/edmund_new.jpg" // replace with your image path
                alt="Our Features Illustration"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </Card>
        </section>

        {/* Development Status & Future Plans */}
        <section className="bg-green-50 border border-green-200 rounded-lg p-3 md:p-4 mb-4 md:mb-6 text-left max-w-5xl mx-auto">
          <p className="text-xs md:text-sm text-green-800 mb-2">
            <strong>🚀 Development Status & Future Plans:</strong> We have
            successfully completed the extension prototype and it&apos;s ready
            for installation. This website serves as a demonstration to
            illustrate how our web extension functions in real-world scenarios.
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold text-xs">✓</span>
              <span className="text-xs md:text-sm text-green-700">
                <strong>Extension Prototype Complete:</strong> The browser
                extension is now available for installation with real-time scam
                detection capabilities
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold text-xs">✓</span>
              <span className="text-xs md:text-sm text-green-700">
                <strong>Admin Dashboard Live:</strong> Real-time analytics and
                visualization platform for detection results and threat analysis
                at{" "}
                <a
                  href="https://mai-scam-admin.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  mai-scam-admin.vercel.app
                </a>
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold text-xs">✓</span>
              <span className="text-xs md:text-sm text-green-700">
                <strong>Multi-Platform Support:</strong> Currently supports
                Gmail, websites, Twitter, and Facebook with plans to expand to
                Threads, Reddit, and other social media platforms
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold text-xs">🔄</span>
              <span className="text-xs md:text-sm text-green-700">
                <strong>Enhanced Media Detection:</strong> Currently detects
                scam images, with plans to expand to video post analysis for
                comprehensive multimedia scam detection
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold text-xs">🔄</span>
              <span className="text-xs md:text-sm text-green-700">
                <strong>Smart History & Auto-Block:</strong> Developing a
                history feature that will automatically block previously flagged
                websites when users revisit them
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold text-xs">🔄</span>
              <span className="text-xs md:text-sm text-green-700">
                <strong>Active AI Flagging:</strong> Moving from manual flagging
                to fully automated, active AI-powered content flagging for
                proactive threat detection
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 md:px-6 py-6 md:py-8 mt-12 md:mt-16 border-t">
        <div className="text-center text-muted-foreground">
          <p className="text-xs md:text-sm">
            © {new Date().getFullYear()} mAIscam Web Extension Demo. Showcasing
            browser-based scam protection for Southeast Asia.
          </p>
          <p className="text-xs mt-2">
            This demo website simulates the actual Chrome extension
            functionality.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link
              href="/policy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
            >
              Privacy & Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
