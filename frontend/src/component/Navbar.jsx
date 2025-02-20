import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
        Product Store 🛒
        </Text>
      </Flex>
    </Container>
  );
};

export default Navbar;
