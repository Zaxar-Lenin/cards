import React, {MouseEvent} from 'react';
import s from "./ModelWindowUpdate.module.css";
import {Button} from '@mui/material';
import {addPackList, deletePackList, updatePackList} from "../../../store/reducers/s10_PackListReducer";
import {useAppDispatch, useAppSelector} from "../../../Hooks/hooks";
import {useFormik} from "formik";
import TextField from "@mui/material/TextField";

type ModelWindowAddPropsType = {
    setActive: (n: boolean) => void
    active: boolean
    isMyPack: boolean
    packId: string | null;
}

export const ModelWindowUpdate = ({
                                      setActive,
                                      packId,
                                      active,
                                      isMyPack,
                                  }: ModelWindowAddPropsType) => {

    const dispatch = useAppDispatch();

    const userId = useAppSelector(store => store.profile.profile._id);

    const name = useAppSelector(state => state.packList.queryParams.packName)

    const formik = useFormik({
        initialValues: {
            name: name,
        },
        onSubmit: values => {
            if(values.name === ""){
                values.name = "Name pack"
            }
            if (isMyPack) {
                packId && dispatch(updatePackList({name: values.name, packId: userId, _id:packId}))
            } else {
                packId && dispatch(updatePackList({name: values.name, packId: "",_id: packId}))
            }
            setActive(false)
            values.name = ""
        },
    });

    const modelWindowHandler = () => {
        setActive(false)
    }

    const modelContenHandler = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    let classWindow = active ? (s.active + " " + s.model) : s.model
    let classContent = active ? (s.active + " " + s.model__content) : s.model__content

    return (
        <div className={classWindow} onClick={modelWindowHandler}>
            <div className={classContent} onClick={modelContenHandler}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={s.title}>Update name pack</div>
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

