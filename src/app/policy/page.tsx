"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  FileText,
  Lock,
  Eye,
  Database,
  Globe,
  Users,
} from "lucide-react";
import Header from "@/components/main/Header";

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-4 md:px-6 pb-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-8 md:mb-12 mx-auto">
          <div className="font-bold mb-4 md:mb-6 py-4 md:py-6 w-full max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#49A4EF] mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Learn how the <span className="text-[#49A4EF]">m</span>
              <span className="text-[#EB6700]">AI</span>
              <span className="text-[#49A4EF]">scam</span> Chrome extension
              handles your data.
            </p>
          </div>
        </section>

        {/* Policy Introduction */}
        <section className="mb-8 max-w-5xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-sm text-blue-800 leading-relaxed">
              This privacy policy applies to the mAIscam Chrome browser
              extension (hereby referred to as &quot;Extension&quot;) that was
              created by Lin Zhenming, Shaun Liew Xin Hong (hereby referred to
              as &quot;Service Provider&quot;) as a Free service. This extension
              is intended for use &quot;AS IS&quot; to protect Southeast Asian
              users from online scams.
            </p>
            <div className="mt-4 bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">
                🏆 Hackathon Project
              </h4>
              <p className="text-sm text-purple-800 mb-2">
                This extension was developed as part of the{" "}
                <strong>Pan-SEA AI Developer Challenge 2025</strong>, a virtual
                hackathon uniting developers, researchers, and builders to
                accelerate the adoption and impact of LLMs in sectors that
                matter most: Healthcare, Finance, Education, and Public Sector.
              </p>
              <p className="text-xs text-purple-700">
                Learn more about the challenge:
                <a
                  href="https://seadeveloperchallenge.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline ml-1"
                >
                  https://seadeveloperchallenge.ai/
                </a>
              </p>
            </div>
          </div>
          <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">
              Extension Purpose & Permissions
            </h3>
            <div className="space-y-3 text-sm text-green-800">
              <p>
                <strong>Single Purpose:</strong> Protect Southeast Asian users
                from online scams by analyzing emails, websites, and social
                media posts for fraudulent content using AI-powered detection
                across 13 local languages.
              </p>
              <div>
                <p>
                  <strong>Required Permissions:</strong>
                </p>
                <ul className="ml-4 space-y-1">
                  <li>
                    • <strong>activeTab:</strong> Analyze content on your active
                    tab for scam detection when you explicitly click the extension button
                  </li>
                  <li>
                    • <strong>tabs:</strong> Enable automatic scam detection by monitoring
                    navigation to high-risk platforms and update extension badge icons
                  </li>
                  <li>
                    • <strong>storage:</strong> Store user preferences, analysis results,
                    and cache data locally with automatic cleanup after 30 days
                  </li>
                  <li>
                    • <strong>sidePanel:</strong> Provide main interface for viewing scam
                    analysis results and safety recommendations in your language
                  </li>
                  <li>
                    • <strong>scripting:</strong> Inject content scripts for on-demand
                    analysis only when you click the extension button
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Information Collection and Use */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <Database className="h-8 w-8 text-[#49A4EF]" />
                Information Collection and Use
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The mAIscam Chrome extension analyzes website content and
                user-selected data to detect scams. We collect and process the
                following types of data:
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-yellow-800 mb-2">
                  Website Content Analysis
                </h4>
                <ul className="space-y-2 text-sm text-yellow-800 ml-4">
                  <li>
                    • Content from websites you visit (Gmail emails, Facebook
                    posts, web pages)
                  </li>
                  <li>• URL information of websites being analyzed</li>
                  <li>
                    • Text content, links, and page elements for scam detection
                  </li>
                  <li>• Analysis results and threat assessments</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-green-800 mb-2">
                  User Preferences & Settings
                </h4>
                <ul className="space-y-2 text-sm text-green-800 ml-4">
                  <li>• Extension preferences (auto-detection on/off)</li>
                  <li>
                    • Language settings for analysis in 13 Southeast Asian
                    languages
                  </li>
                  <li>
                    • Analysis history for user reference (stored locally for 30
                    days)
                  </li>
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Important:</strong> We do NOT collect or store personal
                information such as email content, private messages, or personal
                identifiers. We only analyze public content and user-selected
                suspicious content to generate threat assessments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Extension operates locally on your browser and only sends
                anonymized content analysis to our AI services when scam
                detection is triggered.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Third Party Access */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <Eye className="h-8 w-8 text-[#49A4EF]" />
                Third Party Access
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Data Sharing with Third Parties
                </h4>
                <p className="text-sm text-blue-800 mb-3">
                  We share data with the following trusted service providers to
                  enable scam detection:
                </p>
                <ul className="space-y-2 text-sm text-blue-800 ml-4">
                  <li>
                    • <strong>AI/LLM Services:</strong> Anonymized content for
                    scam analysis (no personal data)
                  </li>
                  <li>
                    • <strong>AWS DynamoDB:</strong> Analysis results storage
                    (threat assessments only)
                  </li>
                  <li>
                    • <strong>Cloud Infrastructure:</strong> Service hosting and
                    performance optimization
                  </li>
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We only transmit content when users explicitly click the extension
                button to analyze suspicious content. The extension operates on-demand
                with zero automatic background activity. Personal information
                is never stored or transmitted.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Service Provider may disclose information only:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>
                  • As required by law, such as to comply with a subpoena or
                  similar legal process
                </li>
                <li>
                  • When we believe in good faith that disclosure is necessary
                  to protect user safety, investigate fraud, or respond to a
                  government request
                </li>
                <li>
                  • With trusted service providers who assist in scam detection
                  and have agreed to maintain strict data protection standards
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Opt-Out Rights */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-[#49A4EF]" />
                Opt-Out Rights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                You can stop all data processing by the Extension by:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4 mb-4">
                <li>
                  • Disabling the extension in Chrome&apos;s extension settings
                </li>
                <li>• Uninstalling the extension from Chrome Web Store</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                All locally stored data (preferences, analysis history) will be
                automatically deleted when you uninstall the extension.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Data Retention Policy */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <Database className="h-8 w-8 text-[#49A4EF]" />
                Data Retention Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Local Data:</strong> User preferences and analysis
                  history are stored locally in your browser and automatically
                  deleted after 30 days. This data is removed immediately when
                  you uninstall the extension.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Analysis Results:</strong> Threat assessment data is
                  stored in our secure database (AWS DynamoDB) for service
                  improvement and pattern recognition. This data contains no
                  personal information, only anonymized scam detection results.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  To request deletion of any data associated with your usage,
                  please contact us at <strong>info.maiscam@gmail.com</strong>{" "}
                  and we will respond within a reasonable time frame.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Children */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <Users className="h-8 w-8 text-[#49A4EF]" />
                Children
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The Service Provider does not use the Extension to knowingly
                solicit data from or market to children under the age of 13.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Service Provider does not knowingly collect personally
                identifiable information from children. The Service Provider
                encourages all children to never submit any personally
                identifiable information through the Extension and/or Services.
                The Service Provider encourage parents and legal guardians to
                monitor their children&apos;s Internet usage and to help enforce
                this Policy by instructing their children never to provide
                personally identifiable information through the Extension and/or
                Services without their permission. If you have reason to believe
                that a child has provided personally identifiable information to
                the Service Provider through the Extension and/or Services,
                please contact the Service Provider (
                <strong>info.maiscam@gmail.com</strong>) so that they will be
                able to take the necessary actions. You must also be at least 16
                years of age to consent to the processing of your personally
                identifiable information in your country (in some countries we
                may allow your parent or guardian to do so on your behalf).
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Security */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <Lock className="h-8 w-8 text-[#49A4EF]" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The Service Provider implements multiple layers of security to
                  protect your data:
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Technical Safeguards
                  </h4>
                  <ul className="space-y-1 text-sm text-green-800 ml-4">
                    <li>• HTTPS encryption for all data transmission</li>
                    <li>
                      • Local browser storage with automatic data expiration
                    </li>
                    <li>
                      • Secure cloud infrastructure (AWS) with industry-standard
                      encryption
                    </li>
                    <li>
                      • No storage of personal or sensitive user information
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Operational Safeguards
                  </h4>
                  <ul className="space-y-1 text-sm text-blue-800 ml-4">
                    <li>• Privacy-by-design architecture</li>
                    <li>• Minimal data collection principles</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Data anonymization before analysis</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Changes */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <FileText className="h-8 w-8 text-[#49A4EF]" />
                Changes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy may be updated from time to time for any
                reason. The Service Provider will notify you of any changes to
                the Privacy Policy by updating this page with the new Privacy
                Policy. You are advised to consult this Privacy Policy regularly
                for any changes, as continued use is deemed approval of all
                changes.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800 font-semibold">
                  This privacy policy is effective as of 2025-09-07
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Your Consent */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-[#49A4EF]" />
                Your Consent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                By installing and using the mAIscam Chrome Extension, you
                consent to:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4 mb-4">
                <li>
                  • On-demand analysis of website content only when you click
                  the extension button
                </li>
                <li>
                  • Local storage of your extension preferences and analysis history
                </li>
                <li>
                  • Transmission of anonymized content to our AI services for
                  scam detection (user-initiated only)
                </li>
                <li>
                  • Storage of threat assessment results in our secure database
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                You can withdraw consent at any time by uninstalling the
                extension or disabling the extension in the chrome extension
                settings.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Us */}
        <section className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <Globe className="h-8 w-8 text-[#49A4EF]" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions regarding privacy while using the
                  Extension, or questions about our practices, please contact
                  us:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-800">
                    Email: info.maiscam@gmail.com
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    We respond to privacy inquiries within 72 hours
                  </p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Chrome Web Store Compliance:</strong> This extension
                    complies with Chrome Web Store policies for data collection,
                    user permissions, and privacy disclosure.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 md:px-6 py-6 md:py-8 mt-12 md:mt-16 border-t">
        <div className="text-center text-muted-foreground">
          <p className="text-xs md:text-sm">
            © {new Date().getFullYear()} maiscam. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            This privacy policy applies to the mAIscam Chrome extension.
          </p>
        </div>
      </footer>
    </div>
  );
}
