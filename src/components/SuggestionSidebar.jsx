import {
  VStack,
  Heading,
  Text,
  Avatar,
  Box,
  IconButton,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import { AiOutlineUserAdd } from "react-icons/ai";

const SuggestedProfile = () => {
  return (
    <Flex w="full" alignItems={"flex-start"} flexGrow="1" gap={2}>
      <Avatar size="sm" src="https://bit.ly/dan-abramov" />
      <Box>
        <Text fontWeight={"600"} lineHeight="1">
          Dan Abramov
        </Text>
        <Text fontSize={"sm"} color="var(--chakra-colors-gray-500)">
          @dansbramov
        </Text>
      </Box>
      <Tooltip label="Follow" fontSize="md">
        <IconButton
          borderRadius="full"
          aria-label="Search database"
          size={"sm"}
          marginLeft="auto"
          icon={<AiOutlineUserAdd size="20px" />}
        />
      </Tooltip>
    </Flex>
  );
};

export const SuggestionSidebar = () => {
  return (
    <VStack
      borderRadius={"lg"}
      p="5"
      gap="2"
      alignItems={"flex-start"}
      bg={"white"}
      flexGrow="1"
      position={"sticky"}
      top="87px"
      maxW={"305px"}
      minW="235px"
      display={{ base: "none", sm: "none", md: "block" }}
    >
      <Heading as="h3" fontSize={"lg"} mb="4">
        Suggested For You
      </Heading>
      <VStack gap={2}>
        <SuggestedProfile />
        <SuggestedProfile />
        <SuggestedProfile />
        <SuggestedProfile />
      </VStack>
    </VStack>
  );
};
