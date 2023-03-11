import React from "react";

import Flex from "../Flex";
import {
  Container,
  Icon,
  StatisticsCardDescription,
  StatisticsCardNumber,
} from "./styled";

function DaschboardCardStatistics({ icon, statistic = "0", children, color }) {
  return (
    <Container>
      <Flex align="flex-start">
        <Icon color={color}>{icon}</Icon>
        <Flex column center>
          <StatisticsCardNumber>{statistic}</StatisticsCardNumber>
          <StatisticsCardDescription>{children}</StatisticsCardDescription>
        </Flex>
      </Flex>
    </Container>
  );
}

export default DaschboardCardStatistics;
