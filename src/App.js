import * as d3 from "d3";
import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    let dataSet = [
      { subject: "Dogs", count: 150 },
      { subject: "Cats", count: 75 },
      { subject: "Fish", count: 130 },
      { subject: "Bunnies", count: 185 },
    ];
    d3.select("#pgraph")
      .selectAll("p")
      .data(dataSet)
      .enter()
      .append("p")
      .text((dt) => dt.subject + " " + dt.count);
  }, []);
  return (
    <div className="App">
      <div id="pgraph"></div>
    </div>
  );
}

export default App;
