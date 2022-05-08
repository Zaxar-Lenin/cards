import React from 'react';
import s from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={s.centered}>
            <div className={s.blob1}></div>
            <div className={s.blob2}></div>
        </div>
    );
};
