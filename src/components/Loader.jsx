import React from 'react';
import { Spinner, Center, Box } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Center height="100vh">
      <Box>
        <Spinner 
          thickness="4px" 
          speed="0.65s" 
          emptyColor="gray.200" 
          size="xl" 
        />
      </Box>
    </Center>
  );
};

export default Loader;
