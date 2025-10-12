import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropImageUrl from "../services/image-url";

type Props = {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
};

export default function GenreList({ onSelectedGenre, selectedGenre }: Props) {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCropImageUrl(genre.image_background)}
            />
            <Button
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
  );
}
