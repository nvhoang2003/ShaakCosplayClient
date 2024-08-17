import { Box, Image, Text, Icon, Menu, MenuList, MenuItem, MenuButton, MenuGroup, Divider, Button } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
const ProductItem = ({data,  onClick}) => {
    return (
        <Box position="relative" width="100%" paddingBottom="140%" cursor="pointer" >
              <Box position="absolute" top={0} left={0} width="100%" height="75%"  display='flex' justifyContent='center'>
                <Image onClick={onClick}  src={data.Image} width = '100%' />
              </Box>
              <Box position="absolute" bottom={0} left={0} width="100%" height="25%"  >
              <Text fontSize='1.5em' color='#3D3D3D' textAlign="left" mb={2}>{data.Name}</Text>    
              <Box display="flex" alignItems="center" width='95%' justifyContent="space-between">
                <Text fontSize='1em' color='#008080' mr={2}>{data.RentPrice}</Text>
                <FaHeart  name="heart" />
              </Box>
              </Box>
            </Box>
    )
}

export default ProductItem;