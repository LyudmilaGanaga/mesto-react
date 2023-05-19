import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

import { useForm } from "react-hook-form";
import classNames from "classnames";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({ mode: "onChange" });

  function onSubmit({ name, link }) {
    onAddPlace({ name, link });
  }

  useEffect(() => {
    reset();
  }, [isOpen, reset]);

  function handleChange(e) {
    setValue(e.target.value);
    e.preventDefault();
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="place"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      isValid={isValid}
      isDirty={isDirty}
    >
      <input
        className={classNames("popup__input", {
          popup__input_type_error: errors.name?.message,
        })}
        placeholder="Название"
        onChange={(evt) => handleChange(evt.target.value)}
        // value={setValue}
        type="text"
        {...register("name", {
          required: {
            value: true,
            message: "Вы пропустили это поле",
          },
          minLength: {
            value: 2,
            message: "Название должно быть от 2 символов",
          },
          maxLength: {
            value: 30,
            message: "Название должно быть до 30 символов",
          },
        })}
      />
      <span
        className={classNames("popup__input-error", {
          "popup__input-error_visible": errors.name?.message,
        })}
      >
        {errors.name?.message}
      </span>

      <input
        className={classNames("popup__input", {
          popup__input_type_error: errors.link?.message,
        })}
        type="url"
        placeholder="Ссылка на картинку"
        {...register("link", {
          required: {
            value: true,
            message: "Пожалуйста введите URL",
          },
          pattern: {
            value:
              /^(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(:[0-9]{2,5})?(\/[a-zA-Z0-9\-\._\?\,\'\/\\\+&amp;%\$#\=~]*)*$/,
            message: "Введите адрес сайта",
          },
        })}
      />
      <span
        className={classNames("popup__input-error", {
          "popup__input-error_visible": errors.link?.message,
        })}
      >
        {errors.link?.message}
      </span>
    </PopupWithForm>
  );
}
