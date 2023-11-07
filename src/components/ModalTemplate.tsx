type ModalTemplateProps ={
    closeModal: () => void;
    children: React.ReactNode;
}

const ModalTemplate: React.FC<ModalTemplateProps> = ({closeModal,children}) => {
  return (
    <div className=" fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div
        className=" absolute w-full h-full bg-gray-900 opacity-50"
        onClick={closeModal}
      ></div>
      {children}
    </div>
  )
}

export default ModalTemplate