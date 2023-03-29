import Stats from "./Stats";
import TriviaItem from "./TriviaItem";
import EndScreen from "./Endscreen";
import { useState } from "react";
import triviaItems from "./trivia-item";
import "./Game.css";

function Game() {
    const [gameState, setGameState] = useState({
        score: 0,
        triviaIndex: 0,
        isGameOver: false
    });
    const {score, triviaIndex, isGameOver} = gameState;
    const questionNumber = triviaIndex + 1;
    const numQuestions = triviaItems.length;

    
    //Initial data on game restart.
    const onRestartGame = () => {
        setGameState({
            score: 0,
            triviaIndex: 0,
            isGameOver: false
        });
    }
// Making the "Next" button to finally work. 
// Also using Spread Operator to copy the gameState and override the triviaIndex.
    const onLoadNextQuestion = () => {
        if (triviaIndex >= triviaItems.length - 1) 
            setGameState({ ...gameState, isGameOver: true});
        else 
            setGameState({...gameState, triviaIndex: triviaIndex + 1})
    }

    const onAnswerSelected = (wasPlayerCorrect) => {
        if (wasPlayerCorrect) {
            setGameState({
                ...gameState,
                score: score + 1
            });
        }
    }
    
    let pageContent;
    
    if(isGameOver) 
    {
    pageContent = <EndScreen score={score} bestScore={0} onRetryClick={onRestartGame}/>;
    } else
    {
    const triviaQuestion = triviaItems[triviaIndex];
    const {correct_answer, incorrect_answers, question} = triviaQuestion;
    pageContent = (<TriviaItem key={triviaIndex} question={question}
    correctAnswer={correct_answer} 
    incorrectAnswer={incorrect_answers}
    onNextClick={onLoadNextQuestion} 
    onAnswerSelected={onAnswerSelected}/>);
    }

    return(
        <>
        <p className="center">(●'◡'●)</p>
        <Stats score={score} questionNumber={questionNumber} totalQuestion={numQuestions}/>
        {pageContent}
        </>
    )
}
export default Game;