"use client";

import {
  User,
  Users,
  Clock,
  Bookmark,
  Play,
  Store,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function FacebookSidebar() {
  return (
    <div
      className="hidden lg:block w-80 bg-white border-r border-gray-200 fixed left-0 top-64 overflow-y-auto"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className="p-4 space-y-2">
        {/* User Profile */}
        <Button variant="ghost" className="w-full justify-start p-3 h-auto">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
            <User className="h-5 w-5 text-white" />
          </div>
          <span className="font-medium">Demo User</span>
        </Button>

        {/* Main Options */}
        <Button variant="ghost" className="w-full justify-start p-3 h-auto">
          <Users className="h-6 w-6 text-blue-600 mr-3" />
          <span>Friends</span>
        </Button>

        <Button variant="ghost" className="w-full justify-start p-3 h-auto">
          <Clock className="h-6 w-6 text-blue-600 mr-3" />
          <span>Memories</span>
        </Button>

        <Button variant="ghost" className="w-full justify-start p-3 h-auto">
          <Bookmark className="h-6 w-6 text-purple-600 mr-3" />
          <span>Saved</span>
        </Button>

        <Button variant="ghost" className="w-full justify-start p-3 h-auto">
          <Play className="h-6 w-6 text-blue-600 mr-3" />
          <span>Video</span>
        </Button>

        <Button variant="ghost" className="w-full justify-start p-3 h-auto">
          <Store className="h-6 w-6 text-blue-600 mr-3" />
          <span>Marketplace</span>
        </Button>

        <Button variant="ghost" className="w-full justify-start p-3 h-auto">
          <ChevronDown className="h-6 w-6 text-gray-600 mr-3" />
          <span>See more</span>
        </Button>

        {/* Shortcuts */}
        <div className="pt-4 border-t border-gray-200">
          <h3 className="font-semibold text-gray-600 text-sm mb-2 px-3">
            Your shortcuts
          </h3>
          <Button variant="ghost" className="w-full justify-start p-3 h-auto">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-green-600 text-xs font-bold">G</span>
            </div>
            <span>Gadget Reviews Malaysia</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start p-3 h-auto">
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-red-600 text-xs font-bold">D</span>
            </div>
            <span>Deal Hunters Malaysia</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
