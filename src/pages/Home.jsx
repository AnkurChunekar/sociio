import { useEffect, Fragment, useState } from "react";
import { Select, Button, Text, VStack, Flex } from "@chakra-ui/react";
import { PostCard } from "components";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getAllPosts } from "redux/asyncThunks";
import { getFilteredPosts } from "helpers/filterHelpers";

export const Home = () => {
  const [sortByValue, setSortByValue] = useState("");
  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const filteredPosts = getFilteredPosts(user, posts, sortByValue);

  return (
    <VStack gap={5}>
      <Flex
        gap={2}
        alignItems="center"
        bg="white"
        h="60px"
        borderRadius={"lg"}
        px="2"
        w="full"
      >
        <Button
          w="80%"
          onClick={() =>
            setSortByValue(sortByValue === "trending" ? "" : "trending")
          }
          flexGrow={"1"}
        >
          Show {sortByValue === "trending" ? "All" : "Trending"}
        </Button>
        <Select
          value={sortByValue}
          onChange={(e) => setSortByValue(e.target.value)}
          flexGrow={1}
          placeholder="Sort: Random"
          fontWeight={"600"}
          textAlign="center"
        >
          <option value="oldest-first">Oldest First</option>
          <option value="newest-first">Newest First</option>
        </Select>
      </Flex>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((item) => (
          <Fragment key={item._id}>
            <PostCard postData={item} />
          </Fragment>
        ))
      ) : (
        <Text>There are no posts to display 😓.</Text>
      )}
    </VStack>
  );
};
