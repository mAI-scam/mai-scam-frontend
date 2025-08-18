import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function InstructionsSection() {
  return (
    <section className="mb-12 max-w-5xl mx-auto">
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Shield className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">
                How to Experience the Web Extension Demo
              </h3>
              <ol className="space-y-1 text-sm text-gray-700">
                <li>
                  1. Choose a demo scenario below (Email Client, Website, or
                  Social Media Feed)
                </li>
                <li>
                  2. Click{" "}
                  <span className="font-semibold">
                    &quot;Activate mAIscam&quot;
                  </span>{" "}
                  to simulate the browser extension being active
                </li>
                <li>
                  3. Interact with the simulated environment to see how the
                  extension detects and blocks scams
                </li>
                <li>
                  4. In Social Media demo: Click on AI-flagged images to see OCR
                  analysis in action
                </li>
                <li className="text-blue-700 font-medium">
                  🔧 Note: This simulates the actual Chrome extension experience
                </li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
