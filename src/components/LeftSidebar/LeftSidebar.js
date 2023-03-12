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
import { useLocation } from "react-router-dom";


function LeftSidebar() {
  const { pathname } = useLocation();

  return (
    <Container>
      <Flex column align='center'>
        <LogoIcon />
        <MenuContainer>
          <MenuItem to='/' isActive={pathname === '/'}><Dashboard/></MenuItem>
          <MenuItem to='/cards' isActive={pathname === '/cards'}><Cards/></MenuItem>
          <MenuItem to='/product' isActive={pathname === '/product'}><Product /></MenuItem>
          <MenuItem to='/wear' isActive={pathname === '/wear'}><WearTear /></MenuItem>
          <MenuItem to='/games' isActive={pathname === '/games'}><Games /></MenuItem>
          <MenuItem to='/settings' isActive={pathname === '/settings'}><Settings /></MenuItem>
        </MenuContainer>
      </Flex>
    </Container>
  );
}

export default LeftSidebar;
