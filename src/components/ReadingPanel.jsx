import './ReadingPanel.css';

export default function ReadingPanel({ card, onClose }) {
  if (!card) return null;

  return (
    <div className="reading-panel glass-panel">
      <button className="close-btn" onClick={onClose}>&times;</button>
      
      <div className="reading-header">
        <h2 className="card-title">{card.name}</h2>
        <div className="card-position-badge">{card.position}</div>
      </div>
      
      <div className="reading-content">
        <div className="meaning-section">
          <h3>Upright Meaning</h3>
          <p>{card.meaning_up}</p>
        </div>
        
        <div className="meaning-section desc-section">
          <h3>Description</h3>
          <p>{card.desc}</p>
        </div>
      </div>
    </div>
  );
}
