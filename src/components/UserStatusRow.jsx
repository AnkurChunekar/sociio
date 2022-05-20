import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Flex,
  Avatar,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  AspectRatio,
  Image,
} from "@chakra-ui/react";

export const UserStatusRow = () => {
  const { usersData } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentStatusURL, setCurrentStatusURL] = useState("");

  const followedUsers = usersData.filter((item) =>
    user.following.some(
      (el) => el.username === item.username || item.username === user.username
    )
  );

  return (
    <Flex
      flexShrink={2}
      w={{ base: "95vw", sm: "full", md: "full" }}
      gap="1.5rem"
      boxShadow={"sm"}
      bg="white"
      px="4"
      py="5"
      borderRadius={"lg"}
      overflowX="auto"
    >
      {followedUsers.map((item) => (
        <IconButton
          key={item._id}
          borderRadius="full"
          onClick={() => {
            setCurrentStatusURL(item.statusImgURL);
            onOpen();
          }}
          icon={
            <Avatar
              outline={"3px solid var(--chakra-colors-blue-500)"}
              outlineOffset="2px"
              size="md"
              name={item.firstName + " " + item.lastName}
              src={item.avatarURL}
            />
          }
        />
      ))}

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent pb="3">
          <ModalHeader>Status</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio w="full" ratio={4 / 3}>
              <Image w="full" src={currentStatusURL} objectFit="cover" />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
