import React from "react";

import MainImage from "@/images/main.png";

import { Container, Image, ButtonLink } from "./Home.styled";

export default function HomePage() {
  return (
    <Container>
      <Image src={MainImage} alt="main" />
      <ButtonLink to="/tweets">Get started</ButtonLink>
    </Container>
  );
}
