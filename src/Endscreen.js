import React, { Component } from 'react'; 
import { motion } from 'framer-motion';
import "./end-screen.css";


function EndStat({label, value}) {
  return (
    <div className='end-screen__stat'>
      <div className='end-screen__stat-label'>{label}</div>
      <div className='end-screen__stat-value'>{value}</div>
    </div>
  )
}

//  renders the final game stats.

/**
 * @param {object} props 
 * @param {number} props.score
 * @param {number} props.bestScore 
 * @param {() => void} props.onRetryClick
 */
function EndScreen({score, bestScore, onRetryClick}) {

    return (
      <div className='end-screen'>
        <h1>Quiz Complete!</h1>
        <motion.div className='end-screen__trophy'
        initial={{rotate: 0, originX: 0.5, originY: 0.5}}
        animate={{rotate: 360}}
        transition={{type: "spring", damping: 10, stiffness: 100}}>🏆</motion.div>
        <EndStat label="Score" value={score}/>
        <EndStat label="Best Score" value={bestScore}/>
        <button className='end-screen__button' onClick={onRetryClick}>Retry?</button>
      </div>
    )
  }


export default EndScreen
