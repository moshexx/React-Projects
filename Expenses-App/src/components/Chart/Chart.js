import React from "react";
import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
    const maxValue = getMaxValue(dataPoints);
    const chartBars = dataPoints.map((dataPoint) => (
        <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
            label={dataPoint.label}
        />
    ));

    return <div className="chart">{chartBars}</div>;
};

const getMaxValue = (dataPoints) => {
    const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
    return Math.max(...dataPointValues);
};

export default Chart;
