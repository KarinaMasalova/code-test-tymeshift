import { useState } from "react";

type ModalReturnType = {
  isModalOpen: boolean;
  showModal: () => void;
  closeModal: () => void;
};

export const useModal = (): ModalReturnType => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  return { isModalOpen, showModal, closeModal };
};
