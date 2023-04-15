import React, { useState, useEffect } from "react";

import { getUsers, addFollow } from "@/components/api/getUsers";
import { useFetch } from "@/hooks/useFetch";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import ButtonBack from "@/components/ui/ButtonBack/ButtonBack";
import ButtonFollow from "@/components/ui/ButtonFollow/ButtonFollow";

import ArrowLeftIcon from "@/components/icons/ArrowLeft/ArrowLeft";
import LogoIcon from "@/components/icons/Logo/Logo";

import MainImage from "@/images/main.png";

import {
  Container,
  List,
  ListItem,
  OverlayLogo,
  Image,
  Line,
  OverlayIMG,
  AvatarIMG,
  TextTweets,
  TextFollowers,
} from "./Tweets.styled";

interface IUser {
  id: string;
  user: string;
  tweets: number;
  followers: number;
  avatar: string;
}

export default function TweetsPage() {
  const matchesMobile = useMediaQuery("(max-width: 767.98px)");
  const matchesTablet = useMediaQuery("(min-width: 768px)");

  const [users, setUsers] = useState<Array<IUser>>([]);

  const [fetchPosts, postsIsLoading, postsError] = useFetch(async () => {
    const response = await getUsers();
    setUsers(response);
  });

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    addFollow(1, { followers: 100501 });
  };

  const elements = users.map(({ id, user, tweets, followers, avatar }) => (
    <ListItem key={id}>
      <OverlayLogo>
        <LogoIcon width="76" height="22" />
      </OverlayLogo>
      <Image src={MainImage} alt="back" />
      <Line></Line>
      <OverlayIMG>
        <AvatarIMG src={avatar} alt={user} />
      </OverlayIMG>
      <TextTweets>{tweets} TWEETS</TextTweets>
      <TextFollowers>
        {followers.toLocaleString("en-US")} FOLLOWERS
      </TextFollowers>
      <ButtonFollow text="Follow" onClick={handleClick} />
    </ListItem>
  ));

  return (
    <Container>
      <ButtonBack>
        {matchesMobile && <ArrowLeftIcon width="16" height="16" />}
        {matchesTablet && <ArrowLeftIcon width="32" height="32" />}
      </ButtonBack>
      <List>{elements}</List>
    </Container>
  );
}
