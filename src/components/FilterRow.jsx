const { Flex, Button, Select } = require("@chakra-ui/react");

export const FilterRow = ({ setSortByValue, sortByValue }) => {
  return (
    <Flex
      gap={2}
      alignItems="center"
      bg="white"
      h="60px"
      borderRadius={"lg"}
      px="2"
      w="full"
    >
      <Button
        w="80%"
        onClick={() =>
          setSortByValue((prev) => (prev === "trending" ? "" : "trending"))
        }
        flexGrow={"1"}
      >
        Show {sortByValue === "trending" ? "All" : "Trending"}
      </Button>
      <Select
        value={sortByValue}
        onChange={(e) => setSortByValue(e.target.value)}
        flexGrow={1}
        placeholder="Sort: Random"
        fontWeight={"600"}
        textAlign="center"
      >
        <option value="oldest-first">Oldest First</option>
        <option value="newest-first">Newest First</option>
      </Select>
    </Flex>
  );
};
