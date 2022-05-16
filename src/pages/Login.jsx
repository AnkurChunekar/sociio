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
} from "@chakra-ui/react";
import { login } from "redux/asyncThunks";

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, token } = useSelector((state) => state.auth);

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
  };

  const handleGuestLogin = () => {
    setUserData({
      username: "adarshbalika",
      password: "adarshBalika123",
      toBeRemembered: true,
    });
  };

  useEffect(() => {
    if (token) navigate("/home");
  }, [token, navigate]);

  return (
    <Flex
      as="form"
      onSubmit={handleLogin}
      minH={"calc(100vh - 120px)"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.200", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
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
              <Link color={"blue.500"} as={ReachLink} to="/signup">
                Sign up
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
