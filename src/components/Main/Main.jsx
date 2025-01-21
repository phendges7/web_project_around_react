import avatar from "../../images/avatarDefault.jpg";
import editProfileButton from "../../images/editButton.svg";
import Popup from "./components/Popup/Popup";
import Card from "./components/Card/Card";
import ImagePopup from "./components/ImagePopup/ImagePopup";
import { useState } from "react";
import { popups, cards } from "./components/constants.jsx";

export default function Main() {
  const [popup, setPopup] = useState(null);

  //manipuladores popup
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <div className="profile">
        <div className="profile__picture-container">
          <img src={avatar} alt="Foto de Perfil" className="profile__picture" />
          <div
            className="profile__overlay"
            onClick={() => handleOpenPopup(popups.editAvatarPopup)}
          ></div>
        </div>
        <div className="profile__info-wrapper">
          <div className="profile__info">
            <h1 className="profile__name">Pedro Henrique</h1>
            <img
              src={editProfileButton}
              alt="Editar Perfil"
              className="profile__edit-button"
              onClick={() => handleOpenPopup(popups.editProfilePopup)}
            />
          </div>
          <p className="profile__description">Explorador</p>
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
