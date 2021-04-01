import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useTranslation, nameSpaces, inputs as tInputs } from 'locales';
import * as Yup from 'yup';
import { Field } from 'formik';
import Form, { SInput, STextArea } from 'components/Form';

const InputForm = ({
  item = null, onAdd, onUpdate, isUpdate,
}) => {
  const { t } = useTranslation(nameSpaces.inputs);
  const initialValues = {
    commandName: item ? item.commandName : '',
    inputName: item ? item.inputName : '',
  };

  const SignupSchema = Yup.object().shape({
    commandName: Yup.string()
      .min(2, t(tInputs.formNameValidationMinLengthError))
      .max(20, t(tInputs.formNameValidationMaxLengthError))
      .required(t(tInputs.formNameValidationRequiredError)),
    inputName: Yup.string()
      .min(2, t(tInputs.formInputNameValidationMinLengthError))
      .max(100, t(tInputs.formInputNameValidationMaxLengthError))
      .required(t(tInputs.formInputNameValidationRequiredError)),
  });

  const onSubmit = (values) => {
    if (isUpdate) {
      return onUpdate({
        id: item.id,
        ...values,
      });
    }
    return onAdd(values);
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
              addonBefore="!"
              component={SInput}
              name="commandName"
              placeholder={t(tInputs.formName)}
              label={t(tInputs.formName)}
            />
            <Field
              component={STextArea}
              name="inputName"
              placeholder={t(tInputs.formInputName)}
              label={t(tInputs.formInputName)}
            />
            <Button
              loading={form.isSubmitting}
              type="primary"
              htmlType="submit"
            >
              {item ? t(tInputs.formUpdate) : t(tInputs.formAdd)}
            </Button>
          </>
        )
      }
    </Form>
  );
};

InputForm.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    commandName: PropTypes.string.isRequired,
  }),
  onAdd: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  isUpdate: PropTypes.bool.isRequired,
};

InputForm.defaultProps = {
  item: null,
};

export default InputForm;
