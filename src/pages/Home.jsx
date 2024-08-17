import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Heading, IconButton , Text, Input, Image, CircularProgress, useBreakpointValue} from '@chakra-ui/react';
// import Carousel from '../components/Carousel';
import { getAllProducts } from '../services/ProductServices';
import { useSearchContext } from '../contexts/SearchContext';
import { FaSearch, FaShoppingCart, FaBell, FaPhone, FaUser } from 'react-icons/fa'; // Adjust icons as needed
import SpecialSelection from '../components/Home/SpecialSelection'

const Home = () => {

  const navigate = useNavigate();
  const { setSearch } = useSearchContext();
  const [miniImages, setMiniImages] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((result) => {
        console.log(result)
        setMiniImages(result.allProducts)
      });
  }, []);

  const onClickImage = (productId) => {
    setSearch('a');
    navigate(`/product/${productId}`, { state: { productId} });
  }

  const buttonSize = useBreakpointValue({ base: 'xs', md: 'sm' });
  const fontSize = useBreakpointValue({ base: 'xs', md: 'sm' });
 
return (
  // <Box mx = '16px' backgroundColor = "#FFE6E6">
  //   <Box display='flex' justifyContent='center' >
  //     <Carousel />
  //   </Box>
  // </Box>
  <Flex direction="column" minHeight="100vh">
    {/* Header */}
    <Box as="header" bg="gray.800" color="white" py={4} position="relative" marginTop="1.2em" height={{ base: "8em", lg: "10em" }}>
    <Flex align="center" justify="flex-start" maxW={{ base: "100%", xl: "1400px", "2xl": "1600px" }} mx="auto" px={{ base: 4, lg: 8, xl: 12 }} wrap="wrap">
      {/* Left Section - Logo */}
      <Box>
        <Image
          src="https://png.pngtree.com/element_our/20190601/ourmid/pngtree-hand-drawn-cute-vegetarian-green-leaf-logo-image_1337225.jpg"
          alt="Logo"
          boxSize={{ base: "72px", lg: "88px", xl: "96px" }}
        />
      </Box>

      {/* Middle Section - Search Bar */}
      <Flex
        align="center"
        flex="1"
        mx={{ base: 4, lg: 16, xl: 24 }}
        my={2}
        maxW={{ base: 'full', md: 'md', lg: 'lg', xl: '2xl' }}
        justify="center"
      >
        <Input
          placeholder="Search..."
          variant="filled"
          borderRadius="md"
          mr={2}
          bg="white"
          color="gray.800"
          size="lg"
          w={{ base: 'full', md: 'sm', lg: 'md', xl: 'lg' }} // Adjust width responsively
        />
        <IconButton
          aria-label="Search"
          icon={<FaSearch />}
          variant="outline"
          borderRadius="md"
          size={buttonSize}
        />
      </Flex>

      {/* Right Section - Buttons with Icons and Text */}
      <Flex
        align="center"
        ml={4}
        my={2}
        gap={2}
        wrap="wrap"
        direction="row"
        position="relative"
      >
        {/* Top Right Section - Smaller Buttons in a Row */}
        <Box position="absolute" top={-10} right={0}>
          <Flex direction="row" align="center" gap={2}>
            <Button
              leftIcon={<FaPhone />}
              variant="outline"
              size="xs"
              fontSize="xs"
            >
              Support
            </Button>
            <Button
              variant="outline"
              size="xs"
              fontSize="xs"
            >
              Login
            </Button>
            <Button
              variant="outline"
              size="xs"
              fontSize="xs"
            >
              Sign Up
            </Button>
          </Flex>
        </Box>
        
        <Button
          leftIcon={<FaShoppingCart />}
          variant="outline"
          size={buttonSize}
          fontSize={fontSize}
          alignSelf="center"
        >
          Cart
        </Button>
        <Button
          leftIcon={<FaBell />}
          variant="outline"
          size={buttonSize}
          fontSize={fontSize}
          alignSelf="center"
        >
          Notify
        </Button>
      </Flex>
    </Flex>
  </Box>
    {/* Main Content */}
    <Flex as="main" flex="1" p={4}>
  <Box flex="1" bg="gray.100" p={4} mr={2} maxW = '400px'>
    <Flex direction="column" h="100%" maxW="250px" ml='auto'>
      <Box flex="2" bg="white" p={4} mb={4}>
        <Text>Danh mục</Text>
        <Flex direction="column" mt={4} gap={2}>
        <Button
            leftIcon={<FaBell />}
            variant="outline"
            size={buttonSize}
            fontSize={fontSize}
            width='80%'
            alignSelf="center"
            justifyContent="flex-start" // Align content to the left
            textAlign="left" // Align text to the left
          >
            Sản phẩm rẻ
          </Button>
          <Button
            leftIcon={<FaBell />}
            variant="outline"
            size={buttonSize}
            fontSize={fontSize}
            width='80%'
            alignSelf="center"
            justifyContent="flex-start" // Align content to the left
            textAlign="left" // Align text to the left
          >
            Sản phẩm rẻ
          </Button>
          <Button
            leftIcon={<FaBell />}
            variant="outline"
            size={buttonSize}
            fontSize={fontSize}
            width='80%'
            alignSelf="center"
            justifyContent="flex-start" // Align content to the left
            textAlign="left" // Align text to the left
          >
            Sản phẩm rẻ
          </Button>
        </Flex>
      </Box>
      <Box flex="1" bg="white" p={4} textAlign="center">
  <Text>Bạn chưa đăng nhập tài khoản</Text>
  <Text>Đăng nhập tài khoản</Text>
  <Text>để hưởng thêm nhiều tiện ích</Text>
  <Button mt={4}>Đăng Nhập</Button>
  <Text mt={4} fontSize="sm">
    Bạn chưa có tài khoản?{' '}
    <Text as="span" fontWeight="bold">Đăng ký</Text>
  </Text>
</Box>
    </Flex>
  </Box>
  <Box
    flex="2"
    bg="gray.200"
    p={4}
    mx={2}
  
  >
    {/* <SpecialSelection /> */}
  </Box>
  <Box
      flex="1"
      bg="gray.300"
      p={4}
      ml={2}
      maxW="250px" // Ensure the right section has a maximum width of 250px
      display={{ base: 'none', lg: 'block' }} // Hide on small screens
    >
    <Text>Right Section</Text>
  </Box>
</Flex>

    
    {/* Footer */}
    <Box as="footer" bg="teal.500" color="white" p={4}>
      <Text>Footer</Text>
    </Box>
  </Flex>
  )
}

export default Home;