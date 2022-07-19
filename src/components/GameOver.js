function GameOver(props) {
    return (
      <div className="">
        <div className="container center">
          <p>Total Score: {props.score}</p>
          <p>Game Over! Press 'Restart' to play again!</p>
          <button className="button2" onClick={() => {window.location.reload()}}>Restart</button>
        </div>
      </div>
    );
  }
  
  export default GameOver;