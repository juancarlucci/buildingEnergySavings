$(document).ready(function() {


 // This will let you use the .remove() function later on
  if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
      if (this.parentNode) {
          this.parentNode.removeChild(this);
      }
    };
  }
  

  var colorList = [
      [1.614, '#edf8fb'],
      [4.132, '#bfd3e6'],
      [8.056, '#9ebcda'],
      [13.919, '#8c96c6'],
      [20.464, '#8856a7'],
      [34.615, '#810f7c']
  ];

  mapboxgl.accessToken = 'pk.eyJ1IjoianVhbmNhcmx1Y2NpIiwiYSI6ImNpdzZzcGgwZTAwMWUydHRjaXdnZ29yY3IifQ.OP_E0DFK0JcIb_CT81veqg';


//FILTER
var layerIDs = []; // Will contain a list used to filter against.
var filterInput = document.getElementById('filter-input');





  // This adds the map
  var map = new mapboxgl.Map({
    // container id specified in the HTML
    container: 'map', 
    // style URL
    // style: 'mapbox://styles/juancarlucci/cj4ixk05q1a3x2spb44qq9cy3',
    // style: 'mapbox://styles/mapbox/light-v9' ,
    style: 'mapbox://styles/juancarlucci/cj4zwt62c14mj2socoo25r76v',

    
    // initial position in [long, lat] format
    center: [-122., 38.3], 
    // initial zoom
    zoom: 11,
    minZoom: 8
  });


    var buildings = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "15 - Smart and Final",
        "mwhDesign": 70.48373809,
        "mwhTarget": 68.97552769,
        "mwhSavings": 1.508210399,
        "autoOff": 0.14209768,
        "daylighting": 0.815484209,
        "fulladdress": "2525 N Texas St� Fairfield, 94533",
        "Original_latitude": 38.2752386,
        "Original_longitude": -122.0360094,
        "powerAdjust": 0.55062851,
        "lpd": 0,
        "type": "Grocery store",
        "address": "2525 N Texas St�",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": 1472244081599,
        "origDate2": "239388078-09-28T04:51:43Z",
        "timeURL": "{\"localDate\":\"Friday 26th August 2016 01:41:21 PM\",\"utcDate\":\"Friday 26th August 2016 08:41:21 PM\",\"format\":\"l jS F Y h:i:s A\",\"returnType\":\"json\",\"timestamp\":\"1472244081\",\"timezone\":\"America\\/Los_Angeles\",\"daylightSavingTime\":true,\"url\":\"http:\\/\\/www.convert-unix-time.com?t=1472244081\"}",
        "dateFull": "Friday 26th August 2016 10:41:21 PM",
        "cumulativeKwh": 2,
        "designCity": "Seattle",
        "designState": "WA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.02365221590787,
          38.273540161565904
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "15 - Planet Fitness",
        "mwhDesign": 52.44833839,
        "mwhTarget": 35.19144456,
        "mwhSavings": 17.25689383,
        "autoOff": 7.428669638,
        "daylighting": 4.127152792,
        "fulladdress": "2525 N Texas St, Fairfield, 94533",
        "Original_latitude": 38.2749076,
        "Original_longitude": -122.0359703,
        "powerAdjust": 5.7010714,
        "lpd": 0,
        "type": "All other",
        "address": "2525 N Texas St,",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": 1479256390569,
        "origDate2": "33978597-03-28T04:42:25Z",
        "timeURL": "{\"localDate\":\"Tuesday 15th November 2016 04:33:10 PM\",\"utcDate\":\"Wednesday 16th November 2016 12:33:10 AM\",\"format\":\"l jS F Y h:i:s A\",\"returnType\":\"json\",\"timestamp\":\"1479256390\",\"timezone\":\"America\\/Los_Angeles\",\"daylightSavingTime\":false,\"url\":\"http:\\/\\/www.convert-unix-time.com?t=1479256390\"}",
        "dateFull": "Wednesday 16th November 2016 01:33:10 AM",
        "cumulativeKwh": 19,
        "designCity": "Houston",
        "designState": "TX"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.05107609312203,
          38.266117828079175
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "15 - Unlimited Smiles AS 1510-0394",
        "mwhDesign": 8.57486,
        "mwhTarget": 5.538512013,
        "mwhSavings": 3.036347987,
        "autoOff": 1.85339474,
        "daylighting": 0.442452837,
        "fulladdress": "2501 Nut Tree Rd\" Vacaville, 95687",
        "Original_latitude": 38.3350313,
        "Original_longitude": -121.9537155,
        "powerAdjust": 0.74050041,
        "lpd": 0,
        "type": "Medical buildings and clinic",
        "address": "2501 Nut Tree Rd\"",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95687,
        "originDate": 1479770070661,
        "origDate2": "240020322-04-10T19:17:34Z",
        "timeURL": "{\"localDate\":\"Monday 21st November 2016 03:14:30 PM\",\"utcDate\":\"Monday 21st November 2016 11:14:30 PM\",\"format\":\"l jS F Y h:i:s A\",\"returnType\":\"json\",\"timestamp\":\"1479770070\",\"timezone\":\"America\\/Los_Angeles\",\"daylightSavingTime\":false,\"url\":\"http:\\/\\/www.convert-unix-time.com?t=1479770070\"}",
        "dateFull": "Tuesday 22nd November 2016 12:14:30 AM",
        "cumulativeKwh": 22,
        "designCity": "Newark",
        "designState": "NJ"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.94347208312634,
          38.3490006279198
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "15 - Saks Fifth Avenue",
        "mwhDesign": 78.37253312,
        "mwhTarget": 67.20509021,
        "mwhSavings": 11.1674429,
        "autoOff": 0,
        "daylighting": 10.99086203,
        "fulladdress": "1680 E Monte Vista Ave Vacaville, 95688",
        "Original_latitude": 38.3698599,
        "Original_longitude": -121.9591074,
        "powerAdjust": 0.176580867,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "1680 E Monte Vista Ave",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": 1484182724409,
        "origDate2": "122333870-04-10T19:17:34Z",
        "timeURL": "{\"localDate\":\"Wednesday 11th January 2017 04:58:44 PM\",\"utcDate\":\"Thursday 12th January 2017 12:58:44 AM\",\"format\":\"l jS F Y h:i:s A\",\"returnType\":\"json\",\"timestamp\":\"1484182724\",\"timezone\":\"America\\/Los_Angeles\",\"daylightSavingTime\":false,\"url\":\"http:\\/\\/www.convert-unix-time.com?t=1484182724\"}",
        "dateFull": "Thursday 12th January 2017 01:58:44 AM",
        "cumulativeKwh": 33,
        "designCity": "Walnut Creek",
        "designState": "CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.95950642351075,
          38.38359160888401
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "15 - Life Chiropractic",
        "mwhDesign": 62.73715663,
        "mwhTarget": 52.16680172,
        "mwhSavings": 10.57035492,
        "autoOff": 0,
        "daylighting": 4.47425444,
        "fulladdress": "210 Peabody Rd Vacaville, 95687",
        "Original_latitude": 38.3501089,
        "Original_longitude": -121.9766822,
        "powerAdjust": 6.09610048,
        "lpd": 0,
        "type": "All other",
        "address": "210 Peabody Rd",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95687,
        "originDate": 1489431262324,
        "origDate2": "246699769-11-17T04:51:43Z",
        "timeURL": "{\"localDate\":\"Monday 13th March 2017 11:54:22 AM\",\"utcDate\":\"Monday 13th March 2017 06:54:22 PM\",\"format\":\"l jS F Y h:i:s A\",\"returnType\":\"json\",\"timestamp\":\"1489431262\",\"timezone\":\"America\\/Los_Angeles\",\"daylightSavingTime\":true,\"url\":\"http:\\/\\/www.convert-unix-time.com?t=1489431262\"}",
        "dateFull": "Monday 13th March 2017 07:54:22 PM",
        "cumulativeKwh": 44,
        "designCity": "Chicago",
        "designState": "IL"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9669642290238,
          38.358113696445265
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "15 - DD Discount",
        "mwhDesign": 70.9495157,
        "mwhTarget": 68.04238912,
        "mwhSavings": 2.907126588,
        "autoOff": 0,
        "daylighting": 0.879717697,
        "fulladdress": "2505 North Texas St. Fairfield, 94533",
        "Original_latitude": 38.27526,
        "Original_longitude": -122.035467,
        "powerAdjust": 0,
        "lpd": 2.027408891,
        "type": "Retail and wholesale store",
        "address": "2505 North Texas St.",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": 1489432094543,
        "origDate2": "247532005-12-20T04:51:43Z",
        "timeURL": "{\"localDate\":\"Monday 13th March 2017 12:08:14 PM\",\"utcDate\":\"Monday 13th March 2017 07:08:14 PM\",\"format\":\"l jS F Y h:i:s A\",\"returnType\":\"json\",\"timestamp\":\"1489432094\",\"timezone\":\"America\\/Los_Angeles\",\"daylightSavingTime\":true,\"url\":\"http:\\/\\/www.convert-unix-time.com?t=1489432094\"}",
        "dateFull": "Monday 13th March 2017 08:08:14 PM",
        "cumulativeKwh": 46,
        "designCity": "Redmond",
        "designState": "WA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.03648747251843,
          38.26622624895278
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "15 - Pawsh Place Vet ",
        "mwhDesign": 23.62406249,
        "mwhTarget": 17.30257364,
        "mwhSavings": 6.321488848,
        "autoOff": 4.34767746,
        "daylighting": 0.225148156,
        "fulladdress": "218 Dobbins Vacaville, 95688",
        "Original_latitude": 38.3572342,
        "Original_longitude": -121.9890381,
        "powerAdjust": 0.270567458,
        "lpd": 1.478095775,
        "type": "All other",
        "address": "218 Dobbins",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": 1494535596363,
        "origDate2": "113020326-10-20T00:00:00Z",
        "timeURL": "{\"localDate\":\"Thursday 11th May 2017 01:46:36 PM\",\"utcDate\":\"Thursday 11th May 2017 08:46:36 PM\",\"format\":\"l jS F Y h:i:s A\",\"returnType\":\"json\",\"timestamp\":\"1494535596\",\"timezone\":\"America\\/Los_Angeles\",\"daylightSavingTime\":true,\"url\":\"http:\\/\\/www.convert-unix-time.com?t=1494535596\"}",
        "dateFull": "Thursday 11th May 2017 10:46:36 PM",
        "cumulativeKwh": 53,
        "designCity": "Cedar Rapids",
        "designState": "IA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.00579924709956,
          38.35922833342437
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "15 - Pacific Dental",
        "mwhDesign": 7.621488691,
        "mwhTarget": 6.131341236,
        "mwhSavings": 1.490147454,
        "autoOff": 0.405652127,
        "daylighting": 0.351453897,
        "fulladdress": "671 Elmira Rd Vacaville, 95688",
        "Original_latitude": 38.3517194,
        "Original_longitude": -121.9497941,
        "powerAdjust": 0.558223386,
        "lpd": 0.174818044,
        "type": "Medical buildings and clinic",
        "address": "671 Elmira Rd",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": 1494875585174,
        "origDate2": "226966166-01-01T00:00:00Z",
        "timeURL": "{\"localDate\":\"Monday 15th May 2017 12:13:05 PM\",\"utcDate\":\"Monday 15th May 2017 07:13:05 PM\",\"format\":\"l jS F Y h:i:s A\",\"returnType\":\"json\",\"timestamp\":\"1494875585\",\"timezone\":\"America\\/Los_Angeles\",\"daylightSavingTime\":true,\"url\":\"http:\\/\\/www.convert-unix-time.com?t=1494875585\"}",
        "dateFull": "Monday 15th May 2017 09:13:05 PM",
        "cumulativeKwh": 54,
        "designCity": "San Francisco",
        "designState": "CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.94513339573604,
          38.361890419073056
        ]
      }
    }
  ]
}


   map.on('load', function(e) {
   // Add the data to your map as a layer
    map.addLayer({
      id: 'locations',
      type: 'circle',
      // Add a GeoJSON source containing place coordinates and information.
      source: {
        type: 'geojson',
        // data: buildings
        data: 'data/code_cycle_faux2.geojson'
      },
      paint : {
          'circle-color' : {
            property: 'mwhSavings',
            type: 'interval',
            stops: colorList
        },
          'circle-stroke-color': 'rgb(250,77,16)',
          'circle-stroke-width' : 1,
          // "circle-opacity": 1,
          'circle-radius' : {
            property: 'mwhSavings',
            type: 'exponential',
            stops:  [
            [{ "zoom": 9, "value": 12 }, 1],
            [{ "zoom": 9, "value": 13}, 2],
            [{ "zoom": 9, "value": 14 }, 3],
            [{ "zoom": 11, "value": 1 }, 3],
            [{ "zoom": 11, "value": 8 }, 17],
            [{ "zoom": 11, "value": 15 }, 35],
            [{ "zoom": 20, "value": 1 }, 46],
            [{ "zoom": 20, "value": 9 }, 195],
            [{ "zoom": 20, "value": 18}, 400]
            
        ]

        },
          'circle-opacity' : 0.8
        }

    });


    // //test circle mouse over
    // var circle = L.circle([-121.9537, 38.33], 1000, {
    //   weight: 1,
    //   fillColor: '#816996',
    //   className: "test"
    // }).
    //   addTo(map).on({
    //     "mouseover": function () {
    //       circle.setStyle({
    //         weight: 3,
    //         fillColor: '#810f7c'
    //       })
    //     },
    //     "mouseout": function () {
    //       circle.setStyle({
    //         weight: 1,
    //         fillColor: '#bfd3e6'
    //       })
    //     }
    //   });



  
    //initialize search
    // searchBuildings(buildings);
    //Initialize legend
    // buildLegendList(buildings);
    totalSavingsLegend(buildings);
    // Initialize building list
    buildLocationList(buildings);
    // buildTotalsLegend(buildings);

    createLineChart(buildings);
    // formatDate(buildings);


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
        // 1. Fly to the point
        flyToBuilding(clickedPoint);

        // 2. Close all other popups and display popup for clicked building
        createPopUp(clickedPoint);

        // 3. Clear chart canvas and Create listing chart
        $('#markerChart').parent().each(function() {
            //get child canvas id
            childCanvasId = $(this).find("canvas").attr('id');
            //remove canvas
            $('#' + childCanvasId).remove();
            // append new canvas to the parent again
            $(this).append('<canvas id="' + childCanvasId + '"></canvas>');
          });
      
        updateListingChart(clickedPoint);
     

        // 4. Highlight listing in sidebar (and remove highlight for all other listings)
       var activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }

        var selectedFeature = clickedPoint.properties.address;
        
        for (var i = 0; i < buildings.features.length; i++ ) {
          if (buildings.features[i].properties.address === selectedFeature) {
              selectedFeatureIndex = i;
          }
        }

        var listing = document.getElementById('listing-' + selectedFeatureIndex);
        listing.classList.add('active');

      }
    }); //end map on click




    // //When the mouse moves over a marker change the mouse cursor
    // map.on("mousemove", function(e) {
    //  //get the province feature underneath the mouse
    //  var features = map.queryRenderedFeatures(e.point, {
    //  layers: ["locations"]
    //  });
    //  //if there's a point under our mouse, then do the following.
    //  if (features.length > 0) {
    //  //use the following code to change the 
    //  //cursor to a pointer ('pointer') instead of the default ('')
    //  map.getCanvas().style.cursor = (features[0].properties.Name !== null) ? 'pointer' : '';
    //  }
    //  //if there are no points under our mouse, 
    //  //then change the cursor back to the default
    //  else {
    //  map.getCanvas().style.cursor = '';
    //  }
    // });

    // map.on('mouseenter', function(e) {
    //   var features = map.queryRenderedFeatures(e.point, {
    //     layers: ['locations']
    //   });
    //     // Change the cursor style as a UI indicator.
    //     map.getCanvas().style.cursor = 'pointer';

    //     // Populate the popup and set its coordinates
    //     // based on the feature found.
    //     // popup.setLngLat(e.features[0].geometry.coordinates)
    //     //     .setHTML(e.features[0].properties.description)
    //     //     .addTo(map);
    // });

    // map.on('mouseleave', 'locations', function() {
    //     map.getCanvas().style.cursor = '';
    //     // popup.remove();
    // });

   

    // myLayer.setGeoJSON(buildings);
    // myLayer.on('mouseover', function(e) {
    //     e.layer.openPopup();
    // });
    // myLayer.on('mouseout', function(e) {
    //     e.layer.closePopup();
    // });

    map.on('mousemove', function(e) {
      var markers = map.queryRenderedFeatures(e.point, {
        layers: ['locations']
      });
      map.getCanvas().style.cursor = (markers.length) ? 'pointer' : '';
      map.getCanvas().style.fillColor = (markers.length) ? 'red' : '';

    });








  
  function flyToBuilding(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 12
      }); 
  }

  function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();

    var prop = currentFeature.properties;
    var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat(currentFeature.geometry.coordinates)
          .setHTML('<h3>' + prop.type + '</h3>'
            + '<h4><b>Designer: </b> ' + prop.designCity + ', ' + prop.designState  + '</h4>' 
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

      var gradientFill = ctx.createLinearGradient(0, 500, 100, 0);
      gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.6)");
      gradientFill.addColorStop(1, "rgba(244, 144, 128, 0.6)");

      var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
      gradientStroke.addColorStop(0, "#80b6f4");
      gradientStroke.addColorStop(1, "#f49080");

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
                 // gradientFill,
                 [
                     '#bfd3e6',
                     '#9ebcda',
                     '#8c96c6',
                     '#8856a7',
                     '#810f7c',
                     '#816996'
                 ],
                 borderColor: gradientStroke,
                 // [
                 //     '#627896',
                 //     '#627896',
                 //     '#627896',
                 //     '#627896',
                 //     '#627896',
                 //     '#627896'
                 // ],
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


  
 
  function buildLocationList(data) {
    for (i = 0; i < data.features.length; i++) {
      // Create an array of all the buildings and their properties
      var currentFeature = data.features[i];
      // Shorten data.feature.properties to `prop`
      var prop = currentFeature.properties;
      // Select the listing container in the HTML
      var listings = document.getElementById('listings');
      // Append a div with the class 'item' for each building 
      var listing = listings.appendChild(document.createElement('div'));
      listing.className = 'item';
      listing.id = "listing-" + i;

      // Create a new link with the class 'title' for each building 
      // and fill it with the Building name
      var link = listing.appendChild(document.createElement('a'));
      link.href = '#';
      link.className = 'title';
      link.dataPosition = i;
      link.innerText = prop.name;

      var savings = listing.appendChild(document.createElement('div'));
      // details.innerText = prop.city;
      savings.innerText = 'kwh savings: ' + round(prop.mwhSavings);

      // Create a new div with the class 'details' for each Building 
      // and fill it with the city and phone number
      var details = listing.appendChild(document.createElement('div'));
      // details.innerText = prop.city;
      details.innerText = prop.city;

  
      


      link.addEventListener('click', function(e) {
        // Update the currentFeature to the Building associated with the clicked link
        var clickedListing = data.features[this.dataPosition];

        // 1. Fly to the point associated with the clicked link
        flyToBuilding(clickedListing);

        // 2. Close all other popups and display popup for clicked building
        createPopUp(clickedListing);

        //3. Create new chart for clicked listing
        // updateListingChart(clickedListing);

        // 4. Highlight listing in sidebar (and remove highlight for all other listings)
        var activeItem = document.getElementsByClassName('active');

        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        this.parentNode.classList.add('active');

      });
    }



  } //end buildLocationList
    
  function calcPropRadius(attributeValue) {

    var scaleFactor = 45,
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
     // console.log(sortedValues); // [1.490147454, 1.508210399, 2.907126588, 3.036347987, 6.321488848, 10.57035492, 11.1674429, 17.25689383]
     var total = sortedValues.reduce(function(sum, value) {
       return sum + value;
     }, 0);
     // console.log(arrayCummulative); //[2, 19, 22, 33, 44, 46, 53, 54]
     var roundedTotal = round(total);

     displayTotal = document.getElementById("totalSavings");

     displayTotal.append(roundedTotal);
     // displayTotal.append(arrayCummulative);

  } //end totalSavingsLegend

    function createLineChart(data) {
    const arrayCummulative= [];
    const arrayTimestamps = [];
    const rawPubDates = [];
    const arrayDateFull = [];
   
    
    
    
    
    
    for (i=0; i<data.features.length; i++) {
    
        var currentFeature = data.features;
        arrayCummulative.push(currentFeature[i].properties.cumulativeKwh);
        arrayDateFull.push(currentFeature[i].properties.dateFull);


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

        // var sortedDates = arrayTimestamps.sort(function(a, b) {
        //       return a - b;
        //     });
    }
    
     // console.log(arrayCummulative);
     // console.log(rawPubDates);
     // console.log(arrayDateFull);
     // console.log(arrayTimestamps);

  
      var chart = c3.generate({
          bindto: '#chart',
          data: {
             
              x: 'x',
              //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
              columns: [
                  // ['x',...arrayTimestamps],
                  // ['x', '2015-31-01', '2016-01-02', '2016-01-03', '2016-01-04', '2016-06-05', '2017-01-06'],
                  ['x', ...rawPubDates],
                  ['cummulative', ...arrayCummulative]
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
                y: {
                    // show: false,
                    tick: {
                      
                    }
                }
            },
            legend: {
              hide: true
              //or hide: 'data1'
              //or hide: ['data1', 'data2']
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
const randomsuffix = getRandomInRange(0.01450, 0.04900, 5);
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