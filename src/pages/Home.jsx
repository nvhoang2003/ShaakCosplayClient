import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Icon, Text, Container, SimpleGrid, Image, CircularProgress } from '@chakra-ui/react';
import { AccountBalanceWallet, AssignmentReturn, WorkspacePremium } from '@mui/icons-material';
import  ProductItem from '../components/Home/ProductItem';
import Carousel from '../components/Carousel';
import { getAllMiniImages } from '../services/ImageServices';
import { useSearchContext } from '../contexts/SearchContext';
import UpcomingItem from '../components/Home/UpcomingItem';

const Home = () => {

  const navigate = useNavigate();
  const { setSearch } = useSearchContext();
  const [miniImages, setMiniImages] = useState([]);

  useEffect(() => {
    // getAllMiniImages()
    //   .then((result) => {
    //     setMiniImages(result.miniImages);
    //   });

      setMiniImages([{
        url : "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
      },
      {
        url : "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
      },
      {
        url : "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
      },
      {
        url : "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
      }
    
    ])
  }, []);

  const onClickImage = () => {
    setSearch('a');
    navigate('/search');
  }

  return (
    <Box mx = '16px' backgroundColor = "#FFE6E6">
      <Box display='flex' justifyContent='center' >
        <Carousel />
      </Box>
      <Box display="flex" justifyContent="center" mt="4em">
    <Text fontSize="1.5em" color="red" fontWeight="bold" width="50%" textAlign="center">
      Shop
    </Text>
  </Box>
  <Text textAlign="right" decoration="underline" fontWeight="bold" width='95%'> 
    Xem Tất Cả
  </Text>
  <SimpleGrid 
        columns={{ base: 1, sm: 2, md: 4 }} 
        spacing={{ base: 3, md: 5 }} 
        px={{ base: 3, md: 0 }} 
        py={{ base: 3, md: 5 }} 
        mt={5} 
        maxWidth="90%" 
        mx="auto"
      >
        {
          miniImages && miniImages.map((image, index) => (
            <UpcomingItem key={index} url={image.url} />
          ))
        }
    </SimpleGrid>
         


    <Box display='flex' justifyContent='center' mt='4em'>
      <Text fontSize='1.5em' color='red' fontWeight='bold' width='50%' textAlign='center'>Shop</Text>
    </Box>
    <Text textAlign="right" decoration="underline" fontWeight="bold" width='95%'> Xem Tất Cả</Text>
    <SimpleGrid 
        columns={{ base: 1, sm: 2, md: 4 }} 
        spacing={{ base: 3, md: 5 }} 
        px={{ base: 3, md: 0 }} 
        py={{ base: 3, md: 5 }} 
        mt={5} 
        maxWidth="90%" 
        mx="auto"
      >
        {
          miniImages && miniImages.map((image, index) => (
            <ProductItem key={index} url={image.url} />
          ))
        }
        
        {
          miniImages.length === 0 &&
          <>
            <Box my={20} display="flex" justifyContent="center" width="100%">
              <CircularProgress isIndeterminate color="facebook.500" />
            </Box>
            <Box my={20} display="flex" justifyContent="center" width="100%">
              <CircularProgress isIndeterminate color="facebook.500" />
            </Box>
          </>
        }
      </SimpleGrid>

      
    </Box>
  )
}

export default Home;