export default function ImagePopup({ card, onClose }) {
  return (
    <div className="popup popup__opened">
      <div className="popup__image-content">
        <button
          aria-label="Close modal"
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <img className="popup__image" src={card.link} alt={card.name} />
        <h3 className="popup__image-title">{card.name}</h3>
      </div>
    </div>
  );
}
