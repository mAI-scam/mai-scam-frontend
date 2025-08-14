'use client';

import { useState, useEffect } from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function UrgencyPopups() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const popups = [
    {
      user: 'Sarah from KL',
      product: 'iPhone 16 Pro Max',
      time: 'baru sahaja'
    },
    {
      user: 'Ahmad from Johor',
      product: 'PS5 Console',
      time: '2 minit lalu'
    },
    {
      user: 'Lee from Penang',
      product: 'Coach Handbag',
      time: '1 minit lalu'
    }
  ];

  useEffect(() => {
    // Mark as client-side after hydration
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setShowPopup(true);
      setPopupType(Math.floor(Math.random() * popups.length));
      
      setTimeout(() => setShowPopup(false), 4000);
    }, 8000);

    // Show first popup after 3 seconds
    setTimeout(() => {
      setShowPopup(true);
      setPopupType(0);
      setTimeout(() => setShowPopup(false), 4000);
    }, 3000);

    return () => clearInterval(interval);
  }, [isClient]);

  // Don't render on server or before client hydration
  if (!isClient || !showPopup) return null;

  const currentPopup = popups[popupType];

  return (
    <div className="fixed bottom-4 right-4 z-30 animate-in slide-in-from-right">
      <Card className="shadow-xl">
        <CardContent className="p-4 pr-10">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <ShoppingCart className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-sm">
                {currentPopup.user} membeli
              </p>
              <p className="text-sm text-gray-600">
                {currentPopup.product}
              </p>
              <p className="text-xs text-gray-500">{currentPopup.time}</p>
            </div>
          </div>
          
          <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs">
            HOT
          </Badge>
        </CardContent>
      </Card>
    </div>
  );
}
