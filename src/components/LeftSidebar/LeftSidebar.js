import React from "react";
import {
  Container,
  MenuContainer,
  MenuItem,
} from "./styled";
import Flex from "../Flex";
// icons
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { ReactComponent as Dashboard } from '../../images/icons/dashboard.svg';
import { ReactComponent as Cards } from '../../images/icons/cards.svg';
import { ReactComponent as Product } from '../../images/icons/product.svg';
import { ReactComponent as WearTear } from '../../images/icons/wear-tear.svg';
import { ReactComponent as Games } from '../../images/icons/games.svg';
import { ReactComponent as Settings } from '../../images/icons/settings.svg';


function LeftSidebar() {
  return (
    <Container>
      <Flex column align='center'>
        <LogoIcon />
        <MenuContainer>
          <MenuItem><Dashboard/></MenuItem>
          <MenuItem><Cards/></MenuItem>
          <MenuItem><Product /></MenuItem>
          <MenuItem><WearTear /></MenuItem>
          <MenuItem><Games /></MenuItem>
          <MenuItem><Settings /></MenuItem>
        </MenuContainer>
      </Flex>
    </Container>
  );
}

export default LeftSidebar;
