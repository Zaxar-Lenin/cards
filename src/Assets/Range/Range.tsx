import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../Hooks/hooks';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import {setMinMaxValue} from '../../store/reducers/s10_PackListReducer';

type RangeType = {
    min: number
    max: number
}

export const Range = ({min, max}:RangeType) => {
    const dispatch = useAppDispatch()

    const maxCardsCount = useAppSelector(state => state.packList.maxCardsCount)

    const [value, setValue] = React.useState<number[]>([min, maxCardsCount]);

    useEffect(()=> {
        let time = setTimeout(()=> {
            dispatch(setMinMaxValue({value: value as number[]}))}, 1500)
        return ()=> {
            clearTimeout(time)
        }
    },[value])

    useEffect(()=> {
        setValue([min, maxCardsCount])
    }, [maxCardsCount])

    function valuetext(value: number) {
        return `${value}`;
    }

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const handleOnChangeCommitted = (event: React.SyntheticEvent | Event, value: number | Array<number>) => {
        setValue(value as number[])
    }

    return (
        <Box sx={{width: 170}}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                onChangeCommitted={handleOnChangeCommitted}
                max={maxCardsCount as number}
                size="small"

            />
        </Box>
    );
};

