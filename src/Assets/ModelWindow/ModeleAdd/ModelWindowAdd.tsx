import React, {MouseEvent} from 'react';
import s from "./ModelWindowAdd.module.css";
import {Button} from '@mui/material';
import {addPackList} from "../../../store/reducers/s10_PackListReducer";
import {useAppDispatch, useAppSelector} from "../../../Hooks/hooks";
import {useFormik} from "formik";
import TextField from "@mui/material/TextField";

type ModelWindowAddPropsType = {
    setActive: (n: boolean) => void
    active: boolean
}

export const ModelWindowAdd = (props: ModelWindowAddPropsType) => {

    const dispatch = useAppDispatch();

    const name = useAppSelector(state => state.packList.queryParams.packName)

    const formik = useFormik({
        initialValues: {
            name: name,
        },
        onSubmit: values => {
            dispatch(addPackList({name: values.name}))
            props.setActive(false)

        },
    });

    const modelWindowHandler = () => {
        props.setActive(false)
    }

    const modelContenHandler = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    let classWindow = props.active ? (s.active + " " + s.model) : s.model
    let classContent = props.active ? (s.active + " " + s.model__content) : s.model__content

    return (
        <div className={classWindow} onClick={modelWindowHandler}>
            <div className={classContent} onClick={modelContenHandler}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={s.title}>Add new pack</div>
                    <div className={s.textInput}>
                        <TextField
                            style={{
                                width: '100%'
                            }}
                            id="name"
                            label="Name pack"
                            variant="standard"
                            {...formik.getFieldProps('name')}
                        />
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
                                type={"submit"}
                                sx={{
                                    borderRadius: '15px',
                                    width: '120px',
                                    height: '35px',
                                    textTransform: 'initial',
                                    fontSize: '14px'
                                }}
                                size="small">Save</Button>
                    </div>
                </form>
            </div>
        </div>
    )
        ;
};

