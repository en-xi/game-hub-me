import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

let sortOrders = [
  { label: "Relevance", value: "" },
  { label: "Date added", value: "-added" },
  { label: "Name", value: "name" },
  { label: "Release date", value: "-released" },
  { label: "Popularity", value: "-metacritic" },
  { label: "Average rating", value: "-rating" },
];

type Props = {
  onSelectedSortOrder: (sortOrder: string) => void;
  sortOrder: string;
};

export default function SortSelector({
  onSelectedSortOrder,
  sortOrder,
}: Props) {
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
            onClick={() => onSelectedSortOrder(item.value)}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
