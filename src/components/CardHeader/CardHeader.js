import React from "react";

import {
  Container,
  Icon,
  Select,
  SelectedFilter,
  TextCardHeader,
  TitleCardHeader,
} from "./styled";
// icons
import { ReactComponent as ArrowDown } from "../../images/icons/arrow-down.svg";
import Flex from "../Flex";

// TopBlock
function CardHeader({ title, text, selectedFilterValue, icon }) {
  return (
    <Container>
      <Flex align="center">
        <TitleCardHeader>{title}</TitleCardHeader>
        <TextCardHeader>{text}</TextCardHeader>
        <SelectedFilter>
          <Icon>{icon}</Icon>
          <Select>{selectedFilterValue}</Select>
          <ArrowDown />
        </SelectedFilter>
      </Flex>
    </Container>
  );
}

export default CardHeader;
