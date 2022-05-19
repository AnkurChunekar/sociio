import { useEffect, Fragment } from "react";
import { Text, VStack } from "@chakra-ui/react";
import { PostCard } from "components";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getAllPosts } from "redux/asyncThunks";

export const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const getHomeFeed = () => {
    return posts
      .filter(
        (item) =>
          user.following.some((el) => el.username === item.username) ||
          item.username === user.username
      )
      .reverse();
  };

  const homeFeed = getHomeFeed();

  return (
    <VStack gap={5}>
      {homeFeed.length > 0 ? (
        homeFeed.map((item) => (
          <Fragment key={item._id}>
            <PostCard postData={item} />
          </Fragment>
        ))
      ) : (
        <Text>There are no posts to display.</Text>
      )}
    </VStack>
  );
};
