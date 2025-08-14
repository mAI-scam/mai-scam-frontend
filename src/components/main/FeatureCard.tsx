import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import type { FeatureCardItem } from "@/data/main/FeatureCardData";
import { getFeatureCardStyles } from "@/data/main/FeatureCardData";

export default function FeatureCard(props: FeatureCardItem) {
  const { title, description, link, icon: Icon, colorScheme } = props;
  const styles = getFeatureCardStyles(colorScheme);

  return (
    <Link href={link} className="group">
      <Card
        className={`h-full hover:shadow-xl transition-shadow border-2 ${styles.cardBg} ${styles.cardBorder}`}
      >
        <CardHeader className="flex flex-row gap-4 items-center">
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${styles.iconBg}`}
          >
            <Icon className={`w-6 h-6 ${styles.iconColor}`} />
          </div>
          <CardTitle
            className={`flex-grow flex justify-start items-center ${styles.titleColor}`}
          >
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className={styles.textColor}>
            {description}
          </CardDescription>
          <p
            className={`${styles.textColor} mt-4 group-hover:underline font-semibold`}
          >
            Try {title} →
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
