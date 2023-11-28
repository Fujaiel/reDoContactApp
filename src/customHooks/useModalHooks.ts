import { useState } from "react";


const useModalHooks = () => {

    const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return {isOpen, setIsOpen, openModal, closeModal}
}

export default useModalHooks