import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => (
  <p className={css.errorMessage}>{message}</p>
);

export default ErrorMessage;
