import React from "react";
import { Box, Container, Text, Link, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box 
      bg="gray.800" 
      color="gray.200" 
      py={{ base: 4, md: 6 }} 
      
      left="0" 
      right="0" 
      bottom="0" 
    >
      <Container maxW="container.lg" textAlign="center">
        <Stack 
          direction={{ base: "column", md: "row" }} 
          spacing={{ base: 4, md: 6 }} 
          justify="center"
          mb={4}
        >
          <Link href="/" color="gray.300" _hover={{ color: "teal.400" }}>
            Home
          </Link>
          <Link href="/about" color="gray.300" _hover={{ color: "teal.400" }}>
            About
          </Link>
        </Stack>
        <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
          &copy; {new Date().getFullYear()} Cocktail Haven. All Rights Reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
