import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useAppSelector} from "../../../Hooks/hooks";
import {ButtonsForPacks} from "../p1-ButtonsForPacks/ButtonsForPacks";



export const CustomTable = () => {

    const cardPacks = useAppSelector(state => state.packList.cardPacks)

    const CorrectData = (data:string): string => {
        return data.slice(0,10).split('-').reverse().join('.');
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell onClick = {()=>{alert("Hi")}}>Name</TableCell>
                        <TableCell align="right">Cards</TableCell>
                        <TableCell align="right">Last Update</TableCell>
                        <TableCell align="right">Created by</TableCell>
                        <TableCell align="left">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cardPacks.map((row) => (
                        <TableRow
                            key={row.more_id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.cardsCount}</TableCell>
                            <TableCell align="right">{CorrectData(row.updated)}</TableCell>
                            <TableCell align="right">{row.user_name}</TableCell>
                            <TableCell align="right">{<ButtonsForPacks/>}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}