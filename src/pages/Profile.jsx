import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Text, VStack, Link, HStack } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { PostCard, EditProfileModal } from "components";
import { logout } from "redux/slices/authSlice";

export const Profile = () => {
  const {
    isOpen: isOpenProfile,
    onOpen: onOpenProfile,
    onClose: onCloseProfile,
  } = useDisclosure();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <VStack flexGrow={1} maxW="600px">
      <Avatar size="2xl" name={user.firstName + " " + user.lastName} src={user.imageSrc} />
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
      <Text textAlign={"center"}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
        quibusdam fuga molestiae asperiores impedit omnis.
      </Text>
      <Link color={"blue.500"} href="https://github.com/AnkurChunekar" isExternal>
        view github profile
      </Link>

      <HStack maxW={"500px"} bg="white" borderRadius="lg">
        <VStack py="3" px="5">
          <Text fontWeight="700">0</Text>
          <Text>Following</Text>
        </VStack>
        <VStack py="3" px="5">
          <Text fontWeight="700">2K</Text>
          <Text>Posts</Text>
        </VStack>
        <VStack py="3" px="5">
          <Text fontWeight="700">37.3k</Text>
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
  );
};
