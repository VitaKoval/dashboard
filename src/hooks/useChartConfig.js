import { useCallback, useState } from "react";

const useChartConfig = (chartData) => {
  const [configState, setConfigState] = useState({
    colors: {
      blue: {
        checked: true,
        ratingPercentage: "0%",
      },
      red: { checked: true, ratingPercentage: "0%" },
      green: { checked: true, ratingPercentage: "0%" },
      orange: { checked: false, ratingPercentage: "0%" },
      violet: { checked: false, ratingPercentage: "0%" },
    },
    totalSales: 0,
  });

    // let chartDataSummaryValue = 0;
    // const chartDataValuesByColor = {};

    // if (chartData) {
    //   chartData.forEach((element) => {
    //     Object.keys(element).forEach((key) => {
    //       if (key !== "date") {
    //         chartDataSummaryValue += element[key];
    //         chartDataValuesByColor[key] =
    //           chartDataValuesByColor[key] !== undefined
    //             ? (chartDataValuesByColor[key] += element[key])
    //             : (chartDataValuesByColor[key] = 0);
    //       }
    //     });
    //   });
    // }

    // const tempConfig = { colors: {}, totalSales: chartDataSummaryValue };

    // Object.keys(chartDataValuesByColor).forEach((color) => {
    //   tempConfig[color] = {
    //     checked: configState[color].checked,
    //     ratingPercentage: `${Math.trunc(
    //       (chartDataValuesByColor[color] / chartDataSummaryValue) * 100
    //     )}%`,
    //   };
    // });

    // setConfigState(tempConfig);
    // console.log(configState);
  



  const onConfigValueChange = (id) => {
    const newChartState = { ...configState };
    newChartState[id] = !newChartState[id];
    setConfigState(newChartState);
  };

  return [configState, onConfigValueChange];
};

export default useChartConfig;
