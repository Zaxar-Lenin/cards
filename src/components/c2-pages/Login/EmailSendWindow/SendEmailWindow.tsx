import React, {useEffect} from 'react';
import s from './SendEmailWindow.module.css';
import {ResetPassForm} from './EmailForm/ResetPassForm';
import {resetPassword} from '../../../../store/reducers/s1_LoginReducer';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../../Hooks/hooks';
import {selectErrorMsg} from '../../../../store/selectors/Selectors';

export const SendEmailWindow = () => {

    const redirect = useNavigate()
    const dispatch = useAppDispatch()

    const error = useAppSelector(selectErrorMsg)

    useEffect(() => {
        if (error?.length === 0) {
            redirect('/login/instruction')
        }
    }, [error])


    const sendInstructions = (value: string) => {
        dispatch(resetPassword(value))
    }

    return (
        <div className={s.container}>
            <div className={s.header}>
                <h3>Forgot your password?</h3>
            </div>
            <div className={s.body}>
                <ResetPassForm buttonName={'Send Instructions'}
                               onClick={sendInstructions}
                               label={'Email'}>
                    Enter your email address and we will send you further instructions
                </ResetPassForm>
            </div>

        </div>
    );
};
