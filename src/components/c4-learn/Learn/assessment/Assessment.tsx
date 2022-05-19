import React, {useState} from 'react';
import s from './Assessment.module.css';
import {LearnButtons} from '../learnButtons/LearnButtons';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../../Hooks/hooks';
import {setCardGrade} from '../../../../store/reducers/s12_AssessmentReducer';
import {selectAssessmentError, selectCardsPackId} from '../../../../store/selectors/Selectors';


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
    console.log(cardsPackId)

    const [value, setValue] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const onCancelHandler = () => {
        navigate('/packlist')
    }

    const onNextHandler =  async () => {
        const res = await dispatch(setCardGrade({grade: +value, card_id: cardId as string}))
        if(res.type === 'assessment/setGrade/fulfilled'){
            navigate(`/learn/${cardsPackId}/${packName}`)
        }
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
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="5" control={<Radio size="small"/>}
                                                      label="Knew the answer"/>
                                    <FormControlLabel value="4" control={<Radio size="small"/>} label="Confused"/>
                                    <FormControlLabel value="3" control={<Radio size="small"/>}
                                                      label="A lot of thought"/>
                                    <FormControlLabel value="2" control={<Radio size="small"/>} label="Forgot"/>
                                    <FormControlLabel value="1" control={<Radio size="small"/>} label="Did not know"/>
                                </RadioGroup>
                            </FormControl>
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
