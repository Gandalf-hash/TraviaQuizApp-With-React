import React, { Component, useState } from 'react'
import Game from './Game';
import TriviaItem from './TriviaItem';
import LoadingSpinner from './common/loading-spinner';
import ErrorMessage from './common/error-message';


function QuizPage() {
  const [quizFetch, setQuizFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });

  const {isLoading, errorMessage, data} = quizFetch;

  let contents;
  if (isLoading)
    contents = <LoadingSpinner/>;
  else if (errorMessage !== "")
    contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
  else
    contents = <Game/>;
 
    return (
      <main>
        {/* {contents} */}
      </main>
    )
  
}

export default QuizPage;
