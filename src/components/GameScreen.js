import MountainCard from "./MountainCard";
import { mountainBank } from "./mountains/mountainBank";
import React, { useState , useEffect} from 'react';
import "../App.css";

function GameScreen() {

  const [cardCount, setCardCount] = useState(0)
  const [height, setHeight] = useState(0)
  const [score, setScore] = useState(0)
  const maximumCount = 4;
  
  let props = mountainBank[cardCount]

  function checkIfGameOver() {
    if (cardCount == maximumCount) {
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
        alert("correct!")
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
        alert("correct!")
        if (cardCount < maximumCount) {
          setCardCount(cardCount + 1)
        }
        setModifiedHeight()   
        return
      }
    }
    //Handle wrong guesses
    alert("wrong answer!")
    if (cardCount < maximumCount) {
      setCardCount(cardCount + 1)
    }
    setModifiedHeight()   
    return
  }

  function getModifiedHeight() {
    if (height != undefined) {
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
  useEffect(() => {
    setModifiedHeight()   
  }, []);

    return (
      <div className="game-screen">
        {/* {console.log(props)} */}
        <div className='container center'>
          {checkIfGameOver() ? (
            <h1>Game Over</h1>
          ) : (
            <MountainCard {...props}/>
        )}
        </div>
        <div className='container center'>
        {checkIfGameOver() ? (
          <h1>Game Over</h1>
          ) : (
          <div className='container center'>
            <p>Compared to: {getModifiedHeight()}</p>
            <p>is {props.mountain}</p>
            <button className="button1" onClick={() => checkCorrect(true)}>Higher</button>
            <button className="button2" onClick={() => checkCorrect(false)}>Lower</button>
            <p>Turn: {cardCount + 1}/4</p>
            <p>Score: {score}</p>
          </div>
        )}
        </div>
      </div>
    );
  }
  
  export default GameScreen;