import React from 'react';
import PropTypes from 'prop-types';
import { Input, Alert, Space } from 'antd';
import FormElementContainer from '../StyledForm';

const SInput = ({ form, field, label }) => {
  const onChange = (event) => form.setFieldValue(field.name, event.target.value);
  return (
    <FormElementContainer>
      {
        label && (
          <label htmlFor={field.name}>{label}</label>
        )
      }
      <Space direction="vertical">
        <Input {...field} onChange={onChange} id={label && field.name} />
        {
          form.errors[field.name] && (
            <Alert message={form.errors[field.name]} type="error" />
          )
        }
      </Space>
    </FormElementContainer>
  );
};

SInput.propTypes = {
  form: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired,
    errors: PropTypes.shape({
      [PropTypes.string]: PropTypes.string,
    }),
  }).isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.string,
};

SInput.defaultProps = {
  label: null,
};

export default SInput;
