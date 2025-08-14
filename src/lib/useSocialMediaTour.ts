'use client';

import { useCallback } from 'react';
import { driver } from 'driver.js';
import { useExtensionStore } from '@/lib/store/extensionStore';

export const useSocialMediaTour = () => {

  const startTour = useCallback(() => {

    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: '[data-tour="scam-post"]',
          popover: {
            title: 'How this demo works',
            description:
              'This post contains scammy content that our AI will detect. Activate protection then click flagged images to see AI blocking in action.',
          },
        },
        {
          element: '[data-tour="activate-button"]',
          popover: {
            title: 'Activate mAIscam',
            description:
              'Please click the "Activate mAIscam" button to enable real-time scam detection on social posts. Make sure you click the Activate mAiscam button and not the next button.',
          },
          onHighlightStarted: () => {
            
            // Add click listener to the activation button
            const button = document.querySelector('[data-tour="activate-button"]') as HTMLElement;
            if (button) {
              const handleClick = () => {
                // Wait for extension to activate, then proceed
                const checkActivation = () => {
                  const state = useExtensionStore.getState();
                  if (state.isActive && !state.isActivating) {
                    // Auto-proceed to next step
                    setTimeout(() => driverObj.moveNext(), 500);
                  } else {
                    // Keep checking
                    setTimeout(checkActivation, 100);
                  }
                };
                checkActivation();
              };
              
              button.addEventListener('click', handleClick, { once: true });
            }
          }
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
              'Please click the flagged image to trigger OCR + AI analysis and see the scam content blocking. Make sure you click the image and not the next button.',
          },
          onHighlightStarted: () => {
            
            // Add click listener to the scam image
            const image = document.querySelector('[data-tour="scam-image"]') as HTMLElement;
            if (image) {
              const handleClick = () => {
                // Fast and simple modal detection
                const checkModal = () => {
                  const modal = document.querySelector('[data-tour="fb-risk-header"]');
                  const blockOverlay = document.querySelector('[data-tour="scam-blocked"]');
                  
                  if (modal || blockOverlay) {
                    // Modal appeared - proceed quickly to next step
                    setTimeout(() => driverObj.moveNext(), 200);
                  } else {
                    // Keep checking with fast intervals
                    setTimeout(checkModal, 50);
                  }
                };
                
                // Start checking after a very short delay to allow DOM update
                setTimeout(checkModal, 100);
              };
              
              image.addEventListener('click', handleClick, { once: true });
            }
          }
        },
        {
          element: '[data-tour="fb-risk-header"]',
          popover: {
            title: 'Scam Detected',
            description:
              'The overlay explains why this post is risky and helps you proceed safely or report.',
            side: 'bottom',
            align: 'center',
          },
          onHighlightStarted: () => {
            // Quick positioning of the overlay
            const overlay = document.querySelector('[data-tour="fb-risk-header"]') as HTMLElement;
            if (overlay) {
              // Immediately scroll into view for faster response
              overlay.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center'
              });
            }
          }
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
  }, []);

  return { startTour };
};


