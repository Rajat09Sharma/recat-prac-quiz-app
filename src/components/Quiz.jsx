import React, { act, useCallback, useState } from 'react'
import QUESTIONS from "../questions"
import Question from './Question';
import Summary from './Summary';


export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsCompleted = userAnswers.length === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevState) => {
            const updatedAnswers = [...prevState];
            updatedAnswers.push(selectedAnswer);
            return [...updatedAnswers];
        })
    }, [])

    const handleSkipedAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if (quizIsCompleted) {
        return <Summary userAnswers={userAnswers} />
    }

    return (
        <div id='quiz'>
            <div id="question">
                <Question
                    key={activeQuestionIndex}
                    index={activeQuestionIndex}
                    onSelectAnswer={handleSelectAnswer}
                    onSkipedAnswer={handleSkipedAnswer}
                />
            </div>
        </div>
    )
}
