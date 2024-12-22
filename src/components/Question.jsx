import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from "../questions"




export default function Question({ index, onSelectAnswer, onSkipedAnswer }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        isCorrect: null
    })

    let timer = 12000;

    if (answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        });
        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: answer === QUESTIONS[index].answers[0]
            })
            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    }

    let answerState = "";

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? "correct" : "wrong";
    } else if (answer.selectedAnswer) {
        answerState = "answered"
    }


    return (
        <>
            <QuestionTimer
                key={timer}
                mode={answerState}
                timeout={timer}
                onTimeout={answer.selectedAnswer == "" ? onSkipedAnswer : null}
            />
            <h2>{QUESTIONS[index].text}</h2>
            <Answers
                answers={QUESTIONS[index].answers}
                answerState={answerState}
                selectedAnswer={answer.selectedAnswer}
                onSelect={handleSelectAnswer}
            />
        </>
    )
}
