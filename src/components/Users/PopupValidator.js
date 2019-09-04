import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import PopupWindow from './PopupWindow';

const formValidationSchema = yup.object().shape({
  // title: yup.string().required('required'),
  // description: yup.string().required('required'),
  // address: yup.string().required('required'),
  // date: yup.string().required('required'),
  // url: yup.string().required('required'),
});

const PopupValidator = ({ ...props }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: 'janek',
        }}
        validationSchema={formValidationSchema}
        onSubmit={values => console.log(values)}
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
              {...props}
            />
          </>
        )}
      />
    </>
  );
};
export default PopupValidator;
