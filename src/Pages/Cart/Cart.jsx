
import React,{useState,useEffect} from 'react'
import { Route, useNavigate } from 'react-router';
import { Box,Tabs, TabList, TabPanels, Tab, TabPanel, Text,Flex ,Button,Input,Checkbox,Container,Image,Stack} from "@chakra-ui/react";
import Payments from './Payments';
import { toast } from 'react-toastify';
const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate=useNavigate()
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
  const carts = JSON.parse(localStorage.getItem("cart")) || [];
  let sum=0
  let mrp=0;
  let price=0
  for(let i=0;i<carts.length;i++){
   sum+=carts[i].price
  mrp+=carts[i].mrp
  price+=carts[i].price
  }
  const discount=mrp-price
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
              <Text fontSize="12px">{item.Title}</Text>
            </Box>

            <Box flex="1" ml="50px" mt="-20px">
              <Text fontWeight="bold" >Brand:</Text>
              <Text>{item.brand}</Text>
            </Box>

            <Box flex="1" mt="-20px">
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
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>  <Text pt="30px">Total MRP :  </Text> <Text pt="30px">{totalPrice}</Text></div> 
         
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>  <Text pt="10px">Total Discounts</Text> <Text pt="10px" color="green">{discount}</Text></div> 

        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>     <Text pt="10px">Shipping Charges</Text> <Text pt="10px">99</Text></div> 
         
       
          <hr/>
          <Text fontWeight="bold">Payable Amount {sum-discount+99}</Text>
        <Text color="green" fontSize="13px">
        You will Save {discount} & Earn ₹51 Vigor Cash on this order
            </Text>   
        </Box>
            <Button backgroundColor="#00B5B7" color="white" width="95%" ml="20px" onClick={()=>{toast("Order placed successfully!!");
            navigate("/payments")  
            } }>
              Proceed to Pay {sum-discount+99}Rs
        
             </Button>
      </Box>
    </Flex>
</div>

   
  )
}

export default Cart