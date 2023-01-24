import React from "react";
import "./CreateTodoButton.css";

export const CreateTodoButton = ({ setOpenModal }) => {
  const onClickButton = () => {
    return setOpenModal(true);
  };

  return (
    <button onClick={onClickButton} className="CreateTodoButton">
      +
    </button>
  );
};
