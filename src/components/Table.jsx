import { useState, useEffect } from 'react';
import Deck from './Deck';
import Card from './Card';
import ReadingPanel from './ReadingPanel';
import tarotData from '../data/tarot.json';
import './Table.css';

const SPREAD_POSITIONS = ['PAST', 'PRESENT', 'FUTURE'];

export default function Table({ gameState, setGameState }) {
  const [dealtCards, setDealtCards] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (gameState === 'home') {
      setDealtCards([]);
      setActiveCard(null);
    }
  }, [gameState]);

  const handleDeal = () => {
    // Select 3 random unique cards
    const deck = [...tarotData.cards];
    const drawn = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      const card = deck.splice(randomIndex, 1)[0];
      drawn.push({
        ...card,
        position: SPREAD_POSITIONS[i],
        isFlipped: false
      });
    }
    setDealtCards(drawn);
    setGameState('reading');
  };

  const handleCardClick = (index) => {
    if (gameState === 'home' || gameState === 'shuffling') return;
    
    // Flip the clicked card
    const newCards = [...dealtCards];
    newCards[index].isFlipped = true;
    setDealtCards(newCards);
    
    setActiveCard(newCards[index]);
    setGameState('revealed');
  };

  return (
    <div className="mystic-table">
      {/* Table Mat Graphics */}
      <div className="table-mat">
        <div className="rune-circle"></div>
      </div>

      {(gameState === 'home' || gameState === 'shuffling') && (
        <Deck gameState={gameState} setGameState={setGameState} onDeal={handleDeal} />
      )}

      {(gameState === 'reading' || gameState === 'revealed') && (
        <div className="spread-container">
          <div className="cards-layout">
            {dealtCards.map((card, index) => (
              <div key={card.name_short} className="card-slot">
                <div className="slot-label">{card.position}</div>
                <Card 
                  card={card} 
                  isFlipped={card.isFlipped} 
                  onClick={() => handleCardClick(index)} 
                  isActive={activeCard?.name_short === card.name_short}
                />
              </div>
            ))}
          </div>

          {activeCard && (
            <ReadingPanel card={activeCard} onClose={() => setActiveCard(null)} />
          )}
        </div>
      )}
    </div>
  );
}
