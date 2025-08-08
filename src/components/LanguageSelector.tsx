"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useExtensionStore } from "@/lib/store/extensionStore";
import { LanguageSelections } from "@/data/store/Languages";
import type { LanguageCode } from "@/data/store/Languages";

export function LanguageSelector() {
  const { selectedLanguage, setLanguage } = useExtensionStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    LanguageSelections.find((lang) => lang.code === selectedLanguage) ||
    LanguageSelections[0];
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white shadow-sm text-gray-900 border-gray-300 hover:bg-gray-50 hover:shadow-md transition-all"
      >
        <span className="text-base">{currentLanguage.flag}</span>
        <span className="font-medium">{currentLanguage.name}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute top-full mt-1 right-0 bg-white border rounded-lg shadow-xl z-50 min-w-[180px] border-gray-300">
          {LanguageSelections.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as LanguageCode);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left flex items-center gap-2 first:rounded-t-lg last:rounded-b-lg transition-colors ${
                lang.code === selectedLanguage
                  ? "bg-blue-100 text-blue-900 font-medium"
                  : "bg-white text-gray-900 hover:bg-gray-50"
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
