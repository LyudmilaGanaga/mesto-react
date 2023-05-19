import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

import { useForm } from "react-hook-form";
import classNames from "classnames";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  // const [profileName, setProfileName] = useState("");
  // const [profileDescription, setProfileDescription] = useState("");
  // Подписка на контекст
  const currentUser = useContext(CurrentUserContext);

  // const [nameError, setNameError] = useState("");
  // const [descriptionError, setDescriptionError] = useState("");

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({ mode: "onChange" });

  function handleChange(e) {
    setValue(e.target.value);
    e.preventDefault();
  }

  useEffect(() => {
    reset();
    setValue("name", currentUser.name);
    setValue("about", currentUser.about);
  }, [currentUser, isOpen, reset, setValue]);

  function onSubmit({ name, about }) {
    onUpdateUser({ name, about });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      isValid={isValid}
      isDirty={isDirty}
    >
      <div className="popup__form">
        <input
          className={classNames("popup__input", {
            popup__input_type_error: errors.name?.message,
          })}
          id="name"
          name="name"
          placeholder="Имя"
          type="text"
          // value={setValue}
          // onChange={handleChange}
          minLength="2"
          maxLength="40"
          required
          onChange={(evt) => handleChange(evt.target.value)}
          defaultValue={currentUser.name}
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
              value: 40,
              message: "Название должно быть до 40 символов",
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
            popup__input_type_error: errors.about?.message,
          })}
          id="about"
          name="about"
          placeholder="Вид деятельности"
          type="text"
          minLength="2"
          maxLength="200"
          required
          onChange={(evt) => handleChange(evt.target.value)}
          defaultValue={currentUser.name}
          {...register("about", {
            required: {
              value: true,
              message: "Вы пропустили это поле",
            },
            minLength: {
              value: 2,
              message: "Название должно быть от 2 символов",
            },
            maxLength: {
              value: 200,
              message: "Название должно быть до 200 символов",
            },
          })}
        />
        <span
          className={classNames("popup__input-error", {
            "popup__input-error_visible": errors.about?.message,
          })}
        >
          {errors.about?.message}
        </span>
      </div>
    </PopupWithForm>
  );
}
