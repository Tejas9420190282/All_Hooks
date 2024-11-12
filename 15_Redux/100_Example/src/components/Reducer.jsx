
const initialState = {
    count : 0
}

const INCRESE = "INCRESE"

const DECRESE = "DECRESE"

export const increseBy = (n) => ({
    type : INCRESE,
    val : n
})

export const decreseBy = (n) => ({
    type : DECRESE,
    val : n
})

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCRESE: return {
            ...state,
            count : state.count + action.val
        }
        
        case DECRESE: return {
            ...state,
            count : state.count - action.val
        }

        default:
            return state;
    }
}