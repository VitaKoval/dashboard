import React, { useState } from "react";
import Flex from "../Flex";
import { Input, Label } from "./styled";
import { nanoid } from "nanoid";

function SelectFilterTableSettings() {
  const [checkboxList, setCheckboxList] = useState({
    Source: false,
    "Card model": true,
    "Card number": false,
    "Card number": false,
    "Card name": true,
    'Type': true,
    'Limited': true,
    "№ Operations": true,
    "Date of lost operations": true,
    'Rating': true,
    'Status': true,
    'Price': true,
  });

  function handleChange(evt) {
    Object.keys(checkboxList).forEach((key) => {
      if (key === evt.target.value) {
        const newCheckboxList = { ...checkboxList };

        newCheckboxList[key] = !newCheckboxList[key];
        setCheckboxList(newCheckboxList);
      }
    });
  }

  return (
    <Flex column width="300px" height='300px' overflow='scroll'>
      {Object.keys(checkboxList).map((key) => {
        return (
          <Label key={nanoid()}>
            {key}
            <Input
              type="checkbox"
              name="table_settings"
              value={key}
              checked={checkboxList[key]}
              onChange={handleChange}
            />
          </Label>
        );
      })}
    </Flex>
  );
}

export default SelectFilterTableSettings;
