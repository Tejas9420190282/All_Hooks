import create from "zustand";

const initialState = {
  counter: 0,
};

const useStore = create(( /*  set  */ ) => ({
  ...initialState,
//  increamentCounter: () => set((state) => ({ counter: state.counter + 1 })),
//  decrementCounter: () => set((state) => ({ counter: state.counter - 1 })),
//  incrementBy: (num) => set((state) => ({ counter: state.counter + num })),
//  decrementBy: (num) => set((state) => ({ counter: state.counter - num })),
//  resetCounter: () => set((state) => ({ counter: 0 })),
})); 

export default useStore;


