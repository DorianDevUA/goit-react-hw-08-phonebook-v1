// import FormError from 'components/FormError';
import { Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import FormError from 'components/FormError';

const initialValues = {
  name: '',
  number: '',
};

const phoneRegExp =
  /^[+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, `Name is too short`)
    .max(32, `Name is too long`)
    .required(`Name is a required field`),
  number: Yup.string()
    .matches(phoneRegExp, `Phone number is not valid`)
    .required(`Number is a required field`),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    const { resetForm } = actions;

    dispatch(contactsOperations.createContact({ name, number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={nameInputId}>
          <span>Name</span>
          <Field type="text" name="name" id={nameInputId} />
          <FormError name="name" />
        </label>
        <label htmlFor={numberInputId}>
          <span>Number</span>
          <Field type="tel" name="number" id={numberInputId} />
          <FormError name="number" />
        </label>
        <button type="submit" title="Create contact">
          Create
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
