import React, { Dispatch, SetStateAction} from 'react'
import {DefaultInputPropsType} from '../c7-SuperRange/SuperRange';
import {Box, Slider} from '@mui/material';


type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value:   number[]) => void
    value: number[]
    setValue1: Dispatch<SetStateAction<number>>
    setValue2: Dispatch<SetStateAction<number[]>>
     min:number
    max:number
    //step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, type, onChange, className, value,
         min, max,// step, disable,
        ...restProps
    }
) => {
    // сделать самому, можно подключать библиотеки


    const minDistance = 10;

    function valuetext(value: number) {
        return `${value}`;
    }

    const handleChange = (event: Event, newValue: number | number[],activeThumb: number,) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            onChangeRange && onChangeRange([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            onChangeRange && onChangeRange([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }

    };

    return (
        <>

            <Box  sx={{width: 300}}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
