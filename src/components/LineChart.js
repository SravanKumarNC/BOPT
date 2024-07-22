import React from "react";
import ReactEcharts from "echarts-for-react";

const LineChart = () => {
  const options = {
    // backgroundColor: '#a3c2c2',
   
    xAxis: {
      type: "category",
      data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [10, 11, 29, 9, 14, 33, 22],
        type: "line",
      },
    ],
  };
  //   console.log(dailyData);
  return (
    <ReactEcharts
      option={options}
      style={{ width: "100%", height: "100%" }}
    ></ReactEcharts>
  );
};

export default LineChart;
