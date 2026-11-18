import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
  const [Data, setData] = useState({});
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json
`)
      .then((response) => response.json())
      .then((response) => setData(response[currency]));
    console.log(Data);
  }, [currency, Data]);
  console.log(Data);
  return Data;
};

export default useCurrencyInfo;
