import { useSelector } from "react-redux";
import { Box, Text, VStack } from "@chakra-ui/react";
import { PostCard } from "components";
import { Fragment } from "react";

export const Bookmark = () => {
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const bookmarkedPosts = posts.filter((item) =>
    user.bookmarks.includes(item._id)
  );

  return (
    <Box minH={"90vh"} w="full" maxW={"500px"}>
      <VStack gap={5} w="full">
        {bookmarkedPosts.length > 0 ? (
          bookmarkedPosts.map((item) => (
            <Fragment key={item._id}>
              <PostCard postData={item} />
            </Fragment>
          ))
        ) : (
          <Text>You haven't Bookmarked any post 😓</Text>
        )}
      </VStack>
    </Box>
  );
};
