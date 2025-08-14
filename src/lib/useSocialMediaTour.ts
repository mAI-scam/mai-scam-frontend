'use client';

import { useCallback } from 'react';
import { driver } from 'driver.js';
import { useExtensionStore } from '@/lib/store/extensionStore';

export const useSocialMediaTour = () => {
  const { isActive, toggleExtension } = useExtensionStore();

  const startTour = useCallback(() => {
    let activateButtonClicked = false;
    let scamImageClicked = false;

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
              'Please click the "Activate mAIscam" button to enable real-time scam detection on social posts.',
          },
          onHighlightStarted: () => {
            // Reset flag for this step
            activateButtonClicked = false;
            
            // Add click listener to the activation button
            const button = document.querySelector('#image-overlay [data-tour="activate-button"]') as HTMLElement;
            if (button) {
              const handleClick = () => {
                activateButtonClicked = true;
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
              'Please click the flagged image to trigger OCR + AI analysis and see the scam content blocking.',
          },
          onHighlightStarted: () => {
            // Reset flag for this step
            scamImageClicked = false;
            
            // Add click listener to the scam image
            const image = document.querySelector('[data-tour="scam-image"]') as HTMLElement;
            if (image) {
              const handleClick = () => {
                scamImageClicked = true;
                // Wait for modal/overlay to appear, then proceed
                const checkModal = () => {
                  const modal = document.querySelector('[data-tour="fb-risk-header"]');
                  const blockOverlay = document.querySelector('[data-tour="scam-blocked"]');
                  
                  if (modal || blockOverlay) {
                    // Modal/overlay appeared, auto-proceed to next step
                    setTimeout(() => driverObj.moveNext(), 500);
                  } else {
                    // Keep checking
                    setTimeout(checkModal, 100);
                  }
                };
                setTimeout(checkModal, 200); // Give a small delay for DOM to update
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


