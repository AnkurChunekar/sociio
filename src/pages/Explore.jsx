import { useEffect, useRef, useState, useCallback } from "react";
import { VStack, Text, Box, Spinner } from "@chakra-ui/react";
import { getCurrentPagedPosts } from "services/getCurrentPagedPosts.service";
import { PostCard } from "components";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "redux/asyncThunks";

export const Explore = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [infiniteScrollStatus, setInfinteScrollStatus] = useState({
    loading: false,
    completed: false,
  });
  const targetRef = useRef(null);
  const [pagedPosts, setPagedPosts] = useState([]);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const getNewPosts = useCallback(async () => {
    setInfinteScrollStatus((prev) => ({ ...prev, loading: true }));
    const newPosts = await getCurrentPagedPosts(currentPage);
    if (newPosts.length > 0) {
      setPagedPosts((prev) => {
        return [...prev, ...newPosts];
      });
    } else {
      setInfinteScrollStatus({ loading: false, completed: true });
      intersectionObserver.current.unobserve(targetRef.current);
      return;
    }
    setInfinteScrollStatus((prev) => ({ ...prev, loading: false }));
  }, [currentPage]);

  const intersectionObserver = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !infiniteScrollStatus.loading) {
          setCurrentPage((prev) => prev + 1);
        }
      },
      {
        threshold: 0.1,
      }
    )
  );

  useEffect(() => {
    intersectionObserver.current.observe(targetRef.current);
  }, []);

  useEffect(() => {
    if (currentPage > 0) {
      getNewPosts();
    }
  }, [currentPage, getNewPosts]);

  useEffect(() => {
    if (posts.length < 1) {
      dispatch(getAllPosts());
    }
  }, [dispatch, posts.length]);

  const filteredPosts = infiniteScrollStatus.completed
    ? posts
    : pagedPosts.length > 0
    ? posts.filter((post) => pagedPosts.some((item) => item._id === post._id))
    : [];

  return (
    <>
      <VStack gap={5}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((item) => (
            <PostCard key={item._id} postData={item} />
          ))
        ) : infiniteScrollStatus.loading ? null : (
          <Text>There are no posts to display.</Text>
        )}
        {infiniteScrollStatus.loading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : null}
        {infiniteScrollStatus.completed ? (
          <Text fontSize={"lg"} fontWeight="600">
            You're All Caught Up!😎
          </Text>
        ) : null}
        <Box h={"50px"} w="full" mb="4" ref={targetRef}></Box>
      </VStack>
    </>
  );
};
