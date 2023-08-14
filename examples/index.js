// /* eslint max-len: ['error', { 'code': 150 }]*/
// /* eslint-disable no-new */
import roughViz from "../src";

// new roughViz.Line(
//   {
//     element: '#vis0',
//     data: 'https://raw.githubusercontent.com/jwilber/random_data/master/tweets.csv',
//     title: 'Line Chart',
//     // x: 'gdpPercap',
//     y: 'favorites',
//     colorVar: 'continent',
//     highlightLabel: 'country',
//     highlight: 'red',
//     fillWeight: 2,
//     roughness: 3.5,
//     width: window.innerWidth / 1.2,
//     height: 500,
//   }
// );

// new roughViz.Line(
//   {
//     element: '#vis0',
//     data: 'https://raw.githubusercontent.com/plotly/datasets/master/gapminder2007.csv',
//     title: 'Line Chart',
//     x: 'gdpPercap',
//     y: 'lifeExp',
//     radius: 'pop',
//     colorVar: 'continent',
//     highlightLabel: 'country',
//     highlight: 'red',
//     fillWeight: 2,
//     roughness: 3.5,
//     width: window.innerWidth / 2,
//     height: 500,
//   }
// );

// ERROR WHEN x undefined
new roughViz.Line(
  {
    element: '#vis1-line',
    data: {
      // stage8Aug2023que: [0,54,412,735,913,1036,1839,1650,2066,2297,2315,2481,2680,2832,2997,2869,3323,3270,2842,2867,2639,2665,3104,2122,1710,1493,1183,329,0],
      // stage8Aug2023latency: [0,30.6,172.79999999999998,371.40000000000003,240.6,399,626.4,772.1999999999999,909,1116,1050,1063.8,1180.8,1392.6000000000001,1621.2,1734.6,1638.6,1829.3999999999999,1866,1945.8,2047.8000000000002,2068.2,1720.2,1196.4,824.4,991.1999999999999,1024.2,1015.2,0],
      // stage8Aug2023que2: [
      //   0,311,524,441,843,857,1290,1942,2212,2024,2745
      // ],
      // stage8Aug2023latency2: [
      //   0,108,169.2,211.79999999999998,266.40000000000003,427.8,539.4,504,681.5999999999999,798.6,1007.4
      // ],
      // prod10Aug2023que:[169,602,967,1424,1487,1702,1741,2122,2419,2342,2234,2135,1845,200,0],
      // prod10Aug2023Latency:[127,146,316,356,420,560,761,852,1013,1045,1100,1045,1102,440,0],
      stage11Aug2023que:[245,600,853,1457,1490,1982,1601,1747,2671,2557,2778,3008,3117,3333,3617,3866,4183,4081,3900,3343,3506,2988,1531,585,111,7],
      stage11Aug2023latency:[63,195,334,501,566,688,566,785,997,1164,1387,1616,1826,2031,2161,2406,2629,2734,2827,2772,2701,2192,1032,799,488,80],
      // prod11Aug2023que: [459,7988,8624,9218,9819,10416,11060,11664,12286,12914,13570,14279,14993,17936,20877,20638,20433,20208,19995,19788,19542,19296,19083,18854,18608,18390,18129,17855,17586,17335,17064,16780,16534,16294,16014,15742,15442,15161,14913,14625,14350,14066,13801,13557,13297,13016,12761,12537,12260,8195,7816,7583,7366,7140,6935,6717,6460,6204,5951,5673,5413,5139,4858,4597,4349,4077,3790,3530,3267,3034,2779,2501,2220,1946,1688,1432,1186,926,673,431,175,13558,8642,7111,5426,3774,2190,1411,1067,715,368,13],
      // prod11Aug2023latency:[120,2240,2418,2606,2742,2897,3072,3271,3419,3573,3753,3909,4102,4932,6204,6374,6547,6754,6908,7059,7201,7371,7545,7708,7872,8043,8225,8376,8529,8725,8855,9023,9184,9339,9516,9664,9823,9984,10145,10274,10478,10584,10773,10927,11074,11253,11389,11544,11736,14413,14666,14826,15005,15218,15383,15535,15702,15846,15982,16155,16327,16519,16683,16837,17016,17153,17306,17478,17631,17792,17269,15584,13769,12122,10935,9965,9168,7338,5698,4638,3198,83,301,574,808,1043,1278,1516,1756,1996,2237,2476],
    },
    // x: ["2023-02-09T11:02","2023-06-09T11:06","2023-10-09T11:10","2023-14-09T11:14","2023-18-09T11:18","2023-23-09T11:23","2023-27-09T11:27","2023-31-09T11:31","2023-35-09T11:35","2023-39-09T11:39","2023-43-09T11:43","2023-47-09T11:47","2023-51-09T11:51","2023-55-09T11:55","2023-59-09T11:59","2023-03-09T12:03","2023-07-09T12:07","2023-11-09T12:11","2023-15-09T12:15","2023-19-09T12:19","2023-23-09T12:23","2023-27-09T12:27","2023-31-09T12:31","2023-35-09T12:35","2023-39-09T12:39","2023-43-09T12:43","2023-47-09T12:47","2023-51-09T12:51","2023-55-09T12:55"]
    x: ["2023-34-11T09:34","2023-38-11T09:38","2023-42-11T09:42","2023-46-11T09:46","2023-50-11T09:50","2023-54-11T09:54","2023-58-11T09:58","2023-02-11T10:02","2023-06-11T10:06","2023-10-11T10:10","2023-14-11T10:14","2023-18-11T10:18","2023-22-11T10:22","2023-26-11T10:26","2023-30-11T10:30","2023-34-11T10:34","2023-38-11T10:38","2023-42-11T10:42","2023-46-11T10:46","2023-50-11T10:50","2023-54-11T10:54","2023-58-11T10:58","2023-02-11T11:02","2023-06-11T11:06","2023-10-11T11:10","2023-14-11T11:14"]
    // x: ["2023-44-11T13:40","2023-44-11T13:44","2023-49-11T13:49","2023-53-11T13:53","2023-57-11T13:57","2023-01-11T14:01","2023-05-11T14:05","2023-09-11T14:09","2023-13-11T14:13","2023-17-11T14:17","2023-21-11T14:21","2023-25-11T14:25","2023-29-11T14:29","2023-49-11T14:49","2023-19-11T15:19","2023-23-11T15:23","2023-27-11T15:27","2023-31-11T15:31","2023-35-11T15:35","2023-39-11T15:39","2023-43-11T15:43","2023-47-11T15:47","2023-51-11T15:51","2023-55-11T15:55","2023-59-11T15:59","2023-03-11T16:03","2023-07-11T16:07","2023-11-11T16:11","2023-15-11T16:15","2023-19-11T16:19","2023-23-11T16:23","2023-27-11T16:27","2023-31-11T16:31","2023-35-11T16:35","2023-39-11T16:39","2023-43-11T16:43","2023-47-11T16:47","2023-52-11T16:52","2023-56-11T16:56","2023-00-11T17:00","2023-04-11T17:04","2023-08-11T17:08","2023-12-11T17:12","2023-16-11T17:16","2023-20-11T17:20","2023-24-11T17:24","2023-28-11T17:28","2023-32-11T17:32","2023-36-11T17:36","2023-42-11T18:42","2023-49-11T18:49","2023-53-11T18:53","2023-57-11T18:57","2023-01-11T19:01","2023-05-11T19:05","2023-09-11T19:09","2023-13-11T19:13","2023-17-11T19:17","2023-21-11T19:21","2023-25-11T19:25","2023-29-11T19:29","2023-33-11T19:33","2023-37-11T19:37","2023-41-11T19:41","2023-45-11T19:45","2023-49-11T19:49","2023-53-11T19:53","2023-57-11T19:57","2023-01-11T20:01","2023-05-11T20:05","2023-09-11T20:09","2023-13-11T20:13","2023-17-11T20:17","2023-22-11T20:22","2023-26-11T20:26","2023-30-11T20:30","2023-34-11T20:34","2023-38-11T20:38","2023-42-11T20:42","2023-46-11T20:46","2023-50-11T20:50","2023-54-11T20:54","2023-58-11T20:58","2023-02-11T21:02","2023-06-11T21:06","2023-10-11T21:10","2023-14-11T21:14","2023-18-11T21:18","2023-22-11T21:22","2023-26-11T21:26","2023-30-11T21:30","2023-34-11T21:34"]
      .map(e => e.split('T').pop()),
    width: 800,
    strokeWidth: 3 ,
    roughness: 2,
    axesFontSize: '25px',
    colors: ['orange', 'red', 'coral', 'tan', 'pink', 'blue', 'green', 'purple'],
  }
);

