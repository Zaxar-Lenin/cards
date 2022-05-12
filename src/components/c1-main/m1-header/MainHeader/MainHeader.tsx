import React, {useEffect, useState} from 'react';
import s from './MainHeader.module.css'
import {useLocation, useNavigate} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import {useAppDispatch} from '../../../../Hooks/hooks';
import {logOut} from '../../../../store/reducers/s1_LoginReducer';

export const MainHeader = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useAppDispatch()

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
                <div className={s.logoutButton}>
                    <LogoutIcon sx={{marginLeft: '15px', cursor: 'pointer'}}
                                onClick={()=>{dispatch(logOut())}}/>
                </div>
            </div>
        </div>
    );
};
