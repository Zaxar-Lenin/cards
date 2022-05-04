import React from 'react';
import s from './EmailConfirmation.module.css';
import SendSharpIcon from '@mui/icons-material/SendSharp';

export const EmailConfirmation = () => {
    return (
        <div className={s.container}>
            <div className={s.body}>
            <div className={s.icon}>
               <SendSharpIcon color='primary'
               fontSize='large'/>
            </div>
            <div className={s.bodyText}>
                <h3>Check Email</h3>
            </div>
            <div className={s.description}>
                <span>We've sent an Email with instructions to email</span>
            </div>
            </div>
        </div>
    );
};