// new roughViz.Line(
//   {
//     element: '#vis0',
//     data: {
//         dan: [10, 50, 500],
//         jared: [10, 50, 250]
//     },
//     // width: 500,
//     // height: 500,
//     // roughness: 2,
//     // colors: ['pink', 'orange'],
//     // font: 1,
//     // axesFontSize: '30px',
//     // title: 'Jared vs Dan',
//     // titleFontSize: '30px',
//     // strokeWidth: 40
//   }
// );

// new roughViz.Scatter(
//   {
//     element: '#vis1',
//     data: {
//       x: [1, 2, 3],
//       y: [240, 40, 40, 160, 10],
//     },
//     // title: 'In-line JSON',
//     // titleFontSize: '20',
//     // // x: 'gdpPercap',
//     // // y: 'lifeExp',
//     width: 400,
//     roughness: 0,
//     radius: [25, 10, 40, 30, 60],
//     fillWeight: 3,
//     // // axesFontSize: 20,
//     axisRoughness: 1,
//     // // stroke: 'black',
//     // // fillWeight: 1.2,
//     // // strokeWidth: 1,
//     // // // fillStyle: 'cross-hatch',
//     // // highlight: 'skyblue',
//     // // highlightLabel: 'country',
//     height: 500,
//     // // curbZero: false,
//     colors: ['green', 'red', 'blue', 'black']
//   }
// );

