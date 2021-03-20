import React from 'react';
import PropTypes from 'prop-types';
import { Space } from 'antd';
import { Formik, Form } from 'formik';

const SForm = ({
  children, onSubmit, ...rest
}) => {
  const onCustomSubmit = (values, form) => {
    onSubmit(values).then(() => {
    }).catch(error => {
      const errors = error.response.data.details;
      form.setErrors(errors);
    })
  }

  return (
    <Formik
      {...rest}
      validateOnChange={false}
      onSubmit={onCustomSubmit}
    >
      {
        (form) => (
          <Form>
            <Space direction="vertical" size="middle">
              {children(form)}
            </Space>
          </Form>
        )
      }
    </Formik>
  )
}

SForm.propTypes = {
  children: PropTypes.func.isRequired
}

export default SForm;
