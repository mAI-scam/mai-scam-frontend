'use client';

import { Star, ShoppingCart, Flame } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'iPhone 16 Pro Max 512GB',
    originalPrice: 'RM 7,199',
    salePrice: 'RM 999',
    discount: '86%',
    image: '📱',
    rating: 4.9,
    sold: '12.3k sold',
    tag: 'BEST SELLER'
  },
  {
    id: 2,
    name: 'PlayStation 5 Console',
    originalPrice: 'RM 2,299',
    salePrice: 'RM 599',
    discount: '74%',
    image: '🎮',
    rating: 4.8,
    sold: '8.7k sold',
    tag: 'LIMITED STOCK'
  },
  {
    id: 3,
    name: 'Coach Leather Handbag Original',
    originalPrice: 'RM 3,500',
    salePrice: 'RM 299',
    discount: '91%',
    image: '👜',
    rating: 5.0,
    sold: '15.2k sold',
    tag: 'TRENDING'
  },
  {
    id: 4,
    name: 'Gaming PC RTX 4090 i9-13900K',
    originalPrice: 'RM 15,999',
    salePrice: 'RM 2,999',
    discount: '81%',
    image: '🖥️',
    rating: 4.9,
    sold: '3.1k sold',
    tag: 'HOT DEAL'
  },
  {
    id: 5,
    name: 'Nike Air Jordan Limited Edition',
    originalPrice: 'RM 1,299',
    salePrice: 'RM 199',
    discount: '85%',
    image: '👟',
    rating: 4.7,
    sold: '9.8k sold',
    tag: 'ALMOST GONE'
  },
  {
    id: 6,
    name: 'BTS Official Merch Box Set',
    originalPrice: 'RM 899',
    salePrice: 'RM 99',
    discount: '89%',
    image: '🎤',
    rating: 5.0,
    sold: '20.5k sold',
    tag: 'FAN FAVORITE'
  }
];

export function ProductGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Flame className="h-6 w-6 text-orange-500" />
          Tawaran Terhebat Hari Ini
        </h2>
        <span className="text-sm text-gray-600">Lihat Semua {'>'}</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map(product => (
          <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
            <div className="relative">
              <div className="aspect-square bg-gray-100 flex items-center justify-center text-6xl">
                {product.image}
              </div>
              <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                -{product.discount}
              </Badge>
              <Badge className="absolute top-2 right-2 bg-orange-500 text-white text-xs">
                {product.tag}
              </Badge>
            </div>
            
            <CardContent className="p-3">
              <h3 className="text-sm font-medium line-clamp-2 mb-2">{product.name}</h3>
              
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-xs text-gray-600">({product.rating})</span>
              </div>
              
              <div className="mb-2">
                <div className="text-orange-500 font-bold text-lg">{product.salePrice}</div>
                <div className="text-gray-400 text-sm line-through">{product.originalPrice}</div>
              </div>
              
              <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                <span>{product.sold}</span>
                <span className="text-green-600">Free Shipping</span>
              </div>
              
              <Button 
                size="sm" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                <ShoppingCart className="h-3 w-3 mr-1" />
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
