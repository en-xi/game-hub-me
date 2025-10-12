import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

type Props = {};

export default function SearchInput({}: Props) {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        variant={"filled"}
        borderRadius={20}
        placeholder="Search games..."
      />
    </InputGroup>
  );
}
