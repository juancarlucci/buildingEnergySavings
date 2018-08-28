$(document).ready(function() {

 // This will let you use the .remove() function later on
  if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
      if (this.parentNode) {
          this.parentNode.removeChild(this);
      }
    };
  }

  mapboxgl.accessToken = 'pk.eyJ1IjoianVhbmNhcmx1Y2NpIiwiYSI6ImNpdzZzcGgwZTAwMWUydHRjaXdnZ29yY3IifQ.OP_E0DFK0JcIb_CT81veqg';

  // This adds the map
  var map = new mapboxgl.Map({
    // container id specified in the HTML
    container: 'map',
    // style URL
    style: 'mapbox://styles/juancarlucci/cj4zwt62c14mj2socoo25r76v',
    // initial position in [long, lat] format
    center: [-122., 38.3],
    // initial zoom
    zoom: 11,
    minZoom: 9,
    maxZoom: 14
  });

   map.on('load', function(e) {

   var sortedBySavings = buildings.features.sort((a, b) => b.properties.mwhSavings - a.properties.mwhSavings);
   //need this for proper GeoJSON formatting
   sortedBySavings = {type: "FeatureCollection", features: sortedBySavings};

    // Add the data as a layer
    map.addLayer({
      id: 'locations',
      type: 'circle',
      // Add a GeoJSON source containing place coordinates and information.
      source: {
        type: 'geojson',
        data: sortedBySavings
      },
      paint : {
          'circle-color' : {
            property: 'mwhSavings',
            type: 'interval',
            stops: [
                 [0, '#edf8fb'],
                 [0.5, '#bfd3e6'],
                 [100, '#9ebcda'],
                 [1000, '#8c96c6'],
                 [2500, '#8856a7']
              ]
        },
          'circle-stroke-color': 'rgb(250,77,16)',
          'circle-stroke-width' : 1,
          'circle-radius' : {
            property: 'mwhSavings',
            type: 'exponential',
              stops:  [
                          [{ "zoom": 9, "value": 0}, 0.5],
                          [{ "zoom": 9, "value": 1}, 1.5],
                          [{ "zoom": 9, "value": 1800 }, 15],
                          [{ "zoom": 10, "value": 0}, 1],
                          [{ "zoom": 10, "value": 1}, 3],
                          [{ "zoom": 10, "value": 1800}, 30],
                          [{ "zoom": 11, "value": 0 }, 2],
                          [{ "zoom": 11, "value": 1 }, 6],
                          [{ "zoom": 11, "value": 1800 },60],
                          [{ "zoom": 12, "value": 0 }, 4],
                          [{ "zoom": 12, "value": 1 }, 12],
                          [{ "zoom": 12, "value": 1800 }, 120],
                          [{ "zoom": 14, "value": 0 }, 16],
                          [{ "zoom": 14, "value": 1 }, 48],
                          [{ "zoom": 14, "value": 1800}, 400]
                      ]

        },
          'circle-opacity' : 0.8
        }

    });

    totalSavingsLegend(buildings);


    createLineChart(buildings);


    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl({
      'position': 'top-left'
    }));

    showMap();

  }); //end map.onLoad


  map.on('click', function(e) {
      var features = map.queryRenderedFeatures(e.point, {
        layers: ['locations']
      });

      if (features.length) {
        var clickedPoint = features[0];
        //1. Display popup for clicked building
        createPopUp(clickedPoint);

        // 2. Clear chart canvas and Create listing chart
        $('#markerChart').parent().each(function() {
            //get child canvas id
            childCanvasId = $(this).find("canvas").attr('id');
            //remove canvas
            $('#' + childCanvasId).remove();
            // append new canvas to the parent again
            $(this).append('<canvas id="' + childCanvasId + '"></canvas>');
          });

        updateListingChart(clickedPoint);
      }
    }); //end map on click


    map.on('mousemove', function(e) {
      var markers = map.queryRenderedFeatures(e.point, {
        layers: ['locations']
      });
      map.getCanvas().style.cursor = (markers.length) ? 'pointer' : '';
    });

  function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    var prop = currentFeature.properties;
    var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat(currentFeature.geometry.coordinates)
          .setHTML('<h3>' + prop.type + '</h3>'
            + '<h4><b>Savings: </b> ' + round(prop.mwhSavings) + ' MWh</h4>'
            + '<h4><b>LPD: </b> ' + round(prop.lpd) + '</h4>'
            + '<h4><b>Auto Off: </b> ' + round(prop.autoOff) + '</h4>'
            + '<h4><b>Multi-Level: </b> ' + round(prop.powerAdjust) + '</h4>'
            + '<h4><b>Daylighting: </b> ' + round(prop.daylighting) + '</h4>'
            )
          .addTo(map);
  } //end createPopup


  const round = (number, places=1) => {
   const m = Math.pow(10, places);
   return Math.floor(number * m) / m;
  }



    function updateListingChart(currentFeature) {

      $("#markerChartContainer").css("display", "block");

      var prop = currentFeature.properties;

       var ctx = document.getElementById("markerChart").getContext("2d");

       var markerChart = new Chart(ctx, {
         type: 'bar',
         data: {
             labels: ["MWh Design", "MWh Target", "MWh Savings"],
             datasets: [{
                //no lable
                 label: '',
                 data: [round(prop.mwhDesign),
                       round(prop.mwhTarget),
                        round(prop.mwhSavings)],
                 backgroundColor:
                 [
                     '#bfd3e6',
                     '#9ebcda',
                     '#8c96c6',
                     '#8856a7',
                     '#810f7c',
                     '#816996'
                 ],
                 borderColor: 'rgb(250,77,16)',

                 borderWidth: 0.5
             }]
         },
         options: {
             legend: {
              display: false
             },
             title: {
                        display: false,
                        text: "Building: " + prop.name
                    },
             scales: {
                 yAxes: [{
                     ticks: {
                         beginAtZero:true
                     }

                 }]
             },
             animation: {
                         duration: 0, // general animation time
                     },
              hover: {
                         animationDuration: 0, // duration of animations when hovering an item
                     },
              responsiveAnimationDuration: 0, // animation duration after a resize

         } //options
     }); //end markerChart

  } //end updateListingChart



  function calcPropRadius(attributeValue) {

    var scaleFactor = 100,
      area = attributeValue * scaleFactor;

    //determine the area (instead of radius) of proportional circle
    return Math.sqrt(area/Math.PI);

  } // end calcPropRadius

  function totalSavingsLegend(data) {

    const arrayMax = [];
    const arrayCummulative= [];

    for (i=0; i<data.features.length; i++) {

        var currentFeature = data.features;
        arrayMax.push(currentFeature[i].properties.mwhSavings);
        arrayCummulative.push(currentFeature[i].properties.cumulativeKwh);

        var sortedValues = arrayMax.sort(function(a, b) {
          return a - b;
        });

    }
     var total = sortedValues.reduce(function(sum, value) {
       return sum + value;
     }, 0);
     var roundedTotal = round(total);

     displayTotal = document.getElementById("totalSavings");

     displayTotal.append(roundedTotal);

  } //end totalSavingsLegend

    function createLineChart(data) {
    const arrayCummulative= [];
    const arrayTimestamps = [];
    const rawPubDates = [];
    const arrayDateFull = [];


    for (i=0; i<data.features.length; i++) {

        var currentFeature = data.features;
        arrayCummulative.push(currentFeature[i].properties.cumulativeKwh);

        arrayDateFull.push(currentFeature[i].properties.originSeconds);

        const pubDate = new Date(currentFeature[i].properties.originDate);
        // const weekday=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
        const monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
        const formattedDate =
                          // weekday[pubDate.getDay()] + ' '  +
                         monthname[pubDate.getMonth()] + ' '  +
                         pubDate.getDate() + ', '  +
                         pubDate.getFullYear();

        arrayTimestamps.push(formattedDate);
        rawPubDates.push(pubDate);
    }
    var arrayDateFullMiliseconds = arrayDateFull.map(function(num) {
      return num * 1000;
    });

      var chart = c3.generate({
          bindto: '#chart',
          title: {
              text: 'Cummulative MWh: 2015-2017'
            },
          data: {
              x: 'x',
              columns: [
                  ['x', ...arrayDateFullMiliseconds],
                  ['Cummulative MWh: ', ...arrayCummulative]
              ],
              types: {
                      x :'timeseries',
                    }
              // labels: true //shows point values
          },
            axis: {
                x: {
                    show: false,
                    type: 'timeseries',
                    tick: {
                        format: '%m-%Y'
                    }
                },
            },
            legend: {
              hide: true
            },
            grid: {
              x: {
                show: true
              },
              y: {
                show: false
              }
            },
            colors: {
                cummulative: '#ff0000',
                x: '#810f7c'
              }
      }); //end c3 chart
  } //end createLineChart


