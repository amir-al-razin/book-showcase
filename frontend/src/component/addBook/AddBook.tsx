import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { useDisclosure } from "@chakra-ui/hooks";
import { EditIcon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/layout";
import React, { PointerEventHandler, useState } from "react";
import FocusLock from "react-focus-lock";
import TextInput from "../shared/TextInput";
import { PrismaClient } from "@prisma/client";
import {
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/popover";

// 2. Create the form
const Form = ({ onCancel }) => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [language, setLanguage] = useState("");
  const [is_translated, setIs_translated] = useState(false);
  const [is_available, setIs_available] = useState(false);

  const [imageLink, setImageLink] = useState("");

  const handleBookData = async (
    event: React.FormEvent<HTMLInputElement | HTMLFormElement>
  ) => {
    event.preventDefault();

      console.log(bookName,imageLink,is_translated)
    

    return ;

    setBookName("");
    setAuthorName("");
    setLanguage("");
    setImageLink("");
    setIs_translated(false);
    setIs_translated(false);

   
  };

  return (
    <form onSubmit={handleBookData} method="POST">
      <Stack spacing="2">
        {/* Input section */}
        <TextInput
          required
          label="Book's name"
          id="book-name"
          defaultValue="John Doe"
          onChange={({ target }) => setBookName(target.value)}
        />
        <TextInput
          required
          label="Authors's name"
          id="authors-name"
          defaultValue="John Doe"
          onChange={({ target }) => setAuthorName(target.value)}
        />
        <TextInput
          required
          label="Language"
          id="language"
          defaultValue="John Doe"
          onChange={({ target }) => setLanguage(target.value)}
        />

        <TextInput
          required
          label="Image Link"
          id="image-link"
          defaultValue="John Doe"
          onChange={({ target }) => setImageLink(target.value)}
        />
        <Checkbox onChange={({ target }) => setIs_translated(target.checked)}>
          Translated
        </Checkbox>
        <Checkbox onChange={({ target }) => setIs_available(target.checked)}>
          Available
        </Checkbox>

        {/* Button */}
        <ButtonGroup d="flex" justifyContent="flex-end">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button colorScheme="orange" onClick={onCancel} type="submit">
            Submit
          </Button>
        </ButtonGroup>
      </Stack>
    </form>
  );
};

const PopoverForm = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <>
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement="right-end"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton
            aria-label="add book"
            borderRadius="full"
            fontSize="20"
            size="md"
            icon={<EditIcon />}
          />
        </PopoverTrigger>
        <PopoverContent
          boxShadow="xl"
          backgroundColor="gray.700"
          border="none"
          p={5}
        >
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form onCancel={onClose} />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PopoverForm;
