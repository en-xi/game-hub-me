import { Heading } from "@chakra-ui/react";
import { QueryObject } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

type Props = {
  queryObject: QueryObject;
};

function GameHeading({ queryObject }: Props) {
  const {
    data: { results: genres },
  } = useGenres();
  const {
    data: { results: platforms },
  } = usePlatforms();
  const genre = genres.find((g) => g.id === queryObject.genreId);
  const platform = platforms.find((p) => p.id === queryObject.platformId);
  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {platform?.name} {genre?.name} Games
    </Heading>
  );
}

export default GameHeading;
