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
  FormLabel,
  Input,
  Button,
  VStack,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { BiImage } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { createPost, editPost } from "redux/asyncThunks";
import { saveFileToCloudinary } from "services";

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
  const [isLoading, setLoading] = useState(false);
  const initialFileData = { fileURL: editPostData.fileURL || "", file: {} };
  const [fileData, setFileData] = useState(initialFileData);

  const closeModalHandler = () => {
    !editMode && setPostData({ content: "" });
    onClose();
  };

  let reader = new FileReader();

  const addImageHandler = (e) => {
    setLoading(true);
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFileData({ fileURL: reader.result, file: e.target.files[0] });
        setLoading(false);
      }
    };
  };

  const createOrEditPostHandler = (fileURL) => {
    if (editMode) {
      const data = {
        ...editPostData,
        content: postData.content,
        fileURL: fileURL || fileData.fileURL || "",
      };
      dispatch(
        editPost({
          postData: data,
          token,
        })
      );
    } else {
      const data = {
        ...postData,
        fileURL: fileURL || fileData.fileURL || "",
      };

      dispatch(createPost({ postData: data, token }));
    }
    setFileData(initialFileData);

    setLoading(false);
    closeModalHandler();
  };

  const savePostHandler = () => {
    setLoading(true);
    const data = {
      ...postData,
      fileURL: fileData.fileURL,
      file: fileData.file,
    };
    const oldAvatarURL = fileData.fileURL || "";
    saveFileToCloudinary(createOrEditPostHandler, data, oldAvatarURL);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModalHandler}>
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
          <VStack alignItems={"flex-start"} spacing="sm">
            <FormLabel cursor="pointer">
              <Input
                accept="image/*,video/*"
                type="file"
                position="absolute"
                bgColor="red.100"
                p="0"
                visibility="hidden"
                onChange={addImageHandler}
              />
              <BiImage fontSize="32px" />
            </FormLabel>
            {fileData.fileURL !== "" ? (
              <ButtonGroup size="sm" isAttached variant="outline">
                <Button
                  _hover={{
                    borderColor: "initial",
                  }}
                  _active={{
                    borderColor: "initial",
                  }}
                >
                  {fileData.fileURL.includes("video") ? "Video" : "Image"}
                </Button>
                <IconButton
                  icon={<GrFormClose />}
                  fontSize="25px"
                  onClick={() => setFileData({ fileURL: "", fileData: {} })}
                />
              </ButtonGroup>
            ) : null}
          </VStack>

          <Button marginLeft={"auto"} mr={3} onClick={closeModalHandler}>
            Cancel
          </Button>
          <Button
            isLoading={isLoading}
            isDisabled={postData.content.trim() === "" || isLoading}
            onClick={savePostHandler}
            colorScheme={"blue"}
          >
            {editMode ? "Save" : "Create"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
