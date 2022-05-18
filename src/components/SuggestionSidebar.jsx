import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
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
import { followUser, editUser } from "redux/asyncThunks";

const SuggestedProfile = ({ profileData, token, status }) => {
  const { username, avatarURL, firstName, lastName, _id } = profileData;
  const dispatch = useDispatch();

  const followUserHandler = async () => {
    try {
      const response = await dispatch(followUser({ followUserId: _id, token }));
      dispatch(editUser({ userData: response.payload.data.user, token }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex w="full" alignItems={"flex-start"} flexGrow="1" gap={2}>
      <Link
        _hover={{ textDecoration: "none" }}
        as={ReachLink}
        to={`/profile/${username}`}
      >
        <HStack w="full" alignItems={"flex-start"} flexGrow="1" gap={2}>
          <Avatar size="sm" src={avatarURL} />
          <Box>
            <Text fontWeight={"600"} lineHeight="1">
              {firstName + " " + lastName}
            </Text>
            <Text fontSize={"sm"} color="var(--chakra-colors-gray-500)">
              @{username}
            </Text>
          </Box>
        </HStack>
      </Link>

      <Tooltip label="Follow" fontSize="md">
        <IconButton
          isDisabled={status === "loading"}
          borderRadius="full"
          aria-label="follow user"
          size={"sm"}
          marginLeft="auto"
          onClick={followUserHandler}
          icon={<AiOutlineUserAdd size="20px" />}
        />
      </Tooltip>
    </Flex>
  );
};

export const SuggestionSidebar = () => {
  const { usersData, status } = useSelector((state) => state.users);
  const { user, token } = useSelector((state) => state.auth);

  const getSuggestedUsers = () =>
    usersData.filter(
      (item) =>
        item.username !== user.username &&
        !user.following.some((el) => el.username === item.username)
    );

  const suggestedUsers = getSuggestedUsers();

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
        {suggestedUsers.length > 0 ? (
          suggestedUsers.map((item) => (
            <Fragment key={item._id}>
              <SuggestedProfile
                profileData={item}
                token={token}
                status={status}
              />
            </Fragment>
          ))
        ) : (
          <Text>You have followed all the suggested users 🥳</Text>
        )}
      </VStack>
    </VStack>
  );
};
