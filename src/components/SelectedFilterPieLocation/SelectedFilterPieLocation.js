import React from "react";
import Flex from "../Flex";
import { Input, Label } from "./styled";

function SelectedFilterPieLocation({ onSelectedChange }) {
  const onValueChange = (evt) => {
    onSelectedChange(evt.target.value);
  };

  return (
    <Flex column width="237px" onChange={onValueChange}>
      <Input
        type="radio"
        id="charlottetown"
        name="location"
        value="Charlottetown"
      />
      <Label htmlFor="charlottetown">Charlottetown </Label>

      <Input type="radio" id="halifax" name="location" value="Halifax" />
      <Label htmlFor="halifax">Halifax</Label>

      <Input type="radio" id="naperville" name="location" value="Naperville" defaultChecked/>
      <Label htmlFor="naperville">Naperville</Label>

      <Input type="radio" id="vernon" name="location" value="Vernon" />
      <Label htmlFor="vernon">Vernon</Label>

      <Input type="radio" id="monreal" name="location" value="Monreal" />
      <Label htmlFor="monreal">Monreal</Label>
    </Flex>
  );
}

export default SelectedFilterPieLocation;
