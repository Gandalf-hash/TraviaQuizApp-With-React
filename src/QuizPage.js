import React, { Component, useEffect, useState } from 'react'
import Game from './Game';
import LoadingSpinner from './common/loading-spinner';
import ErrorMessage from './common/error-message';
import useGetTriviaData from './hooks/use-get-trivia-data';


function QuizPage() {
 const [isLoading, errorMessage, data] = useGetTriviaData(5, "easy");

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
