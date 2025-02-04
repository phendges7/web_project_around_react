import { useState, useEffect, useContext } from "react";

import api from "../../utils/api.js";
import editProfileButton from "../../images/editButton.svg";
import Popup from "./components/Popup/Popup";
import Card from "./components/Card/Card";
import ImagePopup from "./components/ImagePopup/ImagePopup";
import { popups } from "./components/constants.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  //carregar dados dos cards
  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => setCards(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Erro ao buscar os cartões:", err));
  }, []);

  //carregar dados do usuário
  const currentUser = useContext(CurrentUserContext);

  //manipuladores popup
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  //manipulador de curtidas
  async function handleCardLike(card) {
    // Verificar mais uma vez se esse cartão já foi curtido
    const isLiked = card.isLiked;

    // Enviar uma solicitação para a API e obter os dados do cartão atualizados
    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  //manipulador deletar cards
  async function handleCardDelete(card) {
    await api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id)
        );
      })
      .catch((error) => console.error(error));
  }

  return (
    <main className="content">
      <div className="profile">
        <div className="profile__picture-container">
          <img
            src={currentUser?.avatar}
            alt="Foto de Perfil"
            className="profile__picture"
          />
          <div
            className="profile__overlay"
            onClick={() => handleOpenPopup(popups.editAvatarPopup)}
          ></div>
        </div>
        <div className="profile__info-wrapper">
          <div className="profile__info">
            <h1 className="profile__name">{currentUser?.name}</h1>
            <img
              src={editProfileButton}
              alt="Editar Perfil"
              className="profile__edit-button"
              onClick={() => handleOpenPopup(popups.editProfilePopup)}
            />
          </div>
          <p className="profile__description">{currentUser?.about}</p>
        </div>
        <button
          aria-label="Add card"
          className="profile__add-place-button"
          type="button"
          onClick={() => handleOpenPopup(popups.newCardPopup)}
        ></button>
      </div>
      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={popup.title}
          className="popup__opened" // Adicionando classe popup__opened
        >
          {popup.children}
        </Popup>
      )}
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            isLiked={card.isLiked}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onImageClick={() =>
              handleOpenPopup({
                title: "",
                children: <ImagePopup card={card} onClose={handleClosePopup} />,
              })
            }
          />
        ))}
      </div>
    </main>
  );
}
