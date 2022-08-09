export type InitState = 'dark' | 'red' | 'some' | 'retro'

export type InitStateType = {
    theme: InitState
}
const initState: InitStateType = {
    theme: 'some'
};

export const themeReducer = (state = initState, action: ChangeThemeCType): InitStateType => { // fix any
    switch (action.type) {
        case 'NEW-THEME': {
            return {
                ...state,
                theme: action.payload.value
            }
        }
        default:
            return state;
    }
};

type ChangeThemeCType = ReturnType<typeof changeThemeC>

export const changeThemeC = (value: InitState) => {
    return {
        type: 'NEW-THEME',
        payload: {
            value
        }
    } as const
}; // fix any