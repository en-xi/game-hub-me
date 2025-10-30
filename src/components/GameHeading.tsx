import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQuery from "../store";

function GameHeading() {
  const platformId = useGameQuery((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const genreId = useGameQuery((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {platform?.name} {genre?.name} Games
    </Heading>
  );
}

export default GameHeading;
