import styled from 'styled-components';
import { Radio } from 'antd';

const { Group } = Radio;

export const PageHeadContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
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