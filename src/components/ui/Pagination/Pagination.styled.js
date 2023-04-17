import styled from "styled-components";
import { device } from "@/styles/Media.variables";

export const Button = styled.button`
  margin: 0px auto 50px;

  width: 196px;
  height: 50px;

  font-family: var(--font-MontserratSemiBold);
  font-size: 18px;
  line-height: 22px;
  color: rgb(55, 55, 55);

  background: #8bcfcf;

  border-radius: 10.3108px;

  &:hover,
  &:focus {
    background: #6db1b1;
  }
`;
