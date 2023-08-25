import { create } from "zustand";

type Store = {
  bookstatus: string;
  setBookStatus: (text: string) => void;
};

const useSavedBookStore = create<Store>((set) => ({
  bookstatus: "all",
  setBookStatus: (text) =>
    set((state) => ({ bookstatus: (state.bookstatus = text) })),
}));

export default useSavedBookStore;
