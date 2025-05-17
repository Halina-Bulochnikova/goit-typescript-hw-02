import css from './App.module.css';
import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchResults from "../../servis/api";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "..//ErrorMessage/ErrorMessage";
import Loader from "..//Loader/Loader";

import ImageModal from "../ImageModal/ImageModal";

const App = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setIsOpen(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setResults([]);
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchResults(newQuery, 1);
      setResults(data);
    } catch (error) {
      console.error("Я зараз все виправлю", error);
      setError("Щось я втомився, спробуй пізніше");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (page === 1 || !query) return;

    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchResults(query, page);
        setResults((prev) => [...prev, ...data]);
      } catch (error) {
        console.error("Упссс...щось пішло не так...", error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [page, query]);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <div className={css.container}>
        <SearchBar onSubmit={handleSearch} />
        <ImageGallery results={results} openModal={openModal} />
        {isLoading && <Loader />}
        {results.length > 0 && !isLoading && (
          <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
        )}
        <ImageModal
          isOpen={isOpen}
          closeModal={closeModal}
          image={selectedImage}
        />
      </div>
    </>
  );
};
export default App;
