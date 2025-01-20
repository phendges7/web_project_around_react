import avatar from "../../images/avatarDefault.jpg";
import Popup from "./components/Popup/Popup";
import Card from "./components/Card/Card";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";

import { useState } from "react";

export default function Main() {
  const [popup, setPopup] = useState(null);

  //instancia popups
  const newCardPopup = { title: "NOVO LOCAL", children: <NewCard /> };
  const editAvatarPopup = {
    title: "Alterar foto de perfil",
    children: <EditAvatar />,
  };
  const editProfilePopup = {
    title: "EDITAR PERFIL",
    children: <EditProfile />,
  };

  //mock cards
  const cards = [
    {
      isLiked: false,
      _id: "5d1f0611d321eb4bdcd707dd",
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:10:57.741Z",
    },
    {
      isLiked: false,
      _id: "5d1f064ed321eb4bdcd707de",
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:11:58.324Z",
    },
  ];

  console.log(cards);

  //manipuladores popup
  function handleOpenPopup(popup) {
    debugger;
    setPopup(popup);
  }

  function handleClosePopup(popup) {
    setPopup(null);
  }

  return (
    <main className="content">
      <div className="profile">
        <div className="profile__picture-container">
          <img src={avatar} alt="Foto de Perfil" className="profile__picture" />
          <div
            className="profile__overlay"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          ></div>
        </div>
        <div className="profile__info-wrapper">
          <div className="profile__info">
            <h1 className="profile__name">Pedro Henrique</h1>
            <img
              src="./images/editButton.svg"
              alt="Editar Perfil"
              className="profile__edit-button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
          </div>
          <p className="profile__description">Explorador</p>
        </div>
        <button
          aria-label="Add card"
          className="profile__add-place-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </div>
      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={popup.title}
          className="popup__opened" // Aqui estamos adicionando a classe popup__opened
        >
          {popup.children}
        </Popup>
      )}
      <ul className="card-grid">
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </ul>
    </main>
  );
}
