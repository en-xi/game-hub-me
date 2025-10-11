import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropImageUrl from "../services/image-url";

type Props = {};

export default function GenreList({}: Props) {
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
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
