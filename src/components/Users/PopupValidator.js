import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
// import * as yup from 'yup';
import PopupWindow from './PopupWindow';

const PopupValidator = ({
  userData, update, fakeUpdate, ...rest
}) => {
  const [loading, setLoading] = useState(false);
  return (
    <Formik
      initialValues={userData || ''}
      onSubmit={(values, { resetForm }) => {
        const { id } = values;
        setLoading(true);
        axios
          .put(`https://jsonplaceholder.typicode.com/users/${id}`, values)
          .then((response) => {
            console.log(response.data);
            fakeUpdate(response.data);
            setLoading(false);
            resetForm();
          })
          .catch((error) => {
            console.log(error);
          });
        
      }}
      render={({
        touched, errors, values, handleChange, handleBlur, handleSubmit,
      }) => (
        <>
          <PopupWindow
            handleChange={handleChange}
            touched={touched}
            handleBlur={handleBlur}
            errors={errors}
            values={values}
            handleSubmit={handleSubmit}
            loading={loading}
            {...rest}
          />
        </>
      )}
    />
  );
};
export default PopupValidator;
