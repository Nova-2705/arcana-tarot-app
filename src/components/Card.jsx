import './Card.css';

export default function Card({ card, isFlipped, onClick, isActive }) {
  // Construct the image URL based on the name_short from the tarot API
  // Sacred-Texts hosts the Rider-Waite-Smith images matching this short code.
  const imageUrl = `https://sacred-texts.com/tarot/pkt/img/${card.name_short}.jpg`;

  return (
    <div className={`tarot-card ${isFlipped ? 'flipped' : ''} ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="card-inner">
        {/* Card Back */}
        <div className="card-back">
          <div className="back-design"></div>
        </div>
        
        {/* Card Front */}
        <div className="card-front">
          <img src={imageUrl} alt={card.name} />
          {/* subtle gold border around the image */}
          <div className="card-frame"></div>
        </div>
      </div>
    </div>
  );
}
