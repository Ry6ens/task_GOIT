import styled from "styled-components";
import { device } from "@/styles/Media.variables";

export const Button = styled.button`
  margin-top: 26px;

  width: 196px;
  height: 50px;

  font-family: var(--font-MontserratSemiBold);
  font-size: 18px;
  line-height: 22px;

  color: #373737;

  border-radius: 10.3108px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  &:hover,
  &:focus {
    background: #c7a3ec;
  }
`;
