import React, {useState} from 'react';
import s from "./EditProfile.module.css"
import {Navigate} from 'react-router-dom';
import {Routers} from "../../../c1-main/routers";
import {useAppSelector} from '../../../../Hooks/hooks';

export const EditProfile = () => {

    const name = useAppSelector<string>(state => state.profile.profile.name)

    const avatar = useAppSelector<string | undefined>(state => state.profile.profile.avatar)

    const email = useAppSelector<string>(state => state.profile.profile.email)

    const [edit, setEdit] = useState(false)

    const handlerButton = () => {
        setEdit(true)
    }

    if (edit) {
        return <Navigate to={Routers.PERSONAL_INFORMATION}/>
    }
    return (
        <div className={s.edit_profile}>
            <div className={s.image}>
                <img src={avatar} alt=""/>
            </div>
            <div className={s.name}>{name}</div>
            <div className={s.status}>{email}</div>
            <div onClick={handlerButton} className={s.button}>Edit Profile</div>
        </div>
    );
}

