import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FeaturesSection() {
  return (
    <section className="mb-12 flex max-w-5xl mx-auto gap-8 flex-col md:flex-row">
      {/* Left - Content */}
      <Card className="flex-2">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Our Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-4">
            <Badge className="w-8 h-8 rounded-full p-0 flex items-center justify-center flex-shrink-0">
              <span className="font-bold">1</span>
            </Badge>
            <div>
              <h4 className="font-semibold mb-1">Connected AI Agent Network</h4>
              <p className="text-muted-foreground">
                Multi-agent system using MCP to access real-time threat
                intelligence, financial APIs, and regulatory feeds while
                analyzing emails, websites, and OCR-extracted webpage images.
                Provides instant fraud scores with cross-verified explanations.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Badge className="w-8 h-8 rounded-full p-0 flex items-center justify-center flex-shrink-0">
              <span className="font-bold">2</span>
            </Badge>
            <div>
              <h4 className="font-semibold mb-1">
                Adaptive Response AI Agents
              </h4>
              <p className="text-muted-foreground">
                Decision-making agents automatically block high-risk sites,
                coordinating via MCP integrations to notify authorities and
                anti-fraud platforms while continuously evolving through
                reinforcement learning.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Badge className="w-8 h-8 rounded-full p-0 flex items-center justify-center flex-shrink-0">
              <span className="font-bold">3</span>
            </Badge>
            <div>
              <h4 className="font-semibold mb-1">
                Cultural Intelligence & MCP Evolution
              </h4>
              <p className="text-muted-foreground">
                Supports 13 Southeast Asian languages with contextual,
                culturally-tailored threat explanations. The MCP-powered
                ecosystem continuously evolves through reinforcement learning,
                autonomously improving regional scam pattern recognition.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Right - Image */}
      <Card className="flex-1 hidden md:block">
        <div className="relative w-full h-64 md:h-full">
          <Image
            src="/images/shaun.jpg" // replace with your image path
            alt="Our Features Illustration"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </Card>
    </section>
  );
}
