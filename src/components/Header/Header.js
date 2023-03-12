import React from "react";
import Flex from "../Flex";
import { TitleHeader, Container, UserIcon, UserName } from "./styled";
// icons
import { ReactComponent as UserLight } from "../../images/icons/user_light.svg";

function Header() {
  return (
    <Container>
      <Flex align="center">
        <TitleHeader>DASHBOARD</TitleHeader>
        <UserIcon>
          <UserLight />
        </UserIcon>
        <UserName>Username</UserName>
      </Flex>
    </Container>
  );
}

export default Header;
