import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import {useAppDispatch, useAppSelector} from "../../../Hooks/hooks";
import {getCardsList, putCardsList} from "../../../store/reducers/s11_CardsListReducer";
import {SyntheticEvent, useEffect, useState} from "react";



export const CardsTable = () => {
    const dispatch = useAppDispatch();
    const cardsList = useAppSelector(store => store.cardsList.cardList);
    const userId = useAppSelector(store => store.profile.profile._id);

    useEffect(() => {
        dispatch(getCardsList());
    }, []);

    const CorrectData = (data: string): string => {
        return data.slice(0, 10).split('-').reverse().join('.');
    }



    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Question</TableCell>
                        <TableCell align="left">Answer</TableCell>
                        <TableCell align="left">Last Updated</TableCell>
                        <TableCell align="left">Grade</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cardsList.cards.map((card) => (
                        <TableRow
                            key={card._id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {card.question}
                            </TableCell>
                            <TableCell align="left">{card.answer}</TableCell>
                            <TableCell align="left">{CorrectData(card.updated)}</TableCell>
                            <TableCell align="left">
                                {userId !== cardsList.packUserId ?
                                <Rating name="read-only" value={card.grade} readOnly /> :
                                <Rating
                                name="simple-controlled"
                                value={card.grade}
                                onChange={(event, newValue) => {
                                    dispatch(putCardsList({_id: card._id, grade: newValue as number}));
                                }}
                            />}
                                </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}