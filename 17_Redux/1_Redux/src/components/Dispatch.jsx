const initialState = {
    count: 0,
};

const INCREMENTBY1 = "INCREMENTBY1";
const DECREMENTBY1 = "DECREMENTBY1";

const INCREMENTBY10 = "INCREMENTBY10";
const DECREMENTBY10 = "DECREMENTBY10";

export const increseCounterBy1 = () => ({
    type: INCREMENTBY1,
});

export const decreseCounterBy1 = () => ({
    type: DECREMENTBY1,
});

export const increseCounterBy10 = () => ({
    type: INCREMENTBY10,
});

export const decreseCounterBy10 = () => ({
    type: DECREMENTBY10,
});

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENTBY1:
            return {
                ...state,
                count: state.count + 1,
            };

        case DECREMENTBY1:
            return {
                ...state,
                count: state.count - 1,
            };

        case INCREMENTBY10:
            return {
                ...state,
                count: state.count + 10,
            };

        case DECREMENTBY10:
            return {
                ...state,
                count: state.count - 10,
            };

        default:
            return state;
    }
};
