import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as ReachLink } from "react-router-dom";
import {
  Avatar,
  Flex,
  IconButton,
  Text,
  VStack,
  HStack,
  Box,
  Button,
  Input,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { AiOutlineEllipsis, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { VscComment } from "react-icons/vsc";
import {
  bookmarkPost,
  deletePost,
  dislikePost,
  getAuthUser,
  likePost,
  removePostFromBookmark,
} from "redux/asyncThunks";
import { PostModal } from "./PostModal";

export const PostCard = ({ postData }) => {
  const { user, token } = useSelector((state) => state.auth);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [showCommentsSection, setShowCommentsSection] = useState(false);
  const dispatch = useDispatch();
  if (postData === undefined) {
    return;
  }

  const isCurrentUsersPost = user.username === postData.username;
  const avatarURL =
    postData.username === user.username ? user.avatarURL : postData.avatarURL;

  const isLikedByUser = postData.likes.likedBy.some(
    (item) => item.username === user.username
  );

  const isBookmarkedByUser = user.bookmarks.some((id) => id === postData._id);

  const likeClickHandler = () => {
    if (isLikedByUser) {
     dispatch(dislikePost({ postId: postData._id, token }));
    } else {
      dispatch(likePost({ postId: postData._id, token }));
    }
  };

  const bookmarkClickHandler = async () => {
    if (isBookmarkedByUser) {
      await dispatch(removePostFromBookmark({ postId: postData._id, token }));
      dispatch(getAuthUser({ username: user.username }));
    } else {
      await dispatch(bookmarkPost({ postId: postData._id, token }));
      dispatch(getAuthUser({ username: user.username }));
    }
  };

  return (
    <VStack
      p="4"
      gap={2}
      maxW="500px"
      alignItems={"flex-start"}
      borderRadius={"xl"}
      bg="white"
      flexGrow={1}
      w="100%"
    >
      <Flex alignItems={"center"} gap="2" w="full" px="2">
        <Link
          as={ReachLink}
          display={"flex"}
          gap="2"
          alignItems="center"
          _hover={{ textDecoration: "none" }}
          to={`/profile/${postData.username}`}
        >
          <Avatar size="sm" src={avatarURL} />
          <HStack alignItems={"center"} flexGrow="1" flexWrap={"wrap"}>
            <Text fontWeight={"600"} fontSize="lg">
              {postData.firstName + " " + postData.lastName}
            </Text>
            <Text color="var(--chakra-colors-gray-500)">
              @{postData.username}
            </Text>
          </HStack>
        </Link>

        {/* ellipsis menu */}
        {isCurrentUsersPost ? (
          <Menu>
            <MenuButton
              as={Box}
              cursor="pointer"
              _hover={{ bg: "gray.200" }}
              borderRadius="full"
              p="1"
            >
              <IconButton
                aria-label="Open Menu"
                backgroundColor={"transparent"}
                marginLeft={"auto"}
                fontSize="30px"
                size={"xs"}
                icon={<AiOutlineEllipsis />}
              />
            </MenuButton>
            <MenuList minWidth="140px">
              <MenuItem onClick={onOpen}>Edit</MenuItem>
              <MenuItem
                onClick={() =>
                  dispatch(deletePost({ postId: postData._id, token }))
                }
              >
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        ) : null}

        {/* ellipsis menu */}
      </Flex>
      <Text px="2">{postData.content}</Text>

      <HStack alignItems={"center"} gap="50px" w="full" px="2">
        <HStack>
          <Tooltip label="Like" fontSize="md">
            <IconButton
              onClick={likeClickHandler}
              // isDisabled={likeStatus === "loading"}
              backgroundColor={"transparent"}
              color={isLikedByUser ? "red.500" : "black"}
              fontSize="22px"
              size={"xs"}
              py="2"
              borderRadius={"full"}
              icon={isLikedByUser ? <AiFillHeart /> : <AiOutlineHeart />}
            />
          </Tooltip>
          <Text>{postData.likes.likeCount}</Text>
        </HStack>

        <HStack>
          <Tooltip label="Comment" fontSize="md">
            <IconButton
              onClick={() => setShowCommentsSection((prev) => !prev)}
              backgroundColor={"transparent"}
              fontSize="22px"
              size={"xs"}
              py="2"
              borderRadius={"full"}
              icon={<VscComment />}
            />
          </Tooltip>
          <Text>{postData.comments.length}</Text>
        </HStack>

        <HStack>
          <Tooltip label="Bookmark" fontSize="md">
            <IconButton
              onClick={bookmarkClickHandler}
              backgroundColor={"transparent"}
              color={isBookmarkedByUser ? "blue.400" : "black"}
              fontSize="20px"
              size={"xs"}
              py="2"
              borderRadius={"full"}
              icon={isBookmarkedByUser ? <BsBookmarkFill /> : <BsBookmark />}
            />
          </Tooltip>
        </HStack>
      </HStack>

      {postData.likes.likeCount > 0 ? (
        <Text color={"gray"} fontSize={"sm"} px="2">
          Liked by {postData.likes.likedBy[0].username}
          {postData.likes.likeCount > 1
            ? ` and ${postData.likes.likeCount - 1} others`
            : ""}
        </Text>
      ) : null}

      {showCommentsSection ? (
        <>
          <HStack width={"full"} px="1">
            <Input flexGrow={1} placeholder="Add a comment" size="sm" />
            <Button variant={"ghost"} colorScheme="blue" size="sm">
              Post
            </Button>
          </HStack>

          {postData.comments.map((item) => (
            <HStack
              key={item._id}
              alignItems={"center"}
              flexGrow="1"
              px="2"
              flexWrap={"wrap"}
            >
              <Avatar
                size="xs"
                src={
                  item.username === user.username
                    ? user.avatarURL
                    : item.avatarURL
                }
              />
              <Text fontWeight={"600"} fontSize="15px">
                {item.firstName + " " + item.lastName}
              </Text>
              <Text fontSize="15px">{item.text}</Text>
            </HStack>
          ))}
        </>
      ) : null}

      {isCurrentUsersPost ? (
        <PostModal
          isOpen={isOpen}
          onClose={onClose}
          editMode={true}
          editPostData={postData}
        />
      ) : null}
    </VStack>
  );
};
