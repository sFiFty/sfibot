import React from 'react';
import PropTypes from 'prop-types';
import { Button, Space } from 'antd';
import { useTranslation } from "react-i18next";
import * as Yup from 'yup';
import localesConstanst from 'locales/localesConstanst';
import { Field } from 'formik';
import Form, { SInput, STextArea } from 'components/Form';



const AddCommandForm = ({
  command = null, onAddCommand, onUpdateCommand, isUpdate
}) => {
  const { t } = useTranslation();

  const initialValues = {
    name: command ? command.name : '',
    response: command ? command.response : ''
  }

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, t(localesConstanst.commands.formCommandNameValidationMinLengthError.path))
      .max(20, t(localesConstanst.commands.formCommandNameValidationMaxLengthError.path))
      .required(t(localesConstanst.commands.formCommandNameValidationRequiredError.path)),
    response: Yup.string()
      .min(2, t(localesConstanst.commands.formCommandResponseValidationMinLengthError.path))
      .max(100, t(localesConstanst.commands.formCommandResponseValidationMaxLengthError.path))
      .required(t(localesConstanst.commands.formCommandResponseValidationRequiredError.path)),
  });

  const { commands: tCommands } = localesConstanst;
  const onSubmit = (values) => {
    if (isUpdate) {
      return onUpdateCommand({
        id: command.id,
        ...values
      });
    }
    return onAddCommand(values);
  }

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SignupSchema}
    >
      {
        (form) => {
          return (
            <>
              <Field
                component={SInput}
                name="name"
                placeholder={t(tCommands.formCommandName.path)}
                label={t(tCommands.formCommandName.path)}
              />
              <Field
                component={STextArea} 
                name="response"
                placeholder={t(tCommands.formCommandResponse.path)}
                label={t(tCommands.formCommandResponse.path)}
              />
              <Button
                type="primary"
                htmlType="submit"
              >
                {command ? t(tCommands.formCommandUpdate.path) : t(tCommands.formCommandAdd.path)}
              </Button>
            </>
          )
        }
      }
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
