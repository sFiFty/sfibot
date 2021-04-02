import React from 'react';
import PropTypes from 'prop-types';
import { Select, Alert, Space } from 'antd';
import FormElementContainer from '../StyledForm';

const { Option } = Select;

const SSelect = ({
  form, field, label, options, ...rest
}) => {
  const onChange = (value) => form.setFieldValue(field.name, value);
  return (
    <FormElementContainer>
      {
        label && (
          <label htmlFor={field.name}>{label}</label>
        )
      }
      <Space direction="vertical">
        <Select {...field} {...rest} onChange={onChange} id={label && field.name}>
          {
            options.map((option) => (
              <Option value={option.value}>{option.name}</Option>
            ))
          }
        </Select>
        {
          form.errors[field.name] && (
            <Alert message={form.errors[field.name]} type="error" />
          )
        }
      </Space>
    </FormElementContainer>
  );
};

SSelect.propTypes = {
  form: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired,
    errors: PropTypes.shape({
      [PropTypes.string]: PropTypes.string,
    }),
  }).isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  label: PropTypes.string,
};

SSelect.defaultProps = {
  label: null,
};

export default SSelect;
