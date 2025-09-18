"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Download,
  FolderOpen,
  Settings,
  ToggleLeft,
  MousePointer,
  Chrome,
  Mail,
  Globe,
  Facebook,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Play,
  Shield,
  FileText,
  TrendingUp,
  Twitter,
  Monitor,
} from "lucide-react";
import Header from "@/components/main/Header";

export default function InstallationPage() {
  const [activeTab, setActiveTab] = useState("installation");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-4 md:px-6 pb-12">
        {/* Hero Section */}
        <section className="text-center mb-8 md:mb-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#49A4EF]">m</span>
              <span className="text-[#EB6700]">AI</span>
              <span className="text-[#49A4EF]">scam</span>
              <span className="text-gray-800 ml-4">Installation & Usage Guide</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Complete guide for installing and using the mAIscam
              browser extension to protect against scams
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <div className="flex items-center gap-3 justify-center">
                <Shield className="w-5 h-5 text-blue-600" />
                <p className="text-sm md:text-base text-blue-800">
                  <strong>For Judges & Evaluators:</strong> This guide provides
                  clear, step-by-step instructions for installing and testing
                  the mAIscam browser extension
                </p>
              </div>
            </div>

            {/* Tab Navigation - Sticky */}
            <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4 mb-8">
              <div className="flex justify-center">
                <div className="bg-white rounded-lg border border-gray-200 p-1 shadow-sm">
                  <button
                    onClick={() => setActiveTab("installation")}
                    className={`px-6 py-3 rounded-md font-medium text-sm transition-all ${
                      activeTab === "installation"
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <Settings className="w-4 h-4 inline mr-2" />
                    Setup Guide
                  </button>
                  <button
                    onClick={() => setActiveTab("usage")}
                    className={`px-6 py-3 rounded-md font-medium text-sm transition-all ${
                      activeTab === "usage"
                        ? "bg-green-600 text-white shadow-sm"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <Play className="w-4 h-4 inline mr-2" />
                    How to Use mAIscam
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Tab Content */}
        {activeTab === "installation" && (
          <>
            {/* Requirements Section */}
            <section className="mb-8 md:mb-12 max-w-4xl mx-auto">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl md:text-2xl text-orange-800">
                <AlertCircle className="w-6 h-6" />
                Prerequisites & Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Chrome className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-1">
                      Google Chrome Browser
                    </h4>
                    <p className="text-sm text-orange-700">
                      Version 88 or higher required
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-1">
                      Extension Files
                    </h4>
                    <p className="text-sm text-orange-700">
                      maiscam-1.0.0-chrome.zip from repository
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-1">
                      Developer Mode
                    </h4>
                    <p className="text-sm text-orange-700">
                      Ability to enable Chrome developer mode
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-1">
                      Internet Connection
                    </h4>
                    <p className="text-sm text-orange-700">
                      Required for AI analysis features
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-amber-100 border border-amber-300 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">⏱️</div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">
                      First Detection Notice
                    </h4>
                    <p className="text-sm text-amber-700">
                      <strong>Important:</strong> Your first scam detection may take 15-30 seconds as our AI services boot up from AWS Lambda cold start. This is normal! Subsequent detections will be much faster (typically 2-5 seconds) as the services remain active.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Installation Steps */}
        <section className="mb-8 md:mb-12 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
            🚀 Installation Steps
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-3 text-xl text-blue-800">
                  <Badge className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    1
                  </Badge>
                  <Download className="w-6 h-6" />
                  Download the Extension
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="text-gray-700">
                    <p className="mb-3">
                      Download the{" "}
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                        maiscam-1.0.0-chrome.zip
                      </code>{" "}
                      file from the mAIscam extension repository:
                    </p>
                    <div className="bg-white border-2 border-blue-200 rounded-lg p-4 inline-block">
                      <a
                        href="https://github.com/mAI-scam/mai-scam-extension/releases"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium underline decoration-2 underline-offset-2 flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        https://github.com/mAI-scam/mai-scam-extension/releases
                      </a>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-sm text-blue-800">
                      <strong>💡 For Judges:</strong> Click the link above to
                      access the GitHub releases page where you can download the
                      latest extension files.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-3 font-medium">
                      📥 Download Location:
                    </p>
                    <div className="bg-white border rounded-lg overflow-hidden">
                      <Image
                        src="/images/installation/download-page.png"
                        alt="Extension download page"
                        width={1000}
                        height={1604}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center gap-3 text-xl text-green-800">
                  <Badge className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
                    2
                  </Badge>
                  <FolderOpen className="w-6 h-6" />
                  Extract the Files
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        Locate the downloaded{" "}
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                          maiscam-1.0.0-chrome.zip
                        </code>{" "}
                        file
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        Right-click and select &ldquo;Extract All&rdquo; or use
                        your preferred extraction tool
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        You should now have a folder named{" "}
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                          maiscam-1.0.0-chrome
                        </code>
                      </span>
                    </li>
                  </ol>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-3 font-medium">
                      ✅ Expected result:
                    </p>
                    <div className="bg-white border rounded-lg p-3 flex items-center justify-center">
                      <Image
                        src="/images/installation/extracted-folder.png"
                        alt="Extracted extension folder"
                        width={1000}
                        height={100}
                        className="max-w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="flex items-center gap-3 text-xl text-purple-800">
                  <Badge className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
                    3
                  </Badge>
                  <Chrome className="w-6 h-6" />
                  Open Chrome Extensions Page
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <p className="text-gray-700">
                    <strong>Open Google Chrome and navigate to the extensions management page:</strong>
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Click</strong> the URL below to <strong>copy</strong> it, then <strong>paste</strong> it into a <strong>new Chrome tab</strong>:
                  </p>

                  <div className="bg-gray-50 border rounded-lg p-3">
                    <code
                      className="text-sm font-mono text-blue-600 cursor-pointer select-all"
                      onClick={(e) => {
                        navigator.clipboard.writeText('chrome://extensions/');
                        const target = e.target as HTMLElement;
                        const originalText = target.textContent;
                        target.textContent = 'Copied!';
                        setTimeout(() => {
                          target.textContent = originalText;
                        }, 1000);
                      }}
                      title="Click to copy to clipboard"
                    >
                      chrome://extensions/
                    </code>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Alternative methods:</strong>
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• Chrome menu → More tools → Extensions</li>
                      <li>
                        • Three dots menu → Extensions → Manage extensions
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-3 font-medium">
                      🌐 Chrome Extensions Page:
                    </p>
                    <div className="bg-white border rounded-lg overflow-hidden">
                      <Image
                        src="/images/installation/original-extension.png"
                        alt="Chrome extensions page"
                        width={1000}
                        height={1568}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="border-2 border-yellow-200">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="flex items-center gap-3 text-xl text-yellow-800">
                  <Badge className="w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center">
                    4
                  </Badge>
                  <ToggleLeft className="w-6 h-6" />
                  Enable Developer Mode
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <p className="text-gray-700">
                    On the extensions page, you&apos;ll find a &ldquo;Developer
                    mode&rdquo; toggle in the top-right corner.
                  </p>

                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Look for the &ldquo;Developer mode&rdquo; toggle switch</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Click to enable it</strong> (the toggle should turn blue/active)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>New buttons will appear:</strong> &ldquo;Load unpacked&rdquo;,
                        &ldquo;Pack extension&rdquo;, &ldquo;Update&rdquo;
                      </span>
                    </li>
                  </ol>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800 mb-3 font-medium">
                      🔧 Enable Developer Mode:
                    </p>
                    <div className="bg-white border rounded-lg overflow-hidden">
                      <Image
                        src="/images/installation/developer-mode.png"
                        alt="Developer mode toggle"
                        width={1000}
                        height={1568}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 5 */}
            <Card className="border-2 border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center gap-3 text-xl text-red-800">
                  <Badge className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center">
                    5
                  </Badge>
                  <MousePointer className="w-6 h-6" />
                  Load the Extension
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Now you can install the unpacked extension:
                  </p>

                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                      <span><strong>Click the &ldquo;Load unpacked&rdquo; button</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Navigate to and select the{" "}
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                          maiscam-1.0.0-chrome
                        </code>{" "}
                        folder</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                      <span><strong>Click &ldquo;Select Folder&rdquo;</strong></span>
                    </li>
                  </ol>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800 mb-3 font-medium">
                      📂 Upload/Unzip Process:
                    </p>
                    <div className="bg-white border rounded-lg overflow-hidden">
                      <Image
                        src="/images/installation/upload-unzip-extension.png"
                        alt="Upload and unzip extension process"
                        width={1000}
                        height={1568}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <ol className="space-y-3 text-gray-700" start={4}>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        The mAIscam extension should now appear in your
                        extensions list!
                      </span>
                    </li>
                  </ol>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-800 mb-3 font-medium">
                      ✅ Extension Successfully Loaded:
                    </p>
                    <div className="bg-white border rounded-lg overflow-hidden">
                      <Image
                        src="/images/installation/extension-installed.png"
                        alt="Extension loaded successfully"
                        width={1000}
                        height={1568}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-xs text-green-700 mt-2">
                      The mAIscam extension now appears in your extensions list
                      and Chrome toolbar, and is ready to use!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 6 - Using the Extension */}
            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center gap-3 text-xl text-green-800">
                  <Badge className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
                    6
                  </Badge>
                  <Play className="w-6 h-6" />
                  Using the Extension
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Now that the extension is installed, here&apos;s how to
                    access and use it:
                  </p>

                  <ol className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        Click on the mAIscam extension icon in your Chrome
                        toolbar
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        The extension popup will open, showing available options
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        Choose the appropriate analysis option based on what you
                        want to scan
                      </span>
                    </li>
                  </ol>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-800 mb-3 font-medium">
                      🖱️ How to Open the Extension:
                    </p>
                    <div className="bg-white border rounded-lg overflow-hidden mb-4">
                      <Image
                        src="/images/installation/extension-loading.png"
                        alt="How to open the mAIscam extension"
                        width={1000}
                        height={1568}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-xs text-green-700">
                      Click on the mAIscam icon in the Chrome toolbar to open
                      the extension popup
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800 mb-3 font-medium">
                      ✨ Extension Loading State:
                    </p>
                    <div className="bg-white border rounded-lg overflow-hidden mb-4">
                      <Image
                        src="/images/installation/extension-loads.png"
                        alt="Extension loading state"
                        width={1000}
                        height={1568}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-xs text-blue-700">
                      The extension will show a loading state while processing
                      your request
                    </p>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-amber-800 mb-3 font-medium">
                      ⏱️ Expected Detection Times:
                    </p>
                    <div className="space-y-2 text-xs text-amber-700">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span><strong>First detection:</strong> 15-30 seconds (AWS Lambda cold start)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span><strong>Subsequent detections:</strong> 2-5 seconds (services active)</span>
                      </div>
                    </div>
                    <p className="text-xs text-amber-700 mt-2 italic">
                      💡 This is normal behavior for serverless applications. Please be patient during your first detection!
                    </p>
                  </div>

                  <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 mt-4">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">⚠️</div>
                      <div>
                        <h4 className="font-bold text-red-800 mb-2 text-lg">
                          IMPORTANT: Stay on the Current Tab
                        </h4>
                        <p className="text-sm text-red-700 font-semibold mb-2">
                          <strong>⛔ DO NOT SWITCH TABS while detection is running!</strong>
                        </p>
                        <p className="text-sm text-red-700">
                          When the extension shows "loading" or is analyzing content, <strong>stay on the current tab</strong> until the analysis is complete. Switching tabs may interrupt the detection process and cause it to fail.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Restart Instructions for Setup Guide */}
        <section className="mb-8 md:mb-12 max-w-4xl mx-auto">
          <Card className="border-2 border-red-200">
            <CardHeader className="bg-red-50">
              <CardTitle className="flex items-center gap-3 text-xl text-red-800">
                <AlertCircle className="w-6 h-6" />
                🔄 Important: Extension Troubleshooting
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 mb-3 text-lg">
                    If anything goes wrong with the extension:
                  </h4>
                  <p className="text-red-700 mb-4 font-medium">
                    <strong>Easiest solution:</strong> Restart the extension and refresh your browser
                  </p>

                  <div className="bg-white border border-red-200 rounded-lg p-4">
                    <h5 className="font-semibold text-red-800 mb-3">📋 Quick Restart Steps:</h5>
                    <ol className="space-y-2 text-red-700">
                      <li className="flex items-start gap-2">
                        <span className="bg-red-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                        <span>Go to <code className="bg-red-100 px-2 py-1 rounded text-sm font-mono">chrome://extensions/</code></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-red-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                        <span>Find the mAIscam extension in your list</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-red-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                        <span>Toggle the extension <strong>OFF</strong> then <strong>ON</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-red-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                        <span>Refresh your browser page (F5 or Ctrl+R)</span>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 mt-4">
                    <p className="text-sm text-yellow-800">
                      💡 <strong>Note:</strong> This restart process fixes 95% of extension issues and takes less than 30 seconds.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Next Steps Call to Action */}
        <section className="mb-8 md:mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-300 rounded-xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full p-4">
                <Play className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              🎉 Installation Complete! Ready to Get Protected?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Your mAIscam extension is now successfully installed and ready to protect you from scams!
            </p>

            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 mb-6 border border-blue-200">
              <div className="flex items-center justify-center gap-3 mb-3">
                <ArrowRight className="w-5 h-5 text-blue-600" />
                <p className="text-blue-800 font-bold text-lg">
                  Next: Learn How to Use mAIscam
                </p>
              </div>
              <p className="text-blue-700 mb-4">
                Click the <strong>&ldquo;How to Use mAIscam&rdquo;</strong> tab above to learn how to:
              </p>
              <div className="text-sm text-blue-600 space-y-1">
                <p>• Analyze emails for phishing attempts</p>
                <p>• Scan websites for malicious content</p>
                <p>• Detect scams on social media platforms</p>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveTab("usage");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Play className="w-6 h-6" />
              Start Learning How to Use mAIscam!
            </button>
          </div>
        </section>
          </>
        )}

        {/* Usage Tab Content */}
        {activeTab === "usage" && (
          <>
            <section className="mb-8 md:mb-12 max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
                🎯 How to Use mAIscam
              </h2>

              {/* Quick Demo Navigation */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                  🚀 Jump to Usage Examples
                </h3>
                <p className="text-center text-gray-600 mb-6">
                  Quick navigation to see how mAIscam works with different content types
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => {
                      const emailSection = document.getElementById('email-protection');
                      emailSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Demo
                  </Button>
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => {
                      const websiteSection = document.getElementById('website-protection');
                      websiteSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    Website Demo
                  </Button>
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={() => {
                      const socialSection = document.getElementById('social-media-protection');
                      socialSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Facebook className="w-5 h-5 mr-2" />
                    Social Media Demo
                  </Button>
                </div>
              </div>

              <div className="space-y-8">
                {/* Extension Loading Section */}
                <Card className="border-2 border-gray-200">
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                      <Monitor className="w-6 h-6" />
                      Loading the Extension
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">
                          How to Access mAIscam:
                        </h4>
                        <ol className="text-base space-y-3 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="bg-gray-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                              1
                            </span>
                            <span>
                              <strong>Click the extension icon</strong> in your Chrome toolbar (puzzle piece icon if hidden)
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="bg-gray-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                              2
                            </span>
                            <span>
                              <strong>Find and click the mAIscam icon</strong> to open the extension
                            </span>
                          </li>
                        </ol>

                        {/* Restart Instructions */}
                        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mt-6">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold text-red-800 mb-2 text-lg">
                                🔄 If Extension Issues Occur
                              </h4>
                              <p className="text-red-700 mb-3 font-medium">
                                <strong>Easiest fix:</strong> Restart the extension and refresh your browser
                              </p>
                              <div className="bg-white border border-red-200 rounded-lg p-3">
                                <h5 className="font-semibold text-red-800 mb-2">How to restart the extension:</h5>
                                <ol className="text-sm text-red-700 space-y-1 ml-4">
                                  <li>1. Go to <code className="bg-red-100 px-1 rounded">chrome://extensions/</code></li>
                                  <li>2. Find mAIscam extension</li>
                                  <li>3. Toggle it OFF then ON</li>
                                  <li>4. Refresh your browser page</li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-100 rounded-lg p-4">
                        <h5 className="text-md font-semibold text-gray-700 mb-3">
                          🕹️ Step 1: Click Extension Icon
                        </h5>
                        <div className="bg-white rounded overflow-hidden shadow-md">
                          <Image
                            src="/images/installation/extension-loading.png"
                            alt="Click extension icon in toolbar"
                            width={1000}
                            height={863}
                            className="w-full h-auto"
                            quality={100}
                            priority
                          />
                        </div>
                      </div>

                      <div className="bg-blue-100 rounded-lg p-4">
                        <h5 className="text-md font-semibold text-blue-700 mb-3">
                          ✨ Step 2: Extension Loaded Interface
                        </h5>
                        <p className="text-blue-700 mb-3">
                          Once loaded, the extension will show you different analysis options based on the type of content you want to scan.
                        </p>
                        <div className="bg-white rounded overflow-hidden shadow-md">
                          <Image
                            src="/images/installation/extension-loads.png"
                            alt="Extension interface when loaded"
                            width={1000}
                            height={1570}
                            className="w-full h-auto"
                            quality={100}
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email Protection Flow */}
                <Card id="email-protection" className="border-2 border-blue-200">
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="flex items-center gap-2 text-xl text-blue-800">
                      <Mail className="w-6 h-6" />
                      Email Protection
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <p className="text-gray-700">
                        Protect yourself from email scams and phishing attempts with our AI-powered email analysis.
                      </p>

                      {/* Step 1: Email Interface */}
                      <div className="bg-gray-100 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          1. Email Interface & Analysis Button
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Open any email in Gmail. The mAIscam extension will add an "<strong>Analyze Email</strong>" button to help you detect potential scams.
                        </p>
                        <div className="bg-white rounded overflow-hidden shadow-md">
                          <Image
                            src="/images/installation/email-interface.jpg"
                            alt="Email interface with analysis button"
                            width={1000}
                            height={268}
                            className="w-full h-auto"
                            quality={100}
                          />
                        </div>
                      </div>

                      {/* Step 2: Analysis Report */}
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-blue-800 mb-3">
                          2. LLM Analysis Report
                        </h4>
                        <p className="text-blue-700 mb-3">
                          After clicking analyze, our AI provides a detailed report with a risk assessment and actionable recommendations.
                        </p>
                        <div className="bg-white rounded overflow-hidden shadow-md">
                          <Image
                            src="/images/installation/email-report.jpg"
                            alt="LLM analysis report popup"
                            width={1000}
                            height={83}
                            className="w-full h-auto"
                            quality={100}
                          />
                        </div>
                      </div>

                      {/* Step 3: Complete Analysis */}
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-green-800 mb-3">
                          3. Complete Analysis Result
                        </h4>
                        <p className="text-green-700 mb-3">
                          Get comprehensive analysis with risk level, recommended actions, and the option to proceed with caution or blur suspicious content.
                        </p>
                        <div className="bg-white rounded overflow-hidden shadow-md">
                          <Image
                            src="/images/installation/email-analysis-result.jpg"
                            alt="Complete email analysis result"
                            width={1000}
                            height={0}
                            className="w-full h-auto px-52"
                            quality={100}
                          />
                        </div>
                      </div>

                      {/* Step 4: Email Blur Protection */}
                      <div className="bg-red-50 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-red-800 mb-3">
                          4. Email Blur Protection
                        </h4>
                        <p className="text-red-700 mb-3">
                          For flagged emails, choose to blur the content to protect yourself from potentially harmful content while still being able to review it if needed.
                        </p>
                        <div className="bg-white rounded overflow-hidden shadow-md">
                          <Image
                            src="/images/installation/email-blur.jpg"
                            alt="Email with blur protection enabled"
                            width={1000}
                            height={763}
                            className="w-full h-auto"
                            quality={100}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media Protection Flow */}
                <Card id="social-media-protection" className="border-2 border-purple-200">
                  <CardHeader className="bg-purple-50">
                    <CardTitle className="flex items-center gap-2 text-xl text-purple-800">
                      <Twitter className="w-6 h-6" />
                      Social Media Protection (Twitter/X & Facebook)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <p className="text-gray-700">
                        Detect scam posts and suspicious content on social media platforms with AI-powered analysis.
                      </p>

                      {/* Social Media Interface */}
                      <div className="bg-gray-100 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          1. Social Media Interface
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Browse your social media feed normally. When you encounter suspicious content, click the mAIscam extension and select &ldquo;Scan Post&rdquo;.
                        </p>
                        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-3 mb-3">
                          <div className="flex items-start gap-2">
                            <div className="text-lg">📍</div>
                            <div>
                              <h5 className="font-bold text-blue-800 mb-1">
                                IMPORTANT: Post Must Be Visible
                              </h5>
                              <p className="text-sm text-blue-700">
                                <strong>Make sure the post you want to analyze is currently visible on your screen</strong> before clicking the scan button. The extension analyzes what&apos;s currently displayed in your browser window.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded overflow-hidden shadow-md">
                          <Image
                            src="/images/installation/social-media-interface.png"
                            alt="Social media interface"
                            width={1000}
                            height={972}
                            className="w-full h-auto"
                            quality={100}
                          />
                        </div>
                      </div>

                      {/* Choose Post */}
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-blue-800 mb-3">
                          2. Choose Post to Analyze
                        </h4>
                        <p className="text-blue-700 mb-3">
                          Select the specific post or content you want to analyze. The extension supports both Facebook and Twitter content analysis.
                        </p>
                        <div className="bg-white rounded overflow-hidden shadow-md">
                          <Image
                            src="/images/installation/social-media-choose-post.png"
                            alt="Choose post to analyze"
                            width={1000}
                            height={901}
                            className="w-full h-auto"
                            quality={100}
                          />
                        </div>
                      </div>

                      {/* Analysis Result */}
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-green-800 mb-3">
                          3. Social Media Analysis Result
                        </h4>
                        <p className="text-green-700 mb-3">
                          Get detailed analysis of the post content, including risk assessment and recommended actions based on potential scam indicators.
                        </p>
                        <div className="bg-white rounded overflow-hidden shadow-md">
                          <Image
                            src="/images/installation/social-media-analysis-result.png"
                            alt="Social media analysis result"
                            width={1000}
                            height={402}
                            className="w-full h-auto px-52"
                            quality={100}
                          />
                        </div>
                      </div>

                      {/* Blur Protection */}
                      <div className="bg-red-50 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-red-800 mb-3">
                          4. Content Blur Protection
                        </h4>
                        <p className="text-red-700 mb-3">
                          Similar to email protection, flagged social media content can be blurred to protect you from potentially harmful posts while still allowing review.
                        </p>
                        <div className="bg-white rounded overflow-hidden shadow-md">
                          <Image
                            src="/images/installation/social-media-blur.png"
                            alt="Social media content with blur protection"
                            width={1000}
                            height={32}
                            className="w-full h-auto"
                            quality={100}
                          />
                        </div>
                      </div>

                      {/* Twitter Support */}
                      <div className="bg-blue-100 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-blue-800 mb-3">
                          Twitter Support Example
                        </h4>
                        <p className="text-blue-700 mb-4">
                          We support both Facebook and Twitter. Here&apos;s an example of Twitter content analysis:
                        </p>
                        <div className="space-y-6">
                          <div className="bg-white rounded overflow-hidden shadow-md">
                            <h5 className="text-sm font-semibold text-gray-700 p-3 bg-gray-50 border-b">
                              1. Twitter Interface
                            </h5>
                            <div className="p-3">
                              <Image
                                src="/images/installation/twitter-interface.png"
                                alt="Twitter interface"
                                width={1000}
                                height={492}
                                className="w-full h-auto rounded"
                                quality={100}
                              />
                            </div>
                          </div>
                          <div className="bg-white rounded overflow-hidden shadow-md">
                            <h5 className="text-sm font-semibold text-gray-700 p-3 bg-gray-50 border-b">
                              2. Select Tweet to Analyze
                            </h5>
                            <div className="p-3">
                              <Image
                                src="/images/installation/twitter-choose-post.png"
                                alt="Twitter choose post"
                                width={1000}
                                height={742}
                                className="w-full h-auto rounded"
                                quality={100}
                              />
                            </div>
                          </div>
                          <div className="bg-white rounded overflow-hidden shadow-md">
                            <h5 className="text-sm font-semibold text-gray-700 p-3 bg-gray-50 border-b">
                              3. Analysis Result
                            </h5>
                            <div className="p-3">
                              <Image
                                src="/images/installation/twitter-analysis-result.png"
                                alt="Twitter analysis result"
                                width={1000}
                                height={231}
                                className="w-full h-auto rounded"
                                quality={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Website Protection Flow */}
                <Card id="website-protection" className="border-2 border-green-200">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="flex items-center gap-2 text-xl text-green-800">
                      <Globe className="w-6 h-6" />
                      Website Protection
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <p className="text-gray-700">
                        Analyze websites for potential scams, phishing attempts, and malicious content before you interact with them.
                      </p>

                      {/* Website Interface */}
                      <div className="bg-gray-100 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          1. Website Interface
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Navigate to any website. Click the mAIscam extension and select "<strong>Analyze Website</strong>" to scan the current page for potential threats.
                        </p>
                        <div className="bg-white rounded overflow-hidden shadow-md">
                          <Image
                            src="/images/installation/website-interface.png"
                            alt="Website interface before analysis"
                            width={1000}
                            height={752}
                            className="w-full h-auto"
                            quality={100}
                          />
                        </div>
                      </div>

                      {/* Website Analysis Report */}
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-blue-800 mb-3">
                          2. Website Analysis Report
                        </h4>
                        <p className="text-blue-700 mb-3">
                          Receive comprehensive analysis of the website including domain reputation, content analysis, and security assessment.
                        </p>
                        <div className="bg-white rounded overflow-hidden shadow-md">
                          <Image
                            src="/images/installation/website-report.png"
                            alt="Website analysis report"
                            width={1000}
                            height={310}
                            className="w-full h-auto"
                            quality={100}
                          />
                        </div>
                      </div>

                      {/* Website Analysis Result */}
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-green-800 mb-3">
                          3. Complete Website Analysis
                        </h4>
                        <p className="text-green-700 mb-3">
                          Get detailed results with risk assessment, recommended actions, and the option to proceed with caution. Note: Website analysis doesn't include blur functionality.
                        </p>
                        <div className="bg-white rounded overflow-hidden shadow-md">
                          <Image
                            src="/images/installation/website-analysis-result.png"
                            alt="Complete website analysis result"
                            width={1000}
                            height={904}
                            className="w-full h-auto px-52"
                            quality={100}
                          />
                        </div>
                      </div>

                      {/* Safe Testing */}
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-orange-800 mb-3">
                          🛡️ Safe Testing Environment
                        </h4>
                        <p className="text-orange-700 mb-3">
                          <strong>For Your Safety:</strong> Test the website scam detection with our safe, simulated phishing website:
                        </p>
                        <div className="bg-orange-100 border border-orange-300 rounded-lg p-3 mb-3">
                          <p className="text-lg font-mono text-orange-900 text-center">
                            <a
                              href="https://shoppe123.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-orange-700 underline hover:text-orange-900 font-bold"
                            >
                              https://shoppe123.vercel.app/
                            </a>
                          </p>
                        </div>
                        <div className="bg-red-100 border border-red-300 rounded-lg p-3">
                          <p className="text-sm font-semibold text-red-800 mb-1">
                            ⚠️ Safety Notice:
                          </p>
                          <p className="text-xs text-red-700">
                            This is a controlled, harmless simulation. <strong>Never use real phishing websites</strong> for testing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </>
        )}


        {/* Troubleshooting Section */}
        <section className="mb-8 md:mb-12 max-w-4xl mx-auto">
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-800">
                🔧 Troubleshooting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    Extension not loading?
                  </h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Ensure Developer mode is enabled</li>
                    <li>
                      • Check that you selected the correct folder
                      (maiscam-1.0.0-chrome)
                    </li>
                    <li>• Try refreshing the extensions page</li>
                    <li>• Restart Chrome browser</li>
                  </ul>
                </div>

                <div className="bg-white border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    Extension icon not visible?
                  </h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Click the puzzle piece icon in Chrome toolbar</li>
                    <li>• Find mAIscam and click the pin icon</li>
                    <li>• Extension should now be visible in toolbar</li>
                  </ul>
                </div>

                <div className="bg-white border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    Analysis not working?
                  </h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Check internet connection</li>
                    <li>
                      • Ensure you&apos;re on a supported website (Gmail,
                      Facebook, etc.)
                    </li>
                    <li>
                      • Try refreshing the page and clicking the extension again
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center max-w-4xl mx-auto">
          <Card className="border-2 border-blue-300 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                🎉 Ready to Experience mAIscam?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Now that you have the extension installed, try out our
                interactive demos to see how mAIscam protects against different
                types of scams.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/email-demo">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Demo
                  </Link>
                </Button>
                <Button asChild size="lg">
                  <Link href="/website-demo">
                    <Globe className="w-5 h-5 mr-2" />
                    Website Demo
                  </Link>
                </Button>
                <Button asChild size="lg">
                  <Link href="/image-demo">
                    <Facebook className="w-5 h-5 mr-2" />
                    Social Media Demo (Twitter & Facebook)
                  </Link>
                </Button>
              </div>
              <div className="mt-6 pt-4 border-t border-blue-200">
                <p className="text-center text-gray-600 mb-4">
                  📈 Want to see detection analytics and insights?
                </p>
                <div className="flex justify-center">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-purple-300 text-purple-700 hover:bg-purple-50"
                  >
                    <a
                      href="https://mai-scam-admin.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Admin Dashboard
                    </a>
                  </Button>
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
            © {new Date().getFullYear()} mAIscam Installation Guide.
            Step-by-step instructions for judges and evaluators.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
            >
              Back to Home
            </Link>
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
