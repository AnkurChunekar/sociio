import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Avatar,
  Button,
  Text,
  VStack,
  Link,
  HStack,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { PostCard, EditProfileModal } from "components";
import { logout } from "redux/slices/authSlice";
import { getUserService } from "services";
import { editUser, followUser, unfollowUser } from "redux/asyncThunks";

export const Profile = () => {
  const {
    isOpen: isOpenProfile,
    onOpen: onOpenProfile,
    onClose: onCloseProfile,
  } = useDisclosure();
  const [userData, setUserData] = useState(null);
  const toast = useToast();

  const { user, token } = useSelector((state) => state.auth);
  const { status } = useSelector((state) => state.users);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useParams();
  const isFollowedByUser = user.following.some(
    (item) => item.username === userData?.username
  );

  useEffect(() => {
    getUserService(username, setUserData);
  }, [username, user]);

  const handleLogout = () => {
    navigate("/");
    dispatch(logout());
    toast({
      title: "Logout Successfull!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const currentUsersPosts =
    userData && posts.filter((item) => item.username === userData.username);

  const followClickHandler = async () => {
    try {
      const response = await dispatch(
        isFollowedByUser
          ? unfollowUser({ followUserId: userData._id, token })
          : followUser({ followUserId: userData._id, token })
      );
      dispatch(editUser({ userData: response.payload.data.user, token }));
    } catch (error) {
      console.error(error);
    }
  };

  return userData ? (
    <VStack flexGrow={1} maxW="600px" minH="88vh">
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
      ) : (
        <Button
          isDisabled={status === "loading"}
          isLoading={status === "loading"}
          onClick={followClickHandler}
          colorScheme={"blue"}
          variant={isFollowedByUser ? "outline" : "solid"}
        >
          {isFollowedByUser ? "Unfollow" : "Follow"}
        </Button>
      )}

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
          <Text fontWeight="700">{currentUsersPosts.length}</Text>
          <Text>Posts</Text>
        </VStack>
        <VStack py="3" px="5">
          <Text fontWeight="700">{userData.followers.length}</Text>
          <Text>Followers</Text>
        </VStack>
      </HStack>

      <Text fontWeight={"700"} fontSize="xl" py="5">
        All Posts
      </Text>
      <VStack w="full" gap={5} marginTop="50px">
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
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  );
};
