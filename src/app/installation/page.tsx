"use client";

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
  Eye,
  Shield,
  FileText,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/main/Header";

export default function InstallationPage() {
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
              <span className="text-gray-800 ml-4">Installation Guide</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Easy step-by-step instructions to install and use the mAIscam browser extension
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <div className="flex items-center gap-3 justify-center">
                <Shield className="w-5 h-5 text-blue-600" />
                <p className="text-sm md:text-base text-blue-800">
                  <strong>For Judges & Evaluators:</strong> This guide provides clear, step-by-step instructions for installing and testing the mAIscam browser extension
                </p>
              </div>
            </div>
          </div>
        </section>

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
                    <h4 className="font-semibold text-orange-800 mb-1">Google Chrome Browser</h4>
                    <p className="text-sm text-orange-700">Version 88 or higher required</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-1">Extension Files</h4>
                    <p className="text-sm text-orange-700">maiscam-1.0.0-chrome.zip from repository</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-1">Developer Mode</h4>
                    <p className="text-sm text-orange-700">Ability to enable Chrome developer mode</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-1">Internet Connection</h4>
                    <p className="text-sm text-orange-700">Required for AI analysis features</p>
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
                  <Badge className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">1</Badge>
                  <Download className="w-6 h-6" />
                  Download the Extension
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="text-gray-700">
                    <p className="mb-3">
                      Download the <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">maiscam-1.0.0-chrome.zip</code> file from the mAIscam extension repository:
                    </p>
                    <div className="bg-white border-2 border-blue-200 rounded-lg p-4 inline-block">
                      <a 
                        href="https://github.com/mAI-scam/mai-scam-extension/releases/tag/v1.0.0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium underline decoration-2 underline-offset-2 flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        https://github.com/mAI-scam/mai-scam-extension/releases/tag/v1.0.0
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-sm text-blue-800">
                      <strong>💡 For Judges:</strong> Click the link above to access the GitHub releases page where you can download the latest extension files.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-3 font-medium">📥 Download Location:</p>
                    <div className="bg-white border rounded-lg overflow-hidden">
                      <Image
                        src="/images/installation/download-page.png"
                        alt="Extension download page"
                        width={2622}
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
                  <Badge className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">2</Badge>
                  <FolderOpen className="w-6 h-6" />
                  Extract the Files
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Locate the downloaded <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">maiscam-1.0.0-chrome.zip</code> file</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Right-click and select &ldquo;Extract All&rdquo; or use your preferred extraction tool</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>You should now have a folder named <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">maiscam-1.0.0-chrome</code></span>
                    </li>
                  </ol>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-3 font-medium">✅ Expected result:</p>
                    <div className="bg-white border rounded-lg p-3 flex items-center justify-center">
                      <Image
                        src="/images/installation/extracted-folder.png"
                        alt="Extracted extension folder"
                        width={1034}
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
                  <Badge className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">3</Badge>
                  <Chrome className="w-6 h-6" />
                  Open Chrome Extensions Page
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <p className="text-gray-700">Open Google Chrome and navigate to the extensions management page:</p>
                  
                  <div className="bg-gray-50 border rounded-lg p-3">
                    <p className="text-sm font-mono text-gray-800">chrome://extensions/</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Alternative methods:</strong>
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• Chrome menu → More tools → Extensions</li>
                      <li>• Three dots menu → Extensions → Manage extensions</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-3 font-medium">🌐 Chrome Extensions Page:</p>
                    <div className="bg-white border rounded-lg overflow-hidden">
                      <Image
                        src="/images/installation/extensions-page.png"
                        alt="Chrome extensions page"
                        width={2874}
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
                  <Badge className="w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center">4</Badge>
                  <ToggleLeft className="w-6 h-6" />
                  Enable Developer Mode
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <p className="text-gray-700">
                    On the extensions page, you&apos;ll find a &ldquo;Developer mode&rdquo; toggle in the top-right corner.
                  </p>
                  
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                      <span>Look for the &ldquo;Developer mode&rdquo; toggle switch</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                      <span>Click to enable it (the toggle should turn blue/active)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                      <span>New buttons will appear: &ldquo;Load unpacked&rdquo;, &ldquo;Pack extension&rdquo;, &ldquo;Update&rdquo;</span>
                    </li>
                  </ol>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800 mb-3 font-medium">🔧 Enable Developer Mode:</p>
                    <div className="bg-white border rounded-lg overflow-hidden">
                      <Image
                        src="/images/installation/developer-mode.png"
                        alt="Developer mode toggle"
                        width={2874}
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
                  <Badge className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center">5</Badge>
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
                      <span>Click the &ldquo;Load unpacked&rdquo; button</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                      <span>Navigate to and select the <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">maiscam-1.0.0-chrome</code> folder</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                      <span>Click &ldquo;Select Folder&rdquo;</span>
                    </li>
                  </ol>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800 mb-3 font-medium">📂 Upload/Unzip Process:</p>
                    <div className="bg-white border rounded-lg overflow-hidden">
                      <Image
                        src="/images/installation/upload-unzip-extension.png"
                        alt="Upload and unzip extension process"
                        width={2874}
                        height={1568}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <ol className="space-y-3 text-gray-700" start={4}>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>The mAIscam extension should now appear in your extensions list!</span>
                    </li>
                  </ol>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-800 mb-3 font-medium">✅ Extension Successfully Loaded:</p>
                    <div className="bg-white border rounded-lg overflow-hidden">
                      <Image
                        src="/images/installation/extension-loading.png"
                        alt="Extension loaded successfully"
                        width={2874}
                        height={1568}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-xs text-green-700 mt-2">The mAIscam extension now appears in your extensions list and Chrome toolbar, and is ready to use!</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 6 - Using the Extension */}
            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center gap-3 text-xl text-green-800">
                  <Badge className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">6</Badge>
                  <Play className="w-6 h-6" />
                  Using the Extension
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Now that the extension is installed, here&apos;s how to access and use it:
                  </p>
                  
                  <ol className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Click on the mAIscam extension icon in your Chrome toolbar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>The extension popup will open, showing available options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Choose the appropriate analysis option based on what you want to scan</span>
                    </li>
                  </ol>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-800 mb-3 font-medium">🖱️ How to Open the Extension:</p>
                    <div className="bg-white border rounded-lg overflow-hidden mb-4">
                      <Image
                        src="/images/installation/extension-loading.png"
                        alt="How to open the mAIscam extension"
                        width={2874}
                        height={1568}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-xs text-green-700">Click on the mAIscam icon in the Chrome toolbar to open the extension popup</p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800 mb-3 font-medium">✨ Extension Loading State:</p>
                    <div className="bg-white border rounded-lg overflow-hidden mb-4">
                      <Image
                        src="/images/installation/open-extension.png"
                        alt="Extension loading state"
                        width={2874}
                        height={1568}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-xs text-blue-700">The extension will show a loading state while processing your request</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safe Testing Section */}
        <section className="mb-8 md:mb-12 max-w-4xl mx-auto">
          <Card className="border-2 border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-orange-800">
                <Shield className="w-6 h-6" />
                🛡️ Safe Testing Environment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-orange-800">
                  <strong>For Your Safety:</strong> Want to test the website scam detection feature with the real extension? We've created a safe, simulated phishing website specifically for testing purposes.
                </p>
                
                <div className="bg-white border-2 border-orange-300 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-5 h-5 text-orange-600" />
                    <h4 className="font-semibold text-orange-900">Test Website</h4>
                  </div>
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
                  
                  <div className="space-y-3">
                    <p className="text-sm text-orange-800">
                      <strong>How to test:</strong>
                    </p>
                    <ol className="text-sm text-orange-700 space-y-2 ml-4">
                      <li>1. Navigate to the test website above</li>
                      <li>2. Click the mAIscam extension icon in your Chrome toolbar</li>
                      <li>3. Select "Analyze Website"</li>
                      <li>4. Watch as the extension detects and flags the simulated scam website</li>
                    </ol>
                  </div>
                </div>
                
                <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-red-800 mb-1">
                        ⚠️ Important Safety Notice:
                      </p>
                      <ul className="text-xs text-red-700 space-y-1">
                        <li>• This is a controlled, harmless simulation designed specifically for testing</li>
                        <li>• <strong>Never use real phishing websites</strong> for testing as they pose genuine security risks</li>
                        <li>• The test website is completely safe and contains no malicious code or data collection</li>
                        <li>• Use this test site to safely experience how mAIscam protects you from real threats</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Verification Section */}
        <section className="mb-8 md:mb-12 max-w-4xl mx-auto">
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-green-800">
                <CheckCircle className="w-6 h-6" />
                ✅ Verify Installation Success
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 mb-4">
                If installation was successful, you should see:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">In Extensions Page:</h4>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• mAIscam extension card with logo</li>
                    <li>• Version 1.0.0 displayed</li>
                    <li>• Toggle switch is ON (enabled)</li>
                    <li>• &ldquo;Remove&rdquo; and &ldquo;Details&rdquo; buttons visible</li>
                  </ul>
                </div>
                <div className="bg-white border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">In Browser:</h4>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• mAIscam icon appears in toolbar</li>
                    <li>• Icon is clickable and responsive</li>
                    <li>• Extension popup opens when clicked</li>
                    <li>• No error messages in console</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Usage Guide */}
        <section className="mb-8 md:mb-12 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
            🎯 How to Use mAIscam
          </h2>

          <div className="space-y-8">
            {/* Email Protection */}
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2 text-xl text-blue-800">
                  <Mail className="w-6 h-6" />
                  Email Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-600 mb-2">🔍 Before Extension:</p>
                      <div className="bg-white rounded overflow-hidden shadow-md">
                        <Image
                          src="/images/installation/gmail-interface.png"
                          alt="Gmail interface before extension"
                          width={3358}
                          height={1874}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="text-sm font-medium text-red-600 mb-2">🚨 After Detection:</p>
                      <div className="bg-white rounded overflow-hidden shadow-md">
                        <Image
                          src="/images/installation/gmail-interface-detected.png"
                          alt="Gmail interface with scam detected"
                          width={3358}
                          height={1874}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-800 mb-4">How to Use:</h4>
                      <ol className="text-base space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="bg-blue-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                          Open Gmail in your browser
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-blue-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                          Click the mAIscam extension icon
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-blue-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                          Select &ldquo;Analyze Email&rdquo;
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-blue-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                          View real-time scam analysis
                        </li>
                      </ol>
                    </div>
                    
                    <Button asChild size="lg" className="w-full">
                      <Link href="/email-demo">
                        <Mail className="w-5 h-5 mr-2" />
                        Try Email Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Website Scanner */}
            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center gap-2 text-xl text-green-800">
                  <Globe className="w-6 h-6" />
                  Website Scanner
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-600 mb-2">🔍 Before Extension:</p>
                      <div className="bg-white rounded overflow-hidden shadow-md">
                        <Image
                          src="/images/installation/website-scanner.png"
                          alt="Website before extension analysis"
                          width={3358}
                          height={1874}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="text-sm font-medium text-red-600 mb-2">🚨 After Detection:</p>
                      <div className="bg-white rounded overflow-hidden shadow-md">
                        <Image
                          src="/images/installation/website-scanner-detected.png"
                          alt="Website with scam detected and blocked"
                          width={3358}
                          height={1874}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-green-800 mb-4">How to Use:</h4>
                      <ol className="text-base space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="bg-green-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                          Navigate to any website
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-green-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                          Click the mAIscam extension icon
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-green-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                          Select &ldquo;Analyze Website&rdquo;
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-green-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                          Get instant legitimacy verification
                        </li>
                      </ol>
                      
                      <div className="bg-green-100 border border-green-300 rounded-lg p-3 mt-4">
                        <p className="text-sm text-green-800">
                          <strong>🛡️ Safe Testing:</strong> Try our simulated scam website at{" "}
                          <a 
                            href="https://shoppe123.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-green-700 underline hover:text-green-900 font-mono"
                          >
                            shoppe123.vercel.app
                          </a>{" "}
                          to safely test the extension without using real phishing sites.
                        </p>
                      </div>
                    </div>
                    
                    <Button asChild size="lg" className="w-full">
                      <Link href="/website-demo">
                        <Globe className="w-5 h-5 mr-2" />
                        Try Website Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Guard */}
            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="flex items-center gap-2 text-xl text-purple-800">
                  <Facebook className="w-6 h-6" />
                  Social Media Guard
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-600 mb-2">🔍 Before Extension:</p>
                      <div className="bg-white rounded overflow-hidden shadow-md">
                        <Image
                          src="/images/installation/facebook-feed.png"
                          alt="Facebook feed before extension"
                          width={3358}
                          height={1874}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="text-sm font-medium text-red-600 mb-2">🚨 After Detection:</p>
                      <div className="bg-white rounded overflow-hidden shadow-md">
                        <Image
                          src="/images/installation/facebook-feed-detected.png"
                          alt="Facebook feed with scam posts detected"
                          width={3358}
                          height={1874}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-purple-800 mb-4">How to Use:</h4>
                      <ol className="text-base space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="bg-purple-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                          Browse Facebook or social media
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-purple-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                          Click the mAIscam extension icon
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-purple-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                          Select &ldquo;Scan Post&rdquo;
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-purple-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                          Click on suspicious content to analyze
                        </li>
                      </ol>
                    </div>
                    
                    <Button asChild size="lg" className="w-full">
                      <Link href="/image-demo">
                        <Facebook className="w-5 h-5 mr-2" />
                        Try Social Media Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Troubleshooting */}
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
                  <h4 className="font-semibold text-yellow-800 mb-2">Extension not loading?</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Ensure Developer mode is enabled</li>
                    <li>• Check that you selected the correct folder (maiscam-1.0.0-chrome)</li>
                    <li>• Try refreshing the extensions page</li>
                    <li>• Restart Chrome browser</li>
                  </ul>
                </div>

                <div className="bg-white border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Extension icon not visible?</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Click the puzzle piece icon in Chrome toolbar</li>
                    <li>• Find mAIscam and click the pin icon</li>
                    <li>• Extension should now be visible in toolbar</li>
                  </ul>
                </div>

                <div className="bg-white border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Analysis not working?</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Check internet connection</li>
                    <li>• Ensure you&apos;re on a supported website (Gmail, Facebook, etc.)</li>
                    <li>• Try refreshing the page and clicking the extension again</li>
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
                Now that you have the extension installed, try out our interactive demos to see how mAIscam protects against different types of scams.
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
                    Social Media Demo
                  </Link>
                </Button>
              </div>
              <div className="mt-6 pt-4 border-t border-blue-200">
                <p className="text-center text-gray-600 mb-4">
                  📈 Want to see detection analytics and insights?
                </p>
                <div className="flex justify-center">
                  <Button asChild size="lg" variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                    <a href="https://mai-scam-admin.vercel.app/" target="_blank" rel="noopener noreferrer">
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
            © {new Date().getFullYear()} mAIscam Installation Guide. Step-by-step instructions for judges and evaluators.
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