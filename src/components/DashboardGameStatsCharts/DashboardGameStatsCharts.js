import React from "react";
import Flex from "../Flex";

import {
  CheckBox,
  Rating,
  Specification,
  UserDate,
  UserName,
  UserSpecification,
} from "./styled";
// icons
import { ReactComponent as Select } from "../../images/icons/Select.svg";
import CardHeader from "../CardHeader/CardHeader";

function DashboardGameStatsCharts() {
  // useGameStatsConfig - useState {blue: false, red: true }
  // {}
  // CheckBox value
  // CheckboxTitle, CheckboxSpec

  return (
    <Flex column>
      <CardHeader title="Game Stats" text="Data type" selectedFilterValue="Graph" />
      <Flex>
        <Flex flexGrow={8} style={{ marginRight: 21 }}>
          Loading...
        </Flex>

        <Flex flexGrow={1} style={{ marginRight: 24 }}>
          {/* Checkbox */}
          <Flex column gap={16}>
            <Flex>
              <CheckBox stroke="blue" fill="blue">
                <Select fill="inherit" />
              </CheckBox>
              <Flex column>
                <Rating>Rating 94%</Rating>
                <Specification>116 sales</Specification>
              </Flex>
            </Flex>
            <Flex>
              <CheckBox stroke="red" fill="red">
                <Select fill="inherit" />
              </CheckBox>
              <Flex column>
                <Rating>Rating 94%</Rating>
                <Specification>116 sales</Specification>
              </Flex>
            </Flex>
            <Flex>
              <CheckBox stroke="green" fill="green">
                <Select fill="inherit" />
              </CheckBox>
              <Flex column>
                <Rating>Rating 94%</Rating>
                <Specification>116 sales</Specification>
              </Flex>
            </Flex>
            <Flex>
              <CheckBox stroke="orange" fill="none">
                <Select fill="inherit" />
              </CheckBox>
              <Flex column>
                <Rating>Rating 94%</Rating>
                <Specification>116 sales</Specification>
              </Flex>
            </Flex>
            <Flex>
              <CheckBox stroke="violet" fill="none">
                <Select fill="inherit" />
              </CheckBox>
              <Flex column>
                <Rating>Rating 94%</Rating>
                <Specification>116 sales</Specification>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexGrow={1} gap={16}>
          {/* map array with "users"*/}
          <Flex column>
            <UserName>Naperville</UserName>
            <UserDate>15/08/2017</UserDate>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default DashboardGameStatsCharts;
