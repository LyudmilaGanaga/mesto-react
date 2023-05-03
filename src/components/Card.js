import React from "react";

export default function Card({ card, onCardClick }) {
  const handleClick = () => onCardClick(card);

  return (
    <div className="element">
      <button className="element__delete" type="button"></button>
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="element__group">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__counter">
          <button className="element__like" type="button"></button>
          <p className="element__likes">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}