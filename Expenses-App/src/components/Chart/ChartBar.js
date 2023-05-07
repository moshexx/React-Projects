import React from "react";
import "./ChartBar.css";

const ChartBar = ({ label, value, maxValue }) => {
    let barHight = "0%";
    if (maxValue > 0) {
        barHight = calculateBarHight(value, maxValue);
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div
                    className="chart-bar__fill"
                    style={{ height: barHight }}
                ></div>
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
    );
};

const calculateBarHight = (value, maxValue) => Math.round((value / maxValue) * 100) + "%";

export default ChartBar;
