import css from "./ErrorMessage.module.css";

type Props = {
  message: string
};

const ErrorMessage: React.FC<Props> = ({ message }) => (
  <p className={css.errorMessage}>{message}</p>
);

export default ErrorMessage;
