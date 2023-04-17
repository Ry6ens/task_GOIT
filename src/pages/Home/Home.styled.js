import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "@/styles/Media.variables";

export const Container = styled.section`
  padding: 0px 16px;

  display: flex;
  flex-direction: column;
  gap: 100px;

  @media ${device.desktop} {
    padding: 0px 24px;
  }
`;

export const Image = styled.img`
  margin: 100px auto 0px;

  width: 200px;

  @media ${device.tablet} {
    width: 300px;
  }

  @media ${device.desktop} {
    width: 400px;
  }
`;

export const ButtonLink = styled(Link)`
  margin: 0 auto;

  width: 200px;
  padding: 6px;

  font-size: 12px;
  text-align: center;

  color: #fff;
  background: -webkit-linear-gradient(left, #7579ff, #b224ef);

  cursor: pointer;

  &:hover,
  &:focus {
    background: -webkit-linear-gradient(left, #0d12bc, #69158e);
  }
`;
