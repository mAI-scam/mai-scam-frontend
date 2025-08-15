"use client";

import {
  Lock,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Home,
  Star,
} from "lucide-react";

interface FakeBrowserBarProps {
  websiteUrl?: string;
}

export function FakeBrowserBar({
  websiteUrl = "deal-raya-123.com",
}: FakeBrowserBarProps) {
  return (
    <div className="h-12 bg-gray-100 border-b border-gray-300 fixed top-36 left-0 right-0 z-100">
      <div className="h-full w-full   flex items-center p-2 gap-2">
        <div className="flex gap-1">
          <button className="p-1.5 hover:bg-gray-200 rounded">
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-200 rounded">
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-200 rounded">
            <RotateCw className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-200 rounded">
            <Home className="h-4 w-4 text-gray-600" />
          </button>
        </div>

        <div
          className="flex-1 flex items-center bg-white rounded-full px-4 py-1.5 border"
          data-tour="fake-browser-bar"
        >
          <Lock className="h-4 w-4 text-gray-400 mr-2" />
          <span className="text-sm text-gray-700">{websiteUrl}</span>
        </div>

        <button className="p-1.5 hover:bg-gray-200 rounded">
          <Star className="h-4 w-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
