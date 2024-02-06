import React, { useState } from "react";
import ModalConfirmare from "./ModalConfirmare";
import Button from "react-bootstrap/Button";

function CardComponent({ id, name, onDelete }) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleDelete = () => {
    onDelete(id);
    handleCloseModal();
  };

  return (
    <div>
      <h2>{name}</h2>
      <Button variant="outline-warning" onClick={handleShowModal}>
        Delete
      </Button>
      <ModalConfirmare
        show={showModal}
        handleClose={handleCloseModal}
        handleConfirm={handleDelete}
        cardId={id}
        titleYes="Yes"
        titleNo="No"
      />
    </div>
  );
}

export default CardComponent;
