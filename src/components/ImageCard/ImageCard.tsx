import css from "./ImageCard.module.css";
import React from "react";
import { ImageType } from "../App/App";

type Props = {
  result: ImageType;
  openModal: (image: ImageType) => void;
};

const ImageCard: React.FC<Props> = ({ result, openModal }) => {
  return (
    <li className={css.cardItem} >
      <img onClick={() => openModal(result)}
        src={result.urls.small}
        alt={result.alt_description || "No description"}
        width={320}
        height={240}
      />
      <span>Likes</span>
      <p>{result.likes}</p>
    </li>
  );
};
export default ImageCard;
