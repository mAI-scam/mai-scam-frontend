"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();
  const { login, loginWithGoogle, isAuthenticated, isLoading } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(formData.username, formData.password);
    if (success) {
      router.push("/admin");
    } else {
      alert("Invalid credentials. Use username: test, password: 1234");
    }
  };

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
  };

  // Redirect to admin if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/admin");
    }
  }, [isAuthenticated, router]);

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

  return (
    <div className="h-screen bg-gradient-to-b from-background to-muted/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-3 w-12 h-12 bg-gradient-to-br from-[#49A4EF] to-[#EB6700] rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-white">m</span>
          </div>
          <CardTitle className="text-xl font-bold text-gray-800">
            Admin Login
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Prototype Hint */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
            <p className="text-sm text-blue-800">
              <strong>Prototype Credentials:</strong>
              <br />
              Username: <code className="bg-blue-100 px-1 rounded">test</code>
              <br />
              Password: <code className="bg-blue-100 px-1 rounded">1234</code>
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="username" className="text-sm font-medium">
                Username
              </Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#49A4EF] to-[#EB6700] hover:from-[#3B8BC4] hover:to-[#D45A00] text-white font-medium py-2"
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <Separator className="my-3" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-2 text-xs text-gray-500">or</span>
            </div>
          </div>

          {/* Google Login Button */}
          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2"
          >
            <svg
              className="w-4 h-4 mr-2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
