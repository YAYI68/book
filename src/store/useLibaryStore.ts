import { create } from "zustand";

type Store = {
  count: number;
  inc: () => void;
};

const useLibaryStore = create<Store>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

export default useLibaryStore;
