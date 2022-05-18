import React from 'react';
import s from './Assessment.module.css';
import {LearnButtons} from '../learnButtons/LearnButtons';

const grades = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer']

export const Assessment = () => {
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
                        <div>
                            {
                                grades.map(g => (
                                    <div className={s.checkBoxes} key={g}>
                                        <input type="checkbox"/>{g}
                                    </div>))
                            }
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
