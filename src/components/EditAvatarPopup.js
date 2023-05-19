import React, { useContext, useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

import { useForm } from "react-hook-form";
import classNames from "classnames";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = useContext(CurrentUserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: "onChange",
  });

  const avatarRef = useRef();

  useEffect(() => {
    reset();
    // avatarRef.current.value = "";
  }, [isOpen, reset]);

  function onSubmit({ avatar }) {
    onUpdateAvatar({ avatar });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      isValid={isValid}
      isDirty={isDirty}
    >
      <input
        ref={avatarRef}
        className={classNames("popup__input", {
          popup__input_type_error: errors.avatar,
        })}
        type="url"
        placeholder="Ссылка на картинку"
        {...register("avatar", {
          required: "Пожалуйста введите URL",
          pattern: {
            value:
              /^(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(:[0-9]{2,5})?(\/[a-zA-Z0-9\-\._\?\,\'\/\\\+&amp;%\$#\=~]*)*$/,
            message: "Введите адрес сайта",
          },
        })}
      />
      <span
        className={classNames("popup__input-error", {
          "popup__input-error_visible": errors.avatar,
        })}
      >
        {errors.avatar?.message}
      </span>
    </PopupWithForm>
  );
}