// new roughViz.Bar(
//   {
//     element: '#lucasPractice',
//     data: 'https://raw.githubusercontent.com/jwilber/random_data/master/owTanks.csv',
//     width: window.innerWidth * 0.5,
//     height: window.innerHeight * 0.7,
//     title: 'OW Tank Health',
//     labels: 'name',
//     values: 'health',
//     roughness: 4,
//     axesFontSize: '1.5rem',
//     // stroke: 'green',
//     axisRoughness: .95,
//     padding: .1,
//     // strokeWidth: 1.0,
//     bowing: 1,
//     color: 'pink',
//     margin: {top: 50, right: 20, bottom: 150, left: 100},
//     highlight: 'green',
//     fillStyle: 'sold',
//   }
// );

// new roughViz.BarH({
//   element: "#vis3",
//   data: {
//     labels: [
//       "Reggae",
//       "Rap",
//       "R&B",
//       "Dance House",
//       "Hip Hop",
//       "Trap",
//       "tre",
//       "eifj",
//     ],
//     values: [240, 40, 400, 90, 75, 315, 43, 1500],
//   },
//   width: window.innerWidth / 2,
//   title: "Genres",
//   roughness: 1,
//   highlight: "chocolate",
//   stroke: "grey",
//   padding: 0.15,
//   bowing: 6,
//   innerStrokeWidth: 0.5,
//   color: "white",
//   fillStyle: "dashed",
// });

// new roughViz.Bar(
//   {
//     element: '#vis3',
//     data: 'https://raw.githubusercontent.com/jwilber/random_data/master/owTanks.csv',
//     width: 600,
//     height: 600,
//     title: 'OW Tank Health',
//     labels: 'name',
//     values: 'health',
//     roughness: 0,
//     stroke: 'coral',
//     strokeWidth: 3.5,
//     color: 'teal',
//     margin: {top: 50, right: 20, bottom: 150, left: 100},
//     highlight: 'green',
//     fillStyle: 'cross-hatch',
//   }
// );

// new roughViz.Bar(
//   {
//     element: '#vis4',
//     data: 'https://raw.githubusercontent.com/jwilber/random_data/master/owTanks.csv',
//     width: 600,
//     height: 600,
//     title: 'OW Tank Health',
//     labels: 'name',
//     values: 'health',
//     roughness: 0,
//     stroke: 'coral',
//     strokeWidth: 0.0,
//     color: 'teal',
//     margin: {top: 50, right: 20, bottom: 150, left: 100},
//     highlight: 'green',
//     fillStyle: 'cross-hatch',
//   }
// );

