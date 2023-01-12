import React from 'react'
import {questions} from "../data"

function Game({step, question, chooseVariant}) {
    const percentage = Math.round((step / questions.length) * 100);
    return (
      <>
        <div className="progress">
          <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
            { 
              question.variants.map((text, index) => (
              <li onClick={()=> chooseVariant(index)} key={text}>{text}</li>
              ))
            }
            
        </ul>
      </>
    );
  }

  export default Game;
