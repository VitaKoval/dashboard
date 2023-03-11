import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import Flex from "../Flex";

import { Rating, Specification, UserDate, UserName } from "./styled";
import CardHeader from "../CardHeader/CardHeader";
import DashboardContext from "../../context/DashboardContext";

import useChartConfig from "../../hooks/useChartConfig";
import CheckboxStats from "../Checkbox/CheckboxStats";
import ChartStats from "../ChartStats";

function DashboardGameStatsChart() {
  const { data, error, loading } = useContext(DashboardContext);

  const [configState, onConfigValueChange] = useChartConfig(data?.chartData);

  return (
    <Flex column>
      <CardHeader
        title="Game Stats"
        text="Data type"
        selectedFilterValue="Graph"
      />
      <Flex gap={50}>
        <Flex>
          {!loading && <ChartStats data={data.chartData} value={configState} />}
        </Flex>

        <Flex>
          <Flex column gap={16}>
            {Object.keys(configState).map((item) => {
              if (item === "colors") {
                const colorsItem = configState[item];

                return Object.keys(colorsItem).map((color) => (
                  <Flex key={nanoid()}>
                    <CheckboxStats
                      value={colorsItem[color].checked}
                      initialColor={color}
                      onValueChange={onConfigValueChange}
                    />
                    <Flex column>
                      <Rating>
                        Rating {colorsItem[color].ratingPercentage}
                      </Rating>
                      <Specification>
                        {configState.totalSales} sales
                      </Specification>
                    </Flex>
                  </Flex>
                ));
              }
            })}
            {/* {Object.keys(configState).map((item) => {
             
              if (item === 'colors') {
                console.log(configState[item]);
                 return (
                <Flex key={nanoid()}>
                  <CheckboxStats
                    value={configState[item]}
                    initialColor={item}
                    onValueChange={onConfigValueChange}
                  />
                  <Flex column>
                    <Rating>Rating </Rating>
                    <Specification>{configState.totalSales} sales</Specification>
                  </Flex>
                </Flex>
              );
              }
            })} */}
          </Flex>
        </Flex>
        <Flex flexGrow={1} gap={16}>
          <Flex column gap={16}>
            {!loading &&
              data.users.map(({ name, date }) => {
                return (
                  <Flex column key={nanoid()}>
                    <UserName>{name}</UserName>
                    <UserDate>{date}</UserDate>
                  </Flex>
                );
              })}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default DashboardGameStatsChart;