// new roughViz.Bar(
//   {
//     element: '#vis5',
//     data: 'https://raw.githubusercontent.com/jwilber/random_data/master/owTanks.csv',
//     width: 600,
//     height: 600,
//     title: 'OW Tank Health',
//     labels: 'name',
//     values: 'health',
//     roughness: 0,
//     stroke: 'coral',
//     strokeWidth: 0.0,
//     color: 'teal',
//     margin: {top: 50, right: 20, bottom: 150, left: 100},
//     highlight: 'green',
//     fillStyle: 'cross-hatch',
//   }
// );

new roughViz.Scatter({
  element: '#vis0',
  data: 'https://raw.githubusercontent.com/plotly/datasets/master/gapminder2007.csv',
  // data: 'http://127.0.0.1:63438/sidekiqWait/roughViz/examples/gapminder2007.csv',
  // data:
  // `country,pop,continent,lifeExp,gdpPercap
  // Afghanistan,31889923.0,Asia,43.828,974.5803384
  // Albania,3600523.0,Europe,76.423,5937.029525999999
  // Algeria,33333216.0,Africa,72.301,6223.367465
  // Angola,12420476.0,Africa,42.731,4797.231267`,
  // title: 'Hans Rosling (Gapminder 2007)',
  x: 'gdpPercap',
  y: 'lifeExp',
  radius: 'pop',
  colorVar: 'continent',
  highlightLabel: 'country',
  roughness: 1.5,
  width: window.innerWidth / 2,
  height: 500,
})

// new roughViz.Scatter({
//   element: "#vis0",
//   data: "https://raw.githubusercontent.com/uiuc-cse/data-fa14/gh-pages/data/iris.csv",
//   // data: 'https://raw.githubusercontent.com/plotly/datasets/master/gapminder2007.csv',
//   title: "Iris",
//   x: "sepal_width",
//   y: "petal_length",
//   colorVar: "species",
//   highlightLabel: "species",
//   fillWeight: 5.1,
//   radius: 12,
//   colors: ["pink", "coral", "skyblue"],
//   stroke: "black",
//   // strokeWidth: 0.4,
//   roughness: 1,
//   strokeWidth: 0.5,
//   // titleFontSize: '2rem',
//   // axesFontSize: '1.5rem',
//   // axisStrokeWidth: 0.4,
//   // axisRoughness: 2,
//   width: 400,
//   height: 300,
//   font: 0,
//   curbZero: false,
//   fillStyle: "crss-hatch",
//   highlight: 'teal'
// });

new roughViz.Donut({
  element: "#vis1",
  data:
    "https://raw.githubusercontent.com/jwilber/jenkem_data/master/regions.json",
  title: "Regions",
  labels: "region",
  values: "count",
  roughness: 0,
  colors: ["pink", "coral", "teal", "skyblue"],
  highlight: "gold",
  strokeWidth: 2,
  titleFontSize: "25px",
  fillWeight: 1.5,
  fillStyle: "zigzag-line",
  width: window.innerWidth / 2,
  height: 450,
});

// new roughViz.Donut(
//   {
//     element: '#vis0',
//     data: 'https://raw.githubusercontent.com/jwilber/random_data/master/flavors.csv',
//     title: 'roughViz.js',
//     labels: 'flavor',
//     values: 'price',
//     // titleFontSize: '55px',
//     width: 150,
//     roughness: 0,
//     // radius: 'petal_width',
//     // colors: ['pink', 'coral', 'teal', 'skyblue', 'red', 'green', 'black', 'grey'],
//     // bowing: 0.1,
//     stroke: 'black',
//     highlight: 'gold',
//     strokeWidth: 4,
//     innerStrokeWidth: .5,
//     fillStyle: 'zigzag',
//     height: 150,
//     // font: 0,
//     fillWeight: 0.5,
//   }
// );

new roughViz.Pie({
  element: "#vis2",
  data: {
    labels: ["Mike", "Jah"],
    values: [13, 10],
  },
  title: '"Yarn" Plot (Pie)',
  width: window.innerWidth / 4,
  roughness: 2,
  colors: ["red", "orange", "blue", "skyblue", "red", "green", "black", "grey"],
  stroke: "black",
  strokeWidth: 3,
  fillStyle: "cross-hatch",
  fillWeight: 3.5,
});

