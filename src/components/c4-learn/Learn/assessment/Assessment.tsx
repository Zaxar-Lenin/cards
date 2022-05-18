import React, {useState} from 'react';
import s from './Assessment.module.css';
import {LearnButtons} from '../learnButtons/LearnButtons';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

//const grades = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer']

export const Assessment = () => {

    // const [grades, setGrades] = useState([
    //     {id: 1, name: 'Did not know', isCheck: false},
    //     {id: 2, name: 'Forgot', isCheck: false},
    //     {id: 3, name: 'A lot of thought', isCheck: false},
    //     {id: 4, name: 'Confused', isCheck: false},
    //     {id: 5, name: 'Knew the answer', isCheck: false},
    // ])
    const [value, setValue] = useState('')
    const [grade, setGrade] = useState<number>()


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };


    return (
        <>
            <div className={s.container}>
                <div className={s.header}>
                    Learn 'some PackName'
                </div>
                <div className={s.contentBlock}>
                    <div className={s.questionBlock}>
                        <span>Question:</span> some question
                        <br/>
                        <span>Answer:</span> some Answer
                    </div>
                    <div className={s.gradesBlock}>
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
                        <LearnButtons onClickCancel={() => {
                        }}
                                      onClickShowAnswer={() => {
                                      }}/>
                    </div>
                </div>
            </div>
        </>
    );
};
