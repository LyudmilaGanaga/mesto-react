import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({
  card,
  onCardClick,
  onCardLike,
  onCardDeleteConfirm,
}) {
  const handleClick = () => onCardClick(card);
  const handleLikeClick = () => onCardLike(card);
  const handleDeleteClick = () => onCardDeleteConfirm(card);

  const currentUser = useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в className для кнопки лайка
  const cardLikeButtonClassName = `element__like ${
    isLiked && "element__like_active"
  }`;

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="element">
        {isOwn && (
          <button
            className="element__delete"
            onClick={handleDeleteClick}
            type="button"
          ></button>
        )}
        <img
          className="element__image"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
        <div className="element__group">
          <h2 className="element__text">{card.name}</h2>
          <div className="element__counter">
            <button
              className={cardLikeButtonClassName}
              onClick={handleLikeClick}
              type="button"
            ></button>
            <p className="element__likes">{card.likes.length}</p>
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}
