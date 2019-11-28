import React, { useState } from 'react';
import {
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Stack,
  Flex,
  Button,
} from '@chakra-ui/core';
import { Formiz, FormizStep, useForm } from '@formiz/core';
import { isEmail } from '@formiz/validations';
import { FieldInput } from './FieldInput';

export const Wizard = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted!');
  };

  return (
    <Box maxW="xl" m="auto" p="6">
      <Heading as="h1" fontSize="xl" mb="6">
        My Wizard
      </Heading>

      <form onSubmit={handleSubmit}>
        <Stack spacing="4">
          {/* First Name field */}
          <FormControl isRequired isInvalid={false}>
            <FormLabel htmlFor="firstname">
              First Name
            </FormLabel>
            <Input
              id="firstname"
            />
            <FormErrorMessage>
              Error message
            </FormErrorMessage>
          </FormControl>

          {/* Last Name field */}
          <FormControl>
            <FormLabel htmlFor="lastname">
              Last Name
            </FormLabel>
            <Input
              id="lastname"
            />
          </FormControl>

          {/* Email field */}
          <FormControl isRequired isInvalid={false}>
            <FormLabel htmlFor="email">
              Email
            </FormLabel>
            <Input
              id="email"
              type="email"
            />
            <FormErrorMessage>
              Error message
            </FormErrorMessage>
          </FormControl>
        </Stack>

        <Flex mt="6">
          <Button
            type="submit"
            ml="auto"
            variantColor="brand"
          >
            Submit
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
