import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WhyMaiscamSection() {
  return (
    <section className="mb-12 flex max-w-5xl mx-auto gap-8 flex-col md:flex-row">
      {/* Left - Image */}
      <Card className="flex-1 hidden md:block">
        <div className="relative w-full h-64 md:h-full">
          <Image
            src="/images/main_why_maiscam_1.jpg" // replace with your image path
            alt="Why mAIscam Illustration"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </Card>

      {/* Right - Content */}
      <Card className="flex-2">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Why mAIscam</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            mAIscam protects organizations and nations from phishing and scam
            threats with{" "}
            <strong className="text-black">
              multilingual, culturally aware AI
            </strong>{" "}
            built for Southeast Asia.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong className="text-black">Advanced Threat Detection</strong>{" "}
              across email, web, and social media to block malicious content
              before it reaches users.
            </li>
            <li>
              <strong className="text-black">Nation-Scale Protection</strong>{" "}
              enabling governments to safeguard citizens, run awareness
              campaigns, and share intelligence with law enforcement.
            </li>
            <li>
              <strong className="text-black">Regulatory Compliance</strong> with
              PDPA, GDPR, and other local cybersecurity requirements.
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
