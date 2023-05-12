import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [placeName, setPlaceName] = useState("");
  const [placeLink, setPlaceLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: placeName,
      link: placeLink,
    });
  }

  useEffect(() => {
    setPlaceName("");
    setPlaceLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      name="place"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        value={placeName ?? ""}
        onChange={(e) => setPlaceName(e.target.value)}
      />
      <span className="popup__input-error input-name-error"></span>
      <input
        className="popup__input popup__input_data_link"
        id="link"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
        value={placeLink ?? ""}
        onChange={(e) => setPlaceLink(e.target.value)}
      />
      <span className="popup__input-error link-error"></span>
    </PopupWithForm>
  );
}
