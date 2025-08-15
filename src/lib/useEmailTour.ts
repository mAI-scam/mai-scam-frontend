'use client';

import { useCallback } from 'react';
import { driver } from 'driver.js';
import { useExtensionStore } from '@/lib/store/extensionStore';

export const useEmailTour = () => {
  const { analyzeContent } = useExtensionStore();

  const startTour = useCallback(() => {

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
            // Add click listener to the button
            const button = document.querySelector('[data-tour="activate-button"]') as HTMLElement;
            if (button) {
              const handleClick = () => {
                // Wait for extension to activate, then proceed
                const checkActivation = () => {
                  const state = useExtensionStore.getState();
                  if (state.isActive && !state.isActivating) {
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
            description: 'Click the "Report Fraud" button to submit a report and help protect others from similar scams. Please click the Report Fraud button to continue.'
          },
          onHighlightStarted: () => {
            // Add click listener to the report button
            const reportButton = document.querySelector('[data-tour="report-button"]') as HTMLElement;
            if (reportButton) {
              const handleClick = () => {
                // Wait for the report modal to appear
                const checkModal = () => {
                  const modal = document.querySelector('[data-tour="email-report-modal"]');
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
          element: '[data-tour="email-reporting-services"]',
          popover: {
            title: 'Reporting Destinations',
            description: 'Your report will be automatically sent to multiple authorities and platforms: Google Safe Browsing, PhishTank, MCMC Malaysia, and ReportBee for email scams.',
            side: 'right',
            align: 'start',
          },
        },
        {
          element: '[data-tour="email-submit-report-button"]',
          popover: {
            title: 'Submit Email Report',
            description: 'Now click "Submit Report" to send the email fraud information to all these authorities and platforms.',
          },
          onHighlightStarted: () => {
            // Add click listener to the submit button
            const submitButton = document.querySelector('[data-tour="email-submit-report-button"]') as HTMLElement;
            if (submitButton) {
              const handleClick = () => {
                // Wait for the success state to appear
                const checkSuccess = () => {
                  const successElement = document.querySelector('[data-tour="email-report-success"]');
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
          element: '[data-tour="email-report-success"]',
          popover: {
            title: 'Email Report Submitted Successfully',
            description: 'Your email fraud report has been successfully submitted to multiple authorities and platforms. Thank you for helping protect others!',
          },
        },
        {
          element: '[data-tour="email-close-report-button"]',
          popover: {
            title: 'Close and Continue',
            description: 'Click the close button to return to the email risk analysis and continue safely. This completes the mAIscam email protection demo.',
          },
          onHighlightStarted: () => {
            // Add click listener to the close button
            const closeButton = document.querySelector('[data-tour="email-close-report-button"]') as HTMLElement;
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
            title: 'Tour Complete!',
            description: 'You now know how to use mAIscam to protect yourself from email scams, analyze risks, and report fraud to authorities. Stay vigilant!'
          }
        }
      ]
    });

    driverObj.drive();
  }, [analyzeContent]);

  return { startTour };
};
