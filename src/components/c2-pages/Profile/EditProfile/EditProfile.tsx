import React, {useState} from 'react';
import s from "./EditProfile.module.css"
import {Navigate} from 'react-router-dom';
import {Routers} from "../../../c1-main/routers";
import {useAppSelector} from '../../../../Hooks/hooks';
import {Button} from '@mui/material';
import {selectAvatar, selectEmail, selectName} from '../../../../store/selectors/Selectors';

export const EditProfile = () => {

    const name = useAppSelector<string>(selectName)
    const avatar = useAppSelector<string | undefined>(selectAvatar)
    const email = useAppSelector<string>(selectEmail)

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
            <Button variant="contained"
                    sx={{
                        borderRadius: '15px',
                        width: '120px',
                        height: '25px',
                        textTransform: 'initial',
                        fontSize: '14px'
                    }}
                    size="small"
                    onClick={handlerButton}>
                Edit Profile</Button>
        </div>
    );
}



