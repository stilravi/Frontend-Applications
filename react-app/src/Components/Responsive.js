import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";
import { useData } from "./useData";

const Chart = () => {
  const d3Chart = useRef();
  const apiData = useData();

  const [shownData, setShownData] = useState();

  const [d3Tools, setD3Tools] = useState({});

  useEffect(() => {
    const margin = { top: 40, bottom: 10, left: 300, right: 20 };
    const width = 850 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

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

    setD3Tools({
      xscale,
      yscale,
      g_xaxis,
      g_yaxis,
      xaxis,
      yaxis,
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

    const { xscale, yscale, g_xaxis, g_yaxis, xaxis, yaxis, svg } = d3Tools;

    xscale.domain([0, d3.max(shownData, (d) => d.abv)]);
    yscale.domain(shownData.map((d) => d.name));

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
      .attr("y", (d) => yscale(d.name));
  }, [shownData]);

  function handleInputChange(event) {
    console.log(event.currentTarget.checked);
    if (event.currentTarget.checked) {
      setShownData(apiData.filter((d) => d.abv < 8));
    } else {
      setShownData(apiData);
    }
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="beers"
          value="1"
          id="filter-beers-only"
          onChange={handleInputChange}
        />
        Only show beers under 8% alcohol
      </label>
      <svg ref={d3Chart}></svg>
    </div>
  );
};

export default Chart;
