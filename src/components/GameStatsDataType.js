import React from "react";
import Flex from "./Flex";
import TopBlock from "./TopBlock";
// icons
import { ReactComponent as Select } from "../images/icons/Select.svg";
import {
  CheckBox,
  DataTitle,
  Specification,
} from "../ui/GameStatsDataType.styled";

function GameStatsDataType() {
  return (
    <Flex column>
      <TopBlock title="Game Stats" text="Data type" choice="Graph" />
      <Flex>
        <Flex flexGrow={8} style={{ marginRight: 21 }}>
          Loading...
        </Flex>

        <Flex flexGrow={1} style={{ marginRight: 24 }}>
          <Flex column style={{ gap: 16 }}>
            <Flex>
              <CheckBox stroke="blue" fill="blue">
                <Select fill="inherit" />
              </CheckBox>
              <Flex column>
                <DataTitle>Rating 94%</DataTitle>
                <Specification>116 sales</Specification>
              </Flex>
            </Flex>
            <Flex>
              <CheckBox stroke="red" fill="red">
                <Select fill="inherit" />
              </CheckBox>
              <Flex column>
                <DataTitle>Rating 94%</DataTitle>
                <Specification>116 sales</Specification>
              </Flex>
            </Flex>
            <Flex>
              <CheckBox stroke="green" fill="green">
                <Select fill="inherit" />
              </CheckBox>
              <Flex column>
                <DataTitle>Rating 94%</DataTitle>
                <Specification>116 sales</Specification>
              </Flex>
            </Flex>
            <Flex>
              <CheckBox stroke="orange" fill="none">
                <Select fill="inherit" />
              </CheckBox>
              <Flex column>
                <DataTitle>Rating 94%</DataTitle>
                <Specification>116 sales</Specification>
              </Flex>
            </Flex>
            <Flex>
              <CheckBox stroke="violet" fill="none">
                <Select fill="inherit" />
              </CheckBox>
              <Flex column>
                <DataTitle>Rating 94%</DataTitle>
                <Specification>116 sales</Specification>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexGrow={1} style={{ gap: 16 }}>
          {/* map array with "users"*/}
          <Flex column>
            <DataTitle>Naperville</DataTitle>
            <Specification>15/08/2017</Specification>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default GameStatsDataType;
