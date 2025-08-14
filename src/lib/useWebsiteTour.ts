'use client';

import { useCallback } from 'react';
import { driver } from 'driver.js';
import { useExtensionStore } from '@/lib/store/extensionStore';

export const useWebsiteTour = () => {
  const { isActive, toggleExtension } = useExtensionStore();

  const startTour = useCallback(() => {
    let activateButtonClicked = false;

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
              'Overly positive, generic reviews and "live purchases" can be fabricated to build false trust.',
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
              'Please click the "Activate mAIscam" button to enable protection and see the website blocker in action.',
          },
          onHighlightStarted: () => {
            // Reset flag for this step
            activateButtonClicked = false;
            
            // Add click listener to the activation button
            const button = document.querySelector('#website-overlay [data-tour="activate-button"]') as HTMLElement;
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


