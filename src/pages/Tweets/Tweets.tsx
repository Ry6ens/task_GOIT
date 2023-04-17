import React, { useState, useEffect } from "react";

import { getUsers } from "@/components/api/getUsers";

import { useFetch } from "@/hooks/useFetch";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useSortedPosts } from "@/hooks/usePosts";
import { useLocalStorage } from "@/hooks/useLocalStorage";

import PostsList from "@/components/PostsList/PostsList";
import PostFilter from "@/components/PostFilter/PostFilter";

import ButtonBack from "@/components/ui/ButtonBack/ButtonBack";
import Loader from "@/components/ui/Loader/Loader";

import ArrowLeftIcon from "@/components/icons/ArrowLeft/ArrowLeft";

import { Container, TitleError, OverlayFilter } from "./Tweets.styled";

interface IUser extends Record<string, any> {
  id: string;
  user: string;
  tweets: number;
  followers: number;
  avatar: string;
}

export default function TweetsPage() {
  const matchesMobile = useMediaQuery("(max-width: 767.98px)");
  const matchesTablet = useMediaQuery("(min-width: 768px)");

  const [posts, setPosts] = useState<Array<IUser>>([]);
  const [filter, setFilter] = useState({ sort: "" });

  const [follow, setFollow] = useLocalStorage("followers");
  const [fetchPosts, postsIsLoading, postsError] = useFetch(async () => {
    const response = await getUsers();
    setPosts(response);
  });
  const sortedPosts = useSortedPosts(posts, filter.sort);

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const subscribeUser = (post: IUser) => {
    setFollow((prevState: any) => {
      const index = prevState.indexOf(post.id);

      if (index === -1) {
        console.log("-1", prevState);
        return [...prevState, post.id];
      } else {
        prevState.splice(index, 1);
        console.log("prevFollowings", prevState);
        return [...prevState];
      }
    });
  };

  return (
    <Container>
      <ButtonBack>
        {matchesMobile && <ArrowLeftIcon width="16" height="16" />}
        {matchesTablet && <ArrowLeftIcon width="32" height="32" />}
      </ButtonBack>
      <OverlayFilter>
        <PostFilter filter={filter} setFilter={setFilter} />
      </OverlayFilter>
      {postsError && <TitleError>{postsError}</TitleError>}
      {postsIsLoading ? (
        <Loader />
      ) : (
        <PostsList posts={sortedPosts} subscribeUser={subscribeUser} />
      )}
    </Container>
  );
}
