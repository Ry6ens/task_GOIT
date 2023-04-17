import React from "react";

import { Button } from "./Pagination.styled";

interface Props {
  loadMore: () => void;
}

export default function Pagination({ loadMore }: Props) {
  return <Button onClick={() => loadMore()}>Load more</Button>;
}
