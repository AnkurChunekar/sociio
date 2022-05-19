export const getHomeFeed = (user, posts) => {
  return posts
    .filter(
      (item) =>
        user.following.some((el) => el.username === item.username) ||
        item.username === user.username
    )
    .reverse();
};

export const getFilteredPosts = (feed, sortByValue) => {
  switch (sortByValue) {
    case "":
      return feed;
    case "oldest-first":
      return [...feed].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    case "newest-first":
      return [...feed].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    case "trending":
      return [...feed].sort((a, b) => {
        const interactionOnA = a.comments.length + a.likes.likeCount;
        const interactionOnB = b.comments.length + b.likes.likeCount;

        return interactionOnB - interactionOnA;
      });
    default:
      return feed;
  }
};
