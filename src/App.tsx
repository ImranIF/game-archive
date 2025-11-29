/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      {/* when the viewport is lg or larger then Show the aside section */}
      <Show above="lg">
        <GridItem area={"aside"}>Aside</GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