new roughViz.Donut(
  {
    element: '#vis2-dougnut',
    data: 'https://raw.githubusercontent.com/jwilber/random_data/master/flavors.csv',
    title: 'roughViz.js',
    labels: 'flavor',
    values: 'price',
    // titleFontSize: '55px',
    width: 350,
    roughness: 0,
    // radius: 'petal_width',
    // colors: ['pink', 'coral', 'teal', 'skyblue', 'red', 'green', 'black', 'grey'],
    // bowing: 0.1,
    stroke: 'black',
    // innerStrokeWidth: 3,
    highlight: 'green',
    strokeWidth: 10,
    fillStyle: 'cross-hatch',
    height: 350,
    // font: 0,
    fillWeight: 2.5,
  }
);

// new roughViz.Donut(
//   {
//     element: '#vis3',
//     data: {
//       labels: ['Reggae', 'Jah', 'Lax', 'd'],
//       values: [40, 40, 40]
//     },
//     title: 'test',
//     // titleFontSize: '55px',
//     width: 150,
//     roughness: 4,
//     // radius: 'petal_width',
//     colors: ['pink', 'coral', 'teal', 'skyblue', 'red', 'green', 'black', 'grey'],
//     // bowing: 0.1,
//     stroke: 'black',
//     highlight: 'red',
//     strokeWidth: 1,
//     fillStyle: 'zigzag-line',
//     height: 150,
//     // font: 0,
//     fillWeight: 0.5,
//   }
// );

// new roughViz.Pie(
//   {
//     element: '#vis11',
//     data: 'https://raw.githubusercontent.com/jwilber/random_data/master/flavors.csv',
//     title: 'Pie Chart',
//     labels: 'flavor',
//     values: 'price',
//     width: 450,
//     roughness: 20,
//     radius: 'petal_width',
//     colors: ['pink', 'coral', 'teal', 'skyblue', 'red', 'green', 'black', 'grey'],
//     bowing: 0.1,
//     // stroke: 'black',
//     highlight: 'gold',
//     // fillWeight: 2,
//     strokeWidth: 0.5,
//     fillStyle: 'cross-atch',
//     height: 450,
//     curbZero: false,
//   }
// );

// new roughViz.Pie(
//     {
//       element: '#vis2',
//         data: 'https://raw.githubusercontent.com/jwilber/jenkem_data/master/regions.json',
//         title: `Pie Chart`,
//         labels: 'region',
//         values: 'count',
//         fillWeight: 1.5,
//         font: 1,
//         highlight: 'red',
//         width: 200,
//         // roughness: 5,
//         // radius: 'petal_width',
//         // colors: ['red', 'green', 'yellow', 'blue'],
//         // bowing: .1,
//         // // stroke: 'black',
//         // font: 1,
//         // strokeWidth: 2,
//         // fillStyle: 'zigzag-line',
//         height: 250,
//         // curbZero: false,
//     }
//   );

// new roughViz.BarH(
//   {
//     element: '#vis5',
//     // data: [[1,2], [5, 6], [8,8], [5, 100], [200, 10], [50, 50]],
//     data: 'https://gist.githubusercontent.com/mbostock/3310560/raw/98311dc46685ed02588afdcb69e5fa296febc1eb/letter-frequency.tsv',
//     title: 'Pradeep',
//     labels: 'letter',
//     values: 'frequency',
//     color: 'orange',
//     highlight: 'red',
//     strokeWidth: 1,
//     width: 600,
//     height: 900,
//     fillStyle: 'solid',
//     margin: {left: 150, top: 50, right: 10, bottom: 90},
//     titleFontSize: '50px',
//     roughness: 1.5,
//   }
// );

// new roughViz.Bar(
//   {
//     element: '#vis3',
//     data: 'https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv',
//     title: 'Olympic Medals',
//     labels: 'Country',
//     values: 'Value',
//     titleFontSize: '25px',
//     axesFontSize: '.5rem'
//     // width: 500,
//     // // roughness: 4.5,
//     // // color: 'red',
//     // // strokeWidth: 2.5,
//     // // // bowing: 1,
//     // // fillStyle: '',
//     // height: 500,
//     // margin: {bottom: 90, top: 50, right: 40, left: 90},
//     // highlight: 'yellow',
//     // interactive
//   }
// );

