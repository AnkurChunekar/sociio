const getHomeFeed = (user, posts) => {
  return posts
    .filter(
      (item) =>
        user.following.some((el) => el.username === item.username) ||
        item.username === user.username
    )
    .reverse();
};

export const getFilteredPosts = (user, posts, sortByValue) => {
    const homeFeed = getHomeFeed(user, posts);

  switch (sortByValue) {
    case "":
      return homeFeed;
    case "oldest-first":
      return [...homeFeed].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    case "newest-first":
      return [...homeFeed].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    case "trending":
      return [...homeFeed].sort((a, b) => {
        const interactionOnA = a.comments.length + a.likes.likeCount;
        const interactionOnB = b.comments.length + b.likes.likeCount;

        return interactionOnB - interactionOnA;
      });
    default:
      return homeFeed;
  }
};
