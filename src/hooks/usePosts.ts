import { useMemo } from "react";

export const useSortedPosts = <T extends Record<string, number>>(
  posts: T[],
  sort: keyof T,
  follow: number[]
) => {
  const sortedPosts = useMemo(() => {
    if (sort === "followings") {
      const arrayFollowers = posts.filter((el) => {
        return follow.includes(el.id);
      });
      return arrayFollowers;
    }

    if (sort === "follow") {
      const arrayFollowers = posts.filter((el) => {
        return !follow.includes(el.id);
      });
      return arrayFollowers;
    }

    return posts;
  }, [sort, posts, follow]);

  return sortedPosts;
};
