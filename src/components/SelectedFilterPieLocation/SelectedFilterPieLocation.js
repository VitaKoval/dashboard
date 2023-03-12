import React from "react";
import Flex from "../Flex";
import { Input, Label } from "./styled";

function SelectedFilterPieLocation({ onSelectedChange }) {
  const onValueChange = (evt) => {
    onSelectedChange(evt.target.value);
  };

  return (
    <Flex column width="237px" onChange={onValueChange}>
      <Label>
        Charlottetown
        <Input
          type="radio"
          id="charlottetown"
          name="location"
          value="Charlottetown"
        />
      </Label>
      <Label>
        Halifax
        <Input type="radio" id="halifax" name="location" value="Halifax" />
      </Label>

      <Label>
        Naperville
        <Input
          type="radio"
          id="naperville"
          name="location"
          value="Naperville"
        />
      </Label>

      <Label>
        Vernon
        <Input type="radio" id="vernon" name="location" value="Vernon" />
      </Label>
      <Label>
        Monreal
        <Input type="radio" id="monreal" name="location" value="Monreal" />
      </Label>
    </Flex>
  );
}

export default SelectedFilterPieLocation;
