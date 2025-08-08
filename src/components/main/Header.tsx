import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container mx-auto px-6 py-8">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 object-cover">
            <Image
              src="/logo.png"
              alt="mAIscam Logo"
              width={128}
              height={128}
            />
          </div>

          <span className="text-2xl font-bold text-[#49A4EF]">
            <span>m</span>
            <span className="text-[#EB6700]">AI</span>
            <span>scam</span>
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            href="/email-demo"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Email Demo
          </Link>
          <Link
            href="/website-demo"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Website Demo
          </Link>
          <Link
            href="/image-demo"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Image Demo
          </Link>
        </div>
      </nav>
    </header>
  );
}
