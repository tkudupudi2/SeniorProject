import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import * as React from "react";
import { useField } from "formik";
import { FormErrorMessage } from "@chakra-ui/react";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} id={field.name} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
    </FormControl>
  );
};
