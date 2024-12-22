import { useRef } from "react";

export default function Answers({ answers, answerState, selectedAnswer, onSelect }) {

    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
    return (
        <ul id='answers'>
            {shuffledAnswers.current.map(answer => {
                let cssClass = '';
                const isSelectedAnswer = answer == selectedAnswer;

                if (answerState == "answered" && isSelectedAnswer) {
                    cssClass = "selected";
                }
                if ((answerState == "correct" || answerState == "wrong") && isSelectedAnswer) {
                    cssClass = answerState
                }
                return (
                    <li key={answer} className='answer'>
                        <button
                            className={cssClass}
                            onClick={() => onSelect(answer)}
                            disabled={selectedAnswer!==""}
                        >
                            {answer}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}