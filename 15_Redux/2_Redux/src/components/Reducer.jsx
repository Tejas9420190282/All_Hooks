
const initialState = {
    theme : "Dark",
}

const THEME = "THEME";

export const toggleTheme = () => ({
    type : THEME
})

export const themeReducer = (state = initialState, action) => {

    switch (action.type) {
        case THEME:
            return {
                ...state, 
                theme : state.theme == "Dark" ? "Light" : "Dark",
            }
    
        default:
            return state;
    }
}

