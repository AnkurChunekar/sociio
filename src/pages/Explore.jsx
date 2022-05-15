import { VStack } from "@chakra-ui/react";
import { PostCard } from "components";

export const Explore = () => {
  return (
    <VStack gap={5}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </VStack>
  );
};
