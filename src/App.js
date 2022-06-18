import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MountainCard from './components/MountainCard';
import GameScreen from './components/GameScreen';


function App() {
  return (
    <div>
      <Header/>
        <GameScreen/>
      <Footer/>
    </div>
    
  );
}

export default App;
