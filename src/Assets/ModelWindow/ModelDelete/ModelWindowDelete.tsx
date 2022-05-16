import React, {MouseEvent} from 'react';
import s from "./ModelWindowDelete.module.css";
import {Button} from '@mui/material';
import {useParams} from "react-router-dom";
import {deletePackList} from "../../../store/reducers/s10_PackListReducer";
import {useAppDispatch} from "../../../Hooks/hooks";

type ModelWindowDeletePropsType = {
    setActive: (n: boolean) => void
    active: boolean
    packId?: string;
}

export const ModelWindowDelete = (props: ModelWindowDeletePropsType) => {

    const dispatch = useAppDispatch();

    const params = useParams<{ packId: string }>();

    const modelWindowHandler = () => {
        props.setActive(false)
    }
    const modelContenHandler = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }
    const deleteHandler = () => {
        dispatch(deletePackList({id: params.packId}))
        props.setActive(false)
    }

    let classWindow = props.active ? (s.active + " " + s.model) : s.model
    let classContent = props.active ? (s.active + " " + s.model__content) : s.model__content

    return (
        <div className={classWindow} onClick={modelWindowHandler}>
            <div className={classContent} onClick={modelContenHandler}>
                <div className={s.title}>Delete Pack</div>
                <div className={s.text}>Do you really want to remove Pack Name - Name?
                    All cards will be excluded from this course
                </div>
                <div className={s.buttons}>
                    <Button variant="contained"
                            sx={{
                                borderRadius: '15px',
                                width: '120px',
                                height: '35px',
                                backgroundColor: "gray",
                                textTransform: 'initial',
                                fontSize: '14px'
                            }}
                            size="small"
                            onClick={modelWindowHandler}>Chanel</Button>
                    <Button variant="contained"
                            sx={{
                                borderRadius: '15px',
                                width: '120px',
                                height: '35px',
                                backgroundColor: "red",
                                textTransform: 'initial',
                                fontSize: '14px'
                            }}
                            size="small"
                            onClick={deleteHandler}>Delete</Button>
                </div>
            </div>
        </div>
    );
};

