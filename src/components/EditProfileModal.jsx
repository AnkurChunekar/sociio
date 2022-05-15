import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Avatar,
  Box,
  Input,
  Textarea,
  FormLabel,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";

export const EditProfileModal = ({ isOpenProfile, onCloseProfile }) => {
  return (
    <Modal isOpen={isOpenProfile} onClose={onCloseProfile}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack alignItems={"flex-start"}>
            <HStack alignItems={"center"} gap="5">
              <Text>Avatar</Text>
              <Box position="relative">
                <Avatar
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                  size="lg"
                ></Avatar>
                <Box position="absolute" top="60%" right="-10%">
                  <FormLabel cursor="pointer">
                    <Input
                      type="file"
                      position="absolute"
                      opacity="0"
                      bgColor="red.100"
                      p="0"
                      visibility="hidden"
                    />
                    <AiFillCamera fontSize="20px" color="white" />
                  </FormLabel>
                </Box>
              </Box>
            </HStack>
            <HStack alignItems={"center"} gap="2" w="full">
              <Text>Website</Text>
              <Input
                placeholder="https://adarshbalika.netlify.app/"
                borderColor="var(--chakra-colors-gray-300)"
                borderRadius="md"
              ></Input>
            </HStack>
            <HStack alignItems={"flex-start"} gap="2.7rem" w="full">
              <Text>Bio</Text>
              <Textarea
                borderRadius={"md"}
                placeholder="An aspiring web developer"
                resize="none"
                _hover={{
                  borderColor: "brand.400",
                }}
              ></Textarea>
            </HStack>
          </VStack>
        </ModalBody>
        <ModalFooter gap={2}>
          <Button colorScheme="blue">Update</Button>
          <Button onClick={onCloseProfile}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
