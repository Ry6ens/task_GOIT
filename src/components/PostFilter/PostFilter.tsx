import React, { Dispatch, SetStateAction } from "react";

import Select from "../ui/MySelect/MySelect";

const options = [
  {
    name: "Show all",
    value: "user",
  },
  {
    name: "Sort by follow",
    value: "followers",
  },
  {
    name: "Sort by followings",
    value: "followings",
  },
];

interface Props {
  filter: { sort: string };
  setFilter: Dispatch<SetStateAction<{ sort: string }>>;
}

export default function PostFilter({ filter, setFilter }: Props) {
  return (
    <Select
      value={filter.sort}
      options={options}
      defaultValue={"Sort by:"}
      onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
    />
  );
}
