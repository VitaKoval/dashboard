import React from "react";
import { ReactComponent as Select } from "../../images/icons/Select.svg";
import { CheckBox } from "./styled";

const CheckboxStats = ({ value, initialColor, onValueChange }) => {
  return (
    <CheckBox
      onClick={() => onValueChange(initialColor)}
      stroke={initialColor}
      fill={value ? initialColor : "transparent"}
    >
      <Select fill="inherit" />
    </CheckBox>
  );
};

export default CheckboxStats;
