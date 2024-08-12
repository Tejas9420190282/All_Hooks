import create from "zustand";

const initialState =  {
    counter : 0,
}

const useStore = create((set, get) => ({

    ...initialState,

    incrementCounter : () => {
       
        set((state) => ({ counter : state.counter + 1 }));
    } ,
    decrementCounter : () => set((state) => ({ counter : state.counter - 1 })),
    incrementBy : (num) => set((state) => ({ counter : state.counter + num})),
    decrementBy : (num) => set((state) => ({counter : state.counter - num})),
    reset : () => set(initialState) 
}))


export default useStore;
