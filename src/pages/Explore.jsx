import { Fragment } from "react";
import { useSelector } from "react-redux";
import { VStack, Text } from "@chakra-ui/react";
import { PostCard } from "components";

export const Explore = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <VStack gap={5}>
      {posts.length > 0 ? (
        posts.map((item) => (
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
