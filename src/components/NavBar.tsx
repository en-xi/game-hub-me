import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

type Props = {
  setSearchText: (searchText: string) => void;
};

const NavBar = ({ setSearchText }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput setSearchText={setSearchText} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
