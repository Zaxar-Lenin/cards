import React, {ChangeEvent, useEffect, useState} from "react";
import {addPackList, setSearchValue} from "../../../store/reducers/s10_PackListReducer";
import {useAppDispatch} from "../../../Hooks/hooks";

export const Search = () => {
    const dispatch = useAppDispatch();

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        let time = setTimeout(() => {
            dispatch(setSearchValue(inputValue));
        }, 2000);
        return () => {
            clearTimeout(time);
        }
    }, [inputValue]);
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    }

    return (<>
        <input type="text" value={inputValue} onChange={onChangeInputHandler}/>
    </>)
}