import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
type ModalWithButtonProps = {
  textOkButton?: string;
  textCancelButton?: string;
  title?: string;
  isOpen: boolean;
  isFooter?: boolean;
  submit?: () => void;
  toggle: (val: boolean) => void;
  okSubmit: () => void;
  children?: JSX.Element;
};

const ModalPortal = ({
  title = "Title",
  textOkButton = "Ok",
  textCancelButton = "Cancel",
  isOpen,
  isFooter = false,
  toggle,
  children,
  okSubmit,
}: ModalWithButtonProps) => {
  return (
    <Modal
      centered
      isOpen={isOpen}
      toggle={() => toggle(false)}
      fade
      unmountOnClose
    >
      <ModalHeader toggle={() => toggle(false)}>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      {isFooter && (
        <ModalFooter>
          <Button color="primary" onClick={okSubmit}>
            {textOkButton}
          </Button>
          <Button onClick={() => toggle(false)}>{textCancelButton}</Button>
        </ModalFooter>
      )}
    </Modal>
  );
};

export default ModalPortal;
