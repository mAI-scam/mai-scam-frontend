'use client';

import { useState, useEffect } from 'react';
import { Zap, Clock } from 'lucide-react';

export function FlashSaleBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 32
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white" data-tour="flash-sale">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Zap className="h-10 w-10 animate-pulse" />
            <div>
              <h2 className="text-3xl font-bold">FLASH SALE GILA!</h2>
              <p className="text-lg">Diskaun Hingga 90% - Terhad Masa Sahaja!</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-center">
              <Clock className="h-6 w-6 mx-auto mb-2" />
              <span className="text-sm">Berakhir dalam:</span>
            </div>
            <div className="flex gap-2">
              <div className="bg-black/20 px-4 py-2 rounded">
                <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs">JAM</div>
              </div>
              <div className="bg-black/20 px-4 py-2 rounded">
                <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs">MINIT</div>
              </div>
              <div className="bg-black/20 px-4 py-2 rounded">
                <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs">SAAT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
