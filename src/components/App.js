import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  // обработчики
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <ImagePopup
        card={selectedCard}
        isOpen={isEditImagePopupOpen}
        onClose={closeAllPopups}
      ></ImagePopup>

      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__form">
          <input
            className="popup__input popup__input_data_name"
            id="name"
            name="name"
            placeholder="Имя"
            type="text"
            minLength="2"
            maxLength="40"
            required
          />
          <span
            className="popup__input-error name-error"
            id="popup__input-error-name"
          ></span>
          <input
            className="popup__input popup__input_data_about"
            id="about"
            name="about"
            placeholder="Вид деятельности"
            type="text"
            minLength="2"
            maxLength="200"
            required
          />
          <span
            className="popup__input-error about-error"
            id="popup__input-error-about"
          ></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_data_name"
          id="input-name"
          type="text"
          name="name"
          minLength="2"
          maxLength="30"
          placeholder="Название"
          required
        />
        <span className="popup__input-error input-name-error"></span>
        <input
          className="popup__input popup__input_data_link"
          id="link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error link-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="useravatar"
          className="popup__input popup__input_data_avatar"
          name="avatar"
          placeholder="Ссылка на картинку"
          type="url"
          required
        />
        <span className="popup__input-error useravatar-error"></span>
      </PopupWithForm>
    </div>
  );
}

export default App;
