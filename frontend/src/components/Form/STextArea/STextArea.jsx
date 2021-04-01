import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Input, Alert, Space } from 'antd';
import FormElementContainer from '../StyledForm';

const { TextArea } = Input;

const StyledTextArea = styled(TextArea)`
  resize: none;
`;

const STextArea = ({
  form, field, label, ...rest
}) => {
  const onChange = (event) => form.setFieldValue(field.name, event.target.value);
  return (
    <FormElementContainer>
      {
        label && (
          <label htmlFor={field.name}>{label}</label>
        )
      }
      <Space direction="vertical">
        <StyledTextArea {...field} {...rest} onChange={onChange} id={label && field.name} />
        {
          form.errors[field.name] && (
            <Alert message={form.errors[field.name]} type="error" />
          )
        }
      </Space>
    </FormElementContainer>
  );
};

STextArea.propTypes = {
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

STextArea.defaultProps = {
  label: null,
};

export default STextArea;
