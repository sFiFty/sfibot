import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Row, Col, Collapse,
} from 'antd';
import {
  useTranslation, nameSpaces, commands as tCommands, common as tCommon, date as tDate,
} from 'locales';
import * as Yup from 'yup';
import { Field } from 'formik';
import Form, { SInput, STextArea, STags } from 'components/Form';
import UserRolesSelector from 'components/UserRolesSelector';
import { getTwitchRoles } from 'constants/twitchConstants';

const { Panel } = Collapse;

const AddCommandForm = ({
  command = null, onAddCommand, onUpdateCommand, isUpdate,
}) => {
  const { t } = useTranslation(nameSpaces.commands);
  const { t: translateCommon } = useTranslation(nameSpaces.common);
  const { t: translateDate } = useTranslation(nameSpaces.date);

  const roles = getTwitchRoles(translateCommon);

  const initialValues = {
    name: command ? command.name : '',
    response: command ? command.response : '',
    userRole: command ? command.userRole : roles[0],
    userCooldown: 15,
    globalCooldown: 5,
    aliases: [],
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
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Field
                  addonBefore="!"
                  component={SInput}
                  name="name"
                  placeholder={t(tCommands.formName)}
                  label={t(tCommands.formName)}
                />
              </Col>
              <Col span={12}>
                <UserRolesSelector />
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Field
                  component={STextArea}
                  name="response"
                  placeholder={t(tCommands.formResponse)}
                  label={t(tCommands.formResponse)}
                />
              </Col>
            </Row>
            <Collapse>
              <Panel header={translateCommon(tCommon.advancedSettings)}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <Field
                      type="number"
                      addonAfter={translateDate(tDate.seconds)}
                      component={SInput}
                      name="userCooldown"
                      placeholder={translateCommon(tCommon.userCooldown)}
                      label={translateCommon(tCommon.userCooldown)}
                    />
                  </Col>
                  <Col span={12}>
                    <Field
                      type="number"
                      addonAfter={translateDate(tDate.seconds)}
                      component={SInput}
                      name="globalCooldown"
                      placeholder={translateCommon(tCommon.globalCooldown)}
                      label={translateCommon(tCommon.globalCooldown)}
                    />
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Field
                      name="aliases"
                      component={STags}
                      label={translateCommon(tCommon.aliases)}
                      addNewTitle={translateCommon(tCommon.clickToAddNewAlias)}
                    />
                  </Col>
                </Row>
              </Panel>
            </Collapse>
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
