import React from "react";
import { Button } from "reactstrap";
import ModalPortal from "../ModalPortal/ModalPortal";
type ModalWithButtonProps = {
  textOpenModalButton?: string;
  submit?: () => void;
  children?: JSX.Element;
};

const ModalWithButton = ({
  textOpenModalButton = "Open",
  submit,
  children,
}: ModalWithButtonProps) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handlerSubmit = () => {
    submit && submit();
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>{textOpenModalButton}</Button>
      {children && (
        <ModalPortal
          title="New job"
          okSubmit={handlerSubmit}
          isOpen={open}
          toggle={setOpen}
        >
          {children}
        </ModalPortal>
      )}
    </div>
  );
};

export default ModalWithButton;
