import { Image, Flex, SimpleGrid, Box, Text, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { IoFlash, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import React, { useState, useEffect } from 'react';

// Flash Sale Item component
const FlashSaleItem = ({ image, name, price }) => (
    <Box textAlign="center" p={2}>
      <Image src={image} alt={name} maxW="100%" />
      <Text fontSize="sm" fontWeight="bold">{name}</Text>
      <Text fontSize="xs" color="gray.500">{price}</Text>
    </Box>
  );
  

const SpecialSelection = () => {
  const items = [
    { image: 'https://bit.ly/dan-abramov', name: 'Item 1', price: '$10.00' },
    { image: 'https://bit.ly/dan-abramov', name: 'Item 2', price: '$20.00' },
    { image: 'https://bit.ly/dan-abramov', name: 'Item 3', price: '$30.00' },
    { image: 'https://bit.ly/dan-abramov', name: 'Item 4', price: '$40.00' },
    { image: 'https://bit.ly/dan-abramov', name: 'Item 5', price: '$50.00' },
    { image: 'https://bit.ly/dan-abramov', name: 'Item 6', price: '$60.00' },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Responsive number of items per page
  const itemsPerPageValue = useBreakpointValue({ base: 2, sm: 3, md: 4, lg: 4, xl: 4 });

  // Responsive button sizes
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const buttonIconSize = useBreakpointValue({ base: '16px', md: '20px' });

  useEffect(() => {
    setItemsPerPage(itemsPerPageValue || 4);
    setCurrentPage(0); // Reset to the first page on itemsPerPage change
  }, [itemsPerPageValue]);

  const displayedItems = items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => {
      const maxPages = Math.ceil(items.length / itemsPerPage);
      return prev < maxPages - 1 ? prev + 1 : prev;
    });
  };

  return (
    <Box position="relative">
      <Flex justify="space-between" align="center" mb={4}>
        <Flex align="center">
          <IoFlash />
          <Text ml={2}>Flash Sale 20:19:21</Text>
        </Flex>
        <Text color="blue.500" cursor="pointer">
          See all
        </Text>
      </Flex>
      <Flex justify="center" align="center" position="relative">
        <IconButton
          aria-label="Previous"
          icon={<IoChevronBack size={buttonIconSize} />}
          onClick={handlePrev}
          isDisabled={currentPage === 0}
          size={buttonSize}
          borderRadius="full"
          position="absolute"
          left="0"
          zIndex="1"
          transform="translateY(-50%)"
          bg="whiteAlpha.800"
        />
        <SimpleGrid columns={itemsPerPage} spacing={4}>
          {displayedItems.map((item, index) => (
            <FlashSaleItem
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </SimpleGrid>
        <IconButton
          aria-label="Next"
          icon={<IoChevronForward size={buttonIconSize} />}
          onClick={handleNext}
          isDisabled={currentPage >= Math.ceil(items.length / itemsPerPage) - 1}
          size={buttonSize}
          borderRadius="full"
          position="absolute"
          right="0"
          zIndex="1"
          transform="translateY(-50%)"
          bg="whiteAlpha.800"
        />
      </Flex>
    </Box>
  );
};

export default SpecialSelection;
