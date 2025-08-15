"use client";

import {
  ArrowLeft,
  Archive,
  AlertCircle,
  Trash2,
  MailOpen,
  MoreVertical,
  Reply,
  Forward,
  Star,
} from "lucide-react";
import { useExtensionStore } from "@/lib/store/extensionStore";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RiskAnalysisBlock } from "./RiskAnalysisBlock";
import { EmailData } from "@/data/email-demo/EmailData";

export function EmailContent() {
  const { isActive, analyzeContent } = useExtensionStore();

  useEffect(() => {
    if (isActive) {
      analyzeContent(EmailData.content, "email");
    }
  }, [isActive, analyzeContent]);

  return (
    <main className="flex-1 bg-background flex flex-col min-h-0">
      {/* Email Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b flex-shrink-0">
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Archive className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <AlertCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash2 className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MailOpen className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Email Content */}
      <div className="p-6 w-full mx-6 relative overflow-y-auto flex-1">
        {/* Risk Analysis Block appears here when active */}
        {isActive && <RiskAnalysisBlock />}

        <h1 className="text-2xl font-normal mb-6">{EmailData.subject}</h1>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-destructive rounded-full flex items-center justify-center">
              <span className="text-destructive-foreground text-sm">BN</span>
            </div>
            <div>
              <div className="font-medium text-foreground">
                {EmailData.from}
              </div>
              <div className="text-sm text-muted-foreground">
                kepada {EmailData.to}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>{EmailData.date}</span>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Star className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Reply className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="prose max-w-none">
          <pre
            className={`whitespace-pre-wrap font-sans leading-relaxed transition filter ${
              isActive ? "blur-sm" : ""
            }`}
          >
            {EmailData.content}
          </pre>
        </div>

        {/* Reply/Forward buttons */}
        <div className="mt-8 flex space-x-4">
          <Button variant="outline" className="rounded-full">
            <Reply className="h-4 w-4 mr-2" />
            Reply
          </Button>
          <Button variant="outline" className="rounded-full">
            <Forward className="h-4 w-4 mr-2" />
            Forward
          </Button>
        </div>
      </div>
    </main>
  );
}
