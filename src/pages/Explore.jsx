import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { VStack, Text } from "@chakra-ui/react";
import { PostCard, FilterRow, SearchBar } from "components";
import { getFilteredPosts } from "helpers/filterHelpers";

export const Explore = () => {
  const [sortByValue, setSortByValue] = useState("");
  const { posts } = useSelector((state) => state.posts);

  const filteredPosts = getFilteredPosts(posts, sortByValue);

  return (
    <VStack gap={5}>
      <SearchBar />
       <FilterRow sortByValue={sortByValue} setSortByValue={setSortByValue} />
      {filteredPosts.length > 0 ? (
        filteredPosts.map((item) => (
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
