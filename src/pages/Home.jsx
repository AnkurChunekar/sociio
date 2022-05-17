import { useEffect, Fragment } from "react";
import { Text, VStack } from "@chakra-ui/react";
import { PostCard } from "components";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getAllPosts } from "redux/asyncThunks";

export const Home = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const getReversedPosts = () => [...posts].reverse();

  return (
    <VStack gap={5}>
      {posts.length > 0 ? (
        getReversedPosts().map((item) => (
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
