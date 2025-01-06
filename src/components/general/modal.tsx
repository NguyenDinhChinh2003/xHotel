import React from "react";

interface ModalProps {
  showModal: boolean;
  handleClose: () => void;
  children: React.ReactNode; // Định nghĩa đúng kiểu dữ liệu cho children
}

const Modal: React.FC<ModalProps> = ({ showModal, handleClose, children }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {" "}
      <div className="bg-white p-4 rounded shadow-lg max-w-md w-full relative z-50">
        {" "}
        <button
          className="absolute top-0 right-0 p-2 z-50"
          onClick={handleClose}
        >
          {" "}
          &times;{" "}
        </button>{" "}
        {children}{" "}
      </div>{" "}
    </div>
  );
};

export default Modal;
