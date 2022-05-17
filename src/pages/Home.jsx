import { useEffect, useState, Fragment } from "react";
import { Text, VStack } from "@chakra-ui/react";
import { PostCard } from "components";
import { getAllPostsService } from "services";
import { useDispatch } from "react-redux";
import { getAllUsers } from "redux/asyncThunks";

export const Home = () => {
  const [postsData, setPostsData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    getAllPostsService(setPostsData);
  }, []);

  return (
    <VStack gap={5}>
      {postsData.length > 0 ? (
        postsData.map((item) => (
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
