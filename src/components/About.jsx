import React from "react";
import { Box, Image, Text, Stack } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import cocktail from '../assets/cocktail.png'
const AboutPage = () => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box flex="1" paddingBottom="80px" p={5}>
        <Stack spacing={5} align="center">
          <h1>About Cocktail Haven</h1>
          <Image 
            src={cocktail} 
            alt="Cocktail Selection"
            borderRadius="md"
            boxSize={{ base: "100%", md: "60%" }} 
            objectFit="cover"
          />
          <Text fontSize="lg">
            Cocktail Haven is your ultimate destination for exploring the art of mixology. 
            We provide a wide variety of cocktails, each crafted with care and precision. 
            Our mission is to elevate your drinking experience with unique flavors and 
            creative presentations. 
            Join us as we dive into the world of cocktails, from classics to modern twists.
          </Text>
          <Text fontSize="lg">
            Discover the stories behind your favorite drinks, learn about the ingredients,
            and find inspiration for your next gathering. 
            At Cocktail Haven, we believe that every sip should be a delightful journey.
          </Text>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};

export default AboutPage;
