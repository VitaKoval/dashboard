import React from "react";
import {
  CardStatisticContainer,
  IconContainer,
  NumberDescription,
  NumberStatistic,
} from "../ui/CardStatistic.styled";
import Flex from "./Flex";


function CardStatistic({ icon, statistic = "0", children, color }) {

  return (
    <CardStatisticContainer>
      <Flex align='flex-start'>
        <IconContainer color={color}>{icon}</IconContainer>
        <Flex column center>
          <NumberStatistic>{statistic}</NumberStatistic>
          <NumberDescription>{children}</NumberDescription>
        </Flex>
      </Flex>
    </CardStatisticContainer>
  );
}

export default CardStatistic;
