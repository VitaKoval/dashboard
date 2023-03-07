import React from "react";
import Flex from "./Flex";
import {
  ContainerHeader,
  TitleHeader,
  IconHeaderContainer,
  UsernameHeader,
} from "../ui/Header.styled";
// icons
import { ReactComponent as UserLight } from "../images/icons/user_light.svg";

function Header() {
  return (
    <ContainerHeader>
      <Flex center>
        <TitleHeader>DASHBOARD</TitleHeader>
        <IconHeaderContainer>
          <UserLight />
        </IconHeaderContainer>
        <UsernameHeader>Username</UsernameHeader>
      </Flex>
    </ContainerHeader>
  );
}

export default Header;
