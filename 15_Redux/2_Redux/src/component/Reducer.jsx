const initialState = {
    count : 0,
}

const INCRESE = "INCRESE"

const DECRESE = "DECRESE"

export const increseBy = (n) => ({
    type : INCRESE,
    payload : n,
})

export const decreseBy = (n) => ({
    type : DECRESE,
    payload : n,
})

export const  counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCRESE: return {
            ...state,
            count : state.count + action.payload,
        }

        case DECRESE: return {
            ...state,
            count : state.count - action.payload,
        }
            
        default:
            return state;
    }
}