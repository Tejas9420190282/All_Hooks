import create from "zustand";

const initialState = {
  counter: 0,
};

const useStore = create((set, get) => ({
  ...initialState,
  increaseCounter: () => {
    //  set((state) => ({ counter: state.counter + 1 }));
    const counter = get().counter + 1;
    set(() => ({ counter }));
  },
  decreaseCounter: () => {
    //  set((state) => ({ counter: state.counter - 1 }));
    const counter = get().counter - 1;
    set(() => ({ counter }));
  },
  increaseBy: (num) => {
    //  set((state) => ({ counter: state.counter + num }));
    const counter = get().counter + num;
    set((state) => ({ counter }));
  },
  decreaseBy: (num) => {
    //  set((state) => ({ counter: state.counter - num }));
    const counter = get().counter - num;
    set((state) => ({ counter }));
  },
  resetCounter: () => {
   // set((state) => ({ counter: 0 }));
    set(initialState)
  },
}));

export default useStore;
