import React from "react";
import CardHeader from "../CardHeader/CardHeader";

import Flex from "../Flex";
import PieChartStats from "../PieChartStats";


function DaschboardGameStatsPieChart() {
  return (
    <>
      <CardHeader title="Game Stats" text="Location" selectedFilterValue="Naperville" />
      <Flex>
        <PieChartStats/>
       
      </Flex>
    </>
  );
}

export default DaschboardGameStatsPieChart;
