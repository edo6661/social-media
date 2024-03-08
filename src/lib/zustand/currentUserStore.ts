/* eslint-disable no-unused-vars */
import { UserType } from "@/types/User";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CurrentUserStore {
  currentUser: UserType | null;
  setCurrentUser: (currentUser: UserType | null) => void;
}

export const useCurrentUserStore = create<CurrentUserStore>()(
  persist(
    (set) => ({
      currentUser: null,
      setCurrentUser: (currentUser) => set({ currentUser }),
    }),
    {
      name: "user", // name of item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default the 'localStorage' is used
      partialize: (state) => ({ currentUser: state.currentUser }),
    }
  )
);
