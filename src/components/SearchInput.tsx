import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

type Props = {
  setSearchText: (searchText: string) => void;
};

export default function SearchInput({ setSearchText }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          variant={"filled"}
          borderRadius={20}
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
}
