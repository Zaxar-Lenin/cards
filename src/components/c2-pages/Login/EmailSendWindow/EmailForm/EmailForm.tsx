import React from 'react';
import s from './Email.module.css'
import {Button, TextField} from '@mui/material';

type FromType = {
    description: string
    buttonName: string
}

export const EmailForm = ({description,buttonName}:FromType) => {
    return (
        <>
            <div className={s.emailFormContainer}>
            <div>
                <TextField
                    sx={{width: '293px'}}
                    margin='normal'
                    size="small"
                    label="Email"
                    variant="standard"
                />
            </div>
            <div className={s.description}>
                {description}
            </div>
            <div className={s.sendButton}>
                <Button variant="contained"
                        sx={{borderRadius: '15px', width: '266px', height: '25px', textTransform: 'initial', fontSize: '16px'}}
                        size='small'
                        type="submit">
                    {buttonName}</Button>
            </div>
            </div>
        </>
    );
};

