'use client';

import { useCallback } from 'react';
import { driver } from 'driver.js';
import { useExtensionStore } from '@/lib/store/extensionStore';

export const useWebsiteTour = () => {
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
          element: '[data-tour="activate-button"]',
          popover: {
            title: 'Activate mAIscam Protection',
            description:
              'Please click the "Activate mAIscam" button to enable protection and see the website blocker in action. Make sure you click the Activate mAiscam button and not the next button.',
          },
          onHighlightStarted: () => {
            // Add click listener to the activation button
            const button = document.querySelector('[data-tour="activate-button"]') as HTMLElement;
            if (button) {
              const handleClick = () => {
                // Wait for extension to activate and website blocking overlay to appear, then proceed
                const checkActivation = () => {
                  const state = useExtensionStore.getState();
                  if (state.isActive && !state.isActivating) {
                    // Also check if the website blocking overlay has appeared
                    const overlay = document.querySelector('[data-tour="risk-analysis"]');
                    if (overlay) {
                      // Auto-proceed to next step
                      setTimeout(() => driverObj.moveNext(), 500);
                    } else {
                      // Keep checking for overlay to appear
                      setTimeout(checkActivation, 100);
                    }
                  } else {
                    // Keep checking for activation
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
              'Click the "Report Scam" button to submit a report and help protect others from this fraudulent website. Please click the Report Scam button to continue.',
          },
          onHighlightStarted: () => {
            // Add click listener to the report button
            const reportButton = document.querySelector('[data-tour="website-report-button"]') as HTMLElement;
            if (reportButton) {
              const handleClick = () => {
                // Wait for the report modal to appear
                const checkModal = () => {
                  const modal = document.querySelector('[data-tour="website-report-modal"]');
                  if (modal) {
                    // Modal appeared - proceed to next step
                    setTimeout(() => driverObj.moveNext(), 300);
                  } else {
                    // Keep checking
                    setTimeout(checkModal, 100);
                  }
                };
                checkModal();
              };
              
              reportButton.addEventListener('click', handleClick, { once: true });
            }
          }
        },
        {
          element: '[data-tour="website-reporting-services"]',
          popover: {
            title: 'Reporting Destinations',
            description: 'Your report will be automatically sent to multiple authorities and platforms: Google Safe Browsing, PhishTank, and MCMC Malaysia for website scams.',
            side: 'right',
            align: 'start',
          },
        },
        {
          element: '[data-tour="website-submit-report-button"]',
          popover: {
            title: 'Submit Website Report',
            description: 'Now click "Submit Report" to send the fraudulent website information to all these authorities and platforms.',
          },
          onHighlightStarted: () => {
            // Add click listener to the submit button
            const submitButton = document.querySelector('[data-tour="website-submit-report-button"]') as HTMLElement;
            if (submitButton) {
              const handleClick = () => {
                // Wait for the success state to appear
                const checkSuccess = () => {
                  const successElement = document.querySelector('[data-tour="website-report-success"]');
                  if (successElement) {
                    // Success state appeared - proceed to next step
                    setTimeout(() => driverObj.moveNext(), 500);
                  } else {
                    // Keep checking
                    setTimeout(checkSuccess, 100);
                  }
                };
                checkSuccess();
              };
              
              submitButton.addEventListener('click', handleClick, { once: true });
            }
          }
        },
        {
          element: '[data-tour="website-report-success"]',
          popover: {
            title: 'Website Report Submitted Successfully',
            description: 'Your fraudulent website report has been successfully submitted to multiple authorities and platforms. Thank you for helping protect others!',
          },
        },
        {
          element: '[data-tour="website-close-report-button"]',
          popover: {
            title: 'Close and Continue',
            description: 'Click the close button to return to the website risk analysis and continue safely. This completes the mAIscam website protection demo.',
          },
          onHighlightStarted: () => {
            // Add click listener to the close button
            const closeButton = document.querySelector('[data-tour="website-close-report-button"]') as HTMLElement;
            if (closeButton) {
              const handleClick = () => {
                // Wait a moment then complete the tour
                setTimeout(() => driverObj.moveNext(), 300);
              };
              
              closeButton.addEventListener('click', handleClick, { once: true });
            }
          }
        },
        {
          popover: {
            title: 'Tour Complete',
            description:
              'You have learned how to spot red flags, use mAIscam protection, and report fraudulent websites to keep yourself and others safe online.',
          },
        },
      ],
    });

    driverObj.drive();
  }, []);

  return { startTour };
};


