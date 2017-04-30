var svg = d3.select("#spending-bymonth");
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var bar_text;

var bymonth = [
  {
    "date": 1,
    "energy": 21
  },
  {
    "date": 2,
    "energy": 12
  },
  {
    "date": 3,
    "energy": 34
  },
  {
    "date": 4,
    "energy": 23
  },
  {
    "date": 5,
    "energy": 43
  },
  {
    "date": 6,
    "energy": 54
  },
  {
    "date": 7,
    "energy": 32
  },
  {
    "date": 8,
    "energy": 33
  },
  {
    "date": 9,
    "energy": 22
  },
  {
    "date": 10,
    "energy": 11
  },
  {
    "date": 11,
    "energy": 10
  },
  {
    "date": 12,
    "energy": 32
  },
  {
    "date": 13,
    "energy": 44
  },
  {
    "date": 14,
    "energy": 28
  },
  {
    "date": 15,
    "energy": 19
  },
  {
    "date": 16,
    "energy": 22
  },
  {
    "date": 17,
    "energy": 10
  },
  {
    "date": 18,
    "energy": 32
  },
  {
    "date": 19,
    "energy": 30
  },
  {
    "date": 20,
    "energy": 11
  },
  {
    "date": 21,
    "energy": 35
  },
  {
    "date": 22,
    "energy": 22
  },
  {
    "date": 23,
    "energy": 32
  },
  {
    "date": 24,
    "energy": 42
  },
  {
    "date": 25,
    "energy": 21
  },
  {
    "date": 26,
    "energy": 55
  },
  {
    "date": 27,
    "energy": 23
  },
  {
    "date": 28,
    "energy": 20
  }
];
viz(bymonth);
function viz(data) {

  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.energy; })]);

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Energy");

  function highlight_bar(d) {
    bar_text = g.append("text").attr("x", x(d.date) + x.bandwidth()/2)
      .attr("y", y(d.energy) -5)
      .attr("width", x.bandwidth())
      .attr("height", height - y(d.energy) )
      .text(d.energy)
      .attr("class", "text")
      .style("display", "block");
  }
  //data binding
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.date); })
      .attr("y", function(d) { return y(d.energy); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.energy); })
      .text(function(d) { return d.energy; })
      .on("mouseover", function(d) {
        highlight_bar(d);
        })
      .on("mouseout", function() {
        bar_text.style("display", "none");
      })
      .on("click", function(d) { showDetail(d.date); });
};

function showDetail(date) {
  var byPerson = [
  {
    "name": "Jenny",
    "energy": 21,
    "month": 1
  },
  {
    "name": "Jenny",
    "energy": 42,
    "month": 2
  },
  {
    "name": "Harry",
    "energy": 12,
    "month": 1
  },
  {
    "name": "Harry",
    "energy": 20,
    "month": 2
  },
  {
    "name": "Cloud",
    "energy": 34,
    "month": 1
  },
  {
    "name": "Cloud",
    "energy": 54,
    "month": 2
  },
  {
    "name": "Sunny",
    "energy": 23,
    "month": 1
  },
  {
    "name": "Sunny",
    "energy": 3,
    "month": 2
  }
];
  var svg = d3.select("#spending-byperson"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

  svg.style("display", "block");
  var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
      y = d3.scaleLinear().rangeRound([height, 0]);

  svg.selectAll("g").remove();
  var g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  viz(byPerson);
  function viz(data) {
    console.log(data);
    data = data.filter(function(d) {
      return d.month == date;
    })

    data = data.sort(function(a, b) {
      return b.energy - a.energy;
    });

    x.domain(data.map(function(d) { return d.name; }));
    y.domain([0, d3.max(data, function(d) { return d.energy; })]);

    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y))
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Energy");

    //data binding
    g.selectAll(".bar")
      .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.name); })
        .attr("y", function(d) { return y(d.energy); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d.energy); })
        .on("mouseover", function(d) {
          highlight_bar(d);
          })
        .on("mouseout", function() {
          bar_text.style("display", "none");
        });
  }

  function highlight_bar(d) {
    bar_text = g.append("text").attr("x", x(d.name) + x.bandwidth()/2)
      .attr("y", y(d.energy) - 5)
      .attr("width", x.bandwidth())
      .attr("height", height - y(d.energy) )
      .text(d.energy)
      .attr("class", "text")
      .style("display", "block");

  }
}