// new roughViz.BarH(
//   {
//     element: '#vis4',
//     // data: [[1,2], [5, 6], [8,8], [5, 100], [200, 10], [50, 50]],
//     data: 'https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv',
//     title: 'Country Count',
//     labels: 'Country',
//     values: 'Value',
//     width: 400,
//     height: 500,
//     margin: {left: 150, top: 50, right: 10, bottom: 90},
//     roughness: 1.75,
//   }
// );

// new roughViz.Scatter(
//   {
//     element: '#vis5',
//     data: 'https://raw.githubusercontent.com/uiuc-cse/data-fa14/gh-pages/data/iris.csv',
//     title: 'Iris Scatter Plot',
//     x: 'sepal_length',
//     y: 'sepal_width',
//     width: 800,
//     roughness: 2,
//     radius: 'petal_width',
//     // radius: 20,
//     color: 'petal_width',
//     // bowing: 0.1,
//     stroke: 'black',
//     strokeWidth: .5,
//     fillStyle: 'zigzag',
//     highlight: 'red',
//     // height: 450,
//     curbZero: false,
//   }
// );

// new roughViz.Bar({
//   element: "#example",
//   data:
//     "https://gist.githubusercontent.com/mbostock/3310560/raw/98311dc46685ed02588afdcb69e5fa296febc1eb/letter-frequency.tsv",
//   labels: "letter",
//   values: "frequency",
//   height: window.innerHeight * 0.6,
//   width: window.innerWidth * 0.8,
//   roughness: 3,
//   color: "pink",
//   fillWeight: 1,
//   strokeWidth: 0.5,
//   fillStyle: "cross-hatch",
//   // roughness: 0,
//   stroke: "black",
// });

// new roughViz.BarH(
//   {
//     element: '#example',
//     // data: [[1,2], [5, 6], [8,8], [5, 100], [200, 10], [50, 50]],
//     data: 'https://gist.githubusercontent.com/mbostock/3310560/raw/98311dc46685ed02588afdcb69e5fa296febc1eb/letter-frequency.tsv',
//     title: 'Letters',
//     labels: 'letter',
//     values: 'frequency',
//     // width: 600,
//     // axisRoughness: 2,
//     // height: 800,
//     // stroke: 'black',
//     // strokeWidth: 3,
//     // innerStrokeWidth: .5,
//     // color: 'blue',
//     // margin: {left: 150, top: 50, right: 10, bottom: 90},
//     // roughness: 2.0,
//     // fillWeight: 1.5,
//     // fillStyle: 'zigzag-line'
//   }
// );

// new roughViz.StackedBar({
//   element: '#vis8',
//   data:
//     'https://gist.githubusercontent.com/mjfoster83/7c9bdfd714ab2f2e39dd5c09057a55a0/raw/2bcb1c06ece164086e556b6e7b5140cab0512bc0/age-groups.csv',
//   labels: 'State',
//   // values: 'frequency',
//   height: window.innerHeight * 0.7,
//   width: window.innerWidth * 0.8,
//   roughness: 3,
//   colors: [
//     'red',
//     'orange',
//     '#f996ae',
//     'skyblue',
//     '#9ff4df',
//     'green',
//     '#f6f0a3',
//     '#6bceee',
//     '#d9b6fd',
//   ],
//   fillWeight: 1,
//   strokeWidth: 0.5,
//   fillStyle: 'cross-hatch',
//   // roughness: 0,
//   stroke: 'black',
// });

// new roughViz.StackedBar({
//   element: '#vis8',
//   data: [
//     {month: 'Jan', A: 20, B: 5, C: 10, D: 15},
//     {month: 'Feb', A: 25, B: 10, D: 20},
//   ],
//   labels: 'month',
//   // values: 'frequency',
//   height: window.innerHeight * 0.7,
//   width: window.innerWidth * 0.8,
//   roughness: 1,
//   colors: [
//     'red',
//     'orange',
//     '#f996ae',
//     'skyblue',
//     '#9ff4df',
//     'green',
//     '#f6f0a3',
//     '#6bceee',
//     '#d9b6fd',
//   ],
//   fillWeight: 1,
//   strokeWidth: 0.5,
//   fillStyle: 'cross-hatch',
//   stroke: 'black',
// });
