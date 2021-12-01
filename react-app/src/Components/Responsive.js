import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const data = [
  { category: "A", quantity: 40 },
  { category: "B", quantity: 80 },
  { category: "C", quantity: 60 },
  { category: "D", quantity: 120 },
  { category: "E", quantity: 120 },
  { category: "F", quantity: 120 },
  { category: "F1", quantity: 120 },
  { category: "F3", quantity: 120 },
  { category: "F4", quantity: 120 },
  { category: "F5", quantity: 120 },
  { category: "F6", quantity: 120 },
  { category: "G", quantity: 120 },
];

const Chart = () => {
  const d3Chart = useRef();

  useEffect(() => {
    const margin = { top: 40, bottom: 10, left: 300, right: 20 };
    const width = 850 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    // const chartwidth =
    //   parseInt(d3.select("#d3demo").style("width")) -
    //   margin.left -
    //   margin.right;

    // const chartheight =
    //   parseInt(d3.select("#d3demo").style("width")) -
    //   margin.top -
    //   margin.bottom;
    console.log("test");
    // const svg = d3
    //   .select(d3Chart.current)
    //   .attr("width", width + margin.left + margin.right)
    //   .attr("height", height + margin.top + margin.bottom);

    // const x = d3
    //   .scaleBand()
    //   .domain(d3.range(data.length))
    //   .range([margin.left, width - margin.right])
    //   .paddingInner(0.4);

    // const y = d3
    //   .scaleLinear()
    //   .domain([0, d3.max(data, (d) => d.quantity)])
    //   .range([height, margin.top]);

    // svg
    //   .append("g")
    //   .attr("transform", "translate(0," + height + ")")
    //   .call(
    //     d3
    //       .axisBottom(x)
    //       .tickFormat((i) => data[i].category)
    //       .tickSizeOuter(0)
    //   );

    // svg
    //   .append("g")
    //   .attr("transform", "translate(" + margin.left + ",0)")
    //   .call(d3.axisLeft(y));

    const svg = d3
      .select(d3Chart.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    // Creates <g> inside the <svg> with transform attribute
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scales setup
    const xscale = d3.scaleLinear().range([0, width]);
    const yscale = d3.scaleBand().rangeRound([0, height]).paddingInner(0.4);

    // Axis setup
    const xaxis = d3.axisTop().scale(xscale).tickSizeOuter([0]);
    const g_xaxis = g.append("g").attr("class", "x axis");
    const yaxis = d3.axisLeft().scale(yscale).tickSizeOuter([0]);
    const g_yaxis = g.append("g").attr("class", "y axis");

    xscale.domain([0, d3.max(data, (d) => d.quantity)]);
    yscale.domain(data.map((d) => d.category));

    //Render the axis
    g_xaxis.transition().call(xaxis);
    g_yaxis.transition().call(yaxis);

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)
      .selectAll("rect")
      .data(data, (d) => d.category)
      .join("rect")
      .transition()
      .attr("height", yscale.bandwidth())
      .attr("width", (d) => xscale(d.quantity))
      .attr("y", (d) => yscale(d.category));
  });

  return (
    <div id="d3demo">
      <svg ref={d3Chart}></svg>
    </div>
  );
};

export default Chart;
