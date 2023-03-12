import React from "react";
import Flex from "../Flex";
import { Input, Label } from "./styled";

function SelectedFilterChartsType({ onSelectedChange }) {
  const onValueChange = (evt) => {
    onSelectedChange(evt.target.value);
  };

  return (
    <Flex column width="330px" onChange={onValueChange}>
      <Input type="radio" id="diagrams" name="type_chart" value="Diagrams" />
      <Label htmlFor="diagrams">Diagrams</Label>

      <Input
        type="radio"
        id="graph"
        name="type_chart"
        value="Graph"
        defaultChecked
      />
      <Label htmlFor="graph">Graph</Label>

      <Input type="radio" id="table" name="type_chart" value="Table" />
      <Label htmlFor="table">Table</Label>

      <Input type="radio" id="paragraph" name="type_chart" value="Paragraph" />
      <Label htmlFor="paragraph">Paragraph</Label>
    </Flex>
  );
}

export default SelectedFilterChartsType;
