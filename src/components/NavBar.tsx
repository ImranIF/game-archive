import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} alt="Logo" boxSize={"60px"} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
