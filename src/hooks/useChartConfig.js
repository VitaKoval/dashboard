import { useState } from "react";

const useChartConfig = (chartData) => {
  const [configColorState, setConfigColorState] = useState({
    blue: true,
    red: true,
    green: true,
    orange: false,
    violet: false
  })

    let chartDataSummaryValue = 0;
    const chartDataValuesByColor = {};

    if (chartData) {
      chartData.forEach((element) => {
        Object.keys(element).forEach((key) => {
          if (key !== "date") {
            chartDataSummaryValue += element[key];
            chartDataValuesByColor[key] =
              chartDataValuesByColor[key] !== undefined
                ? (chartDataValuesByColor[key] += element[key])
                : (chartDataValuesByColor[key] = 0);
          }
        });
      });
    }

    const configStatsState = { totalSales: chartDataSummaryValue };
// statsConfig

    Object.keys(chartDataValuesByColor).forEach((color) => {
      configStatsState[color] = {
        ratingPercentage: `${Math.trunc(
          (chartDataValuesByColor[color] / chartDataSummaryValue) * 100
        )}%`,
      };
    });

  const onConfigValueChange = (id) => {
    const newChartState = { ...configColorState };
    newChartState[id] = !newChartState[id];
    setConfigColorState(newChartState);
  };

  return { configColorState, configStatsState, onConfigValueChange };
};

export default useChartConfig;
