import styled from "styled-components";
import { device } from "@/styles/Media.variables";

export const Container = styled.footer`
  height: 50px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  @media ${device.desktop} {
    margin: 0 auto;

    width: 1440px;
  }
`;

export const Text = styled.p`
  padding: 8px 0px;

  text-align: center;
  color: #ebd8ff;
`;
