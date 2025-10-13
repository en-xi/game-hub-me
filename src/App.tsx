import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

export type QueryObject = {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
};

const App = () => {
  const [queryObject, setQueryObject] = useState<QueryObject>(
    {} as QueryObject
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          setSearchText={(searchText) =>
            setQueryObject({ ...queryObject, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectedGenre={(genre) =>
              setQueryObject({ ...queryObject, genre })
            }
            selectedGenre={queryObject.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading queryObject={queryObject} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={queryObject.platform}
              onSelectedPlatform={(platform) =>
                setQueryObject({ ...queryObject, platform })
              }
            />
            <SortSelector
              sortOrder={queryObject.sortOrder}
              onSelectedSortOrder={(sortOrder) =>
                setQueryObject({ ...queryObject, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GameGrid queryObject={queryObject} />
      </GridItem>
    </Grid>
  );
};

export default App;
