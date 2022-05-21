import { useState } from "react";
import { Link as ReachLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  VStack,
  HStack,
  Text,
  Avatar,
  Box,
  Link,
  InputGroup,
  Input,
  InputLeftElement,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";

export const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const { usersData } = useSelector((state) => state.users);

  const getSearchedUsers = (users) =>
    users.filter(
      (item) =>
        item.username.includes(searchText) ||
        item.firstName.includes(searchText) ||
        item.lastName.includes(searchText)
    );

  const searchedUsers = getSearchedUsers(usersData);

  return (
    <Box w="full" position={"relative"}>
      <InputGroup bg="white" borderRadius="lg" p="2">
        <InputLeftElement
          top="14%"
          left="2%"
          pointerEvents="none"
          children={<MdSearch size="26px" />}
        />
        <Input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Users"
        />
      </InputGroup>

      {searchedUsers.length > 0 && searchText.trim() !== "" ? (
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
          {searchedUsers.map((item) => (
            <ListItem p="2" key={item._id}>
              <Link
                as={ReachLink}
                display={"flex"}
                gap="2"
                alignItems="center"
                _hover={{ textDecoration: "none" }}
                to={`/profile/${item.username}`}
              >
                <HStack alignItems={"flex-start"}>
                  <Avatar
                    size="sm"
                    src={item.avatarURL}
                    name={item.firstName + " " + item.lastName}
                    mt="0.5"
                  />
                  <VStack spacing="0" alignItems={"flex-start"} flexGrow="1">
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
          ))}
        </UnorderedList>
      ) : null}
    </Box>
  );
};
