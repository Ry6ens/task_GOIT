import React from "react";

import { menuItems } from "./pages";

import { Container, List, Item, ItemLink } from "./Navbar.styled";

export default function Navbar() {
  const elements = menuItems.map(({ id, name, path }) => (
    <Item key={id}>
      <ItemLink
        to={path}
        className={({ isActive }: { isActive: Boolean }) =>
          isActive ? "active" : ""
        }
      >
        {name}
      </ItemLink>
    </Item>
  ));

  return (
    <Container>
      <List>{elements}</List>
    </Container>
  );
}
