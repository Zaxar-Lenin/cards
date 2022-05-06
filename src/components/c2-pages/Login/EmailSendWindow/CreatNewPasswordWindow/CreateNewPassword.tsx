import React from 'react';
import s from './CreateNewPassword.module.css';
import {ResetPassForm} from '../EmailForm/ResetPassForm';
import {useParams} from 'react-router-dom';
import {setNewPassword} from '../../../../../store/reducers/s1_LoginReducer';
import {useAppDispatch} from '../../../../../Hooks/hooks';

export const CreateNewPassword = () => {
    const dispatch = useAppDispatch()
    const params = useParams()
    console.log(params)

    const sendNewPassword = (value: string) => {
        dispatch(setNewPassword({newPass: value, token: 'as12354'}))
    }

    return (
        <div className={s.container}>
            <div className={s.header}>
                <h3>Create new password</h3>
            </div>
            <div className={s.body}>
                <ResetPassForm buttonName={'Create new password'} onClick={sendNewPassword}
                               label={'Password'}
                               type={'password'}>
                    Create new password
                </ResetPassForm>
            </div>

        </div>
    );
};

