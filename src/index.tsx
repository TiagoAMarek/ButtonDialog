import { ReactNode, useState } from "react";
import { CloseIcon } from "./CloseIcon";
import { Dialog } from "./Dialog";

export type ClassStyles = {
  button?: string;
  closeButton?: string;
  dialog?: string;
  dialogContainer?: string;
  header?: string;
};

export type ButtonDialogProps = {
  children: ReactNode;
  classStyles?: ClassStyles;
  closeButtonAriaLabel: string;
  text: string;
};

export function ButtonDialog({
  children,
  classStyles,
  closeButtonAriaLabel,
  text,
}: ButtonDialogProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Dialog
        className={classStyles?.dialogContainer}
        isModalOpen={isModalOpen}
      >
        <header className={classStyles?.header}>
          <button
            className={classStyles?.closeButton}
            onClick={() => setIsModalOpen(false)}
            aria-label={closeButtonAriaLabel}
          >
            <CloseIcon />
          </button>
        </header>
        {children}
      </Dialog>

      <button
        className={classStyles?.button}
        aria-label={text}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        {text}
      </button>
    </>
  );
}
