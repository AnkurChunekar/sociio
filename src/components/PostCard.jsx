import {
  Avatar,
  Flex,
  IconButton,
  Text,
  VStack,
  HStack,
  Box,
  Button,
  Input,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { AiOutlineEllipsis, AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { VscComment } from "react-icons/vsc";

export const PostCard = ({ postData }) => {
  if (postData === undefined) return;

  return (
    <VStack
      p="4"
      gap={2}
      maxW="500px"
      alignItems={"flex-start"}
      borderRadius={"xl"}
      bg="white"
      flexGrow={1}
      w="100%"
    >
      <Flex alignItems={"center"} gap="2" w="full" px="2">
        <Avatar size="sm" src={postData.avatarURL} />
        <HStack alignItems={"center"} flexGrow="1" flexWrap={"wrap"}>
          <Text fontWeight={"600"} fontSize="lg">
            {postData.firstName + " " + postData.lastName}
          </Text>
          <Text color="var(--chakra-colors-gray-500)">
            @{postData.username}
          </Text>
        </HStack>

        {/* ellipsis menu */}

        <Menu>
          <MenuButton
            as={Box}
            cursor="pointer"
            _hover={{ bg: "gray.200" }}
            borderRadius="full"
            p="1"
          >
            <IconButton
              aria-label="Open Menu"
              backgroundColor={"transparent"}
              marginLeft={"auto"}
              fontSize="30px"
              size={"xs"}
              icon={<AiOutlineEllipsis />}
            />
          </MenuButton>
          <MenuList minWidth="140px">
            <MenuItem>Edit</MenuItem>
            <MenuItem>Delete</MenuItem>
          </MenuList>
        </Menu>

        {/* ellipsis menu */}
      </Flex>
      <Text px="2">{postData.content}</Text>

      <HStack alignItems={"center"} gap="50px" w="full" px="2">
        <HStack>
          <Tooltip label="Like" fontSize="md">
            <IconButton
              backgroundColor={"transparent"}
              fontSize="22px"
              size={"xs"}
              py="2"
              borderRadius={"full"}
              icon={<AiOutlineHeart />}
            />
          </Tooltip>
          <Text>{postData.likes.likeCount}</Text>
        </HStack>

        <HStack>
          <Tooltip label="Comment" fontSize="md">
            <IconButton
              backgroundColor={"transparent"}
              fontSize="22px"
              size={"xs"}
              py="2"
              borderRadius={"full"}
              icon={<VscComment />}
            />
          </Tooltip>
          <Text>{postData.comments.length}</Text>
        </HStack>

        <HStack>
          <Tooltip label="Bookmark" fontSize="md">
            <IconButton
              backgroundColor={"transparent"}
              fontSize="20px"
              size={"xs"}
              py="2"
              borderRadius={"full"}
              icon={<BsBookmark />}
            />
          </Tooltip>
        </HStack>
      </HStack>
      <HStack width={"full"} px="1">
        <Input flexGrow={1} placeholder="Add a comment" size="sm" />
        <Button variant={"ghost"} colorScheme="blue" size="sm">
          Post
        </Button>
      </HStack>

      {postData.comments.map((item) => (
        <HStack key={item._id} alignItems={"center"} flexGrow="1" px="2" flexWrap={"wrap"}>
          <Avatar size="xs" src={item.avatarURL} />
          <Text fontWeight={"600"} fontSize="15px">
            {item.firstName + " " + item.lastName}
          </Text>
          <Text fontSize="15px">{item.text}</Text>
        </HStack>
      ))}
    </VStack>
  );
};
