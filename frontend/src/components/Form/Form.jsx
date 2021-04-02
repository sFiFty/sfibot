import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Space } from 'antd';
import { Formik, Form } from 'formik';

export const FormElementContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled(Space)`
  width: 100%;
`;

const SForm = ({
  children, onSubmit, ...rest
}) => {
  const onCustomSubmit = (values, form) => {
    onSubmit(values).then(() => {
      form.setSubmitting(false);
    }).catch((error) => {
      form.setSubmitting(false);
      const errors = error.response && error.response.data && error.response.data.details;
      if (errors) {
        form.setErrors(errors);
      }
    });
  };

  return (
    <Formik
      {...rest}
      validateOnChange={false}
      onSubmit={onCustomSubmit}
    >
      {
        (form) => (
          <Form>
            <FormContainer direction="vertical" size="middle">
              {children(form)}
            </FormContainer>
          </Form>
        )
      }
    </Formik>
  );
};

SForm.propTypes = {
  children: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SForm;
