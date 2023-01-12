import React from 'react';
import './index.scss';
import { useState } from 'react';
import Result from './Components/Result.jsx';
import Game from './Components/Game.jsx';
import {questions} from "./data"

function App() {
  const [step, setStep]= useState(0)
  const question = questions[step] ;
  const [correct,setCorrect] = useState(0);
  const chooseVariant = (index) => {
   console.log(step, index);
   setStep(step + 1);
   if(index === question.correct) {
     setCorrect(correct +1);
   }
  };
  
  return (
    <div className="App">
      {
        step !== questions.length ? (<Game step={step} question={question} chooseVariant={chooseVariant}/>) : (<Result correct={correct}/>
      )}
    </div>
  );
}

export default App;
