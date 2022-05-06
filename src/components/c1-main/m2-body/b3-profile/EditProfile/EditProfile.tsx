import React, {useState} from 'react';
import s from "./EditProfile.module.css"
import {Navigate} from 'react-router-dom';
import {Routers} from "../../../routers";
import {useCustomSelector} from "../../../../../store/store";

export const EditProfile = () => {

    const name = useCustomSelector<string>(state => state.profile.name)

    const avatar = useCustomSelector<string | undefined>(state => state.profile.avatar)

    const email = useCustomSelector<string>(state => state.profile.email)

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

