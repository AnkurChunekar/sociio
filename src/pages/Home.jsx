import { useEffect, Fragment, useState } from "react";
import { Text, VStack } from "@chakra-ui/react";
import { PostCard } from "components";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getAllPosts } from "redux/asyncThunks";
import { getFilteredPosts, getHomeFeed } from "helpers/filterHelpers";
import { FilterRow, SearchBar, UserStatusRow } from "components";

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

  const homeFeed = getHomeFeed(user, posts);
  const filteredPosts = getFilteredPosts(homeFeed, sortByValue);

  return (
    <VStack gap={5} minH="88vh">
      <UserStatusRow />
      <SearchBar />
      <FilterRow sortByValue={sortByValue} setSortByValue={setSortByValue} />
      {filteredPosts.length > 0 ? (
        filteredPosts.map((item) => (
          <Fragment key={item._id}>
            <PostCard postData={item} />
          </Fragment>
        ))
      ) : (
        <Text maxW="500px" textAlign={"center"} > Welcome 👋🏼, Follow some users or Add a new post to see some feed here, or checkout the explore page.</Text>
      )}
    </VStack>
  );
};
