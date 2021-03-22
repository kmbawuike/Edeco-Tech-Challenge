import React, { Component } from "react";
import Chart from "react-apexcharts";
import { MAIN_COLOR } from "../utility/color";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: [MAIN_COLOR],
        stroke: {
          curve: "smooth",
          width: 1,
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 3,
          strokeColors: MAIN_COLOR,
        },
        xaxis: {
          categories: ["August", 1, 5, 10, 15, 20, 25],
          axisBorder: {
            show: true,
            color: MAIN_COLOR,
          },
        },
        yaxis: {
          axisBorder: {
            show: true,
            color: MAIN_COLOR,
          },
        },
      },

      grid: {
        row: {
          colors: [MAIN_COLOR],
        },
      },

      legend: {
        show: false,
      },

      series: [
        {
          name: "Total Sales",
          data: [0, 1, 2, 1, 2, 3, 1],
        },
        {
          name: "Total Order",
          data: [0, 1, 2, 1, 2, 3, 1],
        },
      ],
      tooltip: {
        custom: function({ series, seriesIndex, dataPointIndex, w }) {
          return (
            '<div class="arrow_box">' +
            "<span>" +
            w.globals.labels[dataPointIndex] +
            ": " +
            series[seriesIndex][dataPointIndex] +
            "</span>" +
            "</div>"
          );
        }
      }
    };
    
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              height={"355"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
