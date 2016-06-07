var selection;
      var typeOfCrimeStr;
        /*Clear the modal #bar graph html on close so that next one starts with a clean state*/
        $('#myModal').on('hidden.bs.modal', function () {
          $('#bar').html("");
        })

      // Initialize chosen library for better option selection
      $('.chosen-select').chosen();
      function tooltipHtml(n, d){ /* function to create html content string in tooltip div. */
        return "<h4>"+n+"</h4><p>per 1,000,000 people</p><table>"+

        "<tr><td align='left'>Total Crimes: </td><td align='right'>"+parseFloat(Math.round((d.totalCrimes) * 100) / 100).toFixed(2)+"</td></tr>"+
          "<tr><td align='left'>Sex trade: </td><td align='right'>"+parseFloat(Math.round((d.sexTotal)  * 100) / 100).toFixed(2)+"</td></tr>"+
          "<tr><td align='left'>Forced labor: </td><td align='right'>"+parseFloat(Math.round((d.laborTotal)  * 100) / 100).toFixed(2)+"</td></tr>"+
          "</table>";
      }

      /*Function to compare two states, change modal title, show bar graph on modal, show bootstrap modal*/
      function compareStates(data,state1, state2) {
        showBar(data);
        console.log(data);
        calculateStates(data[0], data[1]);
        var title = state1 + " VS. " + state2;
        $('.modal-title').text(title);
        $('#myModal').modal('show');
      };

      /* Function to calculate the statistical differences between two states */
      function calculateStates(state1, state2) {
        var state1_labor = state1['Number of forced labor crimes reported'];
        var state1_sex = state1['Number of sex trade crimes reported'];
        var state1_total = state1['Total trafficking crimes reported'];

        var state2_labor = state2['Number of forced labor crimes reported'];
        var state2_sex = state2['Number of sex trade crimes reported'];
        var state2_total = state2['Total trafficking crimes reported'];

        var more1 = (state1_labor > state2_labor);
        var more2 = (state1_sex > state2_sex);
        var more3 = (state1_total > state2_total);

        var p1 = Math.abs(Math.floor((state1_labor - state2_labor) / state1_labor * 100));
        var p2 = Math.abs(Math.floor((state1_sex - state2_sex) / state1_sex * 100));
        var p3 = Math.abs(Math.floor((state1_total - state2_total) / state1_total * 100));

        var s1, s2, s3;
        if (more1) {
          s1 = state1.State + ' has ' + p1 + "% more forced labor crimes reported than " + state2.State;
        } else {
          s1 = state1.State + ' has ' + p1 + "% less forced labor crimes reported than " + state2.State;
        }

        if (more2) {
          s2 = state1.State + ' has ' + p2 + "% more sex trade crimes than " + state2.State;
        } else {
          s2 = state1.State + ' has ' + p2 + "% less sex trade crimes than " + state2.State;
        }

        if (more3) {
          s3 = state1.State + ' has ' + p3 + "% more total trafficking crimes " + state2.State;
        } else {
          s3 =state1.State + ' has ' + p3 + "% less total trafficking crimes " + state2.State;
        }
        var innerHTML = '<p>' + s1 + '</p>' + '<p>' + s2 + '</p>' + '<p>' + s3 + '</p>';
        console.log(s1, s2, s3);
        $('#text').html(innerHTML);
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

        /* Helper functions for when the viewer selects a different data variable to view */

        function compare() {
          var arr = [];
          var state1 = $('#state1').val(); //get value from input
          var state2 = $('#state2').val();

          var viewFemale = $('#viewFemale').val();
          var viewMale = $('#viewMale').val();
          var viewOther = $('#viewOther').val();
          var selected = "traffickingCrimesReported";
          var legendMessage = "Trafficking crimes reported per 1,000,000 People"

          if (viewFemale != "noSelection"){ // needed to send correct data to tooltip & comparison bar chart
            selected = viewFemale;
            if (selected == "femalesSex"){
              legendMessage = "Sex Trafficking Crimes per 1,000,000 Females";
            }
            else{
              legendMessage = "Forced Labor Crimes per 1,000,000 Females";
            }
          }
          else if (viewMale != "noSelection"){
            selected = viewMale;
            if (selected == "malesSex"){
              legendMessage = "Sex Trafficking Crimes per 1,000,000 Males";
            }
            else{
              legendMessage = "Forced Labor Crimes per 1,000,000 Males";
            }
          }
          else if (viewOther != "noSelection"){
            selected = viewOther;
            if (selected == "otherSex"){
              legendMessage = "Sex Trafficking Crimes per 1,000,000 Other Genders";
            }
            else{
              legendMessage = "Forced Labor Crimes per 1,000,000 Other Genders";
            }
          }

          //Get all state abbreviation 
          var keys = Object.keys(data);
          var length = keys.length;

          // Compose data to the compare function
          for (var i = 0; i < length; i++) {
            if (keys[i] == state1){
                arr.push({"State": d3.select('#' + state1).attr("name"),
                "Total trafficking crimes reported": data[state1].totalCrimes,
                "Number of sex trade crimes reported": data[state1].sexTraffickingCrimesReported,
                "Number of forced labor crimes reported": data[state1].forcedLaborCrimesReported
              });
            }
            if (keys[i] == state2){
              arr.push({"State": d3.select('#' + state2).attr("name"),
                "Total trafficking crimes reported": data[state2].totalCrimes,
                "Number of sex trade crimes reported": data[state2].sexTraffickingCrimesReported,
                "Number of forced labor crimes reported": data[state2].forcedLaborCrimesReported

              });
            }
          }
          // Call compare states
          compareStates(arr,d3.select('#' + state1).attr("name"), d3.select('#' + state2).attr("name"));
        }
        // Add listener to compare button, to compare states
        $('#compare').click(function(){
          compare();
        });

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
        // Add listener to compare button, to compare states
        $('#allTraffickingBtn').click(function(){
          viewAllTrafficking();
        });

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
          var svg = uStates.draw("#statesvg", data, tooltipHtml, "sexTotal");
        }
        // Add listener to compare button, to compare states
        $('#sexTradeBtn').click(function(){
          viewSexTrade();
        });

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
          var svg = uStates.draw("#statesvg", data, tooltipHtml, "laborTotal");
        }
        // Add listener to compare button, to compare states
        $('#forcedLaborBtn').click(function(){
          viewForcedLabor();
        });

    //--------------------------- Begin JQuery Code for Matrix ------------------------

         $("#typeOfCrime").click(function(){
            $("#gender").slideUp(300); 
            $("#gender").slideDown(300); 
            $("#gender").button('reset');

    //        typeOfCrimeStr = document.querySelector('input[name="typeOfCrimeName"]:checked').value;
    //        $( "#p" ).html( "Type of Crime: " + typeOfCrimeStr + ", Gender: " + selection );
        });  

        $("#clear").click(function(){
            $("#gender").slideUp(300);
            $("#typeOfCrime").button('reset');
            $("#gender").button('reset');
            selection = "noSelection";
            typeOfCrimeStr = "noSelection";
            viewDefault();
        });  

        $( "#gender" ).click(function(){
            //$("#view").click();
        });


        $("#view").click(function(){
            if (document.getElementById('sex').checked) {
              typeOfCrimeStr = document.getElementById('sex').value;
            }
            else if (document.getElementById('labor').checked) {
              typeOfCrimeStr = document.getElementById('labor').value;
            }
            else{
                typeOfCrimeStr = "";
            }


            if (document.getElementById('male').checked) {
              selection = document.getElementById('male').value + typeOfCrimeStr;
                  if (selection == "noSelection"){
                    return;
                  }
                  else{
                    var keys = Object.keys(data);
                    /* Interpolate color according to the numbers of tracking crime reported*/
                    keys.forEach(function(d){
                      data[d].color = d3.interpolate("#fee5d9", "#a50f15")(Math.sqrt(data[d][selection]));
                    });

                    /* draw states on id #statesvg */
                    uStates.draw("#statesvg", data, tooltipHtml);
                  }
            }
            else if (document.getElementById('female').checked) {
                  selection = document.getElementById('female').value + typeOfCrimeStr;
                  if (selection == "noSelection"){
                    return;
                  }
                  else{
                    var keys = Object.keys(data);
                    /* Interpolate color according to the numbers of tracking crime reported*/
                    keys.forEach(function(d){
                          data[d].color = d3.interpolate("#f2f0f7", "#54278f")(Math.sqrt(data[d][selection])/2);
                    });

                    /* draw states on id #statesvg */
                    uStates.draw("#statesvg", data, tooltipHtml);
                  }
            }
            else if (document.getElementById('other').checked) {
              selection = document.getElementById('other').value + typeOfCrimeStr;
                  if (selection == "noSelection"){
                    return;
                  }
                  else{
                    var keys = Object.keys(data);
                    /* Interpolate color according to the numbers of tracking crime reported*/
                    keys.forEach(function(d){
                      data[d].color = d3.interpolate("#edf8e9", "#006d2c")(Math.sqrt(data[d][selection]));
                    });

                    /* draw states on id #statesvg */
                    uStates.draw("#statesvg", data, tooltipHtml);
                  }    
            }
            else{
                selection="noSelection";
            }        
        });

    //--------------------------- End JQuery Code for Matrix ------------------------

      });



    function showBar(data) {
      var margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

      var x0 = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

      var x1 = d3.scale.ordinal();

      var y = d3.scale.linear()
      .range([0, height]);

      var color = d3.scale.ordinal()
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

      var xAxis = d3.svg.axis()
      .scale(x0)
      .orient("bottom");

      var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .tickFormat(d3.format(".2s"));

      var svg = d3.select("#bar").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      var keys = d3.keys(data[0]).filter(function(key) { return key !== "State"; });
      console.log(keys);
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
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Number");

      var state = svg.selectAll(".state")
      .data(data)
      .enter().append("g")
      .attr("class", "state")
      .attr("transform", function(d) { return "translate(" + x0(d.State) + ",0)"; });

      console.log("height: " + height);

      state.selectAll("rect")
      .data(function(d) { return d.data; })
      .enter()
      .append("rect")
      .attr("width", x1.rangeBand()-50)
      .attr("x", function(d) { return x1(d.name); })
      .attr("y", height)
      .attr("height", 0)
      .transition()
      .delay(function (d, i) { return i * 700; })
      .attr("y", function(d, i) {return height - y(d.value);})
      .attr("height", function(d) { return y(d.value)})
      .style("fill", function(d) { return color(d.name); });

      state.selectAll("text")
      .data(function(d) { return d.data; })
      .enter().append("text")
      .attr("x", function(d) { return x1(d.name) + 30; })
      .attr("y", function(d) { return height - y(d.value + 1); })
      .attr("text-anchor", "middle")
      .text(function(d, i) { return d.value; });

      var legend = svg.selectAll(".legend")
      .data(keys.slice().reverse())
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