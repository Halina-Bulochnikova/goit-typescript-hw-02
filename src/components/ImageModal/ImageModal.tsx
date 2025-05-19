import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { useEffect } from "react";

type ImageType = {
  urls: {
    regular: string;
  };
  alt_description?: string;
};

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  image: ImageType | null;
};

const ImageModal: React.FC<Props> = ({ isOpen, closeModal, image }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
      appElement={document.getElementById("root")}
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
