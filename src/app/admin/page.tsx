"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Shield,
  AlertTriangle,
  TrendingUp,
  Globe,
  Mail,
  Camera,
  Activity,
  Settings,
  BarChart3,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const { isAuthenticated, user, logout, isLoading } = useAuth();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="h-screen bg-gradient-to-b from-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#49A4EF] mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Don't render anything if not authenticated (will redirect)
  if (!isAuthenticated) {
    return null;
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-800">mAIscam Admin</h1>
              <p className="text-sm text-gray-600">Administration Dashboard</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-green-100 text-green-800">
                System Online
              </Badge>
              <div className="text-xs text-gray-500">Session: 1 hour</div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                {user?.avatar_url ? (
                  <img
                    src={user.avatar_url}
                    alt={user.name || user.email}
                    className="w-6 h-6 rounded-full"
                  />
                ) : (
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">
                      {user?.name?.charAt(0) || user?.email?.charAt(0) || "A"}
                    </span>
                  </div>
                )}
                <span className="hidden md:block">
                  {user?.name || user?.email || "Admin"}
                </span>
              </div>
              <button
                onClick={logout}
                className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 pb-12">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Monitor and manage mAIscam extension performance
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Users
                  </p>
                  <p className="text-2xl font-bold text-gray-900">12,847</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="mt-2">
                <Badge className="bg-green-100 text-green-800">
                  +12.5% from last month
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Scams Blocked
                  </p>
                  <p className="text-2xl font-bold text-gray-900">3,421</p>
                </div>
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <div className="mt-2">
                <Badge className="bg-green-100 text-green-800">
                  +8.2% from last week
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Active Threats
                  </p>
                  <p className="text-2xl font-bold text-gray-900">47</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
              <div className="mt-2">
                <Badge className="bg-orange-100 text-orange-800">
                  -3 from yesterday
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Success Rate
                  </p>
                  <p className="text-2xl font-bold text-gray-900">98.7%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <div className="mt-2">
                <Badge className="bg-green-100 text-green-800">
                  +0.3% improvement
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Recent Activity */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Email scam blocked</p>
                      <p className="text-xs text-gray-600">
                        Phishing attempt detected in user@example.com
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">2 min ago</span>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Website flagged</p>
                      <p className="text-xs text-gray-600">
                        Suspicious domain added to blocklist
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">15 min ago</span>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">New user registered</p>
                      <p className="text-xs text-gray-600">
                        Extension installed in Thailand
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">1 hour ago</span>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Social media scan</p>
                      <p className="text-xs text-gray-600">
                        OCR analysis completed on 127 images
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Actions & Stats */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <button className="w-full p-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">
                      Update Blocklist
                    </span>
                  </div>
                </button>
                <button className="w-full p-3 text-left bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium">Email Analysis</span>
                  </div>
                </button>
                <button className="w-full p-3 text-left bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <Camera className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium">Image Scan</span>
                  </div>
                </button>
                <button className="w-full p-3 text-left bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium">View Reports</span>
                  </div>
                </button>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  System Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">AI Engine</span>
                  <Badge className="bg-green-100 text-green-800">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Database</span>
                  <Badge className="bg-green-100 text-green-800">Healthy</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">API Services</span>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Threat Intel</span>
                  <Badge className="bg-yellow-100 text-yellow-800">
                    Syncing
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
