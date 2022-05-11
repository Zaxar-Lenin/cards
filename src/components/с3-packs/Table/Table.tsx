import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useAppSelector} from "../../../Hooks/hooks";



export const CustomTable = () => {

    const cardPacks = useAppSelector(state => state.packList.cardPacks)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell onClick = {()=>{alert("Hi")}}>Dessert (100g serving)</TableCell>
                        <TableCell align="right">*</TableCell>
                        <TableCell align="right">+</TableCell>
                        <TableCell align="right">=</TableCell>
                        <TableCell align="right">-</TableCell>
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
                            <TableCell align="right">{row.updated}</TableCell>
                            <TableCell align="right">{row.user_name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}