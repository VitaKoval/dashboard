import React, { useState } from "react";
import CardHeader from "../CardHeader/CardHeader";

import Flex from "../Flex";
import PieChartStats from "../PieChartStats";
import SelectedFilterPieLocation from "../SelectedFilterPieLocation";


function DaschboardGameStatsPieChart() {
  const [selectLocation, setSelectLocation] = useState('Naperville');

  const onSelectedChamge = (select) => {
    setSelectLocation(select)
  }
  return (
    <>
      <CardHeader title="Game Stats" text="Location" selectedFilterValue={selectLocation}>
        <SelectedFilterPieLocation onSelectedChange={onSelectedChamge}/>
      </CardHeader>
      <Flex>
        <PieChartStats/>
       
      </Flex>
    </>
  );
}

export default DaschboardGameStatsPieChart;
