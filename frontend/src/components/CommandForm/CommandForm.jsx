import React from 'react';
import PropTypes from 'prop-types';
import { Button, Space } from 'antd';
import { useTranslation } from "react-i18next";
import localesConstanst from 'locales/localesConstanst';
import { Field } from 'formik';
import Form, { SInput } from 'components/Form';

const AddCommandForm = ({
  command = null, onAddCommand, onUpdateCommand, isUpdate
}) => {
  const initialValues = {
    name: command ? command.name : '',
    response: command ? command.response : ''
  }

  const { t } = useTranslation();
  const { commands: tCommands } = localesConstanst;
  const onSubmit = (values) => {
    if (isUpdate) {
      return onUpdateCommand(values);
    }
    return onAddCommand(values);
  }

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Field
        component={SInput}
        name="name"
        placeholder={t(tCommands.formCommandName.path)}
        label={t(tCommands.formCommandName.path)}
      />
      <Field
        component={SInput} 
        name="response"
        placeholder={t(tCommands.formCommandResponse.path)}
        label={t(tCommands.formCommandResponse.path)}
      />
      <Button type="primary" htmlType="submit">{command ? t(tCommands.formCommandUpdate.path) : t(tCommands.formCommandAdd.path)}</Button>
    </Form>
  )
}

AddCommandForm.propTypes = {
  command: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    response: PropTypes.string.isRequired
  }),
  onAddCommand: PropTypes.func.isRequired,
  onUpdateCommand: PropTypes.func.isRequired,
  isUpdate: PropTypes.bool.isRequired
}

export default AddCommandForm;
