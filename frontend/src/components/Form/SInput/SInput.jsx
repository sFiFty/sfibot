import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const SInput = ({ form, field, label }) => {
  const onChange = (event) => form.setFieldValue(field.name, event.target.value);
  console.log(form)
  return (
    <>
      {
        label && (
          <label htmlFor={field.name}>{label}</label>
        )
      }
      <Input {...field} onChange={onChange} id={label && field.name} />
    </>
  )
}

SInput.propTypes = {
  form: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired
  }),
  field: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  label: PropTypes.string
}

export default SInput;
