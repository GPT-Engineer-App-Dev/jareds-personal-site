import React from "react";
import { Box, Heading, Text, Container, VStack, Link } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={6} align="start">
        <Heading as="h1" size="2xl" mb={4}>
          Contact
        </Heading>
        <Text>
          Feel free to reach out to me at{" "}
          <Link href="mailto:jared@example.com" color="blue.500">
            jared@example.com
          </Link>{" "}
          for any inquiries or collaboration opportunities.
        </Text>
      </VStack>
    </Container>
  );
};

export default Contact;
