import React, { useState, useEffect } from "react";

import { getUsers, setFollowing } from "@/components/api/getUsers";

import { useFetch } from "@/hooks/useFetch";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useSortedPosts } from "@/hooks/usePosts";
import { useLocalStorage } from "@/hooks/useLocalStorage";

import PostsList from "@/components/PostsList/PostsList";
import PostFilter from "@/components/PostFilter/PostFilter";
import Pagination from "@/components/ui/Pagination/Pagination";
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
  const [limit, setLimit] = useState(12);

  const [fetchPosts, postsIsLoading, postsError] = useFetch(async () => {
    const response = await getUsers();
    setPosts(response);
  });
  const [follow, setFollow] = useLocalStorage("followers", []);
  const sortedPosts = useSortedPosts(posts, filter.sort, follow);
  const sortedPostsLimit = sortedPosts.slice(0, limit);

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const subscribeUser = (post: IUser) => {
    setFollow((prevState: any) => {
      const index = prevState.indexOf(post.id);
      const findIndexPost = posts.findIndex(({ id }) => id === post.id);
      const findPost: IUser | undefined = posts.find(
        ({ id }) => id === post.id
      );
      const subscribe = { followers: post.followers + 1 };
      const unsubscribe = { followers: post.followers - 1 };

      if (index === -1) {
        setFollowing(post.id, subscribe);
        const newPost: any = { ...findPost, ...subscribe };
        posts.splice(findIndexPost, 1, newPost);
        return [...prevState, post.id];
      } else {
        setFollowing(post.id, unsubscribe);
        const newPost: any = { ...findPost, ...unsubscribe };
        posts.splice(findIndexPost, 1, newPost);
        const removeId = prevState.filter((el: string) => el !== post.id);
        return removeId;
      }
    });
  };

  const showMoreItems = () => {
    setLimit((prevValue) => prevValue + 12);
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
        <>
          <PostsList
            posts={sortedPostsLimit}
            btnFollow={follow}
            subscribeUser={subscribeUser}
          />
          {sortedPostsLimit.length >= limit ? (
            <Pagination loadMore={showMoreItems} />
          ) : (
            <></>
          )}
        </>
      )}
    </Container>
  );
}
