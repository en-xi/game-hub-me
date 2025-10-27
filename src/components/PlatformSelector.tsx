import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";

type Props = {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
};

export default function PlatformSelector({
  onSelectedPlatform,
  selectedPlatformId,
}: Props) {
  const { data } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
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
