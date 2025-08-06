"use client";

import { useState } from "react";
import Image from "next/image";
import { MoreHorizontal, ThumbsUp, MessageCircle, Share, Heart, Angry, Smile } from "lucide-react";
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
  const { isActive } = useExtensionStore();

  const handleImageClick = () => {
    if (isActive && post.image?.scamImage && onImageClick) {
      onImageClick(post.image.scamImage);
    }
  };

  return (
    <Card className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
      {/* Post Header */}
      <div className="p-4 pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {post.author.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                {post.author.verified && (
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
                {post.isSponsored && (
                  <Badge variant="outline" className="text-xs ml-2">
                    Sponsored
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-500">{post.timestamp}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="p-2">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3">
        <p className="text-gray-900 whitespace-pre-line">{post.content}</p>
      </div>

      {/* Post Image */}
      {post.image && (
        <div className="relative">
          <div 
            className={`relative w-full aspect-[4/3] bg-gray-100 ${
              isActive && post.image.scamImage ? 'cursor-pointer hover:opacity-90' : ''
            }`}
            onClick={handleImageClick}
          >
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              className="object-cover"
            />
            {isActive && post.image.scamImage && (
              <div className="absolute top-4 right-4">
                <Badge variant="destructive" className="animate-pulse">
                  ⚠️ High Risk - Click to Analyze
                </Badge>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Reaction Summary */}
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <div className="flex -space-x-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border border-white">
                <ThumbsUp className="h-3 w-3 text-white" />
              </div>
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border border-white">
                <Heart className="h-3 w-3 text-white" />
              </div>
              <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center border border-white">
                <Angry className="h-3 w-3 text-white" />
              </div>
            </div>
            <span className="ml-2">
              {post.reactions.like + post.reactions.love + post.reactions.angry}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span>{post.comments} comments</span>
            <span>{post.shares} shares</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-around">
          <Button 
            variant="ghost" 
            className="flex-1 flex items-center justify-center space-x-2 py-3 hover:bg-gray-50 rounded-lg"
            onMouseEnter={() => setShowReactions(true)}
            onMouseLeave={() => setShowReactions(false)}
          >
            <ThumbsUp className="h-5 w-5 text-gray-600" />
            <span className="text-gray-600 font-medium">Like</span>
          </Button>
          <Button variant="ghost" className="flex-1 flex items-center justify-center space-x-2 py-3 hover:bg-gray-50 rounded-lg">
            <MessageCircle className="h-5 w-5 text-gray-600" />
            <span className="text-gray-600 font-medium">Comment</span>
          </Button>
          <Button variant="ghost" className="flex-1 flex items-center justify-center space-x-2 py-3 hover:bg-gray-50 rounded-lg">
            <Share className="h-5 w-5 text-gray-600" />
            <span className="text-gray-600 font-medium">Share</span>
          </Button>
        </div>
      </div>

      {/* Reaction Hover (simplified) */}
      {showReactions && (
        <div className="absolute bg-white shadow-lg rounded-full border border-gray-200 px-2 py-1 flex space-x-1 z-10">
          <Button variant="ghost" size="sm" className="p-1 hover:scale-125 transition-transform">
            <ThumbsUp className="h-6 w-6 text-blue-500" />
          </Button>
          <Button variant="ghost" size="sm" className="p-1 hover:scale-125 transition-transform">
            <Heart className="h-6 w-6 text-red-500" />
          </Button>
          <Button variant="ghost" size="sm" className="p-1 hover:scale-125 transition-transform">
            <Smile className="h-6 w-6 text-yellow-500" />
          </Button>
          <Button variant="ghost" size="sm" className="p-1 hover:scale-125 transition-transform">
            <Angry className="h-6 w-6 text-orange-500" />
          </Button>
        </div>
      )}
    </Card>
  );
}