import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Textarea,
  //   FormLabel,
  //   Input,
  Button,
} from "@chakra-ui/react";
// import { BiImage } from "react-icons/bi";
import { createPost, editPost } from "redux/asyncThunks";

export const PostModal = ({
  isOpen,
  onClose,
  editMode = false,
  editPostData = {},
}) => {
  const [postData, setPostData] = useState({
    content: editMode ? editPostData.content : "",
  });
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const createOrEditPostHandler = () => {
    if (editMode)
      dispatch(
        editPost({
          postData: { ...editPostData, content: postData.content },
          token,
        })
      );
    else dispatch(createPost({ postData, token }));

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> {editMode ? "Edit" : "Create"} Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea
            resize="none"
            placeholder="What's happening?"
            maxLength="200"
            value={postData.content}
            onChange={(e) =>
              setPostData((postData) => ({
                ...postData,
                content: e.target.value,
              }))
            }
          />
        </ModalBody>
        <ModalFooter>
          {/* <FormLabel cursor="pointer">
            <Input
              accept="image/*"
              type="file"
              position="absolute"
              bgColor="red.100"
              p="0"
              visibility="hidden"
            />
            <BiImage fontSize="32px" />
          </FormLabel> */}
          <Button marginLeft={"auto"} mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            isDisabled={postData.content.trim() === ""}
            onClick={createOrEditPostHandler}
            colorScheme={"blue"}
          >
            {editMode ? "Save" : "Create"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
