import { useState } from 'react';
import './App.css';
import Table from './components/Table';
import CursorTrail from './components/CursorTrail';
import StarBackground from './components/StarBackground';

function App() {
  const [gameState, setGameState] = useState('home'); // 'home', 'shuffling', 'reading', 'revealed'

  const handleReset = () => {
    setGameState('home');
  };

  return (
    <>
      <StarBackground />
      <CursorTrail />
      <div className="mystic-frame">
        <div className="frame-border"></div>
        <div className="corner top-left">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12,2 A 10,10 0 0,1 12,22 A 6,10 0 0,0 12,2 Z" /></svg>
        </div>
        <div className="corner top-right">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
        </div>
        <div className="corner bottom-left">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12,2 A 10,10 0 0,1 12,22 A 5,10 0 0,1 12,2 Z" /></svg>
        </div>
        <div className="corner bottom-right">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12,2 A 10,10 0 0,0 12,22 A 6,10 0 0,1 12,2 Z" /></svg>
        </div>
      </div>
      <div className="cosmic-nebula"></div>
      
      <header className="mystic-header">
        <h1 className="runic-title">ARCANA</h1>
        <p className="subtitle">Discover the whispers of the cosmos</p>
      </header>

      <main className="mystic-main">
        <Table gameState={gameState} setGameState={setGameState} />
      </main>

      {gameState !== 'home' && gameState !== 'shuffling' && (
        <div className="reset-container">
          <button className="mystic-button" onClick={handleReset}>
            New Reading
          </button>
        </div>
      )}
    </>
  );
}

export default App;
