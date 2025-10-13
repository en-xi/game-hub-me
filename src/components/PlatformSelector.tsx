import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import platforms from "../data/platforms";
import { Platform } from "../hooks/useGames";

type Props = {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
};

export default function PlatformSelector({
  onSelectedPlatform,
  selectedPlatform,
}: Props) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
