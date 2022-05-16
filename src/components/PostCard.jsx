import {
  Avatar,
  Flex,
  IconButton,
  Image,
  Text,
  VStack,
  Center,
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

export const PostCard = () => {
  return (
    <VStack
      p="4"
      gap={1}
      maxW="500px"
      alignItems={"flex-start"}
      borderRadius={"xl"}
      bg="white"
      flexGrow={1}
    >
      <Flex alignItems={"center"} gap="2" w="full" px="2">
        <Avatar size="sm" src="https://bit.ly/dan-abramov" />
        <HStack alignItems={"center"} flexGrow="1" flexWrap={"wrap"}>
          <Text fontWeight={"600"} fontSize="lg">
            Dan Abramov
          </Text>
          <Text color="var(--chakra-colors-gray-500)">@dansbramov</Text>
        </HStack>

        {/* ellipsis menu */}

        <Menu>
          <MenuButton as={Box} cursor="pointer" _hover={{bg: "gray.200"}} borderRadius="full" p="1" >
            <IconButton
              aria-label="Open Menu"
              backgroundColor={"transparent"}
              marginLeft={"auto"}
              fontSize="30px"
              size={"xs"}
              icon={<AiOutlineEllipsis />}
            />
          </MenuButton>
          <MenuList minWidth='140px' >
            <MenuItem  >Edit</MenuItem>
            <MenuItem  >Delete</MenuItem>
          </MenuList>
        </Menu>

        {/* ellipsis menu */}
      </Flex>
      <Center maxW="100%" alignSelf={"center"} maxH={"480px"} h="100%">
        <Image
          borderRadius={"md"}
          maxH={"350px"}
          src="https://picsum.photos/600/400"
          alt="post image"
          objectFit="cover"
        />
      </Center>

      <Flex alignItems={"center"} gap="2" w="full" px="2">
        <Tooltip label="Like" fontSize="md">
          <IconButton
            aria-label="Open Menu"
            backgroundColor={"transparent"}
            fontSize="22px"
            size={"xs"}
            py="2"
            borderRadius={"full"}
            icon={<AiOutlineHeart />}
          />
        </Tooltip>

        <Tooltip label="Bookmark" fontSize="md">
          <IconButton
            marginLeft={"auto"}
            aria-label="Open Menu"
            backgroundColor={"transparent"}
            fontSize="20px"
            size={"xs"}
            py="2"
            borderRadius={"full"}
            icon={<BsBookmark />}
          />
        </Tooltip>
      </Flex>
      <Box px="2" fontSize={"15px"}>
        <Text display={"inline"} fontWeight={"600"}>
          Dan Abramov
        </Text>
        <Text d="inline" ml="2">
          This is an image that i will share with you today.
        </Text>
      </Box>
      <HStack width={"full"} px="1">
        <Input flexGrow={1} placeholder="Add a comment" size="sm" />
        <Button variant={"ghost"} colorScheme="blue" size="sm">
          Post
        </Button>
      </HStack>
      <HStack alignItems={"center"} flexGrow="1" px="2" flexWrap={"wrap"}>
        <Avatar size="xs" src="https://bit.ly/dan-abramov" />
        <Text fontWeight={"600"} fontSize="15px">
          Dan Abramov
        </Text>
        <Text fontSize="15px">This is my first comment.</Text>
      </HStack>
    </VStack>
  );
};
