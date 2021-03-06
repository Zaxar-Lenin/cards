import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useAppDispatch, useAppSelector} from '../../../Hooks/hooks';
import {addCard, getCardsList} from '../../../store/reducers/s11_CardsListReducer';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import {Routers} from '../../c1-main/routers';
import cardTableStyles from './CardsTable.module.css'
import {ButtonsForCardsTable} from '../p4-ButtonsForCardsTable/ButtonsForCardsTable';
import {Search} from '../p2-Search/Search';
import {CardModal} from '../p5-CardModal/CardModal';
import regButtonStyle from '../../c2-pages/Registration/Registration.module.css';
import style from '../../c2-pages/Login/LoginForm.module.css';
import {useFormik} from 'formik';
import {selectCardsList, selectIsLoggedIn, selectQuestion, selectUserId} from '../../../store/selectors/Selectors';

type ErrorType = {
    question?: string;
    answer?: string;
}

export const CardsTable = () => {
    const dispatch = useAppDispatch();
    const params = useParams<{ packId: string, packName: string }>();
    const navigate = useNavigate();
    const [modalAddCardActive, setModalAddCardActive] = useState<boolean>(false);

    const cardsList = useAppSelector(selectCardsList);
    const question = useAppSelector(selectQuestion);
    const userId = useAppSelector(selectUserId);
    const isLoggedIn = useAppSelector(selectIsLoggedIn);


    const formik = useFormik({
        initialValues: {
            question: '',
            answer: ''
        },
        validate: (value) => {
            const errors: ErrorType = {};
            if (!value.question) {
                errors.question = 'Required question';
            }
            if (!value.answer) {
                errors.answer = 'Required answer';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(addCard({
                cardsPack_id: params.packId as string,
                question: values.question,
                answer: values.answer
            }));
            setModalAddCardActive(false);
            values.question = '';
            values.answer = '';
        }
    });

    useEffect(() => {
        dispatch(getCardsList({cardsPack_id: params.packId}));
    }, [question, cardsList.cards.length]);

    const addCardHandler = () => {
        setModalAddCardActive(true);
        //dispatch(addCard({cardsPack_id: params.packId as string}));
    }
    const cancelAddHandler = () => {
        setModalAddCardActive(false);
    }
    const backButtonHandler = () => {
        navigate(Routers.PACK_LIST);
    }

    const correctData = (data: string): string => {
        return data.slice(0, 10).split('-').reverse().join('.');
    }

    if (!isLoggedIn){
        return <Navigate to={Routers.LOGIN}/>
    }

    return (
        <div className={cardTableStyles.mainClass}>
            <h1><KeyboardBackspaceIcon onClick={backButtonHandler}/> {params.packName}</h1>
            <div className={cardTableStyles.searchCards}>
                <Search table='cards'/>
                {userId === cardsList.packUserId &&
                <span><Button variant="outlined"
                              size="small"
                              sx={{
                                  gridArea: 'delete',
                                  backgroundColor: '#21268F',
                                  color: 'white',
                                  ":hover": {color: '#1976D2'},
                                  borderRadius: '25px',
                                  boxShadow: '5'
                              }}
                              onClick={addCardHandler}
                >Add new card</Button>
                </span>}
            </div>
            <TableContainer component={Paper}>
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
                                                                 packId={card.cardsPack_id}
                                                                 packName={params.packName as string}/></TableCell>}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <CardModal active={modalAddCardActive} setActive={setModalAddCardActive}>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <div className={cardTableStyles.textFields}>
                            <TextField
                                id="question"
                                label="Question"
                                multiline
                                variant="standard"
                                value={formik.values.question}
                                onChange={formik.handleChange}
                                error={formik.touched.question && Boolean(formik.errors.question)}
                                helperText={formik.touched.question && formik.errors.question}
                                onBlur={formik.handleBlur}
                            />
                            <TextField
                                id="answer"
                                label="Answer"
                                multiline
                                variant="standard"
                                value={formik.values.answer}
                                onChange={formik.handleChange}
                                error={formik.touched.answer && Boolean(formik.errors.answer)}
                                helperText={formik.touched.answer && formik.errors.answer}
                            />
                        </div>
                        <div className={regButtonStyle.buttonRegistrationGroup}>
                            <div className={`${style.loginButton} ${regButtonStyle.cancelButton}`}>
                                <Button variant="text"
                                        sx={{
                                            borderRadius: '15px',
                                            width: '100px',
                                            height: '25px',
                                            textTransform: 'initial',
                                            fontSize: '16px',
                                            backgroundColor: '#D7D8EF',
                                            fontWeight: '550'
                                        }}
                                        size="small"
                                        type="submit"
                                        onClick={cancelAddHandler}
                                >
                                    Cancel</Button>
                            </div>
                            <div className={`${style.loginButton} ${regButtonStyle.registerButton}`}>
                                <Button variant="contained"
                                        sx={{
                                            borderRadius: '15px',
                                            width: '140px',
                                            height: '25px',
                                            textTransform: 'initial',
                                            fontSize: '16px'
                                        }}
                                        size="small"
                                        type="submit"
                                >
                                    Save
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </CardModal>

        </div>
    )
}