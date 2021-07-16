import React from "react";
import Card from "../UI/Card";
import LineChart from "./LineChart";

const Chart = () => {
  return (
    <Card className="chart">
      <div className="chart__header-container">
        <h3 className="chart__header">Summary Chart</h3>
        {/* <div className="chart__select-container">
          <p className="chart__select-">Show: </p>
          <select >
            <option value="weekly">Weekly</option>
            <option value="monthly" selected>
              Monthly
            </option>
            <option value="yearly">Yearly</option>
          </select>
        </div> */}
      </div>
      <LineChart />
    </Card>
  );
};

export default Chart;
