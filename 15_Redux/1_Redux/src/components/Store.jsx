import { createStore } from "redux"
import { counterReducer } from "./Dispatch"

export const store = createStore(counterReducer)