import { Link as ReachLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  UnorderedList,
  ListItem,
  Link,
  HStack,
  Avatar,
  VStack,
  Text,
} from "@chakra-ui/react";

export const FollowCountModal = ({ isOpen, onClose, followCountData }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{followCountData.dataName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UnorderedList
              zIndex={"2"}
              position={"absolute"}
              top="60px"
              right={0}
              border="solid 1px lightgray"
              borderRadius={"md"}
              p="2"
              w="full"
              listStyleType={"none"}
              bg="white"
            >
              {followCountData.data
                ? followCountData.data.map((item) => (
                    <ListItem p="2" key={item.username}>
                      <Link
                        as={ReachLink}
                        display={"flex"}
                        gap="2"
                        alignItems="center"
                        _hover={{ textDecoration: "none" }}
                        to={`/profile/${item.username}`}
                        onClick={() => onClose()}
                      >
                        <HStack alignItems={"flex-start"}>
                          <Avatar
                            size="sm"
                            src={
                              item.username === user.username
                                ? user.avatarURL
                                : item.avatarURL
                            }
                            name={item.firstName + " " + item.lastName}
                            mt="0.5"
                          />
                          <VStack
                            spacing="0"
                            alignItems={"flex-start"}
                            flexGrow="1"
                          >
                            <Text fontWeight={"600"}>
                              {item.firstName + " " + item.lastName}
                            </Text>
                            <Text
                              fontSize={"15px"}
                              color="var(--chakra-colors-gray-500)"
                            >
                              @{item.username}
                            </Text>
                          </VStack>
                        </HStack>
                      </Link>
                    </ListItem>
                  ))
                : null}
            </UnorderedList>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
