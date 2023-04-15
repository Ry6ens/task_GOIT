import styled from "styled-components";
import { device } from "@/styles/Media.variables";

export const Container = styled.header`
  background: #ebd8ff;

  @media ${device.desktop} {
    margin: 0 auto;

    width: 1440px;
  }
`;
