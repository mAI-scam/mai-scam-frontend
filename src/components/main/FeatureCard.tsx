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
        className={`hover:shadow-xl transition-shadow border-2 ${styles.cardBg} ${styles.cardBorder}`}
      >
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${styles.iconBg}`}
            >
              <Icon className={`w-5 h-5 ${styles.iconColor}`} />
            </div>
            <CardTitle className={`flex-grow ${styles.titleColor} text-base`}>
              {title}
            </CardTitle>
            <div
              className={`flex flex-col items-center border rounded-lg px-3 py-2 transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                colorScheme === "brown"
                  ? "bg-stone-200 border-stone-400 hover:bg-stone-300"
                  : colorScheme === "orange"
                  ? "bg-orange-200 border-orange-400 hover:bg-orange-300"
                  : "bg-purple-200 border-purple-400 hover:bg-purple-300"
              }`}
            >
              <span
                className={`${styles.textColor} font-semibold text-sm whitespace-nowrap`}
              >
                Try now
              </span>
              <span className={`${styles.textColor} text-lg font-bold`}>→</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
