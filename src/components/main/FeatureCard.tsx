import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import type { FeatureCardItem } from "@/data/main/FeatureCardData";

export default function FeatureCard(props: FeatureCardItem) {
  const { title, description, link, icon: Icon, iconStyle, textColor } = props;

  return (
    <Link href={link} className="group">
      <Card className="h-full hover:shadow-xl transition-shadow">
        <CardHeader className="flex flex-row gap-4 items-center">
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${iconStyle}`}
          >
            <Icon className={`w-6 h-6 ${textColor}`} />
          </div>
          <CardTitle className="flex-grow flex justify-start items-center">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
          <p className={`${textColor} mt-4 group-hover:underline`}>
            Try {title} →
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
