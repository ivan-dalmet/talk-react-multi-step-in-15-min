import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/core';
import { useField } from '@formiz/core';

export const FieldInput = ({ id, label, type, required, ...otherProps }) => {
  return (
    <FormControl
      isRequired={required}
      isInvalid={false}
      {...otherProps}
    >
      <FormLabel htmlFor={id}>
        {label}
      </FormLabel>
      <Input
        id={id}
        type={type || 'text'}
      />
      <FormErrorMessage>
        Error message
      </FormErrorMessage>
    </FormControl>
  );
};
