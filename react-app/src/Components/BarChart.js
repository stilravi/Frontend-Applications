import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";
import { useData } from "./useData";
import styled from "styled-components";

const StyledCheckbox = styled.label`
  position: absolute;
  top: 65px;
  left: 30px;
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  color: #4e4e4e;
  margin-top: 10px;
`;

const StyledBarChart = styled.div`
  text {
    font-family: "Outfit", sans-serif;
    font-size: 11px;
    color: #4e4e4e;
  }
`;

const Chart = () => {
  const d3Chart = useRef();
  const apiData = useData();
  const [shownData, setShownData] = useState();
  const [d3Tools, setD3Tools] = useState({});

  useEffect(() => {
    const margin = { top: 80, bottom: 10, left: 200, right: 20 };
    const width = 850 - margin.left - margin.right;
    const height = 650 - margin.top - margin.bottom;

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

    // Color Scale
    const colorScale = d3
      .scaleSequential(d3.interpolateRgb("#a8c0ff", "#3A4FCF"))
      .domain([0, 25]);

    setD3Tools({
      xscale,
      yscale,
      g_xaxis,
      g_yaxis,
      xaxis,
      yaxis,
      colorScale,
      svg,
    });
  }, []);

  useEffect(() => {
    setShownData(apiData);
  }, [apiData]);

  useEffect(() => {
    if (!shownData) {
      return;
    }

    const { xscale, yscale, g_xaxis, g_yaxis, xaxis, yaxis, colorScale, svg } =
      d3Tools;

    xscale.domain([0, d3.max(shownData, (d) => d.abv)]);
    yscale.domain(shownData.map((d) => d.name));
    colorScale.domain([0, d3.max(shownData, (d) => d.abv)]);

    g_xaxis.transition().call(xaxis);
    g_yaxis.transition().call(yaxis);

    svg
      .select("g")
      .selectAll("rect")
      .data(shownData, (d) => d.name)
      .join("rect")
      .transition()
      .attr("height", yscale.bandwidth())
      .attr("width", (d) => xscale(d.abv))
      .attr("y", (d) => yscale(d.name))
      .attr("fill", (d, i) => colorScale(d.abv));
  });

  function handleInputChange(event) {
    console.log(event.currentTarget.checked);
    if (event.currentTarget.checked) {
      setShownData(apiData.filter((d) => d.abv < 8));
    } else {
      setShownData(apiData);
    }
  }

  return (
    <StyledBarChart>
      <StyledCheckbox>
        <input
          type="checkbox"
          name="beers"
          value="1"
          id="filter-beers-only"
          onChange={handleInputChange}
        />
        Only show beers under 8% alcohol
      </StyledCheckbox>
      <svg ref={d3Chart}></svg>
    </StyledBarChart>
  );
};

export default Chart;
