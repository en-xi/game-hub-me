import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropImageUrl from "../services/image-url";
import useGameQuery from "../store";

export default function GenreList() {
  const selectedGenreId = useGameQuery((s) => s.gameQuery.genreId);
  const onSelectedGenre = useGameQuery((s) => s.setGameQuery);
  const { data } = useGenres();
  return (
    <>
      <Heading marginTop={9} fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>

      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize={"32px"}
                borderRadius={8}
                src={getCropImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                variant="link"
                fontSize={"md"}
                onClick={() => onSelectedGenre({ genreId: genre.id })}
                fontWeight={
                  genre.id === selectedGenreId ? "extrabold" : "normal"
                }
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
