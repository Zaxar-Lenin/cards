import React from 'react';
import s from './Profile.module.css'
import {EditProfile} from './EditProfile/EditProfile';
import {Navigate} from 'react-router-dom';
import {Routers} from '../../c1-main/routers';
import {useAppSelector} from '../../../Hooks/hooks';
import {selectIsLoggedIn} from '../../../store/selectors/Selectors';

function Profile() {

    const isLoggedIn = useAppSelector(selectIsLoggedIn)

    if (!isLoggedIn){
        return <Navigate to={Routers.LOGIN}/>
    }

    return (
        <div className={s.profile}>
              <EditProfile/>
        </div>
    );
}

export default Profile;
