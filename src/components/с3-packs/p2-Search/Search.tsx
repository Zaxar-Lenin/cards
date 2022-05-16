import React, {ChangeEvent, useEffect, useState} from "react";
import {addPackList, setSearchValue} from "../../../store/reducers/s10_PackListReducer";
import {useAppDispatch} from "../../../Hooks/hooks";
import {setSearchCardsValue} from "../../../store/reducers/s11_CardsListReducer";

type SearchPropsType = {
    table: 'cards' | 'packs';
}

export const Search = (props: SearchPropsType) => {
    const dispatch = useAppDispatch();

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        let time = setTimeout(() => {
            props.table === 'packs' ? dispatch(setSearchValue(inputValue))
                : dispatch(setSearchCardsValue(inputValue));
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