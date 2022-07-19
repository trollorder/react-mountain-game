function StartGame(props) {
    return (
      <div className="background-image spacer">
        <div className="game-screen container center">
          <p>Press 'Start' to start the game!</p>
          <button className="button2" onClick={() => props.startGame(!props.gameStarted)}>Start</button>
        </div>
      </div>
    );
  }
  
  export default StartGame;