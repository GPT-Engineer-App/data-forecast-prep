import React from "react";
import { Container, Button, Input, VStack, Heading, Text, useToast } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleFileUpload = (event) => {
    const files = event.target.files;
    // Placeholder for file processing
    console.log(files);
    toast({
      title: "File upload",
      description: "We've received your files and will start processing them.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent p={8}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Predictive Forecast Modeling
        </Heading>
        <Text>Upload your .xlsx files for processing, formatting, and predictive modeling.</Text>
        <Input type="file" accept=".xlsx" multiple onChange={handleFileUpload} p={1} />
        <Button leftIcon={<FaUpload />} colorScheme="teal" variant="solid">
          Upload Files
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
