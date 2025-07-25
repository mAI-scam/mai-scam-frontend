import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { driver, Driver, DriveStep, Config } from 'driver.js';
import 'driver.js/dist/driver.css';

/**
 * Extended tour step interface with required ID for tracking
 */
export interface TourStep extends DriveStep {
  id: string;
  tourId?: string;
}

/**
 * Driver.js integration with Zustand for Next.js TypeScript
 * 
 * Features:
 * - ✅ Global state management
 * - ✅ Tour completion tracking  
 * - ✅ User preferences persistence
 * - ✅ Cross-component sharing
 * - ✅ TypeScript support
 */

export interface TourState {
  completedTours: string[];
  tourProgress: Record<string, number>;
  userPreferences: {
    autoStartTours: boolean;
    showProgress: boolean;
    animationSpeed: 'slow' | 'normal' | 'fast';
  };
  currentTour: string | null;
  isActive: boolean;
}

export interface DriverStore extends TourState {
  driver: Driver | null;
  
  // Actions
  initializeDriver: (config?: Partial<Config>) => void;
  startTour: (tourId: string, steps: TourStep[]) => void;
  completeTour: (tourId: string) => void;
  updateProgress: (tourId: string, stepIndex: number) => void;
  setPreference: <K extends keyof TourState['userPreferences']>(
    key: K, 
    value: TourState['userPreferences'][K]
  ) => void;
  highlight: (element: string, popover?: { title?: string; description?: string }) => void;
  resetTourData: () => void;
  isTourCompleted: (tourId: string) => boolean;
  destroy: () => void;
}

export const useDriverStore = create<DriverStore>()(
  persist(
    (set, get) => ({
      // Initial state
      driver: null,
      completedTours: [],
      tourProgress: {},
      userPreferences: {
        autoStartTours: true,
        showProgress: true,
        animationSpeed: 'normal',
      },
      currentTour: null,
      isActive: false,

      // Actions
      initializeDriver: (config) => {
        const state = get();
        
        if (state.driver) {
          state.driver.destroy();
        }

        const newDriver = driver({
          showProgress: state.userPreferences.showProgress,
          smoothScroll: true,
          disableActiveInteraction: false,
          onDestroyed: () => {
            set({ isActive: false, currentTour: null });
          },
          onDeselected: () => {
            set({ isActive: false });
          },
          onHighlighted: () => {
            set({ isActive: true });
          },
          ...config,
        });

        set({ driver: newDriver });
      },

      startTour: (tourId, steps) => {
        const state = get();
        
        if (!state.driver) {
          state.initializeDriver({});
        }

        // Check if tour is already completed and user preference
        if (state.isTourCompleted(tourId) && !state.userPreferences.autoStartTours) {
          return;
        }

        if (state.driver) {
          state.driver.setSteps(steps);
          state.driver.drive();
          set({ 
            currentTour: tourId, 
            isActive: true,
          });
        }
      },

      completeTour: (tourId) => {
        set(state => ({
          completedTours: [...state.completedTours.filter(id => id !== tourId), tourId],
          tourProgress: { ...state.tourProgress, [tourId]: -1 }, // -1 indicates completed
          currentTour: null,
          isActive: false,
        }));
      },

      updateProgress: (tourId, stepIndex) => {
        set(state => ({
          tourProgress: { ...state.tourProgress, [tourId]: stepIndex }
        }));
      },

      setPreference: (key, value) => {
        set(state => ({
          userPreferences: { ...state.userPreferences, [key]: value }
        }));
      },

      highlight: (element, popover) => {
        const state = get();
        
        if (!state.driver) {
          state.initializeDriver({});
        }

        if (state.driver) {
          state.driver.highlight({ element, popover });
          set({ isActive: true });
        }
      },

      resetTourData: () => {
        set({
          completedTours: [],
          tourProgress: {},
          currentTour: null,
          isActive: false,
        });
      },

      isTourCompleted: (tourId) => {
        const state = get();
        return state.completedTours.includes(tourId);
      },

      destroy: () => {
        const state = get();
        if (state.driver) {
          state.driver.destroy();
          set({ driver: null, isActive: false, currentTour: null });
        }
      },
    }),
    {
      name: 'driver-store',
      // Only persist user preferences and completion data, not the driver instance
      partialize: (state) => ({
        completedTours: state.completedTours,
        tourProgress: state.tourProgress,
        userPreferences: state.userPreferences,
      }),
    }
  )
);

/**
 * Main hook for driver.js with Zustand state management
 * 
 * @param tourId - Optional tour ID for named tour operations
 * @returns Driver store with all methods and state
 * 
 * @example
 * ```typescript
 * // Basic usage
 * const { startTour, highlight, isTourCompleted } = useDriver();
 * 
 * // Start a tour
 * startTour('welcome-tour', steps);
 * 
 * // Check completion
 * const isCompleted = isTourCompleted('welcome-tour');
 * 
 * // Highlight element
 * highlight('#element', { title: 'Title', description: 'Description' });
 * 
 * // Set preferences
 * setPreference('autoStartTours', false);
 * ```
 */
export const useDriver = (tourId?: string) => {
  const store = useDriverStore();
  
  return {
    ...store,
    startNamedTour: (steps: TourStep[]) => {
      if (tourId) {
        store.startTour(tourId, steps);
      }
    },
    isCurrentTourCompleted: tourId ? store.isTourCompleted(tourId) : false,
  };
}; 