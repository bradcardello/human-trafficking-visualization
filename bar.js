// Show Bar
function showBar(data) {
  var margin = {top: 20, right: 20, bottom: 30, left: 40},
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

  var keys = d3.keys(data[0]).filter(function(key) { return key !== "State"; });
  if (keys.length === 1) {
    var x0 = d3.scale.ordinal()
    .rangeRoundBands([0, width], .7);
  } else {
    var x0 = d3.scale.ordinal()
    .rangeRoundBands([0, width], .3);
  }


  var x1 = d3.scale.ordinal();

  var y = d3.scale.linear()
    .range([height, 0]);

  var color = d3.scale.ordinal()
    .range(["#5bc0de", "#d9534f", "#f0ad4e", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  var xAxis = d3.svg.axis()
      .scale(x0)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .tickFormat(d3.format(".2s"));

  var svg = d3.select("#bar")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  data.forEach(function(d) {
    d.data = keys.map(function(name) { return {name: name, value: +d[name]}; });
  });

  x0.domain(data.map(function(d) { return d.State; }));
  x1.domain(keys).rangeRoundBands([0, x0.rangeBand()]);
  
  y.domain([0, d3.max(data, function(d) { return d3.max(d.data, function(d) { return d.value; }) + d3.max(d.data, function(d) { return d.value; })/4; })]);

  svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);

  svg.append("g")
  .attr("class", "y axis")
  .call(yAxis)
  .append("text")
  .attr("y", 6)
  .attr("dy", ".71em")
  .style("text-anchor", "end")
  .text("Number")
  .attr("transform", "rotate(-90)");


  var state = svg.selectAll(".state")
  .data(data)
  .enter().append("g")
  .attr("class", "state")
  .attr("transform", function(d) { console.log(x0(d.State));return "translate(" + x0(d.State) + ",0)"; });

  console.log("x1.rangeBand() = " + x1.rangeBand());

  state.selectAll("rect")
  .data(function(d) { return d.data; })
  .enter()
  .append("rect")
  .attr("width", function(d) {
    if (x1.rangeBand() > 300) {
      return x1.rangeBand()-5;
    } else {
      return x1.rangeBand()-5;
    }
  })
  .attr("x", function(d) { return x1(d.name); })
  .attr("y",function(d,i) { 0 })
  .transition()
  .delay(function (d, i) { return i * 700; })
  .attr("y", function(d, i) {return y(d.value)})
  .attr("height", function(d) { return height - y(d.value);})
  .style("fill", function(d) { return color(d.name); });

  state.selectAll("text")
  .data(function(d) { return d.data; })
  .enter()
  .append("text")
  .attr("x", function(d) {
    return x1(d.name) + 30;
  })
  .attr("y", function(d) { return  y(d.value) - 5; })
  .attr("text-anchor", "middle")
  .text(function(d, i) { return (Math.round((d.value)  * 100) / 100).toFixed(2); });


  var legend = svg.selectAll(".legend")
  .data(keys.slice())
  .enter().append("g")
  .attr("class", "legend")
  .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
  .attr("x", 25)
  .attr("width", 18)
  .attr("height", 18)
  .style("fill", color)

  legend.append("text")
  .attr("x", 50)
  .attr("y", 9)
  .attr("dy", ".35em")
  .style("text-anchor", "start")
  .text(function(d) { return d; });
}