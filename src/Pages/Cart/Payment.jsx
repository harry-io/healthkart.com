import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Text,
  Button,
  Image,
  IconButton,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const Payment = () => {
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
  };

  return (
    <Box mt="10">
      <Container maxW="container.lg">
        <Text fontSize="2xl" mb="5">
          Cart Page
        </Text>

        {cartData.map((item, index) => (
          <Flex key={index} alignItems="center" mb="3">
            <Box flex="1">
              <Text fontWeight="bold">Title:</Text>
              <Text>{item.Title}</Text>
            </Box>

            <Box flex="1">
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
              <IconButton
                aria-label="Remove item"
                icon={<CloseIcon />}
                size="sm"
                onClick={() => handleRemoveItem(index)}
              />
            </Box>
          </Flex>
        ))}

        <Stack mt="5" spacing="3">
          <Text>Total Items: {totalItems}</Text>
          <Text>Total Price: {totalPrice}</Text>
          <Button onClick={handleEmptyCart}>Empty Cart</Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Payment;