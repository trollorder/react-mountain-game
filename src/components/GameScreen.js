import MountainCard from "./MountainCard";
import GameOver from "./GameOver";
import { mountainBank } from "./mountains/mountainBank";
import React, { useState , useEffect} from 'react';
import "../App.css";
// Sound Stuff
// Link: https://github.com/joshwcomeau/use-sound
// Link2: https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/
import useSound from 'use-sound';
import click1 from './sounds/click1.mp3';
import click2 from './sounds/click2.mp3';

function GameScreen() {

  const [cardCount, setCardCount] = useState(0)
  const [height, setHeight] = useState(0)
  const [score, setScore] = useState(0)
  const [play1] = useSound(click1)
  const [play2] = useSound(click2)
  const [evaluate, setEvaluate] =  useState(null)
  const maximumCount = 10;
  
  let props = mountainBank[cardCount]
  console.log(mountainBank)

  function checkIfGameOver() {
    if (cardCount === maximumCount) {
      return true
    }
    return false
  }

  function checkCorrect(higher) {
    let realHeight = props.height
    let fakeHeight = props.height + height
    if (higher) {  //guessed higher
      if (realHeight > fakeHeight) {
        // Correct guess
        setScore(score + 1)
        play1(); 
        setEvaluate(true)
        if (cardCount < maximumCount) {
          setCardCount(cardCount + 1)
        }
        setModifiedHeight()   
        return 
      }
    } else {       // guessed lower
      if (realHeight < fakeHeight) {
        // Correct guess
        setScore(score + 1)
        play1(); 
        setEvaluate(true)
        if (cardCount < maximumCount) {
          setCardCount(cardCount + 1)
        }
        setModifiedHeight()   
        return
      }
    }
    //Handle wrong guesses
    play2(); 
    setEvaluate(false)
    if (cardCount < maximumCount) {
      setCardCount(cardCount + 1)
    }
    setModifiedHeight()   
    return
  }

  function getModifiedHeight() {
    if (height !== undefined) {
      return (props.height + height)
    }
  }

  function setModifiedHeight() {
    const rand = (Math.random() < 0.5)
    if (rand) {
      setHeight(Math.floor(Math.random() * 100) + 100);
    } else {
      setHeight(-(Math.floor(Math.random() * 100) + 100));
    }
  }

  function getEvaluate() {
    if (evaluate == null) {
      return ""
    } else {
      if (evaluate === true) {
        return "Correct!"
      } else {
        return "Wrong!"
      }
  }
}
  

  useEffect(() => {
    setModifiedHeight()
    mountainBank.sort(() => Math.random() - 0.5)
    mountainBank.length = 10;
  }, []);

    return (
    <div className='background-image spacer'>
      <div className="game-screen">
        <div className='container center'>
          {checkIfGameOver() ? (
            <h1>Game Over</h1>
          ) : (
            <MountainCard {...props}/>
        )}
        </div>
        <div className='container center'>
        {checkIfGameOver() ? (
          <GameOver score={score}/>
          ) : (
          <div className='container center' >
            <p className={evaluate ? "correct-ans" : "wrong-ans"}>{getEvaluate()}</p>
            <p className="question-text">Compared to a height of <strong>{getModifiedHeight()}</strong> metres, is {props.mountain}</p>
            <button className="button1" onClick={() => {checkCorrect(true); } }>Higher</button>
            <button className="button2" onClick={() => {checkCorrect(false);} }>Lower</button>
            <p>Turn: {cardCount + 1}/{maximumCount}</p>
            <p className="score-box">Score: {score}</p>
          </div>
        )}
        </div>
      </div>
    </div>
    );
  }
  
  export default GameScreen;