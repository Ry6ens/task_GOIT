import React from "react";

import { ButtonBackLink } from "./ButtonBack.styled";

interface Props {
  children: React.ReactNode;
}

export default function ButtonBack({ children }: Props) {
  return <ButtonBackLink to="/">{children}</ButtonBackLink>;
}
