import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full px-16 py-8">
        <div className="flex items-center justify-between">
          {/* Left - Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <Image
                src="/logo.png"
                alt="mAIscam Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-[#49A4EF]">m</span>
              <span className="text-[#EB6700]">AI</span>
              <span className="text-[#49A4EF]">scam</span>
            </span>
          </div>

          {/* Center - Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/email-demo"
              className="text-[#49A4EF] font-medium transition-all duration-300 hover:scale-110 hover:text-[#EB6700] hover:font-bold relative group py-2 w-32 text-center"
            >
              Email Demo
              <span
                className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#49A4EF] transition-all duration-300 group-hover:scale-x-110 group-hover:bg-[#EB6700]"
                style={{ width: "calc(100% - 2rem)" }}
              ></span>
            </Link>
            <Link
              href="/website-demo"
              className="text-[#49A4EF] font-medium transition-all duration-300 hover:scale-110 hover:text-[#EB6700] hover:font-bold relative group py-2 w-32 text-center"
            >
              Website Demo
              <span
                className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#49A4EF] transition-all duration-300 group-hover:scale-x-110 group-hover:bg-[#EB6700]"
                style={{ width: "calc(100% - 1rem)" }}
              ></span>
            </Link>
            <Link
              href="/image-demo"
              className="text-[#49A4EF] font-medium transition-all duration-300 hover:scale-110 hover:text-[#EB6700] hover:font-bold relative group py-2 w-40 text-center"
            >
              Social Media Demo
              <span
                className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#49A4EF] transition-all duration-300 group-hover:scale-x-110 group-hover:bg-[#EB6700]"
                style={{ width: "calc(100% - 1rem)" }}
              ></span>
            </Link>
          </nav>

          {/* Right - Contact Button */}
          <Button
            asChild
            className="bg-[#49A4EF] hover:bg-[#EB6700] text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="#contact" className="flex items-center space-x-2">
              <span>Contact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>

          {/* Mobile Menu Button (for future mobile implementation) */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <span className="w-4 h-0.5 bg-gray-600"></span>
                <span className="w-4 h-0.5 bg-gray-600"></span>
                <span className="w-4 h-0.5 bg-gray-600"></span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
