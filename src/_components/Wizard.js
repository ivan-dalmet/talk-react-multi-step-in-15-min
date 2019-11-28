import React, { useState } from 'react';
import { Heading, Box, Button, Flex } from '@chakra-ui/core';
import { Formiz, FormizStep, useForm } from '@formiz/core';
import { isEmail } from '@formiz/validations';
import { FieldInput } from './FieldInput';

export const Wizard = () => {
  const form = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values) => {
    setIsLoading(true);

    // Fake API call
    setTimeout(() => {
      alert(JSON.stringify(values));
      setIsLoading(false);

      // Invalidate field based on API response
      // form.invalidateFields({
      //   'email': 'Email already used'
      // });
    }, 2000);
  };

  return (
    <Box maxW="xl" m="auto" p="6">
      <Heading as="h1" fontSize="xl" mb="6">
        My Wizard
      </Heading>

      <Formiz connect={form} onValidSubmit={handleSubmit}>
        <form noValidate onSubmit={form.submitStep}>

          <FormizStep name="step1">
            <FieldInput
              name="firstname"
              label="First name"
              required="This is required"
            />
          </FormizStep>

          <FormizStep name="step2">
            <FieldInput
              name="lastname"
              label="Last name"
            />
          </FormizStep>

          <FormizStep name="step3">
            <FieldInput
              name="email"
              label="Email"
              type="email"
              required="This is required"
              validations={[
                {
                  rule: isEmail(),
                  message: 'Not a valid email :('
                }
              ]}
            />
          </FormizStep>

          {!!form.steps.length && (
            <Flex mt="6">
              {!form.isFirstStep && (
                <Button onClick={form.prevStep}>
                  Back
                </Button>
              )}
              <Button
                type="submit"
                ml="auto"
                variantColor="brand"
                isLoading={isLoading}
                isDisabled={
                  (form.isLastStep ? !form.isValid : !form.isStepValid)
                  && form.isStepSubmitted
                }
              >
                {form.isLastStep ? 'Submit' : 'Next'}
              </Button>
            </Flex>
          )}
        </form>
      </Formiz>
    </Box>
  );
};
