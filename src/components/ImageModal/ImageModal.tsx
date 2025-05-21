import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { useEffect } from "react";
import { ImageType } from "../App/App";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  image: ImageType | null;
};


const ImageModal: React.FC<Props> = ({ isOpen, closeModal, image }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
    
    >
      {image && (
        <div>
          <img
            src={image.urls.regular}
            alt={image.alt_description || "No description"}
            className={css.modalImage}
          />
        </div>
      )}
      <button onClick={closeModal} className={css.closeBtn}>
        Close
      </button>
    </Modal>
  );
};

export default ImageModal;
