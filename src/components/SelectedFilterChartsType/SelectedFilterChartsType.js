import React from "react";
import Flex from "../Flex";
import { Input, Label} from "./styled";

function SelectedFilterChartsType({ onSelectedChange }) {

    const onValueChange = (evt) => {
        onSelectedChange(evt.target.value)
   }

  return (
    <Flex column width="330px" onChange={onValueChange}>
      <Label>
        <Input type="radio" id="diagrams" name="type_chart" value="Diagrams" />
       Diagrams
      </Label>
      <Label>
        <Input
          type="radio"
          id="graph"
          name="type_chart"
          value="Graph"
        />
        Graph
      </Label>

      <Label>
        <Input type="radio" id="table" name="type_chart" value="Table" />
        Table
      </Label>

      <Label>
        <Input
          type="radio"
          id="paragraph"
          name="type_chart"
          value="Paragraph"
        />
        Paragraph
          </Label>
          
          
    </Flex>
  );
}

export default SelectedFilterChartsType;
