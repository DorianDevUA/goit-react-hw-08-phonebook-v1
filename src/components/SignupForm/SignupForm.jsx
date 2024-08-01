import { nanoid } from 'nanoid';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import FormError from 'components/FormError';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const signupSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(16).required(),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleSubmit = (values, actions) => {
    const { name, email, password } = values;
    const { resetForm } = actions;
    const newUser = { name, email, password };

    dispatch(authOperations.signup(newUser));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={nameInputId}>
          <span>Name</span>
          <Field type="text" name="name" id={nameInputId} />
          <FormError name="name" />
        </label>
        <label htmlFor={emailInputId}>
          <span>Email</span>
          <Field type="email" name="email" id={emailInputId} />
          <FormError name="email" />
        </label>
        <label htmlFor={passwordInputId}>
          <span>Password</span>
          <Field type="password" name="password" id={passwordInputId} />
          <FormError name="password" />
        </label>
        <button type="submit">Signup</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
