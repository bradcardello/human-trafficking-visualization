// Variable to select which category to show in the bar graph
var groupSelectedBar = "All Human Trafficking";
var selection;
var typeOfCrimeStr;

/* function to create html content string in tooltip div. */
function tooltipHtml(n, d) {
  return "<h4 style='color: blue;'>"+n+"</h4><p>Per 1,000,000 People</p><table>"+
  
    "<tr><td align='left'>Sex trade: </td><td align='right'>"+parseFloat(Math.round((d.sexTotal)  * 100) / 100).toFixed(2)+"</td></tr>"+
    "<tr><td align='left'>Forced labor: </td><td align='right'>"+parseFloat(Math.round((d.laborTotal)  * 100) / 100).toFixed(2)+"</td></tr>"+
      "<tr><td align='left'>Total Crimes: </td><td align='right'>"+parseFloat(Math.round((d.totalCrimes) * 100) / 100).toFixed(2)+"</td></tr>"
    "</table>";
}

/* function to create html content string in tooltip div. */
function tooltipHtmlSex(n, d) {
  return "<h4 style='color: blue;'>"+n+"</h4><p><b>Sex Trade</b> <br> Per 1,000,000 People</p><table>"+
  
    "<tr><td align='left'>Male: </td><td align='right'>"+parseFloat(Math.round((d.malesSex)  * 100) / 100).toFixed(2)+"</td></tr>"+
    "<tr><td align='left'>Female: </td><td align='right'>"+parseFloat(Math.round((d.femalesSex)  * 100) / 100).toFixed(2)+"</td></tr>"+
       "<tr><td align='left'>Total: </td><td align='right'>"+parseFloat(Math.round((d.sexTotal) * 100) / 100).toFixed(2)+"</td></tr>"
    "</table>";
}

/* function to create html content string in tooltip div. */
function tooltipHtmlLabor(n, d) {
  return "<h4 style='color: blue;'>"+n+"</h4> <br> <b>Forced Labor</b> <br> <p>Per 1,000,000 People</p><table>"+
  
    "<tr><td align='left'>Male: </td><td align='right'>"+parseFloat(Math.round((d.malesLabor)  * 100) / 100).toFixed(2)+"</td></tr>"+
    "<tr><td align='left'>Female: </td><td align='right'>"+parseFloat(Math.round((d.femalesLabor)  * 100) / 100).toFixed(2)+"</td></tr>"+
      "<tr><td align='left'>Total: </td><td align='right'>"+parseFloat(Math.round((d.laborTotal) * 100) / 100).toFixed(2)+"</td></tr>"
    "</table>";
}

/*In case we need to redraw the data*/
function draw(data, selection, color1, color2) {
  var keys = Object.keys(data);
  /* Interpolate color according to the numbers of tracking crime reported*/
  keys.forEach(function(d){
    data[d].color = d3.interpolate(color1, color2)(data[d][selection]);
  });

  /* draw states on id #statesvg */
  uStates.draw("#statesvg", data, tooltipHtml);
}

