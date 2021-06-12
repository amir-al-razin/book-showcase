import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { EditIcon } from "@chakra-ui/icons";
import { Box, Stack } from "@chakra-ui/layout";
import {
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/popover";
import React from "react";
import ReactFocusLock from "react-focus-lock";
import TextInput from "../shared/TextInput";

interface Props {
}

const EditBook = (props: Props) => {
  return (
    <Box position="absolute" top="4" right="4" transition="all" >
      <PopoverForm />
    </Box>
  );
};
// 2. Create the form
const Form = ({ firstFieldRef, onCancel }) => {
  return (
    <Stack spacing={4}>
      <TextInput
        label="First name"
        id="first-name"
        ref={firstFieldRef}
        defaultValue="John"
      />
      <TextInput label="Last name" id="last-name" defaultValue="Smith" />
      <ButtonGroup d="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button isDisabled colorScheme="teal">
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

// 3. Create the Popover
// Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
const PopoverForm = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);

  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton aria-label="edit" variant="unstyled"  size="md" icon={<EditIcon />} />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <ReactFocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
          </ReactFocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default EditBook;
