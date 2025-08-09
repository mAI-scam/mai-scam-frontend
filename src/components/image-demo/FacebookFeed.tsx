"use client";

import { FacebookPost, FacebookPostData } from "./FacebookPost";
type PostScamImage = {
  id: number;
  title: string;
  description: string;
  riskLevel: string;
  language: string;
  category: string;
  content: string;
};

// Convert our existing scam images to Facebook posts
const facebookPosts: FacebookPostData[] = [
  {
    id: 1,
    author: {
      name: "Malaysia Government Portal",
      avatar: "/api/placeholder/40/40",
      verified: true
    },
    timestamp: "2 hours ago",
    content: "🎉 GREAT NEWS FOR MALAYSIAN BUSINESS OWNERS! 🎉\n\nThe 2025 MADANI Business Benefits program is now open for applications! Don't miss this incredible opportunity to get FREE laptops and tablets for your business.\n\n✅ 100% FREE Equipment\n✅ No Hidden Charges  \n✅ Fast Approval Process\n\nApply now before slots run out! Limited time offer.",
    image: {
      src: "/images/scam_gov_aid_example.jpeg",
      alt: "Government aid scam poster",
      scamImage: {
        id: 1,
        title: "Fake Government Aid",
        description: "Poster offering free laptops/tablets from government",
        riskLevel: "high",
        language: "chinese",
        category: "Government",
        content: "老板们的政府津贴即将开放申请! 2025 MADANI 商家福利! FREE! 申请成功可免费得到手提电脑/平板电脑!"
      }
    },
    reactions: { like: 847, love: 234, angry: 12 },
    comments: 156,
    shares: 89,
    isSponsored: true
  },
  {
    id: 2,
    author: {
      name: "Deal Hunters Malaysia",
      avatar: "/api/placeholder/40/40"
    },
    timestamp: "4 hours ago",
    content: "Guys, I just received this message from J&T Express. Is this legit? 🤔\n\nThey say my package label is damaged and I need to confirm my address online within 24 hours. The link looks a bit suspicious to me...\n\nAnyone else received similar messages?",
    image: {
      src: "/images/scam_sms_example.jpeg",
      alt: "SMS scam from fake J&T Express",
      scamImage: {
        id: 2,
        title: "SMS Parcel Scam",
        description: "Fake delivery notification with phishing link",
        riskLevel: "high",
        language: "malay",
        category: "SMS",
        content: "J&T Express Courier: I regret to inform you that the label on your order is damaged. Please confirm your address online within 24 hours."
      }
    },
    reactions: { like: 23, love: 2, angry: 45 },
    comments: 67,
    shares: 12
  },
  {
    id: 3,
    author: {
      name: "ANGKASA Investment Group",
      avatar: "/api/placeholder/40/40",
      verified: true
    },
    timestamp: "6 hours ago",
    content: "💰 GOVERNMENT CIVIL SERVANTS - SPECIAL INVESTMENT OPPORTUNITY! 💰\n\nMake your savings work for you with our exclusive Simpanan Pintar program!\n\n🎯 UP TO 12% ANNUAL RETURNS\n🎯 Minimum Investment: RM10,000\n🎯 100% STABLE & SECURE\n🎯 Approved for Government Employees\n\nDon't let inflation eat your savings. Start building wealth today!\n\nContact us now for exclusive rates! 📞",
    image: {
      src: "/images/scam_investment_example.jpg",
      alt: "Investment scam promising high returns",
      scamImage: {
        id: 3,
        title: "Investment Fraud",
        description: "Unrealistic investment returns promise",
        riskLevel: "high",
        language: "chinese",
        category: "Investment",
        content: "让您的储蓄为您赚钱! 年回酬高达12% Simpanan Pintar, Pulangan Sehingga 12% Setahun!"
      }
    },
    reactions: { like: 312, love: 45, angry: 8 },
    comments: 89,
    shares: 156,
    isSponsored: true
  },
  {
    id: 4,
    author: {
      name: "Hotlink Official",
      avatar: "/api/placeholder/40/40"
    },
    timestamp: "8 hours ago",
    content: "🎁 SPECIAL GIVEAWAY ALERT! 🎁\n\nWe're giving away RM50 Touch n Go eWallet credits to celebrate our 5G network expansion!\n\n⚡ FREE RM50 TNG Credit\n⚡ Hotlink Postpaid 5G Users\n⚡ LIMITED OPPORTUNITY\n⚡ First Come First Served\n\nClaim yours now before it's too late! No purchase necessary.\n\n#HotlinkGiveaway #TouchNGo #5G",
    image: {
      src: "/images/scam_giveaway_example.jpg",
      alt: "Fake Hotlink giveaway scam",
      scamImage: {
        id: 4,
        title: "Fake Giveaway",
        description: "Impersonating telco for fake Touch n Go credits",
        riskLevel: "high",
        language: "malay",
        category: "Giveaway",
        content: "GIVEAWAY RM50 HOTLINK POSTPAID 5G PERCUMA RM50 Kredit TNG Touch n Go eWallet CREDIT PELUANG TERHAD"
      }
    },
    reactions: { like: 1247, love: 890, angry: 23 },
    comments: 423,
    shares: 672
  },
  {
    id: 5,
    author: {
      name: "Sarah Chen",
      avatar: "/api/placeholder/40/40"
    },
    timestamp: "1 day ago",
    content: "Beautiful sunset from my balcony today! 🌅\n\nNothing beats ending the day with such amazing colors in the sky. Hope everyone is having a great week!\n\n#sunset #malaysia #photography",
    reactions: { like: 45, love: 23, angry: 0 },
    comments: 8,
    shares: 2
  },
  {
    id: 6,
    author: {
      name: "Tech News Malaysia",
      avatar: "/api/placeholder/40/40"
    },
    timestamp: "1 day ago",
    content: "📱 iPhone 15 Pro Max now available in Malaysia! \n\nStarting from RM5,999 for the 256GB model. Available at all authorized Apple retailers.\n\n✅ A17 Pro chip\n✅ Action button\n✅ USB-C connectivity\n✅ Titanium design\n\nWho's planning to upgrade? Let us know in the comments!",
    reactions: { like: 234, love: 45, angry: 12 },
    comments: 89,
    shares: 34
  }
];

interface FacebookFeedProps {
  onImageClick?: (scamImage: PostScamImage) => void;
}

export function FacebookFeed({ onImageClick }: FacebookFeedProps) {
  return (
    <div className="max-w-2xl mx-auto space-y-4" data-tour="facebook-feed">
      {/* Create Post Box */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">You</span>
          </div>
          <div className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-gray-500 cursor-pointer hover:bg-gray-200 transition-colors">
            What&apos;s on your mind?
          </div>
        </div>
      </div>

      {/* Posts */}
      {facebookPosts.map((post) => (
        <FacebookPost 
          key={post.id} 
          post={post} 
          onImageClick={onImageClick}
        />
      ))}
    </div>
  );
}