// View All Trafficking Crimes
function viewAllTrafficking() {
  var color = d3.scale.linear()
    .range(["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#de2d26", "#99000d"]);

  var val1 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.totalCrimes, b.value.totalCrimes); })
    // take the first option
    [0];

  var val2 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.totalCrimes, b.value.totalCrimes); })
    // take the first option
    [5];

  var val3 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.totalCrimes, b.value.totalCrimes); })
    // take the first option
    [22];

  var val4 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.totalCrimes, b.value.totalCrimes); })
    // take the first option
    [37];

  var val5 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.totalCrimes, b.value.totalCrimes); })
    // take the first option
    [48];

  var val6 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.totalCrimes, b.value.totalCrimes); })
    // take the first option
    [50];

  color.domain([
    val1.value.totalCrimes,
    val2.value.totalCrimes,
    val3.value.totalCrimes,
    val4.value.totalCrimes,
    val5.value.totalCrimes,
    val6.value.totalCrimes
  ]);

  var keys = Object.keys(data);
  /* Interpolate color according to the numbers of tracking crime reported*/
  keys.forEach(function(d){
    data[d].color = color(data[d].totalCrimes);
    /*data[d].color = d3.interpolate("#fee5d9", "#99000d")((data[d].totalCrimes)/30);
    console.log(data[d].color);*/
  });
  /* draw states on id #statesvg */
  var svg = uStates.draw("#statesvg", data, tooltipHtml, "totalCrimes");
}

// View All Trafficking Crimes Male
function viewAllTraffickingM() {
  var color = d3.scale.linear()
    .range(["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#de2d26", "#99000d"]);

  var val1 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.malesTotal, b.value.malesTotal); })
    // take the first option
    [0];

  var val2 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.malesTotal, b.value.malesTotal); })
    // take the first option
    [5];

  var val3 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.malesTotal, b.value.malesTotal); })
    // take the first option
    [22];

  var val4 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.malesTotal, b.value.malesTotal); })
    // take the first option
    [37];

  var val5 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.malesTotal, b.value.malesTotal); })
    // take the first option
    [48];

  var val6 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.malesTotal, b.value.malesTotal); })
    // take the first option
    [50];

  color.domain([
    val1.value.malesTotal,
    val2.value.malesTotal,
    val3.value.malesTotal,
    val4.value.malesTotal,
    val5.value.malesTotal,
    val6.value.malesTotal
  ]);

  var keys = Object.keys(data);
  /* Interpolate color according to the numbers of tracking crime reported*/
  keys.forEach(function(d){
    data[d].color = color(data[d].malesTotal);
    /*data[d].color = d3.interpolate("#fee5d9", "#99000d")((data[d].totalCrimes)/30);
    console.log(data[d].color);*/
  });
  /* draw states on id #statesvg */
  var svg = uStates.draw("#statesvg", data, tooltipHtml, "malesTotal");
}

// View All Trafficking Crimes Female
function viewAllTraffickingF() {
  var color = d3.scale.linear()
    .range(["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#de2d26", "#99000d"]);

  var val1 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.femalesTotal, b.value.femalesTotal); })
    // take the first option
    [0];

  var val2 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.femalesTotal, b.value.femalesTotal); })
    // take the first option
    [5];

  var val3 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.femalesTotal, b.value.femalesTotal); })
    // take the first option
    [22];

  var val4 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.femalesTotal, b.value.femalesTotal); })
    // take the first option
    [37];

  var val5 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.femalesTotal, b.value.femalesTotal); })
    // take the first option
    [48];

  var val6 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.femalesTotal, b.value.femalesTotal); })
    // take the first option
    [50];

  color.domain([
    val1.value.femalesTotal,
    val2.value.femalesTotal,
    val3.value.femalesTotal,
    val4.value.femalesTotal,
    val5.value.femalesTotal,
    val6.value.femalesTotal
  ]);

  var keys = Object.keys(data);
  /* Interpolate color according to the numbers of tracking crime reported*/
  keys.forEach(function(d){
    data[d].color = color(data[d].femalesTotal);
    /*data[d].color = d3.interpolate("#fee5d9", "#99000d")((data[d].totalCrimes)/30);
    console.log(data[d].color);*/
  });
  /* draw states on id #statesvg */
  var svg = uStates.draw("#statesvg", data, tooltipHtml, "femalesTotal");
}

// View All Sex Trade
function viewSexTrade() {
  var color = d3.scale.linear()
  .range(["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#de2d26", "#99000d"]);

  var val1 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.sexTotal, b.value.sexTotal); })
    // take the first option
    [0];

  var val2 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.sexTotal, b.value.sexTotal); })
    // take the first option
    [5];

  var val3 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.sexTotal, b.value.sexTotal); })
    // take the first option
    [22];

  var val4 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.sexTotal, b.value.sexTotal); })
    // take the first option
    [37];

  var val5 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.sexTotal, b.value.sexTotal); })
    // take the first option
    [48];

  var val6 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.sexTotal, b.value.sexTotal); })
    // take the first option
    [50];

  color.domain([
    val1.value.sexTotal,
    val2.value.sexTotal,
    val3.value.sexTotal,
    val4.value.sexTotal,
    val5.value.sexTotal,
    val6.value.sexTotal
  ]);

  var keys = Object.keys(data);
  /* Interpolate color according to the numbers of tracking crime reported*/
  keys.forEach(function(d){
    data[d].color = color(data[d].sexTotal);
    /*data[d].color = d3.interpolate("#fee5d9", "#99000d")((data[d].sexTotal)/30);
    console.log(data[d].color);*/
  });
  /* draw states on id #statesvg */
  var svg = uStates.draw("#statesvg", data, tooltipHtmlSex, "sexTotal");
}

// View All Sex Trade Masculine
function viewSexTradeM() {
  var color = d3.scale.linear()
  .range(["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#de2d26", "#99000d"]);

  var val1 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.malesSex, b.value.malesSex); })
    // take the first option
    [0];

  var val2 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.malesSex, b.value.malesSex); })
    // take the first option
    [5];

  var val3 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.malesSex, b.value.malesSex); })
    // take the first option
    [22];

  var val4 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.malesSex, b.value.malesSex); })
    // take the first option
    [37];

  var val5 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.malesSex, b.value.malesSex); })
    // take the first option
    [48];

  var val6 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.malesSex, b.value.malesSex); })
    // take the first option
    [50];

  color.domain([
    val1.value.malesSex,
    val2.value.malesSex,
    val3.value.malesSex,
    val4.value.malesSex,
    val5.value.malesSex,
    val6.value.malesSex
  ]);

  var keys = Object.keys(data);
  /* Interpolate color according to the numbers of tracking crime reported*/
  keys.forEach(function(d){
    data[d].color = color(data[d].malesSex);
    /*data[d].color = d3.interpolate("#fee5d9", "#99000d")((data[d].malesSex)/30);
    console.log(data[d].color);*/
  });
  /* draw states on id #statesvg */
  var svg = uStates.draw("#statesvg", data, tooltipHtmlSex, "malesSex");
}

// View All Sex Trade Feminine
function viewSexTradeF() {
  var color = d3.scale.linear()
  .range(["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#de2d26", "#99000d"]);

  var val1 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.femalesSex, b.value.femalesSex); })
    // take the first option
    [0];

  var val2 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.femalesSex, b.value.femalesSex); })
    // take the first option
    [5];

  var val3 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.femalesSex, b.value.femalesSex); })
    // take the first option
    [22];

  var val4 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.femalesSex, b.value.femalesSex); })
    // take the first option
    [37];

  var val5 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.femalesSex, b.value.femalesSex); })
    // take the first option
    [48];

  var val6 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.femalesSex, b.value.femalesSex); })
    // take the first option
    [50];

  color.domain([
    val1.value.femalesSex,
    val2.value.femalesSex,
    val3.value.femalesSex,
    val4.value.femalesSex,
    val5.value.femalesSex,
    val6.value.femalesSex
  ]);

  var keys = Object.keys(data);
  /* Interpolate color according to the numbers of tracking crime reported*/
  keys.forEach(function(d){
    data[d].color = color(data[d].femalesSex);
    /*data[d].color = d3.interpolate("#fee5d9", "#99000d")((data[d].femalesSex)/30);
    console.log(data[d].color);*/
  });
  /* draw states on id #statesvg */
  var svg = uStates.draw("#statesvg", data, tooltipHtmlSex, "femalesSex");
}

