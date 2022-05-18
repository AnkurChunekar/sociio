import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Avatar,
  Box,
  Input,
  Textarea,
  FormLabel,
  VStack,
  FormControl,
} from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";
import { editUser } from "redux/asyncThunks";
import { saveAvatarToCloudinaryService } from "services";
import { setAuthLoading } from "redux/slices/authSlice";

export const EditProfileModal = ({
  isOpenProfile,
  onCloseProfile,
  userData,
  setUserData,
}) => {
  const initialInputData = { ...userData, avatarURL: "", avatarFile: {} };
  const [inputData, setInputData] = useState(initialInputData);
  let reader = new FileReader();

  const { isLoading, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const addProfileImageHandler = (e) => {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setInputData({
          ...inputData,
          avatarURL: reader.result,
          avatarFile: e.target.files[0],
        });
      }
    };
  };

  const updateUserInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const closeModalHandler = () => {
    setInputData(initialInputData);
    onCloseProfile();
  };

  const editUserHandler = async (data) => {
    try {
      const response = await dispatch(editUser({ userData: data, token }));
      if (response.payload.status === 201) {
        setUserData(response.payload.data.user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateUserClickHandler = (e) => {
    e.preventDefault();

    if (inputData.avatarURL !== "") {
      dispatch(setAuthLoading());
      saveAvatarToCloudinaryService(
        inputData.avatarFile,
        editUserHandler,
        inputData,
        onCloseProfile
      );
    }
  };

  useEffect(() => {
    setInputData({ ...userData, avatarURL: "", avatarFile: {} });
  }, [userData]);

  return (
    <Modal isOpen={isOpenProfile} onClose={closeModalHandler}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={updateUserClickHandler}>
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack alignItems={"flex-start"}>
            <FormControl display={"flex"} alignItems="center" gap="5">
              <FormLabel>Avatar</FormLabel>
              <Box position="relative">
                <Avatar
                  name={inputData.firstName + " " + inputData.lastName}
                  src={inputData.avatarURL || userData.avatarURL}
                  size="lg"
                ></Avatar>
                <Box
                  position="absolute"
                  p="1"
                  borderRadius={"full"}
                  top="50%"
                  right="10%"
                  bg="blackAlpha.500"
                >
                  <Box cursor="pointer">
                    <Input
                      type="file"
                      accept="image/*"
                      position="absolute"
                      opacity="0"
                      bgColor="red.100"
                      p="0"
                      onChange={addProfileImageHandler}
                      cursor={"pointer"}
                    />
                    <AiFillCamera fontSize="20px" color="white" />
                  </Box>
                </Box>
              </Box>
            </FormControl>

            <FormControl
              display={"flex"}
              alignItems={"center"}
              w="full"
              isRequired
            >
              <FormLabel>Website</FormLabel>
              <Input
                type="text"
                placeholder="add a website here"
                value={inputData.website}
                name="website"
                onChange={updateUserInput}
                borderColor="var(--chakra-colors-gray-300)"
                borderRadius="md"
              ></Input>
            </FormControl>

            <FormControl
              display={"flex"}
              alignItems={"flex-start"}
              gap="2.5rem"
              w="full"
              isRequired
            >
              <FormLabel>Bio</FormLabel>
              <Textarea
                borderRadius={"md"}
                name="bio"
                placeholder="Add a bio here"
                value={inputData.bio}
                onChange={updateUserInput}
                resize="none"
                _hover={{
                  borderColor: "brand.400",
                }}
              ></Textarea>
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter gap={2}>
          <Button type="submit" isLoading={isLoading} colorScheme="blue">
            Update
          </Button>
          <Button type="button" onClick={closeModalHandler}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
