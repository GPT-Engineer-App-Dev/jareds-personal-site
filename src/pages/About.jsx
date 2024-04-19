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
          Jared is an experienced software developer with a strong background in JavaScript projects. He has worked on a wide range of web applications, leveraging modern frameworks and libraries to deliver high-quality solutions.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam non leo vel augue posuere semper.
        </Text>
      </Box>
    </Container>
  );
};

export default About;
