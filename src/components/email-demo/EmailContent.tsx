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
      <div className="p-4 md:p-6 w-full mx-2 md:mx-6 relative overflow-y-auto flex-1 min-h-0">
        {/* Risk Analysis Block appears here when active */}
        {isActive && <RiskAnalysisBlock />}

        <h1 className="text-lg md:text-2xl font-normal mb-4 md:mb-6">
          {EmailData.subject}
        </h1>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6 space-y-3 md:space-y-0">
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-destructive rounded-full flex items-center justify-center">
              <span className="text-destructive-foreground text-xs md:text-sm">
                BN
              </span>
            </div>
            <div>
              <div className="font-medium text-foreground text-sm md:text-base">
                {EmailData.from}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                kepada {EmailData.to}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-muted-foreground">
            <span>{EmailData.date}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 md:h-8 md:w-8"
            >
              <Star className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 md:h-8 md:w-8"
            >
              <Reply className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 md:h-8 md:w-8"
            >
              <MoreVertical className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>
        </div>

        <div className="prose max-w-none">
          <pre
            className={`whitespace-pre-wrap font-sans leading-relaxed transition filter ${
              isActive ? "blur-sm" : ""
            }`}
            data-tour="email-message-content"
          >
            {EmailData.content}
          </pre>
        </div>

        {/* Reply/Forward buttons */}
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Button variant="outline" className="rounded-full text-sm">
            <Reply className="h-3 w-3 md:h-4 md:w-4 mr-2" />
            Reply
          </Button>
          <Button variant="outline" className="rounded-full text-sm">
            <Forward className="h-3 w-3 md:h-4 md:w-4 mr-2" />
            Forward
          </Button>
        </div>
      </div>
    </main>
  );
}
