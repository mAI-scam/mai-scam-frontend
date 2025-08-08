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
        <CardHeader>
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${iconStyle}`}
          >
            <Icon className={`h-6 w-6 ${textColor}`} />
          </div>
          <CardTitle>{title}</CardTitle>
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
