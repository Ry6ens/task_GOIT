import styled from "styled-components";
import { device } from "@/styles/Media.variables";

export const List = styled.ul`
  margin: 50px 0px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;

  @media ${device.desktop} {
    justify-content: space-between;
    gap: 48px;
  }
`;
