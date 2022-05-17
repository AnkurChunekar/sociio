import { useSelector } from "react-redux";
import { Link as ReachLink } from "react-router-dom";
import {
  VStack,
  HStack,
  Heading,
  Text,
  Avatar,
  Box,
  IconButton,
  Flex,
  Tooltip,
  Link,
} from "@chakra-ui/react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Fragment } from "react";

const SuggestedProfile = ({ profileData }) => {
  return (
    <Flex w="full" alignItems={"flex-start"} flexGrow="1" gap={2}>
      <Link _hover={{"textDecoration": "none"}} as={ReachLink} to={`/profile/${profileData.username}`}>
        <HStack w="full" alignItems={"flex-start"} flexGrow="1" gap={2}>
          <Avatar size="sm" src={profileData.avatarURL} />
          <Box>
            <Text fontWeight={"600"} lineHeight="1">
              {profileData.firstName + " " + profileData.lastName}
            </Text>
            <Text fontSize={"sm"} color="var(--chakra-colors-gray-500)">
              @{profileData.username}
            </Text>
          </Box>
        </HStack>
      </Link>

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
  const { usersData } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);

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
        {usersData.map((item) =>
          item._id !== user._id ? (
            <Fragment key={item._id}>
              <SuggestedProfile profileData={item} />
            </Fragment>
          ) : null
        )}
      </VStack>
    </VStack>
  );
};
