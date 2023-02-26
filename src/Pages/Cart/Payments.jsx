import React,{useState} from 'react'

import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text,Flex ,Button,Input,Checkbox} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"
import Navbar from '../../Components/Navbar/Navbar';
const Payments = () => {
    const [upiId, setUpiId] = useState("");
    const navigate=useNavigate()
    const handleButtonClick = (text) => {
      setUpiId(`${upiId}${text}`);
    };
    const carts=JSON.parse(localStorage.getItem("cart"))||[]
    console.log(carts)
    let sum=0
    let mrp=0;
    let price=0
    for(let i=0;i<carts.length;i++){
     sum+=carts[i].price
    mrp+=carts[i].mrp
    price+=carts[i].price
    }
    const discount=mrp-price
    
  return (
  <>
  <Navbar/>
    <div style={{backgroundColor:"#f2f4f5",height:"100vh"} }>
     <Flex>
      <Box w="62%">
        <Box bg="rgb(255, 255, 255)" h="200px" borderRadius="lg" p="4" color="black" fontWeight="bold" textAlign="left" mb="4" ml="100px">
          Deliver Address
      <Input type="text" placeholder='Enter Address' value="House No 9,Aruna Nagar,Chandni Chowk,Delhi" / > <br/> <br/>
        <Input type="number" placeholder='Enter Pincode' width="30%" /> <Input type="text" placeholder='Enter Landmark' width="50%"/>
        <br ></br>
        <Button marginLeft="200px" mt="10px"> Edit Address </Button>  
      
        </Box>
        <Box bg="rgb(255, 255, 255)"borderRadius="lg" p="4"  textAlign="left" ml="100px" height="65vh">
            <strong> Payment Method</strong>
          <Text border=" 1px solid #00c0bf">As per new RBI guidelines, some of your previously saved cards may no longer be displayed</Text>
          <Box p="4">
      <Tabs orientation='vertical'>
        <TabList  backgroundColor="#F7F7F7"  textColor="#77777E"  width="30%">
          <Tab margin="2px">Pay Using UPI</Tab>
          <Tab>Debit Card</Tab>
          <Tab>Credit Card</Tab>
          <Tab>Simpl</Tab>
          <Tab>Wallets</Tab>
          <Tab>Internet Banking</Tab>
          <Tab>EMI or Pay Later</Tab>
          <Tab>Cash on Delivery</Tab>

        </TabList>

        <TabPanels>
          <TabPanel>
            <Box>
              <Text fontWeight="bold">Add a new UPI</Text>
              <Text>You need to have a registered UPI ID</Text>
              <Input
                placeholder="Enter UPI ID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                size="sm"
                w="60%"
                mr="2"
              />
              <Button colorScheme="orange" onClick={() => {}}>
                Verify
              </Button>
              <Checkbox mt="4" defaultIsChecked >
                Securely save for faster payments
              </Checkbox>
              <Box p="20px">
                <Button
                  backgroundColor="white"
                  onClick={() => handleButtonClick("@oksbi")}
                  mr="2"
                >
                  @oksbi
                </Button>
                <Button
                  backgroundColor="white"
                  onClick={() => handleButtonClick("@okhdfc")}
                  mr="2"
                >
                  @okhdfc
                </Button>
                <Button
                  backgroundColor="white"
                  onClick={() => handleButtonClick("@okicici")}
                  mr="2"
                >
                  @okicici
                </Button>
                <Button
                  backgroundColor="white"
                  onClick={() => handleButtonClick("@okaxis")}
                >
                  @okaxis
                </Button>
              </Box>
              <Button colorScheme="orange" mt="4" width="100%" cursor="pointer" onClick={()=>{toast("Order placed successfully!!");
            navigate("/")  
            } }>
                Securely Pay {carts.length===0?0:sum-discount+99}₹
              </Button>
            </Box>
          </TabPanel>
          <TabPanel>
            <Text>Debit Card payment options go here</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
        </Box>
      </Box>
      <Box w="30%">
        <Box bg="rgb(255, 255, 255)" h="40vh" borderRadius="lg" p="4" color="#494953" textAlign="left" ml="20px">
        <strong> Order Summary</strong>  
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}> <Text pt="30px">Total MRP </Text>  <Text pt="30px">{sum}₹</Text></div> 
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}> <Text pt="10px">Total Discounts</Text> <Text pt="10px" color="green">{discount}₹</Text></div> 
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>    <Text pt="10px">Shipping Charges</Text> <Text pt="10px">{carts.length===0?0:99}₹</Text></div> 
       
          <hr/>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}><Text fontWeight="bold">Payable Amount</Text> <Text pt="10px" fontWeight="bold">{carts.length===0?0:sum-discount+99}₹ </Text></div> 
          
        <Text color="green" fontSize="13px">
        You will Save ₹{discount} & Earn ₹51 Vigor Cash on this order
            </Text>   
        </Box>
      </Box>
    </Flex>
</div>

                  </>
   
  )
}

export default Payments