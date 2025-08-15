"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, AlertTriangle, Shield } from "lucide-react";
import { useExtensionStore } from "@/lib/store/extensionStore";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ExtensionData } from "@/data/email-demo/ExtensionData";
import { colorSchemes, type ColorScheme } from "@/data/DemoInstructionData";

interface DemoInstructionProps {
  title: string;
  icon: React.ReactNode;
  onStartTour: () => void;
  colorScheme: ColorScheme;
}

export function DemoInstruction({
  title,
  icon,
  onStartTour,
  colorScheme,
}: DemoInstructionProps) {
  const { isActive, isActivating, toggleExtension, selectedLanguage } =
    useExtensionStore();
  const colors = colorSchemes[colorScheme];
  const t = ExtensionData[selectedLanguage];

  return (
    <div
      data-tour="demo-banner"
      className={`${colors.bg} border-b ${colors.border} p-4 max-w-full mx-auto`}
    >
      {/* Desktop Layout - 3-Column Grid */}
      <div className="hidden md:grid md:grid-cols-[20%_60%_20%] md:items-center">
        {/* Left Column - Navigation */}
        <div className="flex flex-col items-start gap-3 justify-self-start">
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/95 backdrop-blur-sm shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 border-gray-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Middle Column - Title and Start Tour */}
        <div className="flex items-center text-center justify-self-center gap-4">
          <div className="flex items-center gap-2">
            <div className={colors.iconColor}>{icon}</div>
            <span className={`font-semibold ${colors.titleColor}`}>
              {title}
            </span>
          </div>

          <Button
            onClick={onStartTour}
            variant="default"
            size="sm"
            className="relative text-white font-semibold backdrop-blur-sm shadow-2xl border-2 border-white/20 transition-all duration-300 animate-pulse hover:animate-none hover:scale-105 hover:shadow-2xl"
            style={{
              background: colors.buttonBg,
              boxShadow: colors.buttonShadow,
            }}
          >
            <Play className="h-4 w-4 mr-2 drop-shadow-md" />
            <span className="drop-shadow-md">Start Tour</span>
            {/* Glowing ring effect */}
            <div
              className="absolute inset-0 rounded-md opacity-40 blur-md -z-10 animate-ping"
              style={{
                background: colors.buttonBg,
              }}
            ></div>
          </Button>
        </div>

        {/* Right Column - Language and Activate */}
        <div className="flex items-center gap-3 justify-self-end">
          <LanguageSelector />

          <Button
            data-tour="activate-button"
            onClick={toggleExtension}
            className="shadow-lg h-9"
            variant={isActive ? "destructive" : "default"}
            disabled={isActivating}
          >
            {isActivating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2"></div>
                Activating...
              </>
            ) : (
              <>
                <Shield className="h-5 w-5 mr-2" />
                {isActive ? t.deactivateExtension : t.activateExtension}
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Layout - Three Vertical Sections */}
      <div className="md:hidden flex flex-col items-center space-y-4">
        {/* Top - Back Button and Title */}
        <div className="max-w-[100vw] flex justify-between items-center gap-3">
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/95 backdrop-blur-sm shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 border-gray-200 p-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className={colors.iconColor}>{icon}</div>
            <span className={`font-semibold ${colors.titleColor} text-sm`}>
              {title}
            </span>
          </div>
        </div>

        {/* Middle - Start Tour Button */}
        <div className="max-w-[100vw] flex justify-center">
          <Button
            onClick={onStartTour}
            variant="default"
            size="sm"
            className="relative text-white font-semibold backdrop-blur-sm shadow-2xl border-2 border-white/20 transition-all duration-300 animate-pulse hover:animate-none hover:scale-105 hover:shadow-2xl w-full max-w-xs"
            style={{
              background: colors.buttonBg,
              boxShadow: colors.buttonShadow,
            }}
          >
            <Play className="h-4 w-4 mr-2 drop-shadow-md" />
            <span className="drop-shadow-md">Start Tour</span>
            {/* Glowing ring effect */}
            <div
              className="absolute inset-0 rounded-md opacity-40 blur-md -z-10 animate-ping"
              style={{
                background: colors.buttonBg,
              }}
            ></div>
          </Button>
        </div>

        {/* Bottom - Language Selector and Activate Button */}
        <div className="max-w-[100vw] flex items-center gap-3 justify-center">
          <LanguageSelector />

          <Button
            data-tour="activate-button"
            onClick={toggleExtension}
            className="shadow-lg h-9"
            variant={isActive ? "destructive" : "default"}
            disabled={isActivating}
          >
            {isActivating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2"></div>
                Activating...
              </>
            ) : (
              <>
                <Shield className="h-5 w-5 mr-2" />
                {isActive ? t.deactivateExtension : t.activateExtension}
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
