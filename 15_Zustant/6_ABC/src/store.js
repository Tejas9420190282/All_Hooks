import create from "zustand";

// define types
const types = {
  increase: "INCREASE",
  decrease: "DECREASE",
  increaseBy: "INCREASE_BY",
  decreaseBy: "DECREASE_BY",
  reset: "RESET",
};

//define reducer function
const reducer = (state, {types, payload}) => {        // action have 2 types => i) type ii) payload
    switch (types) {
        case types.increase : return {counter: state.counter + 1};
        case types.increaseBy : return {counter : state.counter + payload};
        case types.decrease : return {counter : state.counter - 1};
        case types.decreaseBy : return {counter : state.counter - payload}; 
        case types.reset : return {counter : 0};
        
    }
};

const initialState = {
  counter: 0,
};

const useStore = create((set) => ({
  ...initialState,
  disptach : (action) => set(state => reducer(state, action)),
//  increase: () => set((state) => ({ counter: state.counter + 1 })),
//  decrease: () => set((state) => ({ counter: state.counter - 1 })),
//  increaseBy: (num) => set((state) => ({ counter: state.counter + num })),
//  decreaseBy: (num) => set((state) => ({ counter: state.counter - num })),
//  resetCounter: () => set({ counter: 0 }),
}));

export default useStore;
