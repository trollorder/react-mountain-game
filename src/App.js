import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MountainCard from './components/MountainCard';
import GameScreen from './components/GameScreen';
import StartGame from './components/StartGame';
import { useState } from 'react';


function App() {
  const [gameStarted, startGame] = useState(false);

  return (
    <div>
      <Header/>
        {gameStarted ? <GameScreen/> : <StartGame startGame={startGame} gameStarted={gameStarted} />}
      <Footer/>
    </div>
    
  );
}

export default App;
