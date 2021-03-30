import { Layout } from 'antd';
import styled from 'styled-components';
import { containerStyles } from 'styles/StyledWrappers';

const { Header: AntHeader } = Layout;

export const StyledHeader = styled(AntHeader)`
  background-color: ${({ theme }) => theme.colors.mainBgColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  height: 100px;
`;

export const HeaderContainer = styled.div`
  ${containerStyles};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: auto;
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
