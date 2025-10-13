import { Heading } from "@chakra-ui/react";
import { QueryObject } from "../App";

type Props = {
  queryObject: QueryObject;
};

function GameHeading({ queryObject }: Props) {
  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {queryObject.platform?.name} {queryObject.genre?.name} Games
    </Heading>
  );
}

export default GameHeading;
