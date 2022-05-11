import React, {useState} from 'react';
import s from './MainHeader.module.css'

export const MainHeader = () => {

    const [style, setStyle] = useState('')

    const activeStyleHandler = ()=> {
        setStyle('active')
    }

    return (
        <div className={s.headerStyle}>
            <div className={s.buttons}>
            <button className={style.length > 0 ? `${s}.active` : ''} onClick={activeStyleHandler}>Pack list</button>
            <button className={s.profileButton}>Profile</button>
            </div>
        </div>
    );
};

