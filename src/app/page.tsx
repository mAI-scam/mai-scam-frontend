"use client";

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

      <main className="container mx-auto px-4 md:px-6 pb-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-8 md:mb-12 mx-auto">
          {/* Identity Text */}
          <div className="font-bold mb-4 md:mb-6 py-4 md:py-6">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-[#49A4EF]">
              <span>m</span>
              <span className="text-[#EB6700]">AI</span>
              <span>scam</span>
            </h1>
            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#6FBDF4] mt-2">
              an <span className="text-[#EB6700]">AI-powered</span>{" "}
              <span className="text-[#49A4EF]">anti-scam</span> Web Extension
            </h2>
          </div>

          {/* YouTube Video Demo */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 mb-6 md:mb-8 shadow-lg max-w-4xl mx-auto">
            <div className="text-center mb-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                🎥 Watch mAIscam in Action
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                See how our AI-powered extension protects you from scams in
                real-time
              </p>
            </div>
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/1xNxD_bfvpw?rel=0&modestbranding=1"
                title="mAIscam Web Extension Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
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
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 md:p-4 mb-4 md:mb-6 text-left max-w-4xl mx-auto">
            <p className="text-xs md:text-sm text-blue-800">
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
                        Scammers exploit massive social media penetration
                        through platforms like Facebook for fraudulent offers,
                        fake job postings, and travel deals targeting vulnerable
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
                        Singapore&apos;s CheckMate require manual input,
                        offering protection that&apos;s often too late.
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
                against scams across emails, websites, and social media
                platforms — specifically designed for Southeast Asia&apos;s
                linguistic diversity and threat landscape.
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

          {/* Features Section */}
          <div
            id="features"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl"
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
                    How to Experience the Web Extension Demo
                  </h3>
                  <ol className="space-y-1 text-xs md:text-sm text-gray-700">
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
                    Connected AI Agent Network
                  </h4>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Multi-agent system using MCP to access real-time threat
                    intelligence, financial APIs, and regulatory feeds while
                    analyzing emails, websites, and OCR-extracted webpage
                    images. Provides instant fraud scores with cross-verified
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
                    Adaptive Response AI Agents
                  </h4>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Decision-making agents automatically block high-risk sites,
                    coordinating via MCP integrations to notify authorities and
                    anti-fraud platforms while continuously evolving through
                    reinforcement learning.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4">
                <Badge className="w-6 h-6 md:w-8 md:h-8 rounded-full p-0 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-xs md:text-sm">3</span>
                </Badge>
                <div>
                  <h4 className="font-semibold mb-1 text-sm md:text-base">
                    Cultural Intelligence & MCP Evolution
                  </h4>
                  <p className="text-muted-foreground text-xs md:text-sm">
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
              <ul className="list-disc pl-6">
                <li>
                  <strong className="text-black">
                    Advanced Threat Detection
                  </strong>{" "}
                  across email, web, and social media to block malicious content
                  before it reaches users.
                </li>
                <li>
                  <strong className="text-black">
                    Nation-Scale Protection
                  </strong>{" "}
                  enabling governments to safeguard citizens, run awareness
                  campaigns, and share intelligence with law enforcement.
                </li>
                <li>
                  <strong className="text-black">Regulatory Compliance</strong>{" "}
                  with PDPA, GDPR, and other local cybersecurity requirements.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Market Opportunities */}
        <section className="mb-8 md:mb-12 flex max-w-5xl mx-auto gap-4 md:gap-8 flex-col md:flex-row">
          {/* Left - Content */}
          <Card className="flex-2">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center">
                Market Opportunity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div>
                  <h4 className="font-semibold mb-1 text-sm md:text-base">
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

              <div className="flex items-start space-x-3 md:space-x-4">
                <div>
                  <h4 className="font-semibold mb-1 text-sm md:text-base">
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
                <div>
                  <h4 className="font-semibold mb-1 text-sm md:text-base">
                    SOM
                  </h4>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Given our niche in multilingual, culturally aligned scam
                    detection, we project a{" "}
                    <strong className="text-black">
                      Serviceable Obtainable Market (SOM)
                    </strong>{" "}
                    of <strong className="text-black">USD 25-75 million</strong>
                    , representing 5-10% of the Southeast Asian segment by 2033.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right - Image */}
          <Card className="flex-1 hidden md:block">
            <div className="relative w-full h-64 md:h-full">
              <Image
                src="/images/edmund.jpg" // replace with your image path
                alt="Our Features Illustration"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </Card>
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
        </div>
      </footer>
    </div>
  );
}
