import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import genres from "../data/genres";
import getCropImageUrl from "../services/image-url";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

type Props = {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
};

export default function GenreList({ onSelectedGenre, selectedGenre }: Props) {
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>

      <List>
        {genres.map((genre) => (
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
                fontSize={"lg"}
                onClick={() => onSelectedGenre(genre)}
                fontWeight={
                  genre.id === selectedGenre?.id ? "extrabold" : "normal"
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
