import React from "react";
import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";
import {
  Box,
  Flex,
  IconButton,
  HStack,
  useDisclosure,
  Icon,
  Button,
  VStack,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="gray.800" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={4} alignItems="center">
          <Link to="/">
            <Flex align="center">
              <Icon as={FaCocktail} color="yellow.400" boxSize={6} />
              <Box ml={2} fontWeight="bold">
                Cocktail Website
              </Box>
            </Flex>
          </Link>
        </HStack>

        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          display={{ md: "none" }}
          onClick={onToggle}
          colorScheme="yellow"
        />

        <HStack
          spacing={8}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
           <Button as={Link} to="/" variant="ghost" colorScheme="yellow">
            Home
          </Button>
          <Button as={Link} to="/about" variant="ghost" colorScheme="yellow">
            About
          </Button>
          
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <VStack
          bg="gray.700"
          p={4}
          display={{ md: "none" }}
          spacing={4}
          align="stretch"
        >
           <Button as={Link} to="/" variant="ghost" colorScheme="yellow" w="full">
            Home
          </Button>
          <Button
            as={Link}
            to="/about"
            variant="ghost"
            colorScheme="yellow"
            w="full"
          >
            About
          </Button>
          
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
