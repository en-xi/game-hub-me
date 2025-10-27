import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropImageUrl from "../services/image-url";

type Props = {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenreId?: number;
};

export default function GenreList({ onSelectedGenre, selectedGenreId }: Props) {
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
                onClick={() => onSelectedGenre(genre)}
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
