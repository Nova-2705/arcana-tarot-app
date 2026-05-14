import { useState } from 'react';
import './Deck.css';

export default function Deck({ gameState, setGameState, onDeal }) {
  const handleDeckClick = () => {
    if (gameState === 'home') {
      setGameState('shuffling');
      
      // Play a subtle shuffle sound if desired (omitted here for simplicity)
      
      // Wait for shuffle animation to finish (e.g., 2.5s)
      setTimeout(() => {
        onDeal();
      }, 2500);
    }
  };

  return (
    <div className={`deck-container ${gameState === 'shuffling' ? 'is-shuffling' : ''}`} onClick={handleDeckClick}>
      {/* Visual representation of 78 cards stacked */}
      <div className="deck-stack">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="deck-card" 
            style={{ 
              transform: `translateY(${-i * 2}px) rotate(${i * 0.5}deg)`,
              zIndex: i 
            }}
          ></div>
        ))}
      </div>
      
      {gameState === 'home' && (
        <div className="deck-cta">
          <button className="mystic-button">Begin Your Reading</button>
        </div>
      )}
    </div>
  );
}
