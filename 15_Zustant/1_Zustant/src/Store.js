import create from "zustand";


const initialState = {
    counter: 0,
}

const useStore = create((set) => ({
  // create ====> create also function here.  
  // set ====> here we don't pass parameter set but it is function here.
  
  ...initialState,

  increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
  decreaseCounter: () => set((state) => ({ counter: state.counter - 1 })),
  increaseBy: (num) => set((state) => ({ counter: state.counter + num })),
  decreaseBy: (num) => set((state) => ({ counter: state.counter - num })),
  reset: () => set((initialState) ),
}));

export default useStore;
