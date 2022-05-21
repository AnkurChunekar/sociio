import { Link as ReachLink } from "react-router-dom";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";

export const Error404 = () => {
  return (
    <VStack minH="88vh">
      <Box textAlign="center" py={16} px={6} bg="white" borderRadius={"lg"} boxShadow="lg"> 
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, blue.400, blue.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          The page you're looking for does not seem to exist
        </Text>

        <Button
          as={ReachLink}
          colorScheme="blue"
          bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
          color="white"
          variant="solid"
          to="/home"
        >
          Go to Home
        </Button>
      </Box>
    </VStack>
  );
};
