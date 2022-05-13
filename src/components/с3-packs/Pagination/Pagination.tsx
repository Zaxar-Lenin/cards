import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useAppDispatch, useAppSelector} from "../../../Hooks/hooks";
import {setPage} from "../../../store/reducers/s10_PackListReducer";


export default function BasicPagination() {

    const dispatch = useAppDispatch()

    const totalCount = useAppSelector(state => state.packList.cardPacksTotalCount)

    const amountPacks = useAppSelector(state => state.packList.queryParams.pageCount)

    const page = useAppSelector(state => state.packList.queryParams.page)

    const setPageHandler = (num: number) => {
        dispatch(setPage(num))
    }

    let count = 1
    if (totalCount) {
        count = Math.ceil(totalCount / amountPacks)
    }
    return (
        <Stack spacing={6}>
            <Pagination onChange={(_, num) => {
                setPageHandler(num)
            }} page={page} count={count}/>
        </Stack>)
}