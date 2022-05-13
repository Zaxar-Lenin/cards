import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useAppDispatch, useAppSelector} from "../../../Hooks/hooks";
import {setPage, setPageCount} from "../../../store/reducers/s10_PackListReducer";
import s from "./Pagination.module.css"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';


export default function BasicPagination() {

    const dispatch = useAppDispatch()

    const totalCount = useAppSelector(state => state.packList.cardPacksTotalCount)

    const amountPacks = useAppSelector(state => state.packList.queryParams.pageCount)

    const page = useAppSelector(state => state.packList.queryParams.page)

    const setPageHandler = (num: number) => {
        dispatch(setPage(num))
    }

    const handleChange = (event: SelectChangeEvent) => {
        dispatch(setPageCount(Number(event.target.value)))
    };

    let count = 1
    if (totalCount) {
        count = Math.ceil(totalCount / amountPacks)
    }
    return (
        <div className={s.pagination}>
            <Stack spacing={6}>
                <Pagination onChange={(_, num) => {
                    setPageHandler(num)
                }} page={page} count={count}/>
            </Stack>
            <div className={s.select}>
                Show
                <FormControl fullWidth style={{width: "100px", height: "50px"}}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={amountPacks.toString()}
                        onChange={handleChange}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                    </Select>
                </FormControl>
                Cards per Page
            </div>
        </div>)
}