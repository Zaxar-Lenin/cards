import React, {ChangeEvent, useState} from 'react';
import s from './Email.module.css'
import {Button, TextField} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {resetPassword} from '../../../../../store/reducers/s1_LoginReducer';
import {AppRootStateType} from '../../../../../store/store';

type FromType = {
    buttonName: string
    children: React.ReactNode
    onClick: (value: string)=> void
}

export const ResetPassForm = ({buttonName, children, onClick}: FromType) => {

    const [value, setValue] = useState('')
    const error = useSelector<AppRootStateType, string | null >(state => state.login.errorMessage)

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
                        label="Email"
                        variant="standard"
                        value={value}
                        onChange={onChangeHandler}
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
                    <div>{error}</div>
                </div>
            </div>
        </>
    );
};

