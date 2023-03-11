import React, { useContext } from "react";
import { nanoid } from 'nanoid';
import Flex from "../Flex";

import { CheckBox, Rating, Specification, UserDate, UserName } from "./styled";
import CardHeader from "../CardHeader/CardHeader";
import DashboardContext from "../../context/DashboardContext";
// icons
import { ReactComponent as Select } from "../../images/icons/Select.svg";
import ChartStats from "../ChartStats";

function DashboardGameStatsCharts() {
  const { data, error, loading } = useContext(DashboardContext);

  // useGameStatsConfig - useState {blue: false, red: true }
  // {}
  // CheckBox value
  // CheckboxTitle, CheckboxSpec

  return (
    <Flex column>
      <CardHeader
        title="Game Stats"
        text="Data type"
        selectedFilterValue="Graph"
      />
      <Flex gap={50}>
        <Flex >
          {!loading && <ChartStats data={data.chartData}/>}
        </Flex>

        <Flex>
          {/* CheckboxStats */}
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
          <Flex column gap={16} >
            {!loading &&
              data.users.map(({ name, date }) => {
                return (
                  <Flex column key={nanoid()}>
                    <UserName>{name}</UserName>
                    <UserDate>{ date}</UserDate>
                  </Flex>
                );
              })}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default DashboardGameStatsCharts;
