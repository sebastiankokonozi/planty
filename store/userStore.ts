import { create } from "zustand";

type UserStore = {
  hasfinishedOnboarding: boolean;
  toggleHasFinishedOnboarding: () => void;
};
export const useUserStore = create<UserStore>((set) => ({
  hasfinishedOnboarding: false,
  toggleHasFinishedOnboarding: () =>
    set((state) => ({
      ...state,
      hasfinishedOnboarding: !state.hasfinishedOnboarding,
    })),
}));
