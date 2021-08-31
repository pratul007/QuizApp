import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import { QuestionBank } from './component';



const API_URL = 'https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [isShow, setShow] = useState(false)

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results);

      });

  }, [])

  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1
    setCurrentIndex(currentIndex + 1);

    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
    //dfdsf
    if (newIndex >= 7) {
      setGameEnded(true);
    }
  };

  return gameEnded ? (<h1 className='font-bold'>Your score was..{score}</h1>) : (questions.length > 0 ? (
    <div className='container' >
      
      {!isShow && <div style={{ cursor: 'pointer' }} onClick={() => setShow(true)}>Question Set A</div>}
      {!isShow && <div style={{ cursor: 'pointer' }} onClick={() => setShow(true)}>Question Set B</div>}
      {!isShow && <div style={{ cursor: 'pointer' }} onClick={() => setShow(true)}>Question Set C</div>}
      {isShow && <QuestionBank data={questions[currentIndex]} handleAnswer={handleAnswer} />}
    </div>
  ) : (
    <h1 className='text-2xl font-bold'>Loading...</h1>
  ));
}

export default App;
