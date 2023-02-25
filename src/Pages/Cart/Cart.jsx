
import React,{useState,useEffect} from 'react'
import { Route } from 'react-router';
import { Box,Tabs, TabList, TabPanels, Tab, TabPanel, Text,Flex ,Button,Input,Checkbox,Container,Image,Stack} from "@chakra-ui/react";
import Payments from './Payments';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartData(cart);

    let totalItemsCount = 0;
    let totalPriceCount = 0;

    cart.forEach((item) => {
      totalItemsCount += 1;
      totalPriceCount += Number(item.price);
    });

    setTotalItems(totalItemsCount);
    setTotalPrice(totalPriceCount);
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCart = [...cartData];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartData(updatedCart);
    setTotalItems(totalItems - 1);
    setTotalPrice(totalPrice - Number(cartData[index].price));
  };

  const handleEmptyCart = () => {
    localStorage.removeItem("cart");
    setCartData([]);
    setTotalItems(0);
    setTotalPrice(0);
  }
  return (
  
    <div style={{backgroundColor:"#f2f4f5",height:"100vh"} }>
     <Flex>
      <Box w="70%">
        
        <Box bg="rgb(255, 255, 255)"borderRadius="lg" p="4"  textAlign="left" ml="100px" height="100vh">
             <Container maxW="container.lg">
         <Text fontSize="2xl" mb="5" fontWeight="bold">
           Cart Page({totalItems} items) 
         </Text>

         {cartData.map((item, index) => (
          <Flex key={index} alignItems="center" mb="3">
            <Box flex="1">
              <Text fontWeight="bold">Title:</Text>
              <Text>{item.Title}</Text>
            </Box>

            <Box flex="1" ml="20px">
              <Text fontWeight="bold">Brand:</Text>
              <Text>{item.brand}</Text>
            </Box>

            <Box flex="1">
              <Text fontWeight="bold">Price:</Text>
              <Text>{item.price}</Text>
            </Box>

            <Box flex="1">
              <Image w="200px" h="150px" src={item.image[0]} alt={item.Title} />
            </Box>

            <Box flex="1">
              <Button
               backgroundColor="orange"
                size="sm"
                onClick={() => handleRemoveItem(index)}
              >Remove item</Button>            </Box>
          </Flex>
        ))}


      
          <Button onClick={handleEmptyCart} backgroundColor="black" color="white" width="50%">Empty Cart</Button>
     
      </Container>
         
          <Box p="4">
      
    </Box>
        </Box>
      </Box>
      {/* SUMMARY BOX */}
      <Box w="30%">
        <Box bg="rgb(255, 255, 255)" h="40vh" borderRadius="lg" p="4" color="#494953" textAlign="left" ml="20px">
        <strong> Order Summary</strong>  
          <Text pt="30px">Total MRP : {totalPrice}Rs </Text>
          <Text pt="10px">Total Discounts: 1000Rs</Text>
          <Text pt="10px">Shipping Charges:100Rs</Text>
          <hr/>
          <Text fontWeight="bold">Payable Amount {totalPrice+100-1000}</Text>
        <Text color="green" fontSize="13px">
        You will Save ₹1,322 & Earn ₹51 HK Cash on this order
            </Text>   
        </Box>
            <Button backgroundColor="#00B5B7" color="white" width="95%" ml="20px">
              Proceed to Pay
        
             </Button>
      </Box>
    </Flex>
</div>

   
  )
}

export default Cart