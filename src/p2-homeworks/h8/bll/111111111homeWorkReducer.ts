import {UserType} from '../HW8';


export const homeWorkReducer2 = (state: UserType[], action: UserReducetType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) => a.name < b.name ? -1 : 1)
            return action.payload.upDown === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload.age)
        }

        default:
            return state
    }
}

type UserReducetType = sortAgeACType | sortUpACType

type sortAgeACType = ReturnType<typeof sortAgeAC>

type sortUpACType = ReturnType<typeof sortUpAC>

export const sortUpAC = (upDown: string) => {
    return {
        type: 'sort',
        payload: {upDown}
    } as const
}

export const sortAgeAC = (age: number) => {
    return {
        type: 'check',
        payload: {age}
    } as const
}




