import css from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
};

const LoadMoreBtn: React.FC<Props> = ({ onClick }) => {
  
  return (
    <button onClick={onClick} className={css.buttonLoad}>
      Хочу ще
    </button>
  );
};
export default LoadMoreBtn;
