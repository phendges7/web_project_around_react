import { useState, useEffect } from "react";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import api from "../utils/api";

import CurrentUserContext from "../contexts/CurrentUserContext";
import CardContext from "../contexts/CardContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  //------------- CARDS -------------//
  //carregar dados dos cards
  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => setCards(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Erro ao buscar os cartões:", err));
  }, []);

  //manipulador de curtidas
  async function handleCardLike(card) {
    // Verificar mais uma vez se esse cartão já foi curtido
    const isLiked = card.isLiked;

    // Obter os dados do cartão atualizados
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

  //manipulador de adicionar cards
  const handleAddPlaceSubmit = (newCard) => {
    api
      .addNewCard(newCard)
      .then((createdCard) => {
        setCards([createdCard, ...cards]);
        handleClosePopup(); // Fecha o popup depois de adicionar o card
      })
      .catch((error) => console.error(error));
  };

  //------------- POPUP -------------//
  //manipulador de abrir popup
  const handleOpenPopup = (popup) => {
    setPopup(popup);
  };

  //manipulador de fechar popup
  const handleClosePopup = () => {
    setPopup(null);
  };

  //------------- PROFILE -------------//
  //carregar dados do usuário
  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

  //manipulador de atualizar usuário
  const handleUpdateUser = (data) => {
    (async () => {
      await api
        .updateUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  //manipulador de atualizar avatar
  const handleUpdateAvatar = (data) => {
    (async () => {
      await api
        .updateAvatar(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  //------------- RENDER -------------//
  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <CardContext.Provider
        value={{
          handleAddPlaceSubmit,
        }}
      >
        <div className="page">
          <Header />
          <Main
            cards={cards}
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            popup={popup}
          />
          <Footer />
        </div>
      </CardContext.Provider>
    </CurrentUserContext.Provider>
  );
}
export default App;
