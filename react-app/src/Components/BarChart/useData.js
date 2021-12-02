import { useEffect, useState } from "react";

export const useData = () => {
  const [data, setData] = useState(null);

  // useEffect with a Fetch inside
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Setting the Data
      });
  }, []);

  // Returning the Data
  return data;
};
