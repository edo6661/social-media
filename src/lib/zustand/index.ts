import { create } from "zustand";

export interface StoreType {
  checked: Record<string, boolean>;
  setChecked: (checked: Record<string, boolean>) => void;
  handleChecked: (id: string) => void;
  handleCheckedAll: () => void;
  isAnimatedAuth: boolean;
  setIsAnimatedAuth: (isAnimatedAuth: boolean) => void;
}

export const useGlobalState = create<StoreType>((set) => ({
  isAnimatedAuth: false,
  setIsAnimatedAuth: (isAnimatedAuth) => set({ isAnimatedAuth }),
  checked: {},
  setChecked: (checked) => set({ checked }),
  handleChecked: (id) =>
    set((state) => ({
      checked: { ...state.checked, [id]: !state.checked[id] },
    })),
  handleCheckedAll: () =>
    set((state) => {
      // const allChecked = Object.values(state.checked).every((value) => value === true)
      const allChecked = Object.values(state.checked).every((value) => value);
      return {
        ...state,
        checked: Object.keys(state.checked).reduce(
          (acc, key) => ({ ...acc, [key]: !allChecked }),
          {}
        ),
      };
    }),
}));
