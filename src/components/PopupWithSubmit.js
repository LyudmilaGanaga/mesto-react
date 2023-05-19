import { useForm } from "react-hook-form";
import PopupWithForm from "./PopupWithForm";

export default function PopupWithSubmit({ isOpen, onClose, onCardDelete, card }) {
  const {
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm();

  function handleCardDelete() {
    onCardDelete(card);
    onClose();
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="confirm"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(handleCardDelete)}
      isValid={isValid}
      isDirty={!isDirty}
    />
  );
}

