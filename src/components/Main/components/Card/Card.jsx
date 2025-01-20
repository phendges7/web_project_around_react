export default function Card({ card, onImageClick }) {
  const { name, link } = card;
  const imageComponent = {
    title: name,
    children: <img src={link} alt={name} className="popup__image" />,
  };
  return (
    <div className="card">
      <img
        className="card__image"
        src={link}
        alt=""
        onClick={() => onImageClick(imageComponent)}
      />
      <button
        aria-label="DELETE"
        className="card__delete-button"
        type="button"
      />
      <h2 className="card__title">{name}</h2>
      <button aria-label="LIKE" className="card__like-button"></button>
    </div>
  );
}
