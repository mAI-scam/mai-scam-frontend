'use client';

import { useCallback } from 'react';
import { driver } from 'driver.js';
import { useExtensionStore } from '@/lib/store/extensionStore';

export const useEmailTour = () => {
  const { isActive, toggleExtension, analyzeContent } = useExtensionStore();

  const startTour = useCallback(() => {
    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: '[data-tour="activate-button"]',
          popover: {
            title: 'Activate mAIscam Protection',
            description: 'Click the "Activate mAIscam" button to activate the mAIscam extension. This will enable real-time scam detection for emails. I have already activated the extension for you.'
          },
          onHighlightStarted: () => {
            if (!isActive) {
              toggleExtension();
              setTimeout(() => {
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
              }, 500);
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
