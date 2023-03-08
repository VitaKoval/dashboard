import React from "react";
import {
  ChartStatsContainer,
  ChoiceDataType,
  LegendContainer,
  LocationContainer,
  TopContainer,
  TopText,
  TopTitle,
} from "../ui/LineChart.styled";
// icons
import { ReactComponent as ArrowDown } from "../images/icons/arrow-down.svg";
import Flex from "./Flex";
import ChartStats from "./ChartStats";

function LineChart() {
  return (
    <>
      <Flex align="center">
        <TopTitle>Game Stats</TopTitle>
        <TopText>Data type</TopText>
        <ChoiceDataType>
          {" "}
          Graph <ArrowDown />
        </ChoiceDataType>
      </Flex>
      {/* <div style={{ position: "relative" }}>
              <div
            style={{
              width: 50,
              height: 30,
              backgroundColor: "white",
              position: "absolute",
              top: 0,
                      right: 0,
                      zIndex: 10,
            }}
          >
            hjhbd
          </div>
            </div> */}
      <Flex>
        <ChartStatsContainer>Loading...</ChartStatsContainer>
        <LegendContainer>Legend</LegendContainer>
        <LocationContainer>Location</LocationContainer>
      </Flex>
    </>
  );
}

export default LineChart;
