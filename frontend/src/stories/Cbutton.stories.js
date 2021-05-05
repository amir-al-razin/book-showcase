import React from "react";

import { Button } from "@chakra-ui/core";

export default {
  title: "Chakra/Button",
  component: Button,
};

// const Template = (args) => <Button {...args}>asdf</Button></Button>;

export const Primary = () => (
  <Button color="blackAlpha.600"  size="lg" variant="solid">
    Button
  </Button>
);
