import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useTranslation, nameSpaces, commands as tCommands } from 'locales';
import * as Yup from 'yup';
import { Field } from 'formik';
import Form, { SInput, STextArea } from 'components/Form';

const AddCommandForm = ({
  command = null, onAddCommand, onUpdateCommand, isUpdate,
}) => {
  const { t } = useTranslation(nameSpaces.commands);

  const initialValues = {
    name: command ? command.name : '',
    response: command ? command.response : '',
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, t(tCommands.formNameValidationMinLengthError))
      .max(20, t(tCommands.formNameValidationMaxLengthError))
      .required(t(tCommands.formNameValidationRequiredError)),
    response: Yup.string()
      .min(2, t(tCommands.formResponseValidationMinLengthError))
      .max(100, t(tCommands.formResponseValidationMaxLengthError))
      .required(t(tCommands.formResponseValidationRequiredError)),
  });

  const onSubmit = (values) => {
    if (isUpdate) {
      return onUpdateCommand({
        id: command.id,
        ...values,
      });
    }
    return onAddCommand(values);
  };

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SignupSchema}
    >
      {
        (form) => (
          <>
            <Field
              component={SInput}
              name="name"
              placeholder={t(tCommands.formName)}
              label={t(tCommands.formName)}
            />
            <Field
              component={STextArea}
              name="response"
              placeholder={t(tCommands.formResponse)}
              label={t(tCommands.formResponse)}
            />
            <Button
              loading={form.isSubmitting}
              type="primary"
              htmlType="submit"
            >
              {command ? t(tCommands.formUpdate) : t(tCommands.formAdd)}
            </Button>
          </>
        )
      }
    </Form>
  );
};

AddCommandForm.propTypes = {
  command: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    response: PropTypes.string.isRequired,
  }),
  onAddCommand: PropTypes.func.isRequired,
  onUpdateCommand: PropTypes.func.isRequired,
  isUpdate: PropTypes.bool.isRequired,
};

AddCommandForm.defaultProps = {
  command: null,
};

export default AddCommandForm;
