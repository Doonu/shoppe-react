import { Menu as MenuAntd } from 'antd';
import styled from 'styled-components';

export const SFutures = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const SMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const SDivider = styled.div`
  background-color: ${({ theme }) => theme.core.colorTextSecondary};
  width: 1px;
  height: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    display: none;
  }
`;

export const SMenuAntd = styled(MenuAntd)`
  &.ant-menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    border-inline-end: 0 solid rgba(5, 5, 5, 0.06) !important;
    font-size: 30px;
  }

  & .ant-menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;