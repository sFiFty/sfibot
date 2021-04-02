import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';
import { useTranslation, nameSpaces, common as tCommon } from 'locales';
import { SSelect } from 'components/Form';
import { getTwitchRoles } from 'constants/twitchConstants';

const StyledSelect = styled(SSelect)`
  width: 100%;
`;

const UserRolesSelector = () => {
  const { t } = useTranslation(nameSpaces.common);
  const roles = getTwitchRoles(t);
  const selectRoles = roles.map((role) => ({ name: role, value: role }));
  return (
    <Field
      component={StyledSelect}
      options={selectRoles}
      name="userRole"
      placeholder={t(tCommon.userRole)}
      label={t(tCommon.userRole)}
    />
  );
};

export default UserRolesSelector;
