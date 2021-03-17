import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { Formik, Field, Form } from 'formik';

const AddCommandForm = ({
  command = null, onAddCommand, onUpdateCommand
}) => {
  const isUpdate = !!command;
  const initialValues = {
    name: command ? command.name : '',
    response: command ? command.response : ''
  }

  const { t } = useTranslation();

  const onSubmit = (values) => {
    if (isUpdate) {
      onUpdateCommand(values);
      return;
    }
    onAddCommand(values);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor="name">{t('commandsList.formCommandName')}</label>
        <Field id="name" name="name" placeholder={t('commandsList.formCommandName')} />
        <label htmlFor="response">{t('commandsList.formCommandResponse')}</label>
        <Field id="response" name="response" placeholder={t('commandsList.formCommandResponse')} />
        <button type="submit">{command ? t('commandsList.formCommandUpdate') : t('commandsList.formCommandAdd')}</button>
      </Form>
    </Formik>
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
}

export default AddCommandForm;
