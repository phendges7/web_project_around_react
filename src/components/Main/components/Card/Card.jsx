export default function Card(props) {
  const { name, link, isLiked } = props.card;
  return (
    <li className="card">
      <img className="card__image" src={link} alt="" />
      <button
        aria-label="DELETE"
        className="card__delete-button"
        type="button"
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button aria-label="LIKE" className="card__like-button"></button>
      </div>
    </li>
  );
}
