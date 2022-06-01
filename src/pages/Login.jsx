import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Link,
  Text,
  useColorModeValue,
  useToast,
  Image,
} from "@chakra-ui/react";
import { login } from "redux/asyncThunks";
import mobileScreenshotImg from "../assets/mobile.png";

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const { isLoading, token, user } = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    username: "",
    password: "",
    toBeRemembered: false,
  });

  const updateUserData = (e) => {
    setUserData((ud) => ({ ...ud, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { payload } = await dispatch(login(userData));

    if (payload.status === 200 && userData.toBeRemembered) {
      localStorage.setItem("user", JSON.stringify(payload.data.foundUser));
      localStorage.setItem("token", payload.data.encodedToken);
    }

    if (payload.status === 200) {
      toast({
        title: "Login Successfull!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Some error occurred, Please try again!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleGuestLogin = () => {
    setUserData({
      username: "michellegore",
      password: "michellegore123",
      toBeRemembered: true,
    });
  };

  useEffect(() => {
    if (token && user) navigate("/home");
  }, [token, navigate, user]);

  return (
    <Flex alignItems={"center"}  flexWrap={"wrap-reverse"} w="full" gap={"1rem"} justifyContent="space-evenly">
      <Image alt="mobile screenshot of sociio app" src={mobileScreenshotImg} maxH="660px" />
      <Flex
        as="form"
        onSubmit={handleLogin}
        minH={"calc(100vh - 120px)"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.200", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack maxW="400px" align={"center"}>
            <Heading textAlign={"center"} fontSize={{base: "xl", sm: "3xl"}}>
              The Ultimate Social App to Meet New Friends.
            </Heading>
            <Text textAlign={"center"} fontSize={"lg"}>
              Sign in to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="username">
                <FormLabel>username</FormLabel>
                <Input
                  value={userData.username}
                  name="username"
                  onChange={updateUserData}
                  type="text"
                  isRequired
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  value={userData.password}
                  onChange={updateUserData}
                  type="password"
                  isRequired
                />
              </FormControl>
              <Stack spacing={5}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox
                    type="checkbox"
                    alignSelf="flex-start"
                    isChecked={userData.toBeRemembered}
                    onChange={() =>
                      setUserData((ud) => ({
                        ...ud,
                        toBeRemembered: !ud.toBeRemembered,
                      }))
                    }
                  >
                    Remember me
                  </Checkbox>
                </Stack>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  isLoading={isLoading}
                >
                  Sign in
                </Button>
                <Button
                  type="button"
                  onClick={handleGuestLogin}
                  colorScheme={"blue"}
                  variant={"outline"}
                >
                  Use Guest Credentials
                </Button>
              </Stack>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Not a user?{" "}
                <Link color={"blue.600"} as={ReachLink} to="/signup">
                  Sign up
                </Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
}