d3.json("data.json", function(error, data) {

  // View All Trafficking Crimes
  function viewAllTrafficking() {
    var color = d3.scale.linear()
      //.range(["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#de2d26", "#99000d"]);
      //.range(["#E4F1FE", "#C5EFF7", "#81CFE0", "#22A7F0", "#3c78df", "#1d63db"]);
      .range(["#C5E6F9", "#86C9F4", "#3FA9E4", "#057FC3", "#0162A2", "#054280"]);

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
      .range(["#C5E6F9", "#86C9F4", "#3FA9E4", "#057FC3", "#0162A2", "#054280"]);
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
      .range(["#C5E6F9", "#86C9F4", "#3FA9E4", "#057FC3", "#0162A2", "#054280"]);
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
      .range(["#FCE9D2", "#FAD3A5", "#F8BE78", "#F4931F", "#F0750F", "#C76706"]);

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
      .range(["#FCE9D2", "#FAD3A5", "#F8BE78", "#F4931F", "#F0750F", "#C76706"]);

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
      .range(["#FCE9D2", "#FAD3A5", "#F8BE78", "#F4931F", "#F0750F", "#C76706"]);

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
  };

  // Add event listener to buttons for selecting different data set
  $('.graph-select').click(function() {
    $('#graph-title').text($(this).attr('text'));
    var id = $(this).attr('id');
    switch(id) {
      case "allTraffickingBtn":
        viewAllTrafficking();
        groupSelectedBar = "All Human Trafficking";
        break;
      case "allTraffickingBtnM":
        viewAllTraffickingM();
        groupSelectedBar = "All Human Trafficking (Male)";
        break;
      case "allTraffickingBtnF":
        viewAllTraffickingF();
        groupSelectedBar = "All Human Trafficking (Female)";
        break;
      case "sexTradeBtn":
        viewSexTrade();
        groupSelectedBar = "Sex Trade";
        break;
      case "sexTradeBtnM":
        viewSexTradeM();
      groupSelectedBar = "Sex Trade (Male)";
        break;
      case "sexTradeBtnF":
        viewSexTradeF();
        groupSelectedBar = "Sex Trade (Female)";
        break;
      case "forcedLaborBtn":
        viewForcedLabor();
        groupSelectedBar = "Forced Labor";
        break;
      case "forcedLaborBtnM":
        viewForcedLaborM();
        groupSelectedBar = "Forced Labor (Male)";
        break;
      case "forcedLaborBtnF":
        viewForcedLaborF();
        groupSelectedBar = "Forced Labor (Female)";
        break;
    };
  });

  // Add listener to compare button, to compare states
  $('#compare').click(function(){
    prepareBarGraphData();
  });

  /*Function to compare two states, change modal title, show bar graph on modal, show bootstrap modal*/
  function compareStates(data,state1, state2) {
    showBar(data);
    console.log(data);
    calculateStates(data[0], data[1]);
    var title = groupSelectedBar + " - " + state1 + " VS. " + state2;
    $('.modal-title').text(title);
    $('#myModal').modal('show');
  };

  /* Function to calculate the statistical differences between two states */
  function calculateStates(state1, state2) {
    var state1_total = state1['Total'];
    var state1_sex = state1['Male'];
    var state1_labor = state1['Female'];

    var state2_total = state2['Total'];
    var state2_sex = state2['Male'];
    var state2_labor = state2['Female'];

    var more1 = (state1_labor > state2_labor);
    var more2 = (state1_sex > state2_sex);
    var more3 = (state1_total > state2_total);

    var p1 = Math.abs(Math.floor((state1_labor - state2_labor) / state1_labor * 100));
    var p2 = Math.abs(Math.floor((state1_sex - state2_sex) / state1_sex * 100));
    var p3 = Math.abs(Math.floor((state1_total - state2_total) / state1_total * 100));

     var s1, s2, s3;
   if (more1) {
     s1 = state1.State + ' has ' + p1 + "% more crimes reported than " + state2.State;
   } else {
     s1 = state1.State + ' has ' + p1 + "% less crimes reported than " + state2.State;
   }

   if (more2) {
     s2 = state1.State + ' has ' + p2 + "% more male victms than " + state2.State;
   } else {
     s2 = state1.State + ' has ' + p2 + "% less male victms than " + state2.State;
   }

   if (more3) {
     s3 = state1.State + ' has ' + p3 + "% more female victms " + state2.State;
   } else {
     s3 =state1.State + ' has ' + p3 + "% less female victms " + state2.State;
   }
   var innerHTML = '<p>' + s1 + '</p>' + '<p>' + s2 + '</p>' + '<p>' + s3 + '</p>';
   console.log(s1, s2, s3);
   $('#text').html(innerHTML);
 }

  function prepareBarGraphData() {
    var arr = [];

    // Get values from selectors for both states
    var state1 = $('#state1').val(); //get value from input
    var state2 = $('#state2').val();


    var legendMessage = "Trafficking crimes reported per 1,000,000 People"
    var keys = Object.keys(data);
    var length = keys.length;
    var currentTitle = $('#graph-title').text();
    console.log("currentTitle: " + currentTitle);
    console.log(groupSelectedBar);
    switch(currentTitle) {
      case "All Human Trafficking":
        // Compose data to the compare function
        for (var i = 0; i < length; i++) {
          if (keys[i] == state1){
              arr.push({"State": d3.select('#' + state1).attr("name"),
              "Total": data[state1].totalCrimes,
              "Male": data[state1].malesTotal,
              "Female": data[state1].femalesTotal
            });
          }
          if (keys[i] == state2){
            arr.push({"State": d3.select('#' + state2).attr("name"),
              "Total": data[state2].totalCrimes,
              "Male": data[state2].malesTotal,
              "Female": data[state2].femalesTotal

            });
          }
        }
        break;
      case "All Human Trafficking (Male)":
        // Compose data to the compare function
        for (var i = 0; i < length; i++) {
          if (keys[i] == state1){
              arr.push({"State": d3.select('#' + state1).attr("name"),
              "Male": data[state1].malesTotal,
            });
          }
          if (keys[i] == state2){
            arr.push({"State": d3.select('#' + state2).attr("name"),
              "Male": data[state2].malesTotal,
            });
          }
        }
        break;
      case "All Human Trafficking (Female)":
        // Compose data to the compare function
        for (var i = 0; i < length; i++) {
          if (keys[i] == state1){
              arr.push({"State": d3.select('#' + state1).attr("name"),
              "Female": data[state1].femalesTotal
            });
          }
          if (keys[i] == state2){
            arr.push({"State": d3.select('#' + state2).attr("name"),
              "Female": data[state2].femalesTotal
            });
          }
        }
        break;
      case "Sex Trade":
        // Compose data to the compare function
        for (var i = 0; i < length; i++) {
          if (keys[i] == state1){
              arr.push({"State": d3.select('#' + state1).attr("name"),
              "Total": data[state1].sexTraffickingCrimesReported,
              "Male": data[state1].malesSex,
              "Female": data[state1].femalesSex
            });
          }
          if (keys[i] == state2){
            arr.push({"State": d3.select('#' + state2).attr("name"),
              "Total": data[state2].sexTraffickingCrimesReported,
              "Male": data[state2].malesSex,
              "Female": data[state2].femalesSex
            });
          }
        }
        break;
      case "Sex Trade (Male)":
        // Compose data to the compare function
        for (var i = 0; i < length; i++) {
          if (keys[i] == state1){
              arr.push({"State": d3.select('#' + state1).attr("name"),
              "Male": data[state1].malesSex,
            });
          }
          if (keys[i] == state2){
            arr.push({"State": d3.select('#' + state2).attr("name"),
              "Male": data[state2].malesSex,
            });
          }
        }
        break;
      case "Sex Trade (Female)":
        // Compose data to the compare function
        for (var i = 0; i < length; i++) {
          if (keys[i] == state1){
              arr.push({"State": d3.select('#' + state1).attr("name"),
              "Female": data[state1].femalesSex
            });
          }
          if (keys[i] == state2){
            arr.push({"State": d3.select('#' + state2).attr("name"),
              "Female": data[state2].femalesSex
            });
          }
        }
        break;
      case "Forced Labor":
        // Compose data to the compare function
        for (var i = 0; i < length; i++) {
          if (keys[i] == state1){
              arr.push({"State": d3.select('#' + state1).attr("name"),
              "Total": data[state1].forcedLaborCrimesReported,
              "Male": data[state1].malesLabor,
              "Female": data[state1].femalesLabor
            });
          }
          if (keys[i] == state2){
            arr.push({"State": d3.select('#' + state2).attr("name"),
              "Total": data[state2].forcedLaborCrimesReported,
              "Male": data[state2].malesLabor,
              "Female": data[state2].femalesLabor
            });
          }
        }
        break;
      case "Forced Labor (Male)":
        // Compose data to the compare function
        for (var i = 0; i < length; i++) {
          if (keys[i] == state1){
              arr.push({"State": d3.select('#' + state1).attr("name"),
              "Male": data[state1].malesLabor,
            });
          }
          if (keys[i] == state2){
            arr.push({"State": d3.select('#' + state2).attr("name"),
              "Male": data[state2].malesLabor,
            });
          }
        }
        break;
      case "Forced Labor (Female)":
        // Compose data to the compare function
        for (var i = 0; i < length; i++) {
          if (keys[i] == state1){
              arr.push({"State": d3.select('#' + state1).attr("name"),
              "Female": data[state2].femalesLabor,
            });
          }
          if (keys[i] == state2){
            arr.push({"State": d3.select('#' + state2).attr("name"),
              "Female": data[state2].femalesLabor,
            });
          }
        }
        break;
    }
    //Call Compare States
    compareStates(arr,d3.select('#' + state1).attr("name"), d3.select('#' + state2).attr("name"));
  }

  var color = d3.scale.linear()
  //.range(["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#de2d26", "#99000d"]);
  //.range(["#E4F1FE", "#C5EFF7", "#81CFE0", "#22A7F0", "#3c78df", "#1d63db"]);
  .range(["#C5E6F9", "#86C9F4", "#3FA9E4", "#057FC3", "#0162A2", "#054280"]);

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

      /* Helper functions for when the viewer selects a different data variable to view */

      });
// DOM Modifications

// Initialize chosen library for better option selection
$('.chosen-select').chosen();

/*Clear the modal #bar graph html on close so that next one starts with a clean state*/
$('#myModal').on('hidden.bs.modal', function () {
  $('#bar').html("");
});