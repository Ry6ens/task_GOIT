import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.nav`
  padding: 0px 16px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 25px;
`;

export const Item = styled.li`
  padding: 8px 0px;
`;

export const ItemLink = styled(NavLink)`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0%;
    background-color: currentColor;
    height: 1px;
    bottom: -6px;
    transition: width 0.2s;
    pointer-events: none;
  }

  &:hover:after,
  :focus:after {
    width: 100%;
  }

  &.active {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      background-color: currentColor;
      height: 1px;
      bottom: -6px;
      transition: width 0.2s;
      pointer-events: none;
    }
  }
`;
