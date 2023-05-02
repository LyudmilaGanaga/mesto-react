import React from "react";

function ImagePopup({ onClose, isOpen, card }) {
    return (
    <div className={`popup popup_confirm popup_background-black popup_image-big ${isOpen ? "popup_opened" : ""}`}>
    <div className="popup__image-container">
        <button
        className="popup__close-button"
        type="button"
        aria-label="Close"
        onClick={onClose}
        ></button>

        <img className="popup__image" alt={card.name} src={card.link} />

        <figcaption className="popup__image-text">{card.name}</figcaption>
    </div>
    </div>
    );
}

export default ImagePopup;