import { useRef, useEffect, ReactNode } from "react";

type DialogProps = {
  children: ReactNode;
  className?: string;
  isModalOpen: boolean;
};

export function Dialog({ children, className, isModalOpen }: DialogProps) {
  const dialogElement = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    isModalOpen
      ? dialogElement?.current?.showModal()
      : dialogElement?.current?.close();
  }, [isModalOpen]);

  return (
    <dialog className={className} ref={dialogElement}>
      {children}
    </dialog>
  );
}