function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

//getRandomInRange(-180, 180, 3)
const randomsuffix = getRandomInRange(-0.017, 0.017, 4);
console.log(randomsuffix);

function generateRandomizedCoordinates(data) {

    const randomoizedCoordinatesArray = [];

    for (i=0; i<data.features.length; i++) {

        var currentFeature = data.features;

        arrayCummulative.push(currentFeature[i].properties.cumulativeKwh);



    }
     //console.log(sortedValues); // [1.490147454, 1.508210399, 2.907126588, 3.036347987, 6.321488848, 10.57035492, 11.1674429, 17.25689383]
     var total = sortedValues.reduce(function(sum, value) {
       return sum + value;
     }, 0);
     //console.log(arrayCummulative); //[2, 19, 22, 33, 44, 46, 53, 54]
     var roundedTotal = round(total);

     displayTotal = document.getElementById("totalSavings");

     displayTotal.append(roundedTotal);
     // displayTotal.append(arrayCummulative);

  } //end generateRandomizedCoordinates

  function showMap() {
      // $('#map').css('visibility', 'visible');
      // $('.loader').hide();
      setTimeout(function() {
        $("#map").css("visibility", "visible");
        $(".sidebar").css("visibility", "visible");
        // $("#markerChartContainer").css("display", "block");
        $(".legend").css("visibility", "visible");
        $(".loader").fadeOut();
      }, 700);
  }

});
