'use client';

import { useState, useEffect } from 'react';
import { Star, User, ShoppingBag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const fakeReviews = [
  { name: 'Ahmad B.', rating: 5, comment: 'Terbaik! Barang original dan murah gila!' },
  { name: 'Siti N.', rating: 5, comment: 'Fast delivery! Sangat puas hati 😍' },
  { name: 'John L.', rating: 5, comment: 'Best deal ever! Highly recommended!' },
  { name: 'Farah M.', rating: 5, comment: 'Alhamdulillah, produk sampai dengan selamat' },
  { name: 'David T.', rating: 5, comment: 'Super happy with my purchase! 💯' },
  { name: 'Nurul A.', rating: 5, comment: 'Trusted seller! Will buy again' }
];

const livePurchases = [
  { user: 'Ali***', product: 'iPhone 16 Pro Max', location: 'Kuala Lumpur', time: '2 minit lalu' },
  { user: 'Lim***', product: 'PS5 Console', location: 'Penang', time: '5 minit lalu' },
  { user: 'Raj***', product: 'Gaming PC RTX 4090', location: 'Johor Bahru', time: '7 minit lalu' },
  { user: 'May***', product: 'Coach Handbag', location: 'Shah Alam', time: '10 minit lalu' },
  { user: 'Tan***', product: 'Nike Air Jordan', location: 'Petaling Jaya', time: '12 minit lalu' }
];

export function SocialProofSection() {
  const [currentPurchase, setCurrentPurchase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPurchase((prev) => (prev + 1) % livePurchases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Customer Reviews */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              Ulasan Pelanggan (10,234 reviews)
            </h3>
            <div className="grid gap-3">
              {fakeReviews.map((review, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <User className="h-8 w-8 text-gray-400" />
                        <span className="font-medium">{review.name}</span>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Live Purchase Feed */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-green-500" />
              Pembelian Terkini
            </h3>
            <div className="space-y-3">
              {/* Animated purchase notification */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-pulse">
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-500">LIVE</Badge>
                  <div>
                    <p className="font-medium">
                      {livePurchases[currentPurchase].user} baru sahaja membeli
                    </p>
                    <p className="text-sm text-gray-600">
                      {livePurchases[currentPurchase].product} • {livePurchases[currentPurchase].location}
                    </p>
                    <p className="text-xs text-gray-500">{livePurchases[currentPurchase].time}</p>
                  </div>
                </div>
              </div>

              {/* Static purchase history */}
              {livePurchases.slice(1).map((purchase, index) => (
                <Card key={index} className="opacity-70">
                  <CardContent className="p-3">
                    <p className="text-sm">
                      <span className="font-medium">{purchase.user}</span> membeli {purchase.product}
                    </p>
                    <p className="text-xs text-gray-500">{purchase.location} • {purchase.time}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
