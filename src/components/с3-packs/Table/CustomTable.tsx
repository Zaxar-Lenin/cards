import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useAppDispatch, useAppSelector} from '../../../Hooks/hooks';
import {ButtonsForPacks} from '../p1-ButtonsForPacks/ButtonsForPacks';
import s from './Table.module.css'
import {updateSortPacks} from '../../../store/reducers/s10_PackListReducer';
import {getCardsList} from '../../../store/reducers/s11_CardsListReducer';
import {URLSearchParamsInit, useNavigate} from 'react-router-dom';
import {selectCardPacks, selectSortPacks} from '../../../store/selectors/Selectors';


type CustomTablePropsType = {
    setActiveDelete: (n: boolean) => void;
    setActiveUpdate: (n: boolean) => void;
    setSearchParams:
        (nextInit: URLSearchParamsInit, navigateOptions?:
            {
                replace?: boolean | undefined;
                state?: any;
            } | undefined) => void;
    isMyPack: boolean;
}

export const CustomTable = (
    {
        setActiveDelete,
        setSearchParams,
        isMyPack,
        setActiveUpdate,
    }: CustomTablePropsType) => {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const cardPacks = useAppSelector(selectCardPacks);
    const sortPacks = useAppSelector(selectSortPacks);

    const CorrectData = (data: string): string => {
        return data.slice(0, 10).split('-').reverse().join('.');
    }

    const showCardsHandler = (cardsPackId: string, packName: string) => {
        dispatch(getCardsList({cardsPack_id: cardsPackId}));
        navigate(`/cardspack/${cardsPackId}/${packName}`);
    }

    const sortHandler = (name: string) => {
        let number = sortPacks.slice(0, 1)
        if (number === '') {
            dispatch(updateSortPacks('1' + name))
        } else if (number === '1') {
            dispatch(updateSortPacks('0' + name))
        } else {
            dispatch(updateSortPacks('1' + name))
        }

    }

    const classChange = (name: string) => {
        if (('') === sortPacks) {
            return `${s.sort} ${s.sort2}`
        } else if (('0' + name) === sortPacks) {
            return `${s.sort} ${s.sort0}`
        } else if (('1' + name) === sortPacks) {
            return `${s.sort} ${s.sort1}`
        } else {
            return `${s.sort} ${s.sort2}`
        }
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classChange('name')} onClick={() => {
                                sortHandler('name')
                            }}>
                                <span>Name</span>
                            </TableCell>
                            <TableCell className={classChange('cardsCount')}
                                       onClick={() => {
                                           sortHandler('cardsCount')
                                       }}
                                       align="right">
                                <span>Cards</span>
                            </TableCell>
                            <TableCell className={classChange('updated')}
                                       onClick={() => {
                                           sortHandler('updated')
                                       }}
                                       align="right">
                                <span>Last Update</span>
                            </TableCell>
                            <TableCell className={classChange('user_name')}
                                       onClick={() => {
                                           sortHandler('user_name')
                                       }}
                                       align="right">
                                <span>Created by</span>
                            </TableCell>
                            <TableCell align="left">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cardPacks.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell style={{cursor: 'pointer'}} component="th" scope="row"
                                           onClick={() => showCardsHandler(row._id, row.name)}>
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.cardsCount}</TableCell>
                                <TableCell align="right">{CorrectData(row.updated)}</TableCell>
                                <TableCell align="right">{row.user_name}</TableCell>
                                <TableCell align="right">{
                                    <ButtonsForPacks
                                        isMyPack={isMyPack}
                                        setSearchParams={setSearchParams}
                                        setActiveDelete={setActiveDelete}
                                        setActiveUpdate={setActiveUpdate}
                                        packId={row._id}
                                        ownerId={row.user_id}
                                        packName={row.name}/>
                                }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}


