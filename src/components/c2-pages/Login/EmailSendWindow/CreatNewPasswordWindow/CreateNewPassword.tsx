import React from 'react';
import s from './CreateNewPassword.module.css';
import {EmailForm} from '../EmailForm/EmailForm';

export const CreateNewPassword = () => {
    return (
        <div className={s.container}>
            <div className={s.header}>
                <h3>Create new password</h3>
            </div>
            <div className={s.body}>
                <EmailForm description={'Create new password'} buttonName={'Create new password'}/>
            </div>

        </div>
    );
};