// View All Forced Labor
function viewForcedLabor() {
  var color = d3.scale.linear()
  .range(["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#de2d26", "#99000d"]);

  var val1 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.laborTotal, b.value.laborTotal); })
    // take the first option
    [0];

  var val2 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.laborTotal, b.value.laborTotal); })
    // take the first option
    [5];

  var val3 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.laborTotal, b.value.laborTotal); })
    // take the first option
    [22];

  var val4 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.laborTotal, b.value.laborTotal); })
    // take the first option
    [37];

  var val5 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.laborTotal, b.value.laborTotal); })
    // take the first option
    [48];

  var val6 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.laborTotal, b.value.laborTotal); })
    // take the first option
    [50];

  color.domain([
    val1.value.laborTotal,
    val2.value.laborTotal,
    val3.value.laborTotal,
    val4.value.laborTotal,
    val5.value.laborTotal,
    val6.value.laborTotal
  ]);

  var keys = Object.keys(data);
  /* Interpolate color according to the numbers of tracking crime reported*/
  keys.forEach(function(d){
    data[d].color = color(data[d].laborTotal);
    /*data[d].color = d3.interpolate("#fee5d9", "#99000d")((data[d].laborTotal)/30);
    console.log(data[d].color);*/
  });
  /* draw states on id #statesvg */
  var svg = uStates.draw("#statesvg", data, tooltipHtmlLabor, "laborTotal");
}

// View All Forced Labor Masculine
function viewForcedLaborM() {
  var color = d3.scale.linear()
  .range(["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#de2d26", "#99000d"]);

  var val1 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.malesLabor, b.value.malesLabor); })
    // take the first option
    [0];

  var val2 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.malesLabor, b.value.malesLabor); })
    // take the first option
    [5];

  var val3 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.malesLabor, b.value.malesLabor); })
    // take the first option
    [22];

  var val4 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.malesLabor, b.value.malesLabor); })
    // take the first option
    [37];

  var val5 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.malesLabor, b.value.malesLabor); })
    // take the first option
    [48];

  var val6 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.malesLabor, b.value.malesLabor); })
    // take the first option
    [50];

  color.domain([
    val1.value.malesLabor,
    val2.value.malesLabor,
    val3.value.malesLabor,
    val4.value.malesLabor,
    val5.value.malesLabor,
    val6.value.malesLabor
  ]);

  var keys = Object.keys(data);
  /* Interpolate color according to the numbers of tracking crime reported*/
  keys.forEach(function(d){
    data[d].color = color(data[d].malesLabor);
    /*data[d].color = d3.interpolate("#fee5d9", "#99000d")((data[d].laborTotal)/30);
    console.log(data[d].color);*/
  });
  /* draw states on id #statesvg */
  var svg = uStates.draw("#statesvg", data, tooltipHtmlLabor, "malesLabor");
}



// View All Forced Labor Feminine
function viewForcedLaborF() {
  var color = d3.scale.linear()
  .range(["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#de2d26", "#99000d"]);

  var val1 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.femalesLabor, b.value.femalesLabor); })
    // take the first option
    [0];

  var val2 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.femalesLabor, b.value.femalesLabor); })
    // take the first option
    [5];

  var val3 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.femalesLabor, b.value.femalesLabor); })
    // take the first option
    [22];

  var val4 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.femalesLabor, b.value.femalesLabor); })
    // take the first option
    [37];

  var val5 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.femalesLabor, b.value.femalesLabor); })
    // take the first option
    [48];

  var val6 = d3.entries(data)
    // sort by value descending
    .sort(function(a, b) { return d3.ascending(a.value.femalesLabor, b.value.femalesLabor); })
    // take the first option
    [50];

  color.domain([
    val1.value.femalesLabor,
    val2.value.femalesLabor,
    val3.value.femalesLabor,
    val4.value.femalesLabor,
    val5.value.femalesLabor,
    val6.value.femalesLabor
  ]);

  var keys = Object.keys(data);
  /* Interpolate color according to the numbers of tracking crime reported*/
  keys.forEach(function(d){
    data[d].color = color(data[d].femalesLabor);
    /*data[d].color = d3.interpolate("#fee5d9", "#99000d")((data[d].laborTotal)/30);
    console.log(data[d].color);*/
  });
  /* draw states on id #statesvg */
  var svg = uStates.draw("#statesvg", data, tooltipHtmlLabor, "femalesLabor");
}