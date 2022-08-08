import React, {useState} from 'react'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import SuperRange from './common/c7-SuperRange/SuperRange';

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState<number[]>([0, 100])

    console.log(value1)


    const onChangeRange1 = (value: number) => {
        setValue1(value)
        setValue2([value, value2[1]])
    }

    const onChangeRange2 = (value: number[]) => {
        setValue1(value[0])
        setValue2([value[0], value[1]])
    }



    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    setValue1={setValue1}
                    onChangeRange={onChangeRange1}
                    value={value1}
                    max={value2[1]}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value2[0]}</span>
                <SuperDoubleRange
                    setValue1={setValue1}
                    setValue2={setValue2}
                    // сделать так чтоб value1 и value2 изменялось
                    onChangeRange={onChangeRange2}
                    // @ts-ignore
                    value={value2}
                    max={value2[1]}
                    min={value2[0]}

                />
                <span>{value2[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
