import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // Подписка на контекст
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          onChange={(evt) => setName(evt.target.value)}
          value={name ?? ""}
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
          onChange={(evt) => setDescription(evt.target.value)}
          value={description ?? ""}
        />
        <span
          className="popup__input-error about-error"
          id="popup__input-error-about"
        ></span>
      </div>
    </PopupWithForm>
  );
}
