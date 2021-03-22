
import { Layout } from 'antd';
import styled from 'styled-components';
const { Header: AntHeader } = Layout;

export const StyledHeader = styled(AntHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  height: auto;
`;

export const LogoContainer = styled.div`
  h1, h3 {
    color: ${({ theme }) => theme.colors.white};
  }
  h1 {
    letter-spacing: 8px;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 0px;
  }
  h3 {
    line-height: 34px;
  }
`;