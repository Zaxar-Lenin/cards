import React from 'react';
import s from './Profile.module.css'
import {EditProfile} from './EditProfile/EditProfile';
import {SliderCards} from './SliderCards/SliderCards';
import {PacksList} from './PacksList/PacksList';
import {Navigate} from 'react-router-dom';
import {Routers} from '../../c1-main/routers';
import {useAppDispatch, useAppSelector} from '../../../Hooks/hooks';

function Profile() {

    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)


    if (!isLoggedIn){
        return <Navigate to={Routers.LOGIN}/>
    }

    return (
        <div className={s.profile}>
            <div className={s.profile_box}>
                <EditProfile/>
                <SliderCards/>
            </div>
            <div>
                <PacksList/>
            </div>
        </div>
    );
}

export default Profile;
