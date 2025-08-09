'use client';

import { useCallback } from 'react';
import { driver } from 'driver.js';
import { useExtensionStore } from '@/lib/store/extensionStore';

export const useWebsiteTour = () => {
  const { isActive, toggleExtension } = useExtensionStore();

  const startTour = useCallback(() => {
    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: '[data-tour="fake-browser-bar"]',
          popover: {
            title: 'Suspicious URL',
            description:
              'Notice the domain looks like a misspelling of a popular site (e.g., shopee). Scammers use lookalike URLs.',
          },
        },
        {
          element: '[data-tour="flash-sale"]',
          popover: {
            title: 'Aggressive Flash Sale',
            description:
              'Extreme discounts with countdown timers are classic pressure tactics to rush decisions.',
          },
        },
        {
          element: '[data-tour="product-grid"]',
          popover: {
            title: 'Unrealistic Discounts',
            description:
              'Branded items at unbelievable prices (e.g., iPhone RM999) are strong scam indicators.',
          },
        },
        {
          element: '[data-tour="social-proof"]',
          popover: {
            title: 'Fake Social Proof',
            description:
              'Overly positive, generic reviews and “live purchases” can be fabricated to build false trust.',
          },
        },
        {
          element: '[data-tour="suspicious-payment"]',
          popover: {
            title: 'Risky Payment Instructions',
            description:
              'Direct bank transfer requests bypass secure gateways and are hard to recover if scammed.',
          },
        },
        {
          element: '#website-overlay [data-tour="activate-button"]',
          popover: {
            title: 'Activate mAIscam Protection',
            description:
              'Click to activate protection. I will auto-activate it for the tour so you can see the blocker.',
          },
          onHighlightStarted: () => {
            if (!isActive) {
              toggleExtension();
            }
          },
        },
        {
          element: '[data-tour="risk-analysis"]',
          popover: {
            title: 'Risk Analysis Overlay',
            description:
              'mAIscam flags this site as very high risk and explains why: fake prices, urgency, and payment risks.',
          },
        },
        {
          element: '[data-tour="website-report-button"]',
          popover: {
            title: 'Report Scam',
            description:
              'Report this site to help protect others. Your report will be sent to relevant services.',
          },
        },
        {
          popover: {
            title: 'Tour Complete',
            description:
              'You’ve seen how to spot red flags and use mAIscam to stay safe when shopping online.',
          },
        },
      ],
    });

    driverObj.drive();
  }, [isActive, toggleExtension]);

  return { startTour };
};


