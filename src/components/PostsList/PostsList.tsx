import React from "react";

import PostItem from "../PostItem/PostItem";

import { List, TextNotFound } from "./PostsList.styled";

interface IPost {
  id: string;
  user: string;
  tweets: number;
  followers: number;
  avatar: string;
}

interface Props {
  posts: Array<IPost>;
  btnFollow: string[];
  subscribeUser: (p: IPost) => void;
}

export default function PostsList({ posts, btnFollow, subscribeUser }: Props) {
  const elements = posts.map((item: IPost) => (
    <PostItem
      key={item.id}
      post={item}
      btnFollow={btnFollow}
      subscribeUser={subscribeUser}
    />
  ));

  return (
    <>
      {posts.length ? (
        <List>{elements}</List>
      ) : (
        <TextNotFound>Posts not found!</TextNotFound>
      )}
    </>
  );
}
