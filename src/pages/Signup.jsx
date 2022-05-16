import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { signup } from "redux/asyncThunks";

export function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateUserData = (e) => {
    setUserData((ud) => ({ ...ud, [e.target.name]: e.target.value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = userData;
    if (password === confirmPassword) {
      const { payload } = await dispatch(signup(userData));

      if (payload.status === 201) {
        navigate("/home");
      }
    }
  };

  return (
    <Flex
      as="form"
      onSubmit={handleSignup}
      minH={"calc(100vh - 120px)"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.200", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
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
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    name="firstName"
                    value={userData.firstName}
                    onChange={updateUserData}
                    type="text"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    name="lastName"
                    value={userData.lastName}
                    onChange={updateUserData}
                    type="text"
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="text" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                name="username"
                value={userData.username}
                onChange={updateUserData}
                type="text"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  value={userData.password}
                  onChange={updateUserData}
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? (
                      <Icon as={BsEyeFill} w={4} h={4} />
                    ) : (
                      <Icon as={BsEyeSlashFill} w={4} h={4} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="confirmPassword" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  name="confirmPassword"
                  value={userData.confirmPassword}
                  onChange={updateUserData}
                  type={showConfirmPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() => setShowConfirmPassword((cp) => !cp)}
                  >
                    {showPassword ? (
                      <Icon as={BsEyeFill} w={4} h={4} />
                    ) : (
                      <Icon as={BsEyeSlashFill} w={4} h={4} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Text color="gray.500" fontSize={"sm"}>
              By Signing in you directly agree with our Terms and Conditions.
            </Text>
            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                isLoading={isLoading}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link as={ReachLink} to="/" color={"blue.500"}>
                  Log in
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
