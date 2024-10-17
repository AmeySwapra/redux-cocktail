import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../Redux/features/cocktailSlice";
import { Link } from "react-router-dom";
import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import SearchBox from "../components/SearchBox";

const HomePage = () => {
  const [modifiedCocktails, setModifiedCocktails] = useState([]);
  const { loading, cocktails, error } = useSelector((state) => ({
    ...state.app,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktails());
  }, [dispatch]);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strAlcoholic, strDrinkThumb, strGlass, strDrink } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktails(newCocktails);
    } else {
      setModifiedCocktails([]);
    }
  }, [cocktails]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <>
        <Navbar />
        <Alert status="error">
          <AlertIcon />
          {error.message}
        </Alert>
        <Footer />
      </>
    );
  }

  if (!cocktails) {
    return (
      <>
        <Navbar />
        <Heading as="h2" textAlign="center" mt={5}>
          No Cocktail Found With This Name
        </Heading>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <SearchBox />
      <Box p={5}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5}>
          {modifiedCocktails.map((item) => (
            <Box
              key={item.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="transform 0.2s" // Add a hover effect
              _hover={{ transform: "scale(1.05)" }} // Scale on hover
            >
              <Image
                src={item.img}
                alt={item.name}
                borderTopRadius="lg" // Rounded corners for the image
                objectFit="cover" // Maintain aspect ratio
                height={{ base: "200px", md: "250px" }} // Responsive image height
                width="100%" // Make image responsive
              />
              <Box p={4}>
                <Heading size={{ base: "sm", md: "md" }}>{item.name}</Heading>
                <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">
                  {item.glass}
                </Text>
                <Text mt={2} fontSize={{ base: "sm", md: "md" }}>
                  {item.info}
                </Text>
                <Link to={`/cocktail/${item.id}`}>
                  <Button mt={4} colorScheme="blue" width="100%">
                    Details
                  </Button>
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
