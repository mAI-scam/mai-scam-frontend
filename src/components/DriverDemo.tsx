"use client";

import { Button } from "@/components/ui/button";
import { useDriver, TourStep } from "@/lib/useDriver";

export const DriverDemo = () => {
  const { 
    startTour, 
    highlight, 
    isTourCompleted, 
    completeTour,
    userPreferences,
    setPreference,
    resetTourData,
    isActive,
    currentTour
  } = useDriver();

  const mainTourSteps: TourStep[] = [
    {
      id: 'welcome',
      element: '#next-logo',
      popover: {
        title: 'Welcome to Our App! 🎉',
        description: 'This guided tour will show you around. Click "Next" to continue.',
        side: 'bottom' as const,
        align: 'start' as const,
      }
    },
    {
      id: 'instructions',
      element: '#instructions',
      popover: {
        title: 'Getting Started 🚀',
        description: 'Here you\'ll find instructions to help you get started with development.',
        side: 'bottom' as const,
        align: 'start' as const,
      }
    },
    {
      id: 'actions',
      element: '#action-buttons',
      popover: {
        title: 'Quick Actions ⚡',
        description: 'These buttons help you deploy your app or access documentation.',
        side: 'top' as const,
        align: 'start' as const,
      }
    },
    {
      id: 'resources',
      element: '#footer-links',
      popover: {
        title: 'Helpful Resources 📚',
        description: 'Find learning materials and examples here. Tour complete!',
        side: 'top' as const,
        align: 'start' as const,
      }
    }
  ];

  const featureTourSteps: TourStep[] = [
    {
      id: 'demo-buttons',
      element: '#driver-demo',
      popover: {
        title: 'Driver.js Controls 🎮',
        description: 'These buttons control the tour and highlight functionality.',
        side: 'bottom' as const,
        align: 'start' as const,
      }
    },
    {
      id: 'preferences',
      element: '#preferences',
      popover: {
        title: 'Tour Preferences ⚙️',
        description: 'Customize your tour experience with these settings.',
        side: 'bottom' as const,
        align: 'start' as const,
      }
    }
  ];

  return (
    <div className="space-y-4">
      {/* Main Driver Controls */}
      <div id="driver-demo" className="flex gap-2 flex-wrap">
        <Button 
          onClick={() => startTour('main-tour', mainTourSteps)}
          variant={isTourCompleted('main-tour') ? 'outline' : 'default'}
          size="sm"
          disabled={isActive}
        >
          {isTourCompleted('main-tour') ? '✅ Main Tour (Completed)' : '🚗 Start Main Tour'}
        </Button>
        
        <Button 
          onClick={() => startTour('feature-tour', featureTourSteps)}
          variant={isTourCompleted('feature-tour') ? 'outline' : 'secondary'}
          size="sm"
          disabled={isActive}
        >
          {isTourCompleted('feature-tour') ? '✅ Feature Tour (Completed)' : '🎯 Feature Tour'}
        </Button>
        
        <Button 
          onClick={() => highlight('#next-logo', { 
            title: 'Next.js Logo', 
            description: 'This is your application logo' 
          })} 
          variant="outline" 
          size="sm"
          disabled={isActive}
        >
          💡 Highlight Logo
        </Button>
      </div>

      {/* Tour Status */}
      {currentTour && (
        <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded">
          Active tour: <strong>{currentTour}</strong>
        </div>
      )}

      {/* User Preferences */}
      <div id="preferences" className="space-y-2 p-3 border rounded-lg bg-gray-50">
        <h3 className="text-sm font-semibold">Tour Preferences</h3>
        
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="auto-start"
            className="cursor-pointer"
            checked={userPreferences.autoStartTours}
            onChange={(e) => setPreference('autoStartTours', e.target.checked)}
          />
          <label htmlFor="auto-start" className="text-sm cursor-pointer">
            Auto-start tours (even if completed)
          </label>
        </div>
        
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="show-progress"
            className="cursor-pointer"
            checked={userPreferences.showProgress}
            onChange={(e) => setPreference('showProgress', e.target.checked)}
          />
          <label htmlFor="show-progress" className="text-sm cursor-pointer">
            Show tour progress
          </label>
        </div>

        <div className="flex gap-2 pt-2">
          <Button 
            onClick={() => {
              completeTour('main-tour');
              completeTour('feature-tour');
            }}
            variant="outline" 
            size="sm"
          >
            Mark All Complete
          </Button>
          
          <Button 
            onClick={resetTourData}
            variant="destructive" 
            size="sm"
          >
            Reset Tour Data
          </Button>
        </div>
      </div>
    </div>
  );
}; 