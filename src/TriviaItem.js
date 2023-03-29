import { useState } from "react";
import shuffle from "./shuffle";
import "./trivia-item.css";

/**
 * @param {object} props 
 * @param {string} props.correctAnswer 
 * @param {string[]} props.incorrectAnswer 
 * @param {string} props.question 
 * @param {() => void} props.onNextClick 
 * @param {(boolean) => void} props.onAnswerSelected
 */

//  Renders an Individual trivia question and waits for a user's answer.
function TriviaItem({ correctAnswer, incorrectAnswer, question, onNextClick, onAnswerSelected }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const hasPickedAnswer = selectedAnswer !== null;
    
    const allAnswers = [correctAnswer, ...incorrectAnswer];
    const [shuffledAnswers] = useState(() => shuffle(allAnswers));

    let nextButtonClassName = "trivia-item__button trivia-item__next-button"
    if (!hasPickedAnswer) nextButtonClassName += " trivia-item__button--disabled";

    const onAnswerCLicked = (event) => {
        const playerAnswer = event.target.innerHTML;
        setSelectedAnswer(playerAnswer);

        const wasPlayerCorrect = playerAnswer === correctAnswer;
        onAnswerSelected(wasPlayerCorrect);
        
    }

    return (
       <div>
        <p className="trivia-item__question">{question}</p>
        <ul className="trivia-item__answers">
            {shuffledAnswers.map((answer, i) => {
                let classNames = "trivia-item__button";

                if(hasPickedAnswer){
                    
                    const isThisCorrect = answer === correctAnswer;
                    const pickedThisAnswer = answer === selectedAnswer;
                    
                    if (pickedThisAnswer && isThisCorrect) 
                        classNames += " trivia-item__button--correct";
                    else if (pickedThisAnswer && !isThisCorrect)
                        classNames += " trivia-item__button--incorrect";
                    else 
                        classNames += " trivia-item__button--disabled ";
                    
                }

                return(
            <li key={answer}>
                <button className={classNames} onClick={onAnswerCLicked} disabled={hasPickedAnswer}>{answer}</button>
            </li>
                );
            })}
        </ul>
        <button className={nextButtonClassName} onClick={onNextClick} disabled={!hasPickedAnswer}>Next⏭</button>
       </div>
    );
}
export default TriviaItem;