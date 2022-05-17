import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useAppDispatch, useAppSelector} from "../../../Hooks/hooks";
import {addCard, getCardsList} from "../../../store/reducers/s11_CardsListReducer";
import * as React from "react";
import {useEffect} from "react";
import {Navigate, useParams} from 'react-router-dom';
import {Routers} from '../../c1-main/routers';
import s from '../PackList.module.css';
import cardTableStyles from './CardsTable.module.css'
import loadingPic from '../../../Assets/img/animated-chicken-image-0103.gif';
import {ButtonsForCardsTable} from "../p4-ButtonsForCardsTable/ButtonsForCardsTable";
import {Search} from "../p2-Search/Search";


export const CardsTable = () => {
    const dispatch = useAppDispatch();
    const cardsList = useAppSelector(store => store.cardsList.cardList);
    const question = useAppSelector(store => store.cardsList.queryParams.cardQuestion);
    const packName = useAppSelector(store => store.packList.queryParams.packName)
    const userId = useAppSelector(store => store.profile.profile._id);
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
    const isLoading = useAppSelector(state => state.app.isLoading);
    const params = useParams<{ packId: string }>();

    useEffect(() => {
        dispatch(getCardsList({cardsPack_id: params.packId}));
    }, [question, cardsList.cards.length]);

    if (!isLoggedIn) {
        return <Navigate to={Routers.LOGIN}/>
    }

    const addCardHandler = () => {
        dispatch(addCard({cardsPack_id: params.packId as string}));
    }
    const correctData = (data: string): string => {
        return data.slice(0, 10).split('-').reverse().join('.');
    }

    return (
        <div className={cardTableStyles.mainClass}>
            <h1><KeyboardBackspaceIcon />Pack Name (change)</h1>
            <div>
                <Search table='cards'/>
                <span><Button variant="outlined"
                              size="small"
                              sx={{
                                  gridArea: 'delete',
                                  backgroundColor:'#21268F',
                                  color: 'white',
                                  ":hover": {color: '#1976D2'},
                                  borderRadius: '25px',
                                  boxShadow: '5'
                              }}
                              onClick={addCardHandler}
                >Add new card</Button>
                </span>
            </div>
            <TableContainer component={Paper}>
                {isLoading &&
                <div className={s.logoPic}><img style={{marginLeft: '300px'}} src={loadingPic} alt=""/></div>}
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead sx={{backgroundColor: '#ECECF9'}}>
                        <TableRow>
                            <TableCell>Question</TableCell>
                            <TableCell align="left">Answer</TableCell>
                            <TableCell align="left">Last Updated</TableCell>
                            <TableCell align="left">Grade</TableCell>
                            {userId === cardsList.packUserId && <TableCell align="left">Actions</TableCell>}
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
                                <TableCell align="left">{correctData(card.updated)}</TableCell>
                                <TableCell align="left"><Rating name="read-only" value={card.grade}
                                                                readOnly/></TableCell>
                                {userId === cardsList.packUserId &&
                                <TableCell><ButtonsForCardsTable cardId={card._id}
                                                                 packId={card.cardsPack_id}/></TableCell>}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}