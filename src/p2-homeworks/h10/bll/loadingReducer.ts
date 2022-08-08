export type InitStatebType = {
    isolation: boolean
}

const initState: InitStatebType = {
    isolation: false
}

export const loadingReducer = (state = initState, action: LoadingACType): InitStatebType => { // fix any
    switch (action.type) {
        case 'LOADING-TIME': {
            return {
                isolation: action.loading
            }
        }
        default:
            return state
    }
}

export type LoadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (loading: boolean) => {
    return {
        type: 'LOADING-TIME',
        loading
    } as const
} // fix any