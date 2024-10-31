
import { createStore } from "redux"
import { themeReducer } from "./Reducer";

export const store = createStore(themeReducer);