import React from "react";
import useTableConfig from "../../hooks/useTableConfig";
import Flex from "../Flex";
import { CheckBox, Input, InputContainer, Label } from "./styled";
import { nanoid } from "nanoid";

function SelectFilterTableSettings() {
  const [checkboxList, handleChange] = useTableConfig();

  return (
    <Flex column width="300px" height="300px" overflow="scroll">
      {Object.keys(checkboxList).map((key) => {
        return (
          <InputContainer key={nanoid()}>
            <Input
              type="checkbox"
              name="table_settings"
              value={key}
              id={key}
              checked={checkboxList[key]}
              onChange={() => handleChange(key)}
            />

            <Label htmlFor={key}>
              {key} <CheckBox checked={checkboxList[key]} />{" "}
            </Label>
          </InputContainer>
        );
      })}
    </Flex>
  );
}

export default SelectFilterTableSettings;
