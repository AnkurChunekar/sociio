import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const [userData, setUserData] = useState(null);

  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useParams();

  useEffect(() => {
    getUserService(username, setUserData);
  }, [username]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const currentUsersPosts =
    userData && posts.filter((item) => item.username === userData.username);

  return userData ? (
    <VStack flexGrow={1} maxW="600px">
      <Avatar
        size="2xl"
        name={userData.firstName + " " + userData.lastName}
        src={userData.avatarURL}
      />
      <Text fontWeight={700} fontSize="xl">
        {userData.firstName} {userData.lastName}
      </Text>
      <Text color={"gray.600"}>@{userData.username}</Text>

      {user._id === userData._id ? (
        <HStack>
          <Button onClick={onOpenProfile} colorScheme={"blue"}>
            Edit Profile
          </Button>
          <Button onClick={handleLogout} colorScheme={"red"}>
            Logout
          </Button>
        </HStack>
      ) : null}

      <Text textAlign={"center"}>{userData.bio}</Text>
      <Link color={"blue.500"} href={userData.website} isExternal>
        {userData.website.replace("https://", "")}
      </Link>

      <HStack maxW={"500px"} bg="white" borderRadius="lg">
        <VStack py="3" px="5">
          <Text fontWeight="700">{userData.following.length}</Text>
          <Text>Following</Text>
        </VStack>
        <VStack py="3" px="5">
          <Text fontWeight="700">0</Text>
          <Text>Posts</Text>
        </VStack>
        <VStack py="3" px="5">
          <Text fontWeight="700">{userData.followers.length}</Text>
          <Text>Followers</Text>
        </VStack>
      </HStack>

      <Text fontWeight={"700"} fontSize="xl" py="5">
        Your Posts
      </Text>
      <VStack gap={5} marginTop="50px">
        {userData
          ? currentUsersPosts.map((item) => (
              <Fragment key={item._id}>
                <PostCard postData={item} />
              </Fragment>
            ))
          : null}
      </VStack>

      <EditProfileModal
        isOpenProfile={isOpenProfile}
        onOpenProfile={onOpenProfile}
        onCloseProfile={onCloseProfile}
        userData={userData}
        setUserData={setUserData}
      />
    </VStack>
  ) : (
    <Text>...Fetching User Details</Text>
  );
};
