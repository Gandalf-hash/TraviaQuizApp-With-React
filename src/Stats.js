import React, { Component } from 'react'
import "./stats.css";

function Stat({label, value}) {
  return (
    <div>
        <li className='stats__stat-container'>
          <div className='stats__stat-label'>{label}:</div>
          <div className='stats__stat-value'>{value}</div>
        </li>
    </div>
  );
}


function Stats({score, questionNumber, totalQuestion}) {
  
    return (
      <>
      <ul className='stats'>
        <Stat label="Score" value={score}/>
        <Stat label="Question Number" value={`${questionNumber} / ${totalQuestion}`}/>
      </ul>
        
      </>
    )
  
}

export default Stats;
