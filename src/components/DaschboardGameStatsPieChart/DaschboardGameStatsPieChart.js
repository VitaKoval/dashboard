import React, { useState } from "react";
import { flushSync } from "react-dom";
import CardHeader from "../CardHeader/CardHeader";

import Flex from "../Flex";
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
      <Flex position='relative' height='100%' width='100%'>
       
      </Flex>
    </>
  );
}

export default DaschboardGameStatsPieChart;
