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

        {activeStep === 1 && (
          <VStack spacing={4} width="100%">
            <HStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>PO Number</FormLabel>
                <Input placeholder="Enter PO Number" />
              </FormControl>
              <FormControl>
                <FormLabel>PR Number</FormLabel>
                <Input placeholder="Enter PR Number" />
              </FormControl>
            </HStack>
            <HStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Vendor Number</FormLabel>
                <Input placeholder="Enter Vendor Number" />
              </FormControl>
              <FormControl>
                <FormLabel>PO Date</FormLabel>
                <Input type="date" />
              </FormControl>
            </HStack>
            <HStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Delivery Date</FormLabel>
                <Input type="date" />
              </FormControl>
              <FormControl>
                <FormLabel>Status</FormLabel>
                <Input placeholder="Enter Status" />
              </FormControl>
            </HStack>
            <HStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Payment Terms</FormLabel>
                <Input placeholder="Enter Payment Terms" />
              </FormControl>
              <FormControl>
                <FormLabel>Currency</FormLabel>
                <Input placeholder="Enter Currency" />
              </FormControl>
            </HStack>
            <HStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Item Material Number</FormLabel>
                <Input placeholder="Enter Item Material Number" />
              </FormControl>
              <FormControl>
                <FormLabel>Item Quantity</FormLabel>
                <Input type="number" placeholder="Enter Item Quantity" />
              </FormControl>
            </HStack>
            <HStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Item Unit Price</FormLabel>
                <Input type="number" placeholder="Enter Item Unit Price" />
              </FormControl>
              <FormControl>
                <FormLabel>Item Net Value</FormLabel>
                <Input type="number" placeholder="Enter Item Net Value" />
              </FormControl>
            </HStack>
            <HStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Item Delivery Date</FormLabel>
                <Input type="date" />
              </FormControl>
            </HStack>
          </VStack>
        )}

        {activeStep === 2 && (
          <VStack spacing={4} width="100%">
            <HStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>GR Number</FormLabel>
                <Input placeholder="Enter GR Number" />
              </FormControl>
              <FormControl>
                <FormLabel>PO Number</FormLabel>
                <Input placeholder="Enter PO Number" />
              </FormControl>
            </HStack>
            <HStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>GR Date</FormLabel>
                <Input type="date" />
              </FormControl>
              <FormControl>
                <FormLabel>Vendor Number</FormLabel>
                <Input placeholder="Enter Vendor Number" />
              </FormControl>
            </HStack>
            <HStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Item Material Number</FormLabel>
                <Input placeholder="Enter Item Material Number" />
              </FormControl>
              <FormControl>
                <FormLabel>Item Quantity Received</FormLabel>
                <Input type="number" placeholder="Enter Item Quantity Received" />
              </FormControl>
            </HStack>
            <HStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Item Inspection Status</FormLabel>
                <Input placeholder="Enter Item Inspection Status" />
              </FormControl>
            </HStack>
          </VStack>
        )}

        {activeStep === 3 && (
          <VStack spacing={4} width="100%">
            <HStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Invoice Number</FormLabel>
                <Input placeholder="Enter Invoice Number" />
              </FormControl>
              <FormControl>
                <FormLabel>PO Number</FormLabel>
                <Input placeholder="Enter PO Number" />
              </FormControl>
            </HStack>
            <HStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Invoice Date</FormLabel>
                <Input type="date" />
              </FormControl>
              <FormControl>
                <FormLabel>Vendor Number</FormLabel>
                <Input placeholder="Enter Vendor Number" />
              </FormControl>
            </HStack>
            <HStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Total Amount</FormLabel>
                <Input type="number" placeholder="Enter Total Amount" />
              </FormControl>
              <FormControl>
                <FormLabel>Payment Terms</FormLabel>
                <Input placeholder="Enter Payment Terms" />
              </FormControl>
            </HStack>
            <HStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Status</FormLabel>
                <Input placeholder="Enter Status" />
              </FormControl>
            </HStack>
          </VStack>
        )}

        <HStack spacing={4} mt={8}>
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
