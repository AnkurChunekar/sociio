import { Routes, Route, useLocation } from "react-router-dom";
import { Signup, Login, Home, Explore, Bookmark, Profile } from "pages";
import { Navbar, SuggestionSidebar } from "components";
import { Box, Center, Container } from "@chakra-ui/react";
import { RequiresAuth } from "RequiresAuth";
import "./App.css";

function App() {
  const { pathname } = useLocation();
  const publicRoutePathnames = ["/signup", "/"];

  return (
    <Box bg="var(--chakra-colors-gray-200)" h="max-content">
      <Navbar />
      <Center w="full">
        <Container
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent="center"
          mx="2"
          my="5"
          w="full"
          maxW={"1280px"}
          gap={10}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={
                <RequiresAuth>
                  <Home />
                </RequiresAuth>
              }
            />
            <Route
              path="/bookmark"
              element={
                <RequiresAuth>
                  <Bookmark />
                </RequiresAuth>
              }
            />
            <Route
              path="/explore"
              element={
                <RequiresAuth>
                  <Explore />
                </RequiresAuth>
              }
            />
            <Route
              path="/profile/:username"
              element={
                <RequiresAuth>
                  <Profile />
                </RequiresAuth>
              }
            />
          </Routes>
          {publicRoutePathnames.includes(pathname) ? null : (
            <SuggestionSidebar />
          )}
        </Container>
      </Center>
    </Box>
  );
}

export default App;
