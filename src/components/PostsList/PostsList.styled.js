import styled from "styled-components";
import { device } from "@/styles/Media.variables";

export const List = styled.ul`
  margin: 50px 0px;

  display: grid;
  justify-items: center;
  gap: 24px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }

  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 48px;
  }
`;

export const TextNotFound = styled.p`
  margin: 0 auto;

  font-family: var(--font-MontserratSemiBold);
  font-size: 18px;
`;
