import React, {useEffect, useState} from 'react';
import s from './Assessment.module.css';
import {LearnButtons} from '../learnButtons/LearnButtons';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../../Hooks/hooks';
import {setCardGrade, setStatus} from '../../../../store/reducers/s12_AssessmentReducer';
import {
    selectAssessmentError,
    selectCardsPackId,
    selectIsLoggedIn,
    selectStatus
} from '../../../../store/selectors/Selectors';
import {Checkboxes} from '../checkboxes/Checkboxes.';
import {Routers} from '../../../c1-main/routers';


export const Assessment = () => {

    const navigate = useNavigate()
    const {
        cardId,
        packName,
        question,
        answer
    } = useParams()

    const dispatch = useAppDispatch()

    const cardsPackId = useAppSelector(selectCardsPackId)
    const errorMsg = useAppSelector(selectAssessmentError)
    const status = useAppSelector(selectStatus)
    const isLoggedIn = useAppSelector(selectIsLoggedIn)

    const [value, setValue] = useState('')

    useEffect(() => {
        if (status === 'success') {
            navigate(`/learn/${cardsPackId}/${packName}`)
        }
        return () => {
            dispatch(setStatus('idle'))
        }

    }, [status])

    const handleChange = (value: string) => {
        setValue(value);
    };

    const onCancelHandler = () => {
        navigate('/packlist')
    }

    const onNextHandler = () => {
        dispatch(setCardGrade({grade: +value, card_id: cardId as string}))
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
                        <span>Question:</span> {question}
                        <br/>
                        <span>Answer:</span> {answer}
                    </div>
                    <div className={s.gradesBlock}>
                        {errorMsg && <div style={{color: 'red'}}>{errorMsg}</div>}
                        <h5>Rate yourself:</h5>
                        <div className={s.checkBoxes}>
                            <Checkboxes value={value} handleChange={handleChange}/>
                        </div>
                    </div>
                    <div className={s.buttons}>
                        <LearnButtons onClickCancel={onCancelHandler}
                                      onClickSubmit={onNextHandler}>
                            Next
                        </LearnButtons>
                    </div>
                </div>
            </div>
        </>
    );
};
