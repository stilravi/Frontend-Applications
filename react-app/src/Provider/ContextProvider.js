import { createContext, useState, useEffect } from "react";

const ApiContext = createContext(null);

export const ApiProvider = ({ children }) => {
  const [json, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((result) => result.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return <ApiContext.Provider value={json}>{children}</ApiContext.Provider>;
};

export default ApiContext;
