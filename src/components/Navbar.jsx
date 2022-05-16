import { Link as ReachLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import {
  Avatar,
  Box,
  Container,
  Link,
  Heading,
  HStack,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  Input,
  FormLabel,
  Tooltip,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BiImage } from "react-icons/bi";
import {
  MdOutlineExplore,
  MdExplore,
  MdBookmark,
  MdOutlineBookmarkBorder,
} from "react-icons/md";

const linkData = [
  {
    id: uuid(),
    icon: AiOutlineHome,
    activeIcon: AiFillHome,
    pathname: "/home",
    tooltipText: "Home",
  },
  {
    id: uuid(),
    icon: MdOutlineExplore,
    activeIcon: MdExplore,
    pathname: "/explore",
    tooltipText: "Explore",
  },
  {
    id: uuid(),
    icon: MdOutlineBookmarkBorder,
    activeIcon: MdBookmark,
    pathname: "/bookmark",
    tooltipText: "Bookmark",
  },
];

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const { pathname } = location;
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Box bg="white" position={"sticky"} top="0" zIndex={5}>
        <Container
          display="flex"
          padding="3"
          justifyContent={"space-between"}
          alignItems="center"
          maxW={"1280px"}
        >
          <Link as={ReachLink} _hover={{ textDecoration: "none" }} to="/home">
            <Heading as="h2">Sociio</Heading>
          </Link>
          {user ? (
            <HStack alignItems={"center"} gap={{ base: 0.5, sm: 1, md: 2 }}>
              {linkData.map((item) => (
                <Link key={item.id} as={ReachLink} to={item.pathname}>
                  <Tooltip label={item.tooltipText}>
                    <IconButton
                      borderRadius="full"
                      icon={
                        pathname === item.pathname ? (
                          <item.activeIcon size="22px" w="25px" h="25px" />
                        ) : (
                          <item.icon size="22px" w="25px" h="25px" />
                        )
                      }
                    />
                  </Tooltip>
                </Link>
              ))}
              <Tooltip label="Create Post" fontSize="md">
                <IconButton
                  onClick={onOpen}
                  borderRadius="full"
                  icon={<IoMdAddCircleOutline size="22px" w="25px" h="25px" />}
                />
              </Tooltip>
              <Link as={ReachLink} to="/profile">
                <Tooltip label="Profile" fontSize="md">
                  <Avatar
                    h="35px"
                    w="35px"
                    borderRadius="full"
                    name={user.firstName + " " + user.lastName}
                    src={user.imageSrc}
                  />
                </Tooltip>
              </Link>
            </HStack>
          ) : null}
        </Container>
      </Box>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              resize={"none"}
              placeholder="What's happening?"
              maxLength="200"
              _focus={{ border: "none" }}
            />
          </ModalBody>
          <ModalFooter justifyContent="flex-start">
            <FormLabel cursor="pointer">
              <Input
                accept="image/*"
                type="file"
                position="absolute"
                bgColor="red.100"
                p="0"
                visibility="hidden"
              />
              <BiImage fontSize="32px" />
            </FormLabel>
            <Button marginLeft={"auto"} mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme={"blue"}>Create</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
