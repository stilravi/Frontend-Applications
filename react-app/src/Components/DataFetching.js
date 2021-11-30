import React, { useState, useEffect } from "react";

function DataFetching() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((data) => {})
      .catch((err) => {
        console.log(err); // Console log de Error als deze er is
      });
  });
  return <div></div>;
}

export default DataFetching;
