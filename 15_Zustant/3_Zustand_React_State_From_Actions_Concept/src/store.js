/*  
    -   In Zustand, a popular state management library for React, you can manage state within your application using "stores" and define both state and actions. One of the powerful features of Zustand is that actions can access the state directly, making it easy to implement complex logic.

    -   get() Function: The get() function inside the store allows actions to read the current state. This is particularly useful for actions that need to compute new state values based on existing state.

    -   Accessing State in Actions: You can freely access the current state within any action by calling get(). This makes it easy to implement logic that depends on multiple state variables or the current state of the store.
*/


import create from "zustand"

const initialState = {
    counter : 0,
}

const useStore = create((set, get) => ({
    ...initialState,

    //  increaseBy : (num) => set((state) => ({counter : state.counter + num})),

    increaseBy : (num) => {
        const counter = get().counter + num;    // updated counter
        set(() => ({counter}))
    },

    //  decreaseBy : (num) => set((state) => ({counter : state.counter - num}))

    decreaseBy : (num) => {
        const counter = get().counter - num;    // updated counter
        set(() => ({counter}))
    }
}))

export default useStore;

