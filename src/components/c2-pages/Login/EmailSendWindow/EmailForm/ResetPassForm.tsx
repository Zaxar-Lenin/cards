import React, {ChangeEvent, useState} from 'react';
import s from './Email.module.css'
import {Button, TextField} from '@mui/material';
import {useAppSelector} from '../../../../../Hooks/hooks';

type FromType = {
    buttonName: string
    children: React.ReactNode
    onClick: (value: string)=> void
    label: string
    type?: string
}

export const ResetPassForm = ({buttonName, children, onClick, label, type}: FromType) => {

    const [value, setValue] = useState('')

    const errorMsg = useAppSelector<string | null>(state=> state.login.errorMessage)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }

    const onClickHandler = ()=> {
        onClick(value)
    }

    return (
        <>
            <div className={s.emailFormContainer}>
                <div>
                    <TextField
                        sx={{width: '293px'}}
                        margin="normal"
                        size="small"
                        label={label}
                        variant="standard"
                        value={value}
                        onChange={onChangeHandler}
                        type={type}
                    />
                </div>
                <div className={s.description}>
                    {children}
                </div>
                <div className={s.sendButton}>
                    <Button variant="contained"
                            sx={{
                                borderRadius: '15px',
                                width: '266px',
                                height: '25px',
                                textTransform: 'initial',
                                fontSize: '16px'
                            }}
                            size="small"
                            type="submit"
                            onClick={onClickHandler}>
                        {buttonName}</Button>
                    {errorMsg && <div>{errorMsg}</div>}
                </div>
            </div>
        </>
    );
};

