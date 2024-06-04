import React, { useState } from "react";
import { Container, VStack, HStack, Text, Input, Select, Button, FormControl, FormLabel, IconButton, Box, Progress, Step, StepIndicator, StepStatus, StepTitle, StepDescription, StepSeparator, Stepper } from "@chakra-ui/react";
import { FaFileAlt, FaShoppingCart, FaTruck, FaFileInvoice } from "react-icons/fa";

const steps = [
  { title: "Purchase Requisition", icon: FaFileAlt },
  { title: "Purchase Order", icon: FaShoppingCart },
  { title: "Goods Receipt", icon: FaTruck },
  { title: "Invoice", icon: FaFileInvoice },
];

const Index = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} width="100%">
        <Stepper index={activeStep} width="100%">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <Box as={step.icon} size="24px" />
              </StepIndicator>
              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
              </Box>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>

        {activeStep === 0 && (
          <VStack spacing={4} width="100%">
            <HStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>PR Number</FormLabel>
                <Input placeholder="Enter PR Number" />
              </FormControl>
              <FormControl>
                <FormLabel>Request By</FormLabel>
                <Input placeholder="Enter Request By" />
              </FormControl>
            </HStack>
            <HStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Request Date</FormLabel>
                <Input type="date" />
              </FormControl>
              <FormControl>
                <FormLabel>Status</FormLabel>
                <Select placeholder="Select status">
                  <option value="approved">Approved</option>
                  <option value="pending">Pending</option>
                </Select>
              </FormControl>
            </HStack>
            <HStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Department</FormLabel>
                <Input placeholder="Enter Department" />
              </FormControl>
              <FormControl>
                <FormLabel>Items</FormLabel>
                <Input placeholder="Enter Items" />
              </FormControl>
            </HStack>
          </VStack>
        )}

        <HStack spacing={4}>
          <Button onClick={handleBack} isDisabled={activeStep === 0}>
            Back
          </Button>
          <Button onClick={handleNext} isDisabled={activeStep === steps.length - 1}>
            Next
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
