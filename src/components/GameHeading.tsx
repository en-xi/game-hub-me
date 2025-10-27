import { Heading } from "@chakra-ui/react";
import { QueryObject } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

type Props = {
  queryObject: QueryObject;
};

function GameHeading({ queryObject }: Props) {
  const platform = usePlatform(queryObject.platformId);
  const genre = useGenre(queryObject.genreId);
  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {platform?.name} {genre?.name} Games
    </Heading>
  );
}

export default GameHeading;
