import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MarketOpportunitySection() {
  return (
    <section className="mb-12 flex max-w-5xl mx-auto gap-8 flex-col md:flex-row">
      {/* Left - Content */}
      <Card className="flex-2">
        <CardHeader>
          <CardTitle className="text-3xl text-center">
            Market Opportunity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-4">
            <div>
              <h4 className="font-semibold mb-1">TAM</h4>
              <p className="text-muted-foreground">
                The{" "}
                <strong className="text-black">
                  Total Addressable Market (TAM)
                </strong>{" "}
                for phishing protection is valued at approximately
                <strong className="text-black"> USD 7.2 billion</strong>{" "}
                globally. For broader context, the fraud detection and
                prevention market is projected to reach{" "}
                <strong className="text-black">USD 90 billion</strong> in the
                coming years.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div>
              <h4 className="font-semibold mb-1">SAM</h4>
              <p className="text-muted-foreground">
                Within this, the{" "}
                <strong className="text-black">
                  Serviceable Available Market (SAM)
                </strong>{" "}
                in Asia-Pacific is estimated at around
                <strong className="text-black"> USD 2.5 billion</strong>, driven
                by rising phishing incidents and rapid digital adoption in
                Southeast Asia.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div>
              <h4 className="font-semibold mb-1">SOM</h4>
              <p className="text-muted-foreground">
                Given our niche in multilingual, culturally aligned scam
                detection, we project a{" "}
                <strong className="text-black">
                  Serviceable Obtainable Market (SOM)
                </strong>{" "}
                of <strong className="text-black">USD 25-75 million</strong>,
                representing 5-10% of the Southeast Asian segment by 2033.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Right - Image */}
      <Card className="flex-1 hidden md:block">
        <div className="relative w-full h-64 md:h-full">
          <Image
            src="/images/edmund.jpg" // replace with your image path
            alt="Our Features Illustration"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </Card>
    </section>
  );
}
