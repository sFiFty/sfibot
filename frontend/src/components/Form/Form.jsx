import React from 'react';
import PropTypes from 'prop-types';
import { Space } from 'antd';
import { Formik, Form } from 'formik';

const SForm = ({
  children, onSubmit, ...rest
}) => {
  const onCustomSubmit = (values, form) => {
    console.log(form)
    onSubmit(values).then(() => {
    }).catch(error => {
      const errors = error.response.data.details;
      form.setErrors(errors);
    })
  }

  return (
    <Formik
      {...rest}
      onSubmit={onCustomSubmit}
    >
      <Form>
        <Space direction="vertical" size="middle">
          {children}
        </Space>
      </Form>
    </Formik>
  )
}

SForm.propTypes = {
  children: PropTypes.node.isRequired
}

export default SForm;
