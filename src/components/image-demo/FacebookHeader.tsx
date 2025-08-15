"use client";

import {
  Search,
  Plus,
  MessageCircle,
  Bell,
  User,
  Home,
  Users,
  Play,
  Store,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FacebookHeader() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Left Section - Logo and Search */}
          <div className="flex items-center flex-1">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-[#1877f2] mr-4">
                facebook
              </div>
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search Facebook"
                  className="pl-10 pr-4 py-2 w-64 bg-gray-100 border-0 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Center Section - Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="p-3 hover:bg-gray-100 rounded-lg"
            >
              <Home className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-3 hover:bg-gray-100 rounded-lg"
            >
              <Users className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-3 hover:bg-gray-100 rounded-lg"
            >
              <Play className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-3 hover:bg-gray-100 rounded-lg"
            >
              <Store className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-3 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Right Section - Icons and Profile */}
          <div className="flex items-center space-x-2 flex-1 justify-end">
            <Button
              variant="ghost"
              size="sm"
              className="p-3 hover:bg-gray-100 rounded-full"
            >
              <Plus className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-3 hover:bg-gray-100 rounded-full"
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-3 hover:bg-gray-100 rounded-full"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-3 hover:bg-gray-100 rounded-full"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
