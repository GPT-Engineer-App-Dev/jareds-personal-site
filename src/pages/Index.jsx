import React from "react";
import { Box, VStack, Heading, Text, Container, Divider, Image, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* About Me */}
      <Container maxW="container.lg" py={8}>
        <VStack spacing={6} align="start">
          <Heading as="h2" size="xl">
            About Me
          </Heading>
          <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3MTM1NDc0MTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Jared Ingersoll" borderRadius="full" boxSize="200px" />
          <Text>Hi, I'm Jared Ingersoll, a passionate software developer with expertise in web technologies. I enjoy creating elegant and efficient solutions to complex problems. When I'm not coding, you can find me exploring the outdoors or trying out new recipes in the kitchen.</Text>
        </VStack>
      </Container>

      <Divider />

      {/* Portfolio/Projects */}
      <Container maxW="container.lg" py={8}>
        <VStack spacing={6} align="start">
          <Heading as="h2" size="xl">
            Portfolio/Projects
          </Heading>
          <Text>Coming soon...</Text>
        </VStack>
      </Container>

      <Divider />

      {/* Resume */}
      <Container maxW="container.lg" py={8}>
        <VStack spacing={6} align="start">
          <Heading as="h2" size="xl">
            Resume
          </Heading>
          <Text>
            You can download my resume{" "}
            <Link href="#" color="blue.500">
              here
            </Link>
            .
          </Text>
        </VStack>
      </Container>

      <Divider />

      {/* Contact */}
      <Container maxW="container.lg" py={8}>
        <VStack spacing={6} align="start">
          <Heading as="h2" size="xl">
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
    </Box>
  );
};

export default Index;
