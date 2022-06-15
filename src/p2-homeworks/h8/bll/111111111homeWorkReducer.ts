import {UserType} from '../HW8';


export const homeWorkReducer2 = (state: UserType[], action: UserReducetType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return (
                action.payload.upDown === 'up'
                    ? [...state.sort((a, b) => a.name < b.name ? -1 : 1)]
                    : [...state.sort((a, b) => a.name < b.name ? -1 : 1).reverse()]
            )
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




