
import useStore from "./store";

export const incrementCounter = () => { 
    useStore.setState((state) => ({ counter: state.counter + 1 }))
} 

export const decrementCounter = () => { 
    useStore.setState((state) => ({ counter: state.counter - 1 }))
}

export const incrementBy = (num) => {
    useStore.setState((state) => ({ counter: state.counter + num }))
}

export const decrementBy = (num) =>{
    useStore.setState((state) => ({ counter: state.counter - num }))
} 

export const resetCounter = () => {
    useStore.setState(() => ({counter : 0}))
}

