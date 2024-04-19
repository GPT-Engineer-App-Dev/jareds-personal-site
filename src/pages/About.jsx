import React from "react";
import { Box, Heading, Text, Container } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Box>
        <Heading as="h1" size="2xl" mb={4}>
          About Jared Ingersoll
        </Heading>
        <Text>
          {}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam non leo vel augue posuere semper.
        </Text>
      </Box>
    </Container>
  );
};

export default About;
