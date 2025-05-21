import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import React from "react";
import { ImageType } from '../App/App';


type Props = {
  results: ImageType[];
  openModal: (image: ImageType) => void;
};

const ImageGallery: React.FC<Props> = ({ results, openModal }) => {
  return (
    <ul className={css.gallery}>
      {results.map((result) => (
        <ImageCard
          key={result.id}
          result={result}
          openModal={() => openModal(result)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
