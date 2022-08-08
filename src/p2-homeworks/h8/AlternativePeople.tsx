import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {homeWorkReducer2, sortAgeAC, sortUpAC} from './bll/111111111homeWorkReducer';
import s from './AlternativePeople.module.css'


export type UserType = {
    _id: number
    name: string
    age: number
}


const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]
console.log(initialPeople)

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: any) => (
        <div key={p._id}>
            <span className={s.span}>{p.name}</span>
            <span className={s.age}>{p.age}</span>


        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer2(initialPeople, sortUpAC('up')))
    const sortDown = () => setPeople(homeWorkReducer2(initialPeople, sortUpAC('down')))
    const sortAge = () => setPeople(homeWorkReducer2(initialPeople, sortAgeAC(18)))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <span><SuperButton onClick={sortUp}>sort up</SuperButton></span>
            <span><SuperButton onClick={sortDown}>sort down</SuperButton></span>
            <span><SuperButton onClick={sortAge}>check 18</SuperButton></span>


            <hr/>

            <hr/>
        </div>
    )
}

export default HW8
