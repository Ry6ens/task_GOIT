import { useMemo } from "react";

export const useSortedPosts = <T extends Record<string, string>>(
  posts: T[],
  sort: keyof T
) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      console.log(sort);

      return [...posts].sort((a: T, b: T) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};
