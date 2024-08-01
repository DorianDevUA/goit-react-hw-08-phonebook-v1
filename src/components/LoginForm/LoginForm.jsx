import { nanoid } from 'nanoid';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import FormError from 'components/FormError';

const initialValues = {
  email: '',
  password: '',
};

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(16).required(),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleSubmit = (values, actions) => {
    const { email, password } = values;
    const { resetForm } = actions;
    const user = { email, password };

    dispatch(authOperations.login(user));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form>
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
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
