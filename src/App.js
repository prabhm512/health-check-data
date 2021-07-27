import React, { useEffect, useState } from "react";
import "./styles.css";

import Table from "./Table/Table";

export default function App() {
  return (
    <div className="App">
      <h1>Health Check Data</h1>
      <h2>Service ID and employees who manage this service</h2>
      <div>
        <Table></Table>
      </div>
    </div>
  );
}
