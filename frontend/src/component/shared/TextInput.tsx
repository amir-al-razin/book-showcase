import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import React from "react";

// 1. Create  text input component
const TextInput = (props) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input id={props.id} {...props} />
    </FormControl>
  );
};

export default TextInput;
