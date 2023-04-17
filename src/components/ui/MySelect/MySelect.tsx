import React from "react";

import { Container } from "./MySelect.styled";

interface Sort {
  name: string;
  value: string;
}

interface Props {
  options: Array<Sort>;
  defaultValue: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({
  options,
  defaultValue,
  value,
  onChange,
}: Props) {
  return (
    <Container
      value={value}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map(({ value, name }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </Container>
  );
}
