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
  Tooltip,
  Icon,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdExplore,
  MdBookmark,
  MdOutlineBookmarkBorder,
} from "react-icons/md";
import { PostModal } from "components";

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
  const { user, token } = useSelector((state) => state.auth);

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
          <Link
            as={ReachLink}
            _hover={{ textDecoration: "none" }}
            to={user && token ? "/home" : "/"}
          >
            <Heading as="h2">Sociio</Heading>
          </Link>

          {user ? (
            <HStack alignItems={"center"} gap={{ base: 0.5, sm: 1, md: 2 }}>
              <Tooltip label="Create Post" fontSize="md">
                <IconButton
                  onClick={onOpen}
                  borderRadius="full"
                  aria-label="Create New Post"
                  icon={<IoMdAddCircleOutline size="22px" w="25px" h="25px" />}
                />
              </Tooltip>

              <HStack
                alignItems={"center"}
                position={{ base: "fixed", sm: "static" }}
                bottom="0"
                right={0}
                justifyContent={"space-around"}
                bg={"white"}
                w="100%"
                py={{ base: 1, sm: 0 }}
                gap={{ base: 0.5, sm: 1, md: 2 }}
                borderTop={{ base: "solid 1px lightgray", sm: "none" }}
              >
                {linkData.map((item) => (
                  <Tooltip key={item.id} label={item.tooltipText}>
                    <Link borderRadius="full" as={ReachLink} to={item.pathname}>
                      <Icon
                        w="40px"
                        h="full"
                        p={2}
                        d="block"
                        bg={{ base: "none", sm: "gray.100" }}
                        _hover={{ backgroundColor: "gray.200" }}
                        borderRadius="full"
                        lineHeight={"100%"}
                        as={
                          pathname === item.pathname
                            ? item.activeIcon
                            : item.icon
                        }
                      />
                    </Link>
                  </Tooltip>
                ))}
              </HStack>
              <Link
                borderRadius="full"
                as={ReachLink}
                to={`/profile/${user.username}`}
              >
                <Tooltip label="Profile" fontSize="md">
                  <Avatar
                    h="35px"
                    w="35px"
                    borderRadius="full"
                    name={user.firstName + " " + user.lastName}
                    src={user.avatarURL}
                  />
                </Tooltip>
              </Link>
            </HStack>
          ) : null}
        </Container>
      </Box>

      {/* Modal */}
      <PostModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
