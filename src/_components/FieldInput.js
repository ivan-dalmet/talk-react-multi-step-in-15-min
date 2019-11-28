import React, { useState } from 'react';
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/core';
import { useField } from '@formiz/core';

export const FieldInput = (props) => {
  const { id, value, setValue, isValid, isSubmitted, errorMessage } = useField(props);
  const { label, type, required, ...otherProps } = props;
  const [isTouched, setIsTouched] = useState(false);
  const shouldShowError = !isValid && (isSubmitted || isTouched);

  return (
    <FormControl
      isRequired={!!required}
      isInvalid={shouldShowError}
      {...otherProps}
    >
      <FormLabel htmlFor={id}>
        {label}
      </FormLabel>
      <Input
        id={id}
        type={type || 'text'}
        value={value || ''}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setIsTouched(true)}
      />
      <FormErrorMessage>
        {errorMessage}
      </FormErrorMessage>
    </FormControl>
  );
};
