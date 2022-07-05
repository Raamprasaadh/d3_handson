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

      var getMax=(dataSet)=>{
        var max=0;
        dataSet.map(dt=>(dt.count>max)?max=dt.count:null)
        return max;
      }
      d3.selectAll("#barChart").selectAll("div").data(dataSet).enter().append("div").classed("bar", true).style('height',`${getMax(dataSet)}px`)
      d3.select("#barChart").selectAll(".bar")
.transition().duration(1000).style("height",bar=>`${bar.count}px`).style("width","80px").style("margin-right","10px").delay(300);
  }, []);
  return (
    <div className="App">
      <div id="pgraph"></div>
      <div id="barChart"></div>
    </div>
  );
}

export default App;
