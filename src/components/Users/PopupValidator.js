import React from 'react';
import { Formik } from 'formik';
// import * as yup from 'yup';
import PopupWindow from './PopupWindow';

const PopupValidator = ({ userData, ...rest }) => {
  console.log(typeof userData, userData);
  console.log('userdata');


  return (
    <Formik
      initialValues={userData || {
        name: 'foo',
        username: 'boo',
        phone: {
          ad: '',
          bet: '',
        }
      }}
      onSubmit={values => console.log(values)}
      render={({
        touched, errors, values, handleChange, handleBlur, handleSubmit,
      }) => {
        console.log(values);
        console.log('values');
        return (
          <PopupWindow
            handleChange={handleChange}
            touched={touched}
            handleBlur={handleBlur}
            errors={errors}
            values={values}
            handleSubmit={handleSubmit}
            {...rest}
          />
        );
      }}
    />
  );
};
export default PopupValidator;
