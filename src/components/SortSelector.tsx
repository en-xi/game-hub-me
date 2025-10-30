import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQuery from "../store";

let sortOrders = [
  { label: "Relevance", value: "" },
  { label: "Date added", value: "-added" },
  { label: "Name", value: "name" },
  { label: "Release date", value: "-released" },
  { label: "Popularity", value: "-metacritic" },
  { label: "Average rating", value: "-rating" },
];

export default function SortSelector() {
  const onSelectedSortOrder = useGameQuery((s) => s.setGameQuery);
  const sortOrder = useGameQuery((s) => s.gameQuery.sortOrder);
  const currentSortOrder = sortOrders.find((item) => item.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((item) => (
          <MenuItem
            key={item.value}
            value={item.value}
            onClick={() => onSelectedSortOrder({ sortOrder: item.value })}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
