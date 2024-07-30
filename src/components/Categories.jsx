import React from 'react';
import { Box, Flex, Link, Text, Icon } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';

const categories = [
  { name: 'Trang chu', icon: FaHome },
  { name: 'Gioi Thieu' },
  { name: 'Theo doi don hang' },
];

const Categories = () => {
  return (
    <Box bg="gray.100" py={4} px={8}>
      <Flex justify="space-evenly" align="center">
        <Link
          href={`#${categories[0].name.toLowerCase().replace(/\s+/g, '-')}`}
          px={3}
          py={2}
          borderRadius="md"
          _hover={{ bg: 'blue.500', color: 'white' }}
          mx={2}
        >
          <Flex align="center">
            {categories[0].icon && <Icon color='#8B93FF' as={categories[0].icon} mr={2} />}
            <Text fontSize="lg">{categories[0].name}</Text>
          </Flex>
        </Link>
        <Flex>
          {categories.slice(1).map((category, index) => (
            <Link
              key={index}
              href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              px={3}
              py={2}
              borderRadius="md"
              _hover={{ bg: 'blue.500', color: 'white' }}
              mx={2}
            >
              <Flex align="center">
                {category.icon && <Icon color='#8B93FF' as={category.icon} mr={2} />}
                <Text fontSize="lg">{category.name}</Text>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Categories;
