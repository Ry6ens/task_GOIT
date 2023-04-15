import React from "react";

import { Button } from "./ButtonFollow.styled";

interface Props {
  text: string;
  onClick: () => void;
}

export default function ButtonFollow({ text, onClick }: Props) {
  return <Button onClick={onClick}>{text}</Button>;
}
