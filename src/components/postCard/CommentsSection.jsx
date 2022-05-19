import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addComment, deleteComment, editComment } from "redux/asyncThunks";
import { MdDownloadDone, MdOutlineCancel } from "react-icons/md";

export const CommentsSection = ({ postData }) => {
  const [commentInput, setCommentInput] = useState({
    text: "",
    editMode: false,
    editText: "",
    isLoading: false,
    commentId: "",
  });
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const postCommentClickHandler = async () => {
    if (commentInput.text.trim() !== "") {
      setCommentInput((prev) => ({ ...prev, text: "", isLoading: true }));
      await dispatch(
        addComment({
          postId: postData._id,
          commentData: { text: commentInput.text },
          token,
        })
      );
      setCommentInput((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const saveEditedCommentClick = async (commentId) => {
    if (commentInput.editText.trim() !== "") {
      setCommentInput((prev) => ({
        ...prev,
        editMode: false,
        editText: "",
        isLoading: true,
      }));
      await dispatch(
        editComment({
          postId: postData._id,
          commentId,
          token,
          commentData: { text: commentInput.editText },
        })
      );
      setCommentInput((prev) => ({ ...prev, isLoading: false }));
    }
  };

  return (
    <>
      <HStack width={"full"} px="1">
        <Input
          autoFocus
          value={commentInput.text}
          isDisabled={commentInput.isLoading}
          onChange={(e) =>
            setCommentInput((prev) => ({ ...prev, text: e.target.value }))
          }
          flexGrow={1}
          placeholder="Add a comment"
          size="sm"
        />
        <Button
          isDisabled={commentInput.isLoading || commentInput.text === ""}
          isLoading={commentInput.isLoading}
          onClick={postCommentClickHandler}
          variant={"ghost"}
          colorScheme="blue"
          size="sm"
        >
          Post
        </Button>
      </HStack>

      {postData.comments.map((item) => (
        <Flex
          w="100%"
          key={item._id}
          alignItems={"flex-start"}
          flexGrow="1"
          px="2"
          gap="3"
        >
          <Avatar
            size="xs"
            mt="1"
            src={
              item.username === user.username ? user.avatarURL : item.avatarURL
            }
          />
          <VStack alignItems={"flex-start"} spacing="sm" flexGrow={2}>
            <Text wordBreak={"break-word"} fontWeight={"600"} fontSize="14px">
              {item.firstName + " " + item.lastName}
            </Text>
            {commentInput.editMode && item._id === commentInput.commentId ? (
              <InputGroup flexGrow={"2"} size="md">
                <Input
                  autoFocus
                  variant="flushed"
                  value={commentInput.editText}
                  onChange={(e) =>
                    setCommentInput((prev) => ({
                      ...prev,
                      editText: e.target.value,
                    }))
                  }
                  pr="4.5rem"
                  type="text"
                />
                <InputRightElement width="4.5rem">
                  <Tooltip label="Save">
                    <IconButton
                      onClick={() => saveEditedCommentClick(item._id)}
                      borderRadius={"full"}
                      bg="transparent"
                      icon={<MdDownloadDone size={"20px"} />}
                    />
                  </Tooltip>
                  <Tooltip label="Cancel">
                    <IconButton
                      borderRadius={"full"}
                      bg="transparent"
                      onClick={() =>
                        setCommentInput((prev) => ({
                          ...prev,
                          editText: item.text,
                          editMode: false,
                        }))
                      }
                      icon={<MdOutlineCancel size="20px" />}
                    />
                  </Tooltip>
                </InputRightElement>
              </InputGroup>
            ) : (
              <Text flexGrow={"2"} wordBreak={"break-word"} fontSize="14px">
                {item.text}
              </Text>
            )}
          </VStack>

          {item.username === user.username && !commentInput.editMode ? (
            <Menu>
              <MenuButton
                as={Box}
                cursor="pointer"
                _hover={{ bg: "gray.200" }}
                borderRadius="full"
                p="1"
              >
                <IconButton
                  isDisabled={commentInput.isLoading}
                  isLoading={commentInput.isLoading}
                  aria-label="Open Comment Menu"
                  backgroundColor={"transparent"}
                  size={"sm"}
                  icon={<FaEllipsisV />}
                />
              </MenuButton>
              <MenuList minWidth="140px">
                <MenuItem
                  onClick={() =>
                    setCommentInput((prev) => ({
                      ...prev,
                      editMode: true,
                      editText: item.text,
                      commentId: item._id,
                    }))
                  }
                >
                  Edit
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    dispatch(
                      deleteComment({
                        postId: postData._id,
                        commentId: item._id,
                        token,
                      })
                    )
                  }
                >
                  Delete
                </MenuItem>
              </MenuList>
            </Menu>
          ) : null}
        </Flex>
      ))}
    </>
  );
};
