import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  
  return (
    <button onClick={onClick} className={css.buttonLoad}>
      Хочу ще
    </button>
  );
};
export default LoadMoreBtn;
