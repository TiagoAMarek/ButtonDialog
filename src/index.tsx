import { ReactNode, useState } from "react";
import { CloseIcon } from "./CloseIcon";
import { Dialog } from "./Dialog";

export type ClassStyles = {
  button?: string;
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
  text,
  children,
  classStyles,
  closeButtonAriaLabel,
}: ButtonDialogProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Dialog
        className={classStyles?.dialogContainer}
        isModalOpen={isModalOpen}
      >
        <div className={classStyles?.dialogContainer}>
          <header className={classStyles?.header}>
            <button
              className="cursor-pointer"
              onClick={() => setIsModalOpen(false)}
              aria-label={closeButtonAriaLabel}
            >
              <CloseIcon />
            </button>
          </header>
          {children}
        </div>
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