import {UserType} from '../HW8';

type PropsType = {
    type: string
    payload: string | number
}

export const homeWorkReducer = (state: UserType[], action: PropsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            debugger
            return (
                action.payload === 'up'
                    ? [...state.sort((a, b) => a.name < b.name ? -1 : 1)]
                    : [...state.sort((a, b) => a.name < b.name ? -1 : 1).reverse()]
            )
        }
        case 'check': {
            debugger
            return state.filter(u => u.age >= action.payload)
        }

        default:
            return state
    }
}



