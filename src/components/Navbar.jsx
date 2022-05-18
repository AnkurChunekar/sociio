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
              <Tooltip label="Create Post" fontSize="md">
                <IconButton
                  onClick={onOpen}
                  borderRadius="full"
                  icon={<IoMdAddCircleOutline size="22px" w="25px" h="25px" />}
                />
              </Tooltip>

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
