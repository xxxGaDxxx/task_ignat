import React, { DetailedHTMLProps, Dispatch, InputHTMLAttributes, SetStateAction} from 'react'
import {Box, Slider} from '@mui/material';

// тип пропсов обычного инпута
export type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    setValue1: Dispatch<SetStateAction<number>>
    max: number
    value: number
};

export const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className, max,value,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    //
    const handleChange = (event: Event, newValue: number | number[]) => {

        onChangeRange && onChangeRange(newValue as number);
    };


    return (
        <>
            <Box sx={{width: 300}}>
                <Slider
                    onChange={handleChange}
                    value={value}
                    valueLabelDisplay="auto"
                />
            </Box>

            {/*<input*/}
            {/*    type={'range'}*/}
            {/*    onChange={onChangeCallback}*/}
            {/*    className={finalRangeClassName}*/}
            {/*    value={value}*/}
            {/*    max={max}*/}

            {/*    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)*/}
            {/*/>*/}
        </>
    )
}

export default SuperRange
