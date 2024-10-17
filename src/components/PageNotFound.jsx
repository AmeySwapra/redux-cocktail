import React from "react";
import { Box, Container, Image, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import logo from '../assets/pnf.WEBP';

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.md" centerContent>
        <Box textAlign="center" py={10} px={4}>
          <Image 
            src={logo} 
            alt="404 Logo" 
            boxSize={{ base: "200px", md: "300px" }} // Responsive image size
            mb={6} 
          />
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" color="gray.600">
            Oops! Page Not Found.
          </Text>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default PageNotFound;
