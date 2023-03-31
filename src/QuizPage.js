import React, { Component, useEffect, useState } from 'react'
import Game from './Game';
import TriviaItem from './TriviaItem';
import he from 'he';
import LoadingSpinner from './common/loading-spinner';
import ErrorMessage from './common/error-message';


function QuizPage() {
  const [quizFetch, setQuizFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });

  const {isLoading, errorMessage, data} = quizFetch;
//  Empty arra for dependecies means that the page only load on mount.
  useEffect(() => {
      async function getQuiz() {
        try{
        const url = "https://opentdb.com/api.php?amount=5&type=multiple";
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Something went wrong, server responded with ${response.status}.`);
        }

        const json = await response.json();
        const { response_code, results } = json;

        
    if (response_code === 1) {
      throw new Error("Bad API request - no results!");
    } else if (response_code === 2) {
      throw new Error("Bad API request - invalid parameter!");
    }

    const decodeResults = results.map((item) => {
      return {
          ...item,
          question: he.decode(item.question),
          correct_answer: he.decode(item.correct_answer),
          incorrect_answers: item.incorrect_answers.map(incorrect => he.decode(incorrect))
      };
  });




//  Successfully passed all the error checks
    setQuizFetch({
      isLoading: false,
    errorMessage: "",
    data: results,
    })
  } catch(err) {
    // Display a generic MEssage
    setQuizFetch({
      isLoading: false,
    errorMessage: "Something went wrong!",
    data: null,
    })
    console.log(err);
  }
  }
    getQuiz();
  }, [])

  let contents;
  if (isLoading)
    contents = <LoadingSpinner/>;
  else if (errorMessage !== "")
    contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
  else
    contents = <Game triviaItems={data}/>;
 
    return (
      <main>
        {contents}
      </main>
    )
  
}

export default QuizPage;
