import React from 'react'

import {UserType} from '../../HW8';
import {homeWorkReducer2, sortAgeAC, sortUpAC} from '../111111111homeWorkReducer';

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    let upDown = 'up'

    const newState = homeWorkReducer2(initialState, sortUpAC(upDown))

    console.log(newState)
    expect(newState[0].name).toBe('Александр')
})
test('sort name down', () => {
    let upDown = 'down'

    const newState = homeWorkReducer2(initialState, sortUpAC(upDown))

    console.log(newState)
    expect(newState[0].name).toBe('Кот')

})
test('check age 18', () => {

    let age = 18
    const newState = homeWorkReducer2(initialState, sortAgeAC(age))

    console.log(newState)
    expect(newState.length).toBe(4)


})
