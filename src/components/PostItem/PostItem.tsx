import React from "react";

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
  Button,
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
  btnFollow: string[];
  subscribeUser: (p: IPost) => void;
}

export default function PostItem({ post, btnFollow, subscribeUser }: Props) {
  const followBoolean = btnFollow.find((el) => el === post.id);

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
      <Button
        type="button"
        className={followBoolean ? "following" : ""}
        onClick={() => subscribeUser(post)}
      >
        {followBoolean ? "Following" : "Follow"}
      </Button>
    </ListItem>
  );
}
