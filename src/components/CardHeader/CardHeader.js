import React, { useState } from "react";

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
import SelectedMenu from "../SelectedMenu/SelectedMenu";

// TopBlock
function CardHeader({ title, text, selectedFilterValue, icon, children }) {
  const [isOpenSelectMenu, setIsOpenSelectMenu] = useState(false);

  return (
    <Container>
      <Flex align="center">
        <TitleCardHeader>{title}</TitleCardHeader>
        <TextCardHeader>{text}</TextCardHeader>
        <Flex position="relative">
          <SelectedFilter
            onClick={() => setIsOpenSelectMenu(!isOpenSelectMenu)}
          >
            <Icon>{icon}</Icon>
            <Select>{selectedFilterValue}</Select>
            <Flex
              align="center"
              justify="center"
              transform={isOpenSelectMenu ? "rotate(180deg)" : "initial"}
            >
              <ArrowDown />
            </Flex>
          </SelectedFilter>
          <SelectedMenu isOpenSelectMenu={isOpenSelectMenu}>
            {children}
          </SelectedMenu>
        </Flex>
      </Flex>
    </Container>
  );
}

export default CardHeader;
