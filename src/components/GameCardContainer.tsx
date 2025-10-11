import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function GameCardContainer({ children }: Props) {
  return (
    <Box width={"300px"} borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}
