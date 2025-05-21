import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import React from "react";

type Props = {
  onSubmit: (query: string) => void;
};
type FormValues = {
  search: string;
}

const SearchBar: React.FC<Props> = ({ onSubmit }) => {
  const initialValues: FormValues = {
    search: "",
  };
  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    const query = values.search.trim();
    if (!query) {
      toast.error("Здається, ти забув сказати, що хочеш знайти...");
      return;
    }

    onSubmit(query);
    resetForm();
  };
  const ContactFormSchema = Yup.object().shape({
    search: Yup.string()
      .min(2, "Замало, введи хоча б 2 символи")
      .max(15, "Ти перестарався, зменш кількість до 15 символів")
      .matches(
        /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s]+$/,
        "Тільки літери, без цифр і символів"
      ),
  });

  return (
    <section className={css.section}>
      <header className={css.header}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={ContactFormSchema}
        >
          <Form className={css.searchForm}>
            <div className={css.inputWrapper}>
              <button className={css.searchBtn} type="submit">
                <IoIosSearch className={css.searchIcon} />
              </button>
              <Field
                name="search"
                className={css.searchField}
                type="text"
                autoFocus
                placeholder="Питай, я вже готовий до пошуку"
              ></Field>
            </div>
            <ErrorMessage
              name="search"
              component="div"
              className={css.errorSearch}
            />
          </Form>
        </Formik>
      </header>
    </section>
  );
};
export default SearchBar;
