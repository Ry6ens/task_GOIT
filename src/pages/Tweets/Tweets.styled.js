import styled from "styled-components";
import { device } from "@/styles/Media.variables";

export const Container = styled.section`
  margin: 0 auto;
  padding: 0px 16px;

  display: flex;
  flex-direction: column;

  @media ${device.desktop} {
    padding: 0px 24px;
  }
`;

export const TitleError = styled.h2`
  margin: 50px auto 0px auto;
`;

export const OverlayFilter = styled.div`
  margin-top: 50px;

  text-align: right;
`;
