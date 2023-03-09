import React from "react";
import { ChoiceDataType, TopText, TopTitle } from "../ui/LineChart.styled";
import Flex from "./Flex";
// icons
import { ReactComponent as ArrowDown } from "../images/icons/arrow-down.svg";

function TopBlock({ title, text, choice, icon }) {
  return (
    <Flex align="center">
      <TopTitle>{title}</TopTitle>
      <TopText>{text}</TopText>
      <ChoiceDataType>
        {icon}
        {choice} <ArrowDown />
      </ChoiceDataType>
    </Flex>
  );
}

export default TopBlock;
