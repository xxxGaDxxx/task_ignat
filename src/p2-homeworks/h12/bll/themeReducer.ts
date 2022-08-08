export type InitState = 'dark' | 'red' | 'some'

export type InitStateType = {
    theme: InitState
}
const initState: InitStateType = {
    theme: 'some'
};

export const themeReducer = (state = initState, action: ChangeThemeCType): InitStateType => { // fix any
    switch (action.type) {
        case 'NEW-THEMES': {
            return {
                ...state,
                theme:action.payload.value
            }
        }
        default:
            return state;
    }
};

type ChangeThemeCType = ReturnType<typeof changeThemeC>

export const changeThemeC = (value: InitState) => {
    return {
        type: 'NEW-THEMES',
        payload: {
            value
        }
    } as const
}; // fix any