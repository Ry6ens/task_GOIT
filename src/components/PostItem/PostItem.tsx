import React from "react";

import ButtonFollow from "@/components/ui/ButtonFollow/ButtonFollow";

import LogoIcon from "@/components/icons/Logo/Logo";

import MainImage from "@/images/main.png";

import {
  ListItem,
  OverlayLogo,
  Image,
  Line,
  OverlayIMG,
  AvatarIMG,
  TextTweets,
  TextFollowers,
} from "./PostItem.styled";

interface IPost {
  id: string;
  user: string;
  tweets: number;
  followers: number;
  avatar: string;
}

interface Props {
  post: IPost;
  subscribeUser: (p: IPost) => void;
}

export default function PostItem({ post, subscribeUser }: Props) {
  return (
    <ListItem>
      <OverlayLogo>
        <LogoIcon width="76" height="22" />
      </OverlayLogo>
      <Image src={MainImage} alt="back" />
      <Line></Line>
      <OverlayIMG>
        <AvatarIMG src={post.avatar} alt={post.user} />
      </OverlayIMG>
      <TextTweets>{post.tweets} TWEETS</TextTweets>
      <TextFollowers>
        {post.followers.toLocaleString("en-US")} FOLLOWERS
      </TextFollowers>
      <ButtonFollow text="Follow" onClick={() => subscribeUser(post)} />
    </ListItem>
  );
}
