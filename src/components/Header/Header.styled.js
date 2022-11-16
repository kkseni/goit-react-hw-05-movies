import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  padding-bottom: 20px;
  background-color: #3a8383;
  height: 90px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
font-family: 'Roboto';
  font-weight: 500;
  font-size: 34px;
  line-height: 1.33;
  min-width: 120px;
  min-height: 44px;
  margin-right: 30px;
  color: #ffffff;
  background-color: transparent;
  border-color: #ffffff;
  border-radius: 5px;
  &:hover {
    background: #ff6b01;
    box-shadow: 0px 8px 43px rgba(255, 107, 1, 0.6);
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transform: translateY(5%) scale(1.1);
  }
  background: linear-gradient(transparent, grey);
  &.active {
    color: orange
`;
