import { useEffect, useRef, useState, useCallback } from "react";
import { VStack, Text, Box, Spinner } from "@chakra-ui/react";
import { getCurrentPagedPosts } from "services/getCurrentPagedPosts.service";
import { PostCard } from "components";

export const Explore = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [infiniteScrollStatus, setInfinteScrollStatus] = useState({
    loading: false,
    completed: false,
  });
  const targetRef = useRef(null);
  const [pagedPosts, setPagedPosts] = useState([]);

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

  return (
    <>
      <VStack gap={5}>
        {pagedPosts.length > 0 ? (
          pagedPosts.map((item) => <PostCard key={item._id} postData={item} />)
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
