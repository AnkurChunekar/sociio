import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Button, Text, VStack, Link, HStack } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { PostCard, EditProfileModal } from "components";
import { logout } from "redux/slices/authSlice";
import { getUserService } from "services";

export const Profile = () => {
  const {
    isOpen: isOpenProfile,
    onOpen: onOpenProfile,
    onClose: onCloseProfile,
  } = useDisclosure();
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useParams();

  useEffect(() => {
    getUserService(username, setUser);
  }, [username]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return user ? (
    <VStack flexGrow={1} maxW="600px">
      <Avatar
        size="2xl"
        name={user.firstName + " " + user.lastName}
        src={user.avatarURL}
      />
      <Text fontWeight={700} fontSize="xl">
        {user.firstName} {user.lastName}
      </Text>
      <Text color={"gray.600"}>@{user.username}</Text>
      <HStack>
        <Button onClick={onOpenProfile} colorScheme={"blue"}>
          Edit Profile
        </Button>
        <Button onClick={handleLogout} colorScheme={"red"}>
          Logout
        </Button>
      </HStack>
      <Text textAlign={"center"}>{user.bio}</Text>
      <Link
        color={"blue.500"}
        href="https://github.com/AnkurChunekar"
        isExternal
      >
        {user.username + ".com"}
      </Link>

      <HStack maxW={"500px"} bg="white" borderRadius="lg">
        <VStack py="3" px="5">
          <Text fontWeight="700">{user.following.length}</Text>
          <Text>Following</Text>
        </VStack>
        <VStack py="3" px="5">
          <Text fontWeight="700">2K</Text>
          <Text>Posts</Text>
        </VStack>
        <VStack py="3" px="5">
          <Text fontWeight="700">{user.followers.length}</Text>
          <Text>Followers</Text>
        </VStack>
      </HStack>

      <Text fontWeight={"700"} fontSize="xl" py="5">
        Your Posts
      </Text>
      <VStack gap={5} marginTop="50px">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </VStack>

      <EditProfileModal
        isOpenProfile={isOpenProfile}
        onOpenProfile={onOpenProfile}
        onCloseProfile={onCloseProfile}
      />
    </VStack>
  ) : (
    <Text>...Fetching User Details</Text>
  );
};
