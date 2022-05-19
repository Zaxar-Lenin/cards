import React from 'react';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

type CheckboxesType = {
    value: string
    handleChange: (value: string) => void
}

export const Checkboxes = ({value, handleChange}: CheckboxesType) => {

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleChange((event.target as HTMLInputElement).value)
    }


    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={onChangeHandler}
            >
                <FormControlLabel value="5" control={<Radio size="small"/>}
                                  label="Knew the answer"/>
                <FormControlLabel value="4" control={<Radio size="small"/>} label="Confused"/>
                <FormControlLabel value="3" control={<Radio size="small"/>}
                                  label="A lot of thought"/>
                <FormControlLabel value="2" control={<Radio size="small"/>} label="Forgot"/>
                <FormControlLabel value="1" control={<Radio size="small"/>} label="Did not know"/>
            </RadioGroup>
        </FormControl>
    );
};
