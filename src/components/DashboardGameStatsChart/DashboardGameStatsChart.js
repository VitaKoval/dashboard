import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import DashboardContext from "../../context/DashboardContext";
import { Rating, Specification, UserDate, UserName } from "./styled";

import Flex from "../Flex";
import CardHeader from "../CardHeader/CardHeader";
import CheckboxStats from "../Checkbox/CheckboxStats";
import ChartStats from "../ChartStats";
import SelectedFilterChartsType from "../SelectedFilterChartsType";
import useChartConfig from "../../hooks/useChartConfig";

function DashboardGameStatsChart() {
  const { data, error, loading } = useContext(DashboardContext);
  const { configColorState, configStatsState, onConfigValueChange } =
    useChartConfig(data?.chartData);
  const [selectTypeChart, setSelectTypeChart] = useState("Graph");

  const onSelectedChamge = (select) => {
    setSelectTypeChart(select);
  };

  return (
    <Flex column>
      <CardHeader
        title="Game Stats"
        text="Data type"
        selectedFilterValue={selectTypeChart}
      >
        <SelectedFilterChartsType onSelectedChange={onSelectedChamge} />
      </CardHeader>
      <Flex>
        <Flex flexGrow={1}>
          {!loading && (
            <ChartStats data={data.chartData} value={configColorState} />
          )}
        </Flex>

        <Flex flexGrow={1}>
          <Flex column gap={16}>
            {Object.keys(configColorState).map((item) => {
              return (
                <Flex key={nanoid()}>
                  <CheckboxStats
                    value={configColorState[item]}
                    initialColor={item}
                    onValueChange={onConfigValueChange}
                  />
                  <Flex column>
                    <Rating>
                      Rating{" "}
                      {Object.keys(configStatsState).map(
                        (color) =>
                          color === item &&
                          configStatsState[color].ratingPercentage
                      )}
                    </Rating>
                    <Specification>
                      {" "}
                      {Object.keys(configStatsState).map(
                        (color) =>
                          color === item && configStatsState[color].totalSales
                      )}{" "}
                      sales
                    </Specification>
                  </Flex>
                </Flex>
              );
            })}
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
