import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
// import * as yup from 'yup';
import PopupWindow from './PopupWindow';

const PopupValidator = ({ userData, update, fakeUpdate, ...rest }) => (
  <Formik
    initialValues={
      userData || {
        name: 'foo',
        username: 'boo',
        phone: {
          ad: '',
          bet: '',
        },
      }
    }
    onSubmit={(values) => {
      const { id } = values;
      // const onSuccess = () => {
      // };
      console.log(values);
      axios
        .put(`https://jsonplaceholder.typicode.com/users/${id}`, values)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      update();
      fakeUpdate(values);
    }}
    render={({
      touched, errors, values, handleChange, handleBlur, handleSubmit,
    }) => (
      <PopupWindow
        handleChange={handleChange}
        touched={touched}
        handleBlur={handleBlur}
        errors={errors}
        values={values}
        handleSubmit={handleSubmit}
        {...rest}
      />
    )}
  />
);
export default PopupValidator;
