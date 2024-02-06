import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./ModalConfirmare";
function ModalConfirmare({
  show,
  handleClose,
  handleConfirm,
  cardId,
  titleYes,
  titleNo,
}) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Remove Car Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to remove this car? Once removed it can't be
          reverted!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {titleNo}
        </Button>
        <Button variant="danger" onClick={() => handleConfirm(cardId)}>
          {titleYes}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalConfirmare;
