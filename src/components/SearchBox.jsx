import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchCocktails } from "../Redux/features/cocktailSlice";
import { Box, Input, Button, VStack } from "@chakra-ui/react";

const SearchBox = () => {
  const [searchText, setSearchText] = useState(""); // State to hold input value
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value); // Update state with input value
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearchCocktails({ searchText })); // Dispatch search action
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" mt={4}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Input
            type="text"
            value={searchText} // Controlled input with state
            onChange={handleChange} // Update state on input change
            placeholder="Search Here"
            size="lg"
            width={{ base: "100%", sm: "350px" }} // Responsive width
          />
          <Button type="submit" colorScheme="teal" width="100%">
            Search
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default SearchBox;
