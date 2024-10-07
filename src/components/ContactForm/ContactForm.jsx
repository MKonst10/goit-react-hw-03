import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const addContactSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Must be at least 3 characters long")
    .max(50, "Maximum 50 characters long"),
  number: Yup.string()
    .required("Number is required")
    .matches(/^\d+$/, "Only digits are allowed")
    .min(3, "Must be at least 3 characters long")
    .max(50, "Maximum 50 characters long"),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    // console.log("values:", values);
    // alert(Math.random());
    if (values.name && values.number) {
      onAddContact(values);
      actions.resetForm();
    }
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={addContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <span>Name</span>
          <Field className={styles.field} type="text" name="name" />
          <ErrorMessage className={styles.error} name="name" component="span" />
        </label>
        <label className={styles.label}>
          <span>Number</span>
          <Field className={styles.field} type="text" name="number" />
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
