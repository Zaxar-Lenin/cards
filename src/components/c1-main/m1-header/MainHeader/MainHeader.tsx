import React, {useEffect, useState} from 'react';
import s from './MainHeader.module.css'
import {useLocation, useNavigate} from 'react-router-dom';

export const MainHeader = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [style, setStyle] = useState({
        packlist: false,
        profile: true
    })

    useEffect(() => {
        if (location.pathname === '/packlist') {
            setStyle({
                packlist: true,
                profile: false,
            })
        }
    }, [])

    const onPacksListHandler = () => {
        setStyle({
            packlist: true,
            profile: false,
        })
        navigate('/packlist')
    }

    const onProfileHandler = () => {
        setStyle({
            packlist: false,
            profile: true,
        })
        navigate('/profile')
    }

    return (
        <div className={s.headerStyle}>
            <div className={s.buttons}>
                <button onClick={onPacksListHandler} className={style.packlist ? s.active : s.packlistButton}>Pack
                    list
                </button>
                <button onClick={onProfileHandler} className={style.profile ? s.active : s.profileButton}>Profile
                </button>
            </div>
        </div>
    );
};
