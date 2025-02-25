import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";

type UserStore = {
  hasfinishedOnboarding: boolean;
  toggleHasFinishedOnboarding: () => void;
};

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      hasfinishedOnboarding: false,
      toggleHasFinishedOnboarding: () => {
        return set((state) => {
          return {
            ...state,
            hasfinishedOnboarding: !state.hasfinishedOnboarding,
          };
        });
      },
    }),
    {
      name: "plantly-user-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
