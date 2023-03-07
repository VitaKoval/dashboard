import React from "react";
import {
  ContainerLeftSidebar,
  ItemLeftSidebar,
  ListLeftSidebar,
} from "../ui/LeftSidebar.styled";
import Flex from "./Flex";
// icons
import { ReactComponent as LogoIcon } from "../images/logo.svg";
import { ReactComponent as Dashboard } from '../images/icons/dashboard.svg';
import { ReactComponent as Cards } from '../images/icons/cards.svg';
import { ReactComponent as Product } from '../images/icons/product.svg';
import { ReactComponent as WearTear } from '../images/icons/wear-tear.svg';
import { ReactComponent as Games } from '../images/icons/games.svg';
import { ReactComponent as Settings } from '../images/icons/settings.svg';


function LeftSidebar() {
  return (
    <ContainerLeftSidebar>
      <Flex column center>
        <LogoIcon />
        <ListLeftSidebar>
          <ItemLeftSidebar><Dashboard/></ItemLeftSidebar>
          <ItemLeftSidebar><Cards/></ItemLeftSidebar>
          <ItemLeftSidebar><Product /></ItemLeftSidebar>
          <ItemLeftSidebar><WearTear /></ItemLeftSidebar>
          <ItemLeftSidebar><Games /></ItemLeftSidebar>
          <ItemLeftSidebar><Settings /></ItemLeftSidebar>
        </ListLeftSidebar>
      </Flex>
    </ContainerLeftSidebar>
  );
}

export default LeftSidebar;
