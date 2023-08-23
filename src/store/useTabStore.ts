import { create } from "zustand";

type Store = {
  tab: string;
  changeTab: (text: string) => void;
};

const useTabStore = create<Store>((set) => ({
  tab: "all",
  changeTab: (text) => set((state) => ({ tab: (state.tab = text) })),
}));

export default useTabStore;
