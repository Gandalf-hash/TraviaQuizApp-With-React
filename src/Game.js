import Stats from "./Stats";
import TriviaItem from "./TriviaItem.js";
import EndScreen from "./Endscreen.js";
import { useState } from "react";
import "./Game.css";
import { AnimatePresence, motion } from "framer-motion";

function Game({ triviaItems }) {
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
    let pageKey;
    
    if(isGameOver) 
    {
        pageKey = "EndScreen";
        pageContent = <EndScreen score={score} bestScore={0} onRetryClick={onRestartGame}/>;
    } else {
        pageKey = triviaIndex;
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
        <AnimatePresence mode='wait'>
        <motion.div
            key={pageKey}
            initial={{opacity: 0, x: 75, transition: {ease: "easeOut"} }}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -75, transition: {ease: "easeIn"} }}
            transition={{duration: 0.5}}>{pageContent}</motion.div>
        </AnimatePresence>
        </>
        //Added animation using framer motion.
    )
}
export default Game;