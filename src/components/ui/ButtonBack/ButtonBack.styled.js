import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "@/styles/Media.variables";

export const ButtonBackLink = styled(Link)`
  margin-top: 25px;

  cursor: pointer;

  &:hover svg,
  &:focus svg {
    fill: #4b2a99;
  }
`;
