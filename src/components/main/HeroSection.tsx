import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Mail, Globe, Users, ArrowRight, Eye } from "lucide-react";
import FeatureCard from "@/components/main/FeatureCard";
import { FeatureCardData } from "@/data/main/FeatureCardData";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#AEDAF8]">
      {/* BACK LAYER - Massive Text with Gradient */}
      <div className="absolute inset-0 w-full h-full flex items-start justify-center z-10 pt-16 px-16">
        <h1
          className="text-[10rem] md:text-[12rem] lg:text-[12rem] xl:text-[15rem] 2xl:text-[18rem] select-none leading-none w-full text-center flex flex-row justify-between items-center"
          style={{
            background:
              "linear-gradient(to bottom, white 20%, transparent 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            gap: "0.2em",
          }}
        >
          <span>m</span>
          <span>A</span>
          <span>I</span>
          <span>s</span>
          <span>c</span>
          <span>a</span>
          <span>m</span>
        </h1>
      </div>

      {/* MIDDLE LAYER - Large Logo */}
      <div className="absolute inset-0 w-full h-full flex items-end justify-center z-20 pt-16 px-16">
        <div
          className="relative md:w-[56rem] md:h-[56rem]"
          style={{ bottom: "-20%" }}
        >
          {/* Logo with enhanced glow as drop shadow */}
          <Image
            src="/logo.png"
            alt="mAIscam Logo"
            fill
            className="object-contain relative z-10"
            style={{
              filter: `drop-shadow(0 0 90px rgba(0, 20, 126, 0.4)) drop-shadow(0 0 60px rgba(0, 20, 126, 0.3)) drop-shadow(0 0 30px rgba(0, 20, 126, 0.2))`,
            }}
            priority
          />
        </div>
      </div>

      {/* FRONT LAYER - 3 Column Layout */}
      <div className="absolute inset-0 w-full h-full z-30 flex items-end pt-16 px-16">
        {/* LEFT COLUMN - 20% */}
        <div className="w-1/4 h-1/2 flex justify-start items-center pb-16 pr-16">
          <div className="bg-white w-full h-full rounded-tr-[10rem] flex flex-col items-start justify-center gap-8 px-8 py-16 relative">
            <div className="w-64 h-64 -mt-32 relative">
              <Image
                src="/images/shield.png"
                alt="Shield Protection"
                width={192}
                height={192}
                className="object-contain w-full h-full drop-shadow-[-8px_8px_16px_rgba(0,0,0,0.3)]"
              />
            </div>
            <div className="w-full flex flex-col space-y-2 text-xl font-medium text-start">
              <span className="text-[#00147e]">Protect your loved ones</span>
              <span className="text-[#8CC8F5]">against fraud and scam</span>
              <span className="text-[#8CC8F5]">with the power of AI</span>
              <span className="text-[#00147e]">Available in all of SEA!</span>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN - 60% */}
        <div className="w-1/2 h-1/2 flex flex-col">
          {/* Middle Top */}
          <div className="w-full h-1/2"></div>

          {/* Middle Bottom with Blur */}
          <div className="w-full h-1/2 bg-[#AEDAF8]/30 backdrop-blur-lg rounded-tl-2xl rounded-tr-2xl border-l-2 border-r-2 border-t-2 border-white flex items-center justify-center">
            <div className="relative group">
              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-white/40 rounded-full blur-md scale-110 group-hover:scale-125 transition-transform duration-300"></div>
              {/* Middle glow layer */}
              <div className="absolute inset-0 bg-white/20 rounded-full blur-sm scale-105 group-hover:scale-115 transition-transform duration-300"></div>
              {/* Button with enhanced styling */}
              <div className="p-2 border-1 border-white rounded-full transition-transform duration-300 group-hover:scale-110">
                <Button className="relative bg-white text-gray-800 hover:bg-gray-50 px-10 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 border border-white/20">
                  <span className="text-lg">Download Extension</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - 20% */}
        <div className="w-1/4 h-1/2 flex flex-col justify-between items-start pb-16 pl-16">
          {/* Email Protection */}
          <div className="w-full bg-white rounded-xl p-6 border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-600" />
                </div>
                <h3 className="text-gray-800 font-semibold">
                  Email Protection
                </h3>
              </div>
              <Button
                asChild
                className="bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg font-medium transition-all duration-300"
              >
                <Link
                  href="/email-demo"
                  className="flex items-center space-x-2"
                >
                  <span>Try</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Website Blocking */}
          <div className="w-full bg-orange-50 rounded-xl p-6 border border-orange-200 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-orange-800 font-semibold">
                  Website Blocking
                </h3>
              </div>
              <Button
                asChild
                className="bg-orange-50 text-orange-700 hover:bg-orange-100 border border-orange-200 px-4 py-2 rounded-lg font-medium transition-all duration-300"
              >
                <Link
                  href="/website-demo"
                  className="flex items-center space-x-2"
                >
                  <span>Try</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Social Media Analysis */}
          <div className="w-full bg-purple-50 rounded-xl p-6 border border-purple-200 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-purple-800 font-semibold">
                  Social Media Analysis
                </h3>
              </div>
              <Button
                asChild
                className="bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200 px-4 py-2 rounded-lg font-medium transition-all duration-300"
              >
                <Link
                  href="/image-demo"
                  className="flex items-center space-x-2"
                >
                  <span>Try</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
