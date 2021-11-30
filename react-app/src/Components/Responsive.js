import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const data = [
  { category: "A", quantity: 40 },
  { category: "B", quantity: 80 },
  { category: "C", quantity: 60 },
  { category: "D", quantity: 120 },
];

const Chart = () => {
  const d3Chart = useRef();

  useEffect(() => {
    const margin = { top: 50, right: 30, bottom: 30, left: 60 };

    const chartwidth =
      parseInt(d3.select("#d3demo").style("width")) -
      margin.left -
      margin.right;

    const chartheight =
      parseInt(d3.select("#d3demo").style("width")) -
      margin.top -
      margin.bottom;

    const svg = d3
      .select(d3Chart.current)
      .attr("width", chartwidth + margin.left + margin.right)
      .attr("height", chartheight + margin.top + margin.bottom);

    const x = d3
      .scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, chartwidth - margin.right]);

    svg
      .append("g")
      .attr("transform", "translate(0," + chartheight + ")")
      .call(
        d3
          .axisBottom(x)
          .tickFormat((i) => data[i].category)
          .tickSizeOuter(0)
      );

    const max = d3.max(data, function (d) {
      return d.quantity;
    });

    const y = d3
      .scaleLinear()
      .domain([0, max])
      .range([chartheight, margin.top]);

    svg
      .append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

    svg
      .append("g")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", (d) => y(d.quantity))
      .attr("height", (d) => y(0) - y(d.quantity))
      .attr("width", x.bandwidth());
  });

  return (
    <div id="d3demo">
      <svg ref={d3Chart}></svg>
    </div>
  );
};

export default Chart;
