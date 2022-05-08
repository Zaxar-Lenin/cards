import React from 'react';
import s from './Profile.module.css'
import {EditProfile} from './EditProfile/EditProfile';
import {Navigate} from 'react-router-dom';
import {Routers} from '../../c1-main/routers';
import {useAppSelector} from '../../../Hooks/hooks';

function Profile() {

    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)

    if (!isLoggedIn){
        return <Navigate to={Routers.LOGIN}/>
    }

    return (
        <>
        <div className={s.profile}>
            <div className={s.profile_box}>
              <EditProfile/>
            </div>
        </div>
        </>
    );
}

export default Profile;
