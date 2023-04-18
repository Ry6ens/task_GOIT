import React from "react";
import styled from "styled-components";
import { device } from "@/styles/Media.variables";

import Header from "./components/layout/Header/Header";
import UserRoutes from "./components/routes/UserRoutes";

const Main = styled.main`
  margin: 0 auto;

  @media ${device.desktop} {
    width: 1440px;
  }
`;

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <UserRoutes />
      </Main>
    </>
  );
}
