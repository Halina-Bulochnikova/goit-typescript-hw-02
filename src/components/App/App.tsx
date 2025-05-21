import css from './App.module.css';
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchResults from "../../servis/api";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "..//Loader/Loader";

import ImageModal from "../ImageModal/ImageModal";

export type ImageType = {
  id: string;
  urls: {
    regular: string;
    small?: string;
  };
  alt_description?: string;
  likes: number;
};

const App = () => {
  const [results, setResults] = useState<ImageType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const openModal = (image: ImageType): void => {
    setIsOpen(true);
    setSelectedImage(image);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const handleSearch = async (newQuery: string): Promise<void> => {
    setQuery(newQuery);
    setPage(1);
    setResults([]);
    setIsLoading(true);
    setError(null);
    try {
      const data: ImageType[]= await fetchResults(newQuery, 1);
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
