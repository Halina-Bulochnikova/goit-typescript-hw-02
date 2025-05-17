import { BeatLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => (
  <div className={css.loader}>
    <BeatLoader color="#36d7b7" size={50} />
  </div>
);

export default Loader;
