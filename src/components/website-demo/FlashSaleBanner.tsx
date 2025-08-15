"use client";

import { useState, useEffect } from "react";
import { Zap, Clock } from "lucide-react";

export function FlashSaleBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 32,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
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
    <div
      className="bg-gradient-to-r from-red-600 to-orange-600 text-white"
      data-tour="flash-sale"
    >
      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center gap-2 md:gap-4">
            <Zap className="h-6 w-6 md:h-10 md:w-10 animate-pulse" />
            <div>
              <h2 className="text-xl md:text-3xl font-bold">
                FLASH SALE GILA!
              </h2>
              <p className="text-sm md:text-lg">
                Diskaun Hingga 90% - Terhad Masa Sahaja!
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            <div className="text-center">
              <Clock className="h-4 w-4 md:h-6 md:w-6 mx-auto mb-1 md:mb-2" />
              <span className="text-xs md:text-sm">Berakhir dalam:</span>
            </div>
            <div className="flex gap-1 md:gap-2 justify-center">
              <div className="bg-black/20 px-2 md:px-4 py-1 md:py-2 rounded">
                <div className="text-lg md:text-2xl font-bold">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-xs">JAM</div>
              </div>
              <div className="bg-black/20 px-2 md:px-4 py-1 md:py-2 rounded">
                <div className="text-lg md:text-2xl font-bold">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-xs">MINIT</div>
              </div>
              <div className="bg-black/20 px-2 md:px-4 py-1 md:py-2 rounded">
                <div className="text-lg md:text-2xl font-bold">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-xs">SAAT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
