"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MoreHorizontal,
  ThumbsUp,
  MessageCircle,
  Share,
  Heart,
  Angry,
  Smile,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useExtensionStore } from "@/lib/store/extensionStore";

type PostScamImage = {
  id: number;
  title: string;
  description: string;
  riskLevel: string;
  language: string;
  category: string;
  content: string;
  imageSrc: string;
};

export interface FacebookPostData {
  id: number;
  author: {
    name: string;
    avatar: string;
    verified?: boolean;
  };
  timestamp: string;
  content: string;
  image?: {
    src: string;
    alt: string;
    scamImage?: {
      id: number;
      title: string;
      description: string;
      riskLevel: "high" | "medium" | "low";
      language: "chinese" | "malay" | "english";
      category: string;
      content: string;
    };
  };
  reactions: {
    like: number;
    love: number;
    angry: number;
  };
  comments: number;
  shares: number;
  isSponsored?: boolean;
}

interface FacebookPostProps {
  post: FacebookPostData;
  onImageClick?: (scamImage: PostScamImage) => void;
}

export function FacebookPost({ post, onImageClick }: FacebookPostProps) {
  const [showReactions, setShowReactions] = useState(false);
  const { isActive, isImageReported } = useExtensionStore();

  const handleImageClick = () => {
    if (isActive && post.image?.scamImage && onImageClick) {
      onImageClick({
        id: post.image.scamImage.id,
        title: post.image.scamImage.title,
        description: post.image.scamImage.description,
        riskLevel: post.image.scamImage.riskLevel,
        language: post.image.scamImage.language,
        category: post.image.scamImage.category,
        content: post.image.scamImage.content,
        imageSrc: post.image.src,
      });
    }
  };

  return (
    <Card
      className="bg-white rounded-lg shadow-sm border border-gray-200 mb-3 md:mb-4"
      data-tour={
        post.image?.scamImage && post.id === 1 ? "scam-post" : undefined
      }
    >
      {/* Post Header */}
      <div className="p-3 md:p-4 pb-2 md:pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-xs md:text-sm">
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                  {post.author.name}
                </h3>
                {post.author.verified && (
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
                {post.isSponsored && (
                  <Badge variant="outline" className="text-xs ml-1 md:ml-2">
                    Sponsored
                  </Badge>
                )}
              </div>
              <p className="text-xs md:text-sm text-gray-500">
                {post.timestamp}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="p-1 md:p-2">
            <MoreHorizontal className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>

      {/* Post Content */}
      <div className="px-3 md:px-4 pb-2 md:pb-3">
        <p className="text-gray-900 whitespace-pre-line text-sm md:text-base">
          {post.content}
        </p>
      </div>

      {/* Post Image */}
      {post.image && (
        <div className="relative">
          <div
            className={`relative w-full aspect-[4/3] bg-gray-100 ${
              isActive && post.image.scamImage
                ? "cursor-pointer hover:opacity-90"
                : ""
            }`}
            onClick={handleImageClick}
            data-tour={post.image.scamImage ? "scam-image" : undefined}
          >
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              className={`object-cover ${
                isActive &&
                post.image.scamImage &&
                post.image.scamImage.riskLevel !== "low"
                  ? "filter blur-sm"
                  : ""
              }`}
            />
            {isActive && post.image.scamImage && (
              <>
                {post.image.scamImage.riskLevel === "low" ? (
                  // Safe content display
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Badge className="bg-green-600 text-white shadow-lg flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" /> ✅ Safe Content
                    </Badge>
                    <Badge variant="outline" className="bg-white/90 text-xs">
                      AI Verified Safe
                    </Badge>
                  </div>
                ) : (
                  // Scam content display (existing logic)
                  <>
                    {isImageReported(post.image.scamImage.id) ? (
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <Badge className="bg-yellow-500 text-white shadow-lg flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" /> Reported
                        </Badge>
                      </div>
                    ) : (
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <Badge
                          variant="destructive"
                          className="animate-pulse shadow-lg"
                        >
                          🔍 AI Detected Scam - Click to Scan
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-white/90 text-xs"
                        >
                          OCR Analysis Available
                        </Badge>
                      </div>
                    )}
                  </>
                )}

                {post.image.scamImage.riskLevel === "low" ? (
                  // Safe content border
                  <div className="absolute inset-0 bg-green-500/10 border-2 border-green-500 border-solid rounded-lg pointer-events-none" />
                ) : (
                  // Scam content border (existing logic)
                  <>
                    {isImageReported(post.image.scamImage.id) ? (
                      <div className="absolute inset-0 bg-yellow-500/10 border-2 border-yellow-500 border-dashed rounded-lg pointer-events-none" />
                    ) : (
                      <div className="absolute inset-0 bg-red-500/10 border-2 border-red-500 border-dashed rounded-lg pointer-events-none animate-pulse" />
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Reaction Summary */}
      <div className="px-3 md:px-4 py-2 md:py-3 border-b border-gray-100">
        <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <div className="flex -space-x-1">
              <div className="w-4 h-4 md:w-5 md:h-5 bg-blue-500 rounded-full flex items-center justify-center border border-white">
                <ThumbsUp className="h-2 w-2 md:h-3 md:w-3 text-white" />
              </div>
              <div className="w-4 h-4 md:w-5 md:h-5 bg-red-500 rounded-full flex items-center justify-center border border-white">
                <Heart className="h-2 w-2 md:h-3 md:w-3 text-white" />
              </div>
              <div className="w-4 h-4 md:w-5 md:h-5 bg-orange-500 rounded-full flex items-center justify-center border border-white">
                <Angry className="h-2 w-2 md:h-3 md:w-3 text-white" />
              </div>
            </div>
            <span className="ml-1 md:ml-2">
              {post.reactions.like + post.reactions.love + post.reactions.angry}
            </span>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <span>{post.comments} comments</span>
            <span>{post.shares} shares</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-3 md:px-4 py-2">
        <div className="flex items-center justify-around">
          <Button
            variant="ghost"
            className="flex-1 flex items-center justify-center space-x-1 md:space-x-2 py-2 md:py-3 hover:bg-gray-50 rounded-lg"
            onMouseEnter={() => setShowReactions(true)}
            onMouseLeave={() => setShowReactions(false)}
          >
            <ThumbsUp className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
            <span className="text-gray-600 font-medium text-xs md:text-sm">
              Like
            </span>
          </Button>
          <Button
            variant="ghost"
            className="flex-1 flex items-center justify-center space-x-1 md:space-x-2 py-2 md:py-3 hover:bg-gray-50 rounded-lg"
          >
            <MessageCircle className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
            <span className="text-gray-600 font-medium text-xs md:text-sm">
              Comment
            </span>
          </Button>
          <Button
            variant="ghost"
            className="flex-1 flex items-center justify-center space-x-1 md:space-x-2 py-2 md:py-3 hover:bg-gray-50 rounded-lg"
          >
            <Share className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
            <span className="text-gray-600 font-medium text-xs md:text-sm">
              Share
            </span>
          </Button>
        </div>
      </div>

      {/* Reaction Hover (simplified) */}
      {showReactions && (
        <div className="absolute bg-white shadow-lg rounded-full border border-gray-200 px-2 py-1 flex space-x-1 z-10">
          <Button
            variant="ghost"
            size="sm"
            className="p-1 hover:scale-125 transition-transform"
          >
            <ThumbsUp className="h-6 w-6 text-blue-500" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="p-1 hover:scale-125 transition-transform"
          >
            <Heart className="h-6 w-6 text-red-500" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="p-1 hover:scale-125 transition-transform"
          >
            <Smile className="h-6 w-6 text-yellow-500" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="p-1 hover:scale-125 transition-transform"
          >
            <Angry className="h-6 w-6 text-orange-500" />
          </Button>
        </div>
      )}
    </Card>
  );
}
