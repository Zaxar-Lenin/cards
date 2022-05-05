import React from 'react';
import s from './CreateNewPassword.module.css';
import {ResetPassForm} from '../EmailForm/ResetPassForm';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {setNewPassword} from '../../../../../store/reducers/s1_LoginReducer';

export const CreateNewPassword = () => {
    const dispatch = useDispatch()
    const params = useParams()

    const sendNewPassword = (value: string)=> {
        dispatch(setNewPassword({newPass: value, token: 'as12354'}))
    }

    return (
        <div className={s.container}>
            <div className={s.header}>
                <h3>Create new password</h3>
            </div>
            <div className={s.body}>
                <ResetPassForm buttonName={'Create new password'} onClick={sendNewPassword}>
                    Create new password
                </ResetPassForm>
            </div>

        </div>
    );
};

