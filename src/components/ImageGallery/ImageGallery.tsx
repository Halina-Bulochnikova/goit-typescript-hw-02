import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import React from "react";

const ImageGallery = ({ results, openModal }) => {
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
