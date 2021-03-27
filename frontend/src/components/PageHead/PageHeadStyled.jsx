import styled from 'styled-components';
import { Radio } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { Group } = Radio;

export const PageHeadContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  margin-bottom: 20px;
`;

export const StyledRadioGroup = styled(Group)`
  > label:first-child {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  > label:last-child {
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
`;

export const AddButtonIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export const PageNameContainer = styled.h2`
  .icon {
    margin-right: 20px;
  }
`;

