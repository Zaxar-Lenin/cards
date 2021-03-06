import React, {useEffect, useState} from 'react';
import s from './MainHeader.module.css'
import {useLocation, useNavigate} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import {useAppDispatch, useAppSelector} from '../../../../Hooks/hooks';
import {logOut} from '../../../../store/reducers/s1_LoginReducer';
import chiken from '../../../../Assets/img/pngwing.com.png';
import {LinearProgress} from '@mui/material';
import {selectIsLoading} from '../../../../store/selectors/Selectors';

export const MainHeader = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useAppDispatch()

    const [style, setStyle] = useState({
        packlist: false,
        profile: true
    })

    const isLoading = useAppSelector(selectIsLoading)

    useEffect(() => {
        if (location.pathname === "/packlist" || location.pathname === "/cardspack") {
            setStyle({
                packlist: true,
                profile: false,
            })
        }
    }, [location.pathname])

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
                <div className={s.logo}>
                    <img src={chiken}/>
                </div>
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
            {
                isLoading && <LinearProgress color="secondary" />
            }
        </div>
    );
};
