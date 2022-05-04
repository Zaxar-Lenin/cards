import React from 'react';
import s from './SendEmailWindow.module.css';
import {EmailForm} from './EmailForm/EmailForm';

export const SendEmailWindow = () => {
    return (
        <div className={s.container}>
            <div className={s.header}>
                <h3>Forgot your password?</h3>
            </div>
            <div className={s.body}>
                <EmailForm description={'Enter your email address and we will send you further instructions'}
                           buttonName={'Send Instructions'}/>
            </div>

        </div>
    );
};
