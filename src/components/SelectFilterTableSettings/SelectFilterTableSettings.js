import React, { useState } from "react";
import Flex from "../Flex";
import { Input, InputContainer, Label } from "./styled";
import { nanoid } from "nanoid";

function SelectFilterTableSettings() {
  const [checkboxList, setCheckboxList] = useState({
    'Source': false,
    "Card model": true,
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

  function handleChange(id) {
    Object.keys(checkboxList).forEach((key) => {
      if (id === key) {
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
          <InputContainer key={nanoid()}> 
            <Input
              type="checkbox"
              name="table_settings"
              value={key}
              id={key}
              checked={checkboxList[key]}
              onChange={()=>handleChange(key)}
            />
            <Label htmlFor={key} >
            {key} </Label>
             </InputContainer>
        );
      })}
    </Flex>
  );
}

export default SelectFilterTableSettings;
