import React, {useEffect, useState} from 'react';
import s from './Learn.module.css';
import {useAppDispatch, useAppSelector} from '../../../Hooks/hooks';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import {getCardsList} from '../../../store/reducers/s11_CardsListReducer';
import {CardType} from '../../../API/cardsAPI';
import {selectCardsList, selectIsLoading, selectIsLoggedIn} from '../../../store/selectors/Selectors';
import {LearnButtons} from './learnButtons/LearnButtons';
import {Routers} from '../../c1-main/routers';
import {AssessmentLoader} from '../../../Assets/Preloader/assessmentLoader/AssessmentLoader';

const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) ** 2, 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) ** 2;
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});

    return cards[res.id + 1];
}


export const Learn = () => {

    const navigate = useNavigate()
    const {packId, packName} = useParams()

    const dispatch = useAppDispatch()

    const cardsList = useAppSelector(selectCardsList)
    const isLoggedIn = useAppSelector(selectIsLoggedIn)
    const isLoading = useAppSelector(selectIsLoading)

    const [first, setFirst] = useState(true)
    const [card, setCard] = useState<Partial<CardType>>({})

    useEffect(() => {
        if (first) {
            dispatch(getCardsList({cardsPack_id: packId}))
            setFirst(false)
        }
        if (cardsList.cards.length > 0) {
            setCard(getCard(cardsList.cards))
        }
        return () => {
        }

    }, [cardsList.cards])

    const onClickCancel = () => {
        navigate('/packlist')
    }

    const onClickSubmit = () => {
        navigate(`/assessment/${card._id}/${packName}/${card.question}/${card.answer}`)
    }

    if (!isLoggedIn) {
        return <Navigate to={Routers.LOGIN}/>
    }

    return (
        <>
        <div className={s.container}>
            <div className={s.header}>
                Learn {packName}
            </div>
            <div className={s.contentBlock}>
                <div className={s.questionBlock}>
                    <span>Question:</span> {!isLoading && card.question}
                </div>
                <div className={s.buttons}>
                    <LearnButtons onClickCancel={onClickCancel}
                                  onClickSubmit={onClickSubmit}>
                        Show answer
                    </LearnButtons>
                </div>
            </div>
        </div>
            {
                isLoading
                &&
                <div style={{zIndex: '1000', position: 'relative', bottom: '147px', left: '260px'}}>
                    <AssessmentLoader/>
                </div>
            }
        </>
    );
};



