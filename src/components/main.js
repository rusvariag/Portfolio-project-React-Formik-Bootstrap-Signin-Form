import React, { useState } from 'react';
import Footer from './footer';
import Header from './header';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Main = () => {
  const [result, setResult] = useState('');

  const initialValues = {
    email: '',
    password: '',
    remember: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = values => {
    setResult(values);
  };

  return (
    <main className="form-signin">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Header />

          <div className="form-floating">
            <Field
              type="text"
              name="email"
              id="email"
              className="form-control"
              placeholder="Email address"
            />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-floating">
            <Field
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Password"
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="checkbox mb-3">
            <Field
              type="checkbox"
              name="remember"
              id="remember"
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>

          <Footer result={result} />
        </Form>
      </Formik>
    </main>
  );
};

export default Main;
