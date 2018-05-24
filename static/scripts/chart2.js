require([
  "dojox/charting/Chart",
  "dojox/charting/action2d/Tooltip",
  "dojox/charting/plot2d/Columns",
  "dojox/charting/axis2d/Default",
  "dojo/ready",
  "dojo/parser"
], function(Chart, Tooltip, _lines, _axis, ready, parser) {
  // wrapped in domready event
  ready(function() {
    // create a chart with placeholder div#charty
    var chart2 = new Chart("chart2");
    chart2
      .addPlot("default", {
        type: "Columns",
        markers: true,
        gap: 5
      })
      .addAxis("x", {
        min: 0,
        minorTick: {
          stroke: "#f7f7f8",
          length: -200
        },
        majorTick: {
          stroke: "#f7f7f8",
          length: -200
        },
        labels: [
          { value: 0, text: "18" },
          { value: 1, text: "19" },
          { value: 2, text: "20" },
          { value: 3, text: "21" },
          { value: 4, text: "22" },
          { value: 5, text: "23" },
          { value: 6, text: "24" },
          { value: 7, text: "25" },
          { value: 8, text: "26" },
          { value: 9, text: "27" },
          { value: 10, text: "28" },
          { value: 11, text: "29" },
          { value: 12, text: "30" },
          { value: 13, text: "31" },
          { value: 14, text: "1" },
          { value: 15, text: "2" },
          { value: 16, text: "3" },
          { value: 17, text: "4" },
          { value: 18, text: "5" },
          { value: 19, text: "6" },
          { value: 20, text: "7" },
          { value: 21, text: "8" },
          { value: 22, text: "9" },
          { value: 23, text: "10" },
          { value: 24, text: "11" },
          { value: 25, text: "12" },
          { value: 26, text: "13" },
          { value: 27, text: "14" },
          { value: 28, text: "15" },
          { value: 29, text: "16" },
          { value: 30, text: "17" }
        ]
      })
      .addAxis("y", {
        vertical: true,
        min: 0,
        max: 10000,
        minorTickStep: 2000,
        minorTick: {
          stroke: "gray",
          length: 0
        }
      })
      .addSeries(
        "Chart1",
        [
          { x: 0, y: 500, tooltip: "<p>500</p> <span>18 Апреля 2018г.</span>" },
          {
            x: 1,
            y: 1000,
            tooltip: "<p>1000</p> <span>19 Апреля 2018г.</span>"
          },
          {
            x: 2,
            y: 5000,
            tooltip: "<p>5000</p> <span>20 Апреля 2018г.</span>"
          },
          {
            x: 3,
            y: 3000,
            tooltip: "<p>3000</p> <span>21 Апреля 2018г.</span>"
          },
          {
            x: 4,
            y: 1200,
            tooltip: "<p>1200</p> <span>22 Апреля 2018г.</span>"
          },
          {
            x: 5,
            y: 6000,
            tooltip: "<p>6000</p> <span>23 Апреля 2018г.</span>"
          },
          {
            x: 6,
            y: 5500,
            tooltip: "<p>5500</p> <span>24 Апреля 2018г.</span>"
          },
          {
            x: 7,
            y: 3100,
            tooltip: "<p>3100</p> <span>25 Апреля 2018г.</span>"
          },
          {
            x: 8,
            y: 4000,
            tooltip: "<p>4000</p> <span>26 Апреля 2018г.</span>"
          },
          {
            x: 9,
            y: 4200,
            tooltip: "<p>4200</p> <span>27 Апреля 2018г.</span>"
          },
          {
            x: 10,
            y: 6000,
            tooltip: "<p>6000</p> <span>28 Апреля 2018г.</span>"
          },
          {
            x: 11,
            y: 5400,
            tooltip: "<p>5400</p> <span>29 Апреля 2018г.</span>"
          },
          {
            x: 12,
            y: 2000,
            tooltip: "<p>2000</p> <span>30 Апреля 2018г.</span>"
          },
          {
            x: 13,
            y: 2500,
            tooltip: "<p>2500</p> <span>31 Апреля 2018г.</span>"
          },
          { x: 14, y: 6000, tooltip: "<p>6000</p> <span>1 Мая 2018г.</span>" },
          { x: 15, y: 1500, tooltip: "<p>1500</p> <span>2 Мая 2018г.</span>" },
          { x: 16, y: 3100, tooltip: "<p>3100</p> <span>3 Мая 2018г.</span>" },
          { x: 17, y: 3700, tooltip: "<p>3700</p> <span>4 Мая 2018г.</span>" },
          { x: 18, y: 2200, tooltip: "<p>2200</p> <span>5 Мая 2018г.</span>" },
          { x: 19, y: 1000, tooltip: "<p>1000</p> <span>6 Мая 2018г.</span>" },
          { x: 20, y: 500, tooltip: "<p>500</p> <span>7 Мая 2018г.</span>" },
          { x: 21, y: 6000, tooltip: "<p>6000</p> <span>8 Мая 2018г.</span>" },
          { x: 22, y: 7000, tooltip: "<p>7000</p> <span>9 Мая 2018г.</span>" },
          { x: 23, y: 6000, tooltip: "<p>6000</p> <span>10 Мая 2018г.</span>" },
          { x: 24, y: 5500, tooltip: "<p>5500</p> <span>11 Мая 2018г.</span>" },
          { x: 25, y: 3100, tooltip: "<p>3100</p> <span>12 Мая 2018г.</span>" },
          { x: 26, y: 4000, tooltip: "<p>4000</p> <span>13 Мая 2018г.</span>" },
          { x: 27, y: 4200, tooltip: "<p>4200</p> <span>14 Мая 2018г.</span>" },
          { x: 28, y: 1000, tooltip: "<p>1000</p> <span>15 Мая 2018г.</span>" },
          { x: 29, y: 500, tooltip: "<p>500</p> <span>16 Мая 2018г.</span>" },
          { x: 30, y: 7000, tooltip: "<p>7000</p> <span>17 Мая 2018г.</span>" }
        ],
        {
          stroke: { color: "green", width: 2 },
          fill: "purple"
        }
      );
    var anim1b = new Tooltip(chart2, "default");

    chart2.render();
  });
});
