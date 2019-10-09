import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
// import * as yup from 'yup';
import PopupWindow from './PopupWindow';
import ConfirmDelete from './ConfirmDelete';

const PopupValidator = ({
  userData,
  update,
  fakeUpdate,
  resetId,
  showConfirmModal,
  closeConfirmModal,
  confirmVisible,
  deleteItem,
  ...rest
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
            fakeUpdate(response.data);
            setLoading(false);
            resetForm();
            resetId();
          })
          .catch((error) => {
            console.log(error);
          });
      }}
      render={({
        touched, errors, values, handleChange, handleBlur, handleSubmit,
      }) => (
        <>
          <ConfirmDelete
            deleteItem={deleteItem}
            handleOpen={showConfirmModal}
            confirmVisible={confirmVisible}
            closeConfirmModal={closeConfirmModal}
          />
          <PopupWindow
            handleChange={handleChange}
            touched={touched}
            handleBlur={handleBlur}
            errors={errors}
            confirmVisible={confirmVisible}
            values={values}
            handleSubmit={handleSubmit}
            showConfirmModal={showConfirmModal}
            loading={loading}
            {...rest}
          />
        </>
      )}
    />
  );
};
export default PopupValidator;
