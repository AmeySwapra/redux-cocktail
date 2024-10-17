import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCocktails } from "../Redux/features/cocktailSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Flex,
  VStack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CocktailDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Access cocktail and loading status from Redux state
  const { cocktail, loading } = useSelector((state) => state.app);

  useEffect(() => {
    if (!cocktail || cocktail.idDrink !== id) {
      dispatch(fetchSingleCocktails({ id }));
    }
  }, [dispatch, id, cocktail]);

  if (loading) return <Loader />;

  if (!cocktail) {
    return (
      <>
        <Navbar />
        <Alert status="warning" mt={4}>
          <AlertIcon />
          No Cocktail Details Found
        </Alert>
        <Footer />
      </>
    );
  }

  const { strDrink: name, strDrinkThumb: img, strAlcoholic: info, strCategory: category, strGlass: glass } = cocktail;
  const ingredients = [
    cocktail.strIngredient1,
    cocktail.strIngredient2,
    cocktail.strIngredient3,
    cocktail.strIngredient4,
    cocktail.strIngredient5,
  ].filter(Boolean);

  return (
    <>
      <Navbar />
      <Box p={5}>
        <Button as={Link} to="/" colorScheme="blue" mb={4}>
          GO BACK
        </Button>
        <Flex direction={{ base: "column", md: "row" }} gap={5}>
          <Box flex="1">
            <Image
              src={img}
              alt={name}
              boxSize={{ base: "100%", md: "400px" }} // Responsive image size
              objectFit="cover"
            />
          </Box>
          <VStack align="start" flex="1" spacing={3}>
            <Heading as="h2" size={{ base: "md", md: "lg" }}> {/* Responsive heading size */}
              {name}
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }}>
              <strong>Category:</strong> {category}
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }}>
              <strong>Info:</strong> {info}
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }}>
              <strong>Glass:</strong> {glass}
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }}>
              <strong>Ingredients:</strong> {ingredients.join(", ")}
            </Text>
          </VStack>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default CocktailDetailsPage;
