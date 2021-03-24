
import { Layout } from 'antd';
import styled from 'styled-components';
const { Header: AntHeader } = Layout;

export const StyledHeader = styled(AntHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.mainBgColor};
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderColor};
`;

export const LogoContainer = styled.div`
  h1 {
    letter-spacing: 8px;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 0px;
  }
  h3 {
    line-height: 18px;
    font-size: ${({ theme }) => theme.fontSizes.small};;
  }
`;