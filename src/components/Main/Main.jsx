import { useContext } from "react";

import editProfileButton from "../../images/editButton.svg";
import avatar from "../../images/avatarDefault.jpg";
import Popup from "./components/Popup/Popup";
import Card from "./components/Card/Card";
import ImagePopup from "./components/ImagePopup/ImagePopup";
import { popups } from "./components/constants.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

  return (
    <main className="content">
      <div className="profile">
        <div className="profile__picture-container">
          <img
            src={currentUser?.avatar || avatar}
            alt="Foto de Perfil"
            className="profile__picture"
          />
          <div
            className="profile__overlay"
            onClick={() => onOpenPopup(popups.editAvatarPopup)}
          ></div>
        </div>
        <div className="profile__info-wrapper">
          <div className="profile__info">
            <h1 className="profile__name">{currentUser?.name}</h1>
            <img
              src={editProfileButton}
              alt="Editar Perfil"
              className="profile__edit-button"
              onClick={() => onOpenPopup(popups.editProfilePopup)}
            />
          </div>
          <p className="profile__description">{currentUser?.about}</p>
        </div>
        <button
          aria-label="Add card"
          className="profile__add-place-button"
          type="button"
          onClick={() => onOpenPopup(popups.newCardPopup)}
        ></button>
      </div>
      {popup && (
        <Popup
          onClose={onClosePopup}
          title={popup.title}
          className="popup__opened"
        >
          {popup.children}
        </Popup>
      )}
      <div className="card-grid">
        {Array.isArray(cards) &&
          cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              isLiked={card.isLiked}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
              onImageClick={() =>
                onOpenPopup({
                  title: "",
                  children: <ImagePopup card={card} onClose={onClosePopup} />,
                })
              }
            />
          ))}
      </div>
    </main>
  );
}
