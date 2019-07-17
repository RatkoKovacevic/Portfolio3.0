// Chart Options
const options = {
  chart: {
    height: 350,
    type: "radialBar",
    textColor: "#fff"
  },
  plotOptions: {
    circle: {
      dataLabels: {
        showOn: ""
      }
    }
  },
  value: {
    color: "#fff"
  },
  colors: [
    "#ffa500",
    "#0070BA",
    "#CB6898",
    "#f0db4f",
    "#E14A4D",
    "#4DBA87",
    "#B52E31",
    "#C6DE97",
    "#719B52"
  ],
  series: [100, 100, 90, 60, 70, 60, 20, 10, 10],
  labels: [
    "Html",
    "CSS",
    "Sass",
    "JavaScript",
    "Gulp",
    "Vue",
    "Angular",
    "NodeJS",
    "MongoDB"
  ]
};

// Init Chart
const chart = new ApexCharts(document.getElementById("chart"), options);

// Render Chart
chart.render();
