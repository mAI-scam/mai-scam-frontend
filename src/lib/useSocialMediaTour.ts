'use client';

import { useCallback } from 'react';
import { driver } from 'driver.js';
import { useExtensionStore } from '@/lib/store/extensionStore';

export const useSocialMediaTour = () => {
  const { isActive, toggleExtension } = useExtensionStore();

  const startTour = useCallback(() => {
    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: '[data-tour="demo-banner"]',
          popover: {
            title: 'How this demo works',
            description:
              'This feed contains scammy posts. Activate protection then click flagged images to see AI blocking in action.',
          },
        },
        {
          element: '#image-overlay [data-tour="activate-button"]',
          popover: {
            title: 'Activate mAIscam',
            description:
              'Turn on the extension to enable real-time scam detection on social posts. I will activate it for you.',
          },
          onHighlightStarted: () => {
            if (!isActive) {
              toggleExtension();
            }
          },
        },
        {
          element: '[data-tour="facebook-feed"]',
          popover: {
            title: 'Your Feed',
            description:
              'We scan the feed for risky posts. Flagged images will show an alert and can be clicked to analyze.',
          },
        },
        {
          element: '[data-tour="scam-image"]',
          popover: {
            title: 'Flagged Post Image',
            description:
              'Click a flagged image to trigger OCR + AI analysis and block the scam content.',
          },
          onHighlightStarted: () => {
            if (typeof window !== 'undefined') {
              const el = document.querySelector('[data-tour="scam-image"]') as HTMLElement | null;
              if (el && isActive) {
                setTimeout(() => el.click(), 300);
              }
            }
          },
        },
        {
          element: '[data-tour="fb-risk-header"]',
          popover: {
            title: 'Scam Detected',
            description:
              'The overlay explains why this post is risky and helps you proceed safely or report.',
          },
        },
        {
          element: '[data-tour="fb-report-button"]',
          popover: {
            title: 'Report Scam',
            description:
              'Submit a report to help others. The report is pre-filled with the analyzed details.',
          },
        },
        {
          popover: {
            title: 'Tour Complete',
            description:
              'You now know how mAIscam protects you on social media by scanning images and blocking scams.',
          },
        },
      ],
    });

    driverObj.drive();
  }, [isActive, toggleExtension]);

  return { startTour };
};


