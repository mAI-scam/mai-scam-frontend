'use client';

import { useCallback } from 'react';
import { driver } from 'driver.js';
import { useExtensionStore } from '@/lib/store/extensionStore';

export const useEmailTour = () => {
  const { isActive, toggleExtension, analyzeContent } = useExtensionStore();

  const startTour = useCallback(() => {
    let buttonClicked = false;
    let extensionActivated = false;

    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: '[data-tour="activate-button"]',
          popover: {
            title: 'Activate mAIscam Protection',
            description: 'Please click the "Activate mAIscam" button to activate the extension. Make sure you click the Activate mAiscam button and not the next button.',
          },
          onHighlightStarted: () => {
            // Reset flags for this step
            buttonClicked = false;
            extensionActivated = false;
            
            // Add click listener to the button
            const button = document.querySelector('[data-tour="activate-button"]') as HTMLElement;
            if (button) {
              const handleClick = () => {
                buttonClicked = true;
                // Wait for extension to activate, then proceed
                const checkActivation = () => {
                  const state = useExtensionStore.getState();
                  if (state.isActive && !state.isActivating) {
                    extensionActivated = true;
                    // Trigger email analysis
                    const emailContent = `PENTING: Akaun Anda Telah Dibekukan - Tindakan Segera Diperlukan
Bank Negara Malaysia
Kami telah mengesan aktiviti mencurigakan dalam akaun bank anda.
AMARAN: Akaun anda akan ditutup secara KEKAL dalam 24 JAM
Klik pautan di bawah dan masukkan maklumat berikut:
- Nombor Akaun Bank
- Kata Laluan Online Banking
secure-banknegara-verification.com/verify
RM 1,000 sebagai token penghargaan`;
                    analyzeContent(emailContent, 'email');
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
          element: '[data-tour="active-extension"]',
          popover: {
            title: 'Extension Active',
            description: 'Great! The extension is now active and analyzing this email for potential scam indicators.'
          }
        },
        {
          element: '[data-tour="risk-analysis"]',
          popover: {
            title: 'Risk Analysis Results',
            description: 'The extension has detected this email as high risk. It shows detailed analysis of why this email is suspicious.'
          }
        },
        {
          element: '[data-tour="report-button"]',
          popover: {
            title: 'Report Scam Feature',
            description: 'If you encounter a scam, click "Report Fraud" to report it to authorities. This helps protect others from similar scams.'
          }
        },
        {
          popover: {
            title: 'Tour Complete!',
            description: 'You now know how to use mAIscam to protect yourself from email scams. Stay vigilant and always verify suspicious emails!'
          }
        }
      ]
    });

    driverObj.drive();
  }, [isActive, toggleExtension, analyzeContent]);

  return { startTour };
};
