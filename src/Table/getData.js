import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "60ff4f38edd426410d649747";

export default function GetData(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user?limit=50`, { headers: { "app-id": APP_ID } })
      .then(({ data }) => {
        setData(data);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
