import { VStack } from "@chakra-ui/react";
import { PostCard } from "components";

export const Home = () => {
  return (
    <VStack gap={5}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </VStack>
  );
};
