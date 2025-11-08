/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpoint,
  useBreakpointValue,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
      <Show when={useBreakpointValue({ base: false, lg: true })}>
        <GridItem area={"aside"} bg={"gold"}>
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"dodgerblue"}>
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
