import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const CountdownComponent = () => {
  return (
    <Box position="relative" width="100%" cursor="pointer" display="flex" flexDirection="column" alignItems="center">
      <Text marginBottom="4">Countdown</Text>
      <Flex justifyContent="center" alignItems="center" marginBottom="4"
        width={{ base: "90%", md: "0", lg: "100%", xl: "100%" }} 
      >
        <Box display="flex" flexDirection="column" alignItems="center" marginRight="2">
          <Text fontSize="24px" fontWeight="bold">12</Text>
          <Text fontSize="14px">Hour</Text>
        </Box>
        <Text fontSize="24px" fontWeight="bold" marginX="2">:</Text>
        <Box display="flex" flexDirection="column" alignItems="center" marginRight="2">
          <Text fontSize="24px" fontWeight="bold">12</Text>
          <Text fontSize="14px">Minutes</Text>
        </Box>
        <Text fontSize="24px" fontWeight="bold" marginX="2">:</Text>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Text fontSize="24px" fontWeight="bold">55</Text>
          <Text fontSize="14px">Sec</Text>
        </Box>
      </Flex>

      {/* Empty Box with responsive height */}
      <Box 
        width="100%" 
        height={{ base: "0", md: "0", lg: "6em", xl: "9.5em" }} 
      />
      <Text textAlign="left" marginBottom="4" alignSelf="flex-start" width='90%'>
        This is a nice license plate: "30F-33333". It combines numbers and letters in a balanced and easy-to-remember manner and will bring you fortune
      </Text>
      <Flex justifyContent="left" marginBottom="2" alignSelf="flex-start" width='90%'>
        <Text marginRight="2">Rent</Text>
        <Text>$Price</Text>
      </Flex>
      <Box textAlign="left" alignSelf="flex-start">Sell: About to take place</Box>
    </Box>
  );
};

export default CountdownComponent;
