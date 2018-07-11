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


var buildings = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "id": "a8ef48121-9b3c-4c0b-abf2-900f65375777",
        "mwhDesign": 75.03,
        "mwhTarget": 71.62,
        "mwhSavings": 3.41,
        "autoOff": 3.04,
        "daylighting": 1.31,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Medical buildings and clinic",
        "address": "4135 Blackhawk Plaza Circle",
        "city": "Danville",
        "state": "CA",
        "zip": 94506,
        "originDate": "1.44381E+12",
        "originSeconds": 1443811502,
        "cumulativeKwh": 3.41,
        "designCity": "",
        "designState": "",
        "area": 3097.25
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9352287,
          37.79742192
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a9d7b9e93-ffa3-4f29-bd30-8def6da9863b-35b71af0-6ed5-11e5-b617-6fcf5338786d-5ff7e120-6ed8-11e5-b617-6fcf5338786d",
        "mwhDesign": 1175.59,
        "mwhTarget": 1008.08,
        "mwhSavings": 167.51,
        "autoOff": 0,
        "daylighting": 222.35,
        "powerAdjust": 4.37,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "1680 Monte Vista Ave",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.44441E+12",
        "originSeconds": 1444411502,
        "cumulativeKwh": 170.92,
        "designCity": "",
        "designState": "",
        "area": 28189.94
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9459106,
          38.37383164
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a69a498fd-ab20-4728-a16b-4cd618812cf9-cf5811b0-7078-11e5-b617-6fcf5338786d",
        "mwhDesign": 184.71,
        "mwhTarget": 181.69,
        "mwhSavings": 3.02,
        "autoOff": 0,
        "daylighting": 0.96,
        "powerAdjust": 2.15,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "1090 Harbison",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.44443E+12",
        "originSeconds": 1444431508,
        "cumulativeKwh": 173.94,
        "designCity": "",
        "designState": "",
        "area": 4215.81
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.975581,
          38.35855887
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a96b0414b-1a64-496f-9e96-ce2157a27023-e77e7320-8eef-11e5-ade5-6fcf5338786d",
        "mwhDesign": 595.6,
        "mwhTarget": 512.42,
        "mwhSavings": 83.17,
        "autoOff": 24.35,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 58.83,
        "type": "Commercial and industrial storage bldg",
        "address": "800 Alfred Nobel Drive",
        "city": "Hercules",
        "state": "CA",
        "zip": 94547,
        "originDate": "1.44563E+12",
        "originSeconds": 1445627847,
        "cumulativeKwh": 257.12,
        "designCity": "",
        "designState": "",
        "area": 23501.91
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2778333,
          38.00451277
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a43e6696c-0ec5-4515-909c-57d8a78da55b",
        "mwhDesign": 47.24,
        "mwhTarget": 47.24,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Office building",
        "address": "744 Empire, Suite 240",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.44606E+12",
        "originSeconds": 1446059437,
        "cumulativeKwh": 257.12,
        "designCity": "",
        "designState": "",
        "area": 3207.13
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0443773,
          38.26446524
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a840b2acc-d927-48c9-8849-e3ce0a579505",
        "mwhDesign": 354.36,
        "mwhTarget": 259.54,
        "mwhSavings": 94.82,
        "autoOff": 53.74,
        "daylighting": 6.4,
        "powerAdjust": 6.69,
        "lpd": 36.54,
        "type": "All other",
        "address": "218 Dobbins",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.44606E+12",
        "originSeconds": 1446060581,
        "cumulativeKwh": 351.94,
        "designCity": "",
        "designState": "",
        "area": 7397.69
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0037669,
          38.34799261
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "aebf6c80d-e03e-45a0-98bc-c320ee778b2b",
        "mwhDesign": 51.57,
        "mwhTarget": 47.57,
        "mwhSavings": 3.99,
        "autoOff": 2.38,
        "daylighting": 1.18,
        "powerAdjust": 1.5,
        "lpd": 0,
        "type": "Medical buildings and clinic",
        "address": "1600 Travis Blvd",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.44606E+12",
        "originSeconds": 1446063205,
        "cumulativeKwh": 355.93,
        "designCity": "",
        "designState": "",
        "area": 3052.38
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0459544,
          38.25793848
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a7c06536c-1eef-4f7a-9052-4aa0a110607b",
        "mwhDesign": 1057.26,
        "mwhTarget": 1034.63,
        "mwhSavings": 22.62,
        "autoOff": 1.76,
        "daylighting": 8.71,
        "powerAdjust": 13.61,
        "lpd": 0,
        "type": "Grocery store",
        "address": "2525 North Texas St",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.44659E+12",
        "originSeconds": 1446593638,
        "cumulativeKwh": 378.55,
        "designCity": "",
        "designState": "",
        "area": 31638.19
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0236303,
          38.28245278
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "ac4a07431-39ea-4f84-90f3-9bb564300cf9-7b889a70-83fe-11e5-a9a2-6fcf5338786d",
        "mwhDesign": 1145.99,
        "mwhTarget": 1020.64,
        "mwhSavings": 125.36,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 131.87,
        "type": "Retail and wholesale store",
        "address": "2505 North Texas St.",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.4466E+12",
        "originSeconds": 1446596309,
        "cumulativeKwh": 503.91,
        "designCity": "",
        "designState": "",
        "area": 19457.72
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0278824,
          38.26984225
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a83557529-1569-4365-b3eb-2ce4d6bbec69",
        "mwhDesign": 786.73,
        "mwhTarget": 527.87,
        "mwhSavings": 258.85,
        "autoOff": 91.82,
        "daylighting": 0.62,
        "powerAdjust": 140.93,
        "lpd": 0,
        "type": "All other",
        "address": "2505 North Texas St.",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.4466E+12",
        "originSeconds": 1446597638,
        "cumulativeKwh": 762.77,
        "designCity": "",
        "designState": "",
        "area": 22741.28
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0239557,
          38.28331303
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a16ef1833-212b-4841-9115-53ba4a0a882d",
        "mwhDesign": 169.54,
        "mwhTarget": 126.73,
        "mwhSavings": 42.81,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 43.11,
        "lpd": 0,
        "type": "All other",
        "address": "575 Price Ave",
        "city": "Redwood City",
        "state": "CA",
        "zip": 94063,
        "originDate": "1.44745E+12",
        "originSeconds": 1447452006,
        "cumulativeKwh": 805.57,
        "designCity": "",
        "designState": "",
        "area": 4324.13
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2328703,
          37.48655875
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "aeeed6e0a-94a0-4f85-a1f5-1626448b814e",
        "mwhDesign": 941.06,
        "mwhTarget": 782.5,
        "mwhSavings": 158.56,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 150.7,
        "lpd": 0,
        "type": "All other",
        "address": "25001 Industrial Blvd",
        "city": "Hayward",
        "state": "CA",
        "zip": 94545,
        "originDate": "1.44752E+12",
        "originSeconds": 1447523531,
        "cumulativeKwh": 964.13,
        "designCity": "",
        "designState": "",
        "area": 29287.25
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1251293,
          37.65249524
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a32cad6b5-a884-457f-97f2-528291bebe8c",
        "mwhDesign": 1036.45,
        "mwhTarget": 1022.46,
        "mwhSavings": 13.99,
        "autoOff": 0,
        "daylighting": 1.42,
        "powerAdjust": 14.25,
        "lpd": 0,
        "type": "Office building",
        "address": "900 Jefferson Road, 2nd Floor",
        "city": "Redwood City",
        "state": "CA",
        "zip": 94063,
        "originDate": "1.44771E+12",
        "originSeconds": 1447709632,
        "cumulativeKwh": 978.12,
        "designCity": "",
        "designState": "",
        "area": 24437
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2440976,
          37.48207545
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a436e3f35-6d67-409f-b785-6734f0d777a1",
        "mwhDesign": 490.72,
        "mwhTarget": 488.76,
        "mwhSavings": 1.97,
        "autoOff": 0.35,
        "daylighting": 2.16,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "All other",
        "address": "828 Alamo Dr",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.44901E+12",
        "originSeconds": 1449010144,
        "cumulativeKwh": 980.09,
        "designCity": "",
        "designState": "",
        "area": 19564.91
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0081952,
          38.35780937
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a8d4b5040-2cb6-4736-888c-2a6fd2e8ee7b",
        "mwhDesign": 127.22,
        "mwhTarget": 83.08,
        "mwhSavings": 44.14,
        "autoOff": 22.91,
        "daylighting": 0,
        "powerAdjust": 18.31,
        "lpd": 0,
        "type": "Medical buildings and clinic",
        "address": "2501 Nut Tree Rd",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95687,
        "originDate": "1.44908E+12",
        "originSeconds": 1449081881,
        "cumulativeKwh": 1024.23,
        "designCity": "",
        "designState": "",
        "area": 5097.5
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9693444,
          38.3450254
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a96aed74e-e3e6-4927-a0be-904e5bd07468",
        "mwhDesign": 134.87,
        "mwhTarget": 131.19,
        "mwhSavings": 3.68,
        "autoOff": 1.54,
        "daylighting": 0,
        "powerAdjust": 1.76,
        "lpd": 0,
        "type": "Restaurant",
        "address": "661 Elmira Rd",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95687,
        "originDate": "1.44927E+12",
        "originSeconds": 1449273590,
        "cumulativeKwh": 1027.91,
        "designCity": "",
        "designState": "",
        "area": 2015.94
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.963813,
          38.36082073
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a74c98e4f-028e-411b-8343-2be00c00b0a8",
        "mwhDesign": 114.32,
        "mwhTarget": 91.97,
        "mwhSavings": 22.35,
        "autoOff": 5.01,
        "daylighting": 0,
        "powerAdjust": 13.8,
        "lpd": 4.32,
        "type": "Medical buildings and clinic",
        "address": "671 Elmira Rd",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.44928E+12",
        "originSeconds": 1449276117,
        "cumulativeKwh": 1050.26,
        "designCity": "",
        "designState": "",
        "area": 2802.13
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9395921,
          38.36688945
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a0a2e88c4-e058-4e14-9e6f-42fac23cdb40",
        "mwhDesign": 41.21,
        "mwhTarget": 41.21,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Office building",
        "address": "1525 WEBSTER",
        "city": "Fairfield",
        "state": "CA",
        "zip": 95645,
        "originDate": "1.47004E+12",
        "originSeconds": 1470038880,
        "cumulativeKwh": 1050.26,
        "designCity": "",
        "designState": "",
        "area": 1942.06
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.056001,
          38.26472279
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a602bcf0d-e531-4108-ae9d-0d2a5b0d8464-bd50f340-64c6-11e6-bbe6-83172005af47",
        "mwhDesign": 356.8,
        "mwhTarget": 231.45,
        "mwhSavings": 125.35,
        "autoOff": 56.29,
        "daylighting": 0,
        "powerAdjust": 81.39,
        "lpd": 0,
        "type": "Religious facility",
        "address": "730 East Main",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.47044E+12",
        "originSeconds": 1470438896,
        "cumulativeKwh": 1175.61,
        "designCity": "",
        "designState": "",
        "area": 7090.63
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9752697,
          38.34077047
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "ab874a263-d986-43c4-9420-f03140e23680-0e610e50-64c7-11e6-bbe6-83172005af47",
        "mwhDesign": 390.94,
        "mwhTarget": 325.97,
        "mwhSavings": 64.97,
        "autoOff": 6.12,
        "daylighting": 0,
        "powerAdjust": 3.84,
        "lpd": 72.61,
        "type": "Religious facility",
        "address": "445 Pacific Ave",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.47078E+12",
        "originSeconds": 1470781256,
        "cumulativeKwh": 1240.58,
        "designCity": "",
        "designState": "",
        "area": 5989.13
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0287064,
          38.25241745
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "aa6703776-f24f-48f9-b2a8-cffa46ca609a-fc0e9a60-75d8-11e6-b608-d1489a62d951",
        "mwhDesign": 35.56,
        "mwhTarget": 31.98,
        "mwhSavings": 3.58,
        "autoOff": 5.18,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Office building",
        "address": "767 Eubanks",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.472E+12",
        "originSeconds": 1472000908,
        "cumulativeKwh": 1244.16,
        "designCity": "",
        "designState": "",
        "area": 1784.75
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9590336,
          38.39492929
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a1d0c9889-0a76-4d9a-94ee-3b3ca8bcbb3b-6450dc60-76c3-11e6-b608-d1489a62d951",
        "mwhDesign": 341.01,
        "mwhTarget": 239.14,
        "mwhSavings": 101.87,
        "autoOff": 51.66,
        "daylighting": 2.45,
        "powerAdjust": 58.8,
        "lpd": 0,
        "type": "Restaurant",
        "address": "140 Browns Valley Pkwy",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.47276E+12",
        "originSeconds": 1472763412,
        "cumulativeKwh": 1346.03,
        "designCity": "",
        "designState": "",
        "area": 5219.34
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9703441,
          38.37113195
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a5edb2ae4-1bd8-4a18-9436-160a808a10a8-1538b110-7610-11e6-b608-d1489a62d951",
        "mwhDesign": 174.92,
        "mwhTarget": 107.08,
        "mwhSavings": 67.85,
        "autoOff": 0,
        "daylighting": 8.32,
        "powerAdjust": 0,
        "lpd": 98.17,
        "type": "Commercial and industrial work bldgs",
        "address": "4455 CENTRAL WAY, SUITE B",
        "city": "FAIRFIELD",
        "state": "CA",
        "zip": 94534,
        "originDate": "1.47322E+12",
        "originSeconds": 1473221379,
        "cumulativeKwh": 1413.87,
        "designCity": "",
        "designState": "",
        "area": 1548.75
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1186527,
          38.22412128
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "adacb9425-ad76-499a-9bd2-d8a71932d488",
        "mwhDesign": 93.72,
        "mwhTarget": 93.72,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Restaurant",
        "address": "3345 North Texas St",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.47371E+12",
        "originSeconds": 1473705924,
        "cumulativeKwh": 1413.87,
        "designCity": "",
        "designState": "",
        "area": 2210.5
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0509808,
          38.28020682
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a91e959cb-c18c-465d-9e2a-0ce23e957d7c-acdc7640-83fe-11e6-9285-92ede09a7dc3",
        "mwhDesign": 61.6,
        "mwhTarget": 39.45,
        "mwhSavings": 22.15,
        "autoOff": 10.2,
        "daylighting": 0,
        "powerAdjust": 14.64,
        "lpd": 0,
        "type": "Restaurant",
        "address": "825 Texas St",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.47449E+12",
        "originSeconds": 1474487568,
        "cumulativeKwh": 1436.02,
        "designCity": "",
        "designState": "",
        "area": 1410
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0555665,
          38.23456329
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a355e80e0-2f71-4d24-90b2-cecc1e409047-b8d97dc0-85a8-11e6-b9ef-4d725dfa7ee9",
        "mwhDesign": 1350.34,
        "mwhTarget": 1350.34,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Commercial and industrial storage bldg",
        "address": "2385 Watney Way",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.47491E+12",
        "originSeconds": 1474907072,
        "cumulativeKwh": 1436.02,
        "designCity": "",
        "designState": "",
        "area": 101022.22
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0675949,
          38.22567493
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a243a027b-9a15-4711-904e-6dcd63f5a9bf",
        "mwhDesign": 121.24,
        "mwhTarget": 121.24,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "1633 E Monte Vista Ave",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.47518E+12",
        "originSeconds": 1475179437,
        "cumulativeKwh": 1436.02,
        "designCity": "",
        "designState": "",
        "area": 3567.81
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9721918,
          38.353733
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a8d4c3ef1-2686-4f73-826a-6d09e1f7b405",
        "mwhDesign": 60.66,
        "mwhTarget": 60.66,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Restaurant",
        "address": "1470 E Monte Vista Ava",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.47519E+12",
        "originSeconds": 1475190572,
        "cumulativeKwh": 1436.02,
        "designCity": "",
        "designState": "",
        "area": 1456.88
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9590054,
          38.37381803
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "ad5fafa7b-d7d7-4785-a124-cd4c5a396e48",
        "mwhDesign": 223.44,
        "mwhTarget": 117.82,
        "mwhSavings": 105.62,
        "autoOff": 53.63,
        "daylighting": 0,
        "powerAdjust": 64.14,
        "lpd": 6.2,
        "type": "Classroom bldg (class w/ little ancillary)",
        "address": "4940 Allison Pkwy",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.47519E+12",
        "originSeconds": 1475193810,
        "cumulativeKwh": 1541.64,
        "designCity": "",
        "designState": "",
        "area": 3940.97
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9536575,
          38.38909312
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a71c48827-acfd-4950-8cd1-dfd72f0549b8",
        "mwhDesign": 805.48,
        "mwhTarget": 697.01,
        "mwhSavings": 108.47,
        "autoOff": 56.97,
        "daylighting": 0,
        "powerAdjust": 88.3,
        "lpd": 0,
        "type": "All other",
        "address": "5692 Leisure Town ",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.47554E+12",
        "originSeconds": 1475537939,
        "cumulativeKwh": 1650.12,
        "designCity": "",
        "designState": "",
        "area": 53480.34
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9158259,
          38.32342147
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a2d6966d8-691a-4faa-adf5-9bc6835639be",
        "mwhDesign": 105.57,
        "mwhTarget": 105.57,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "2700 N Texas St",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.4764E+12",
        "originSeconds": 1476398083,
        "cumulativeKwh": 1650.12,
        "designCity": "",
        "designState": "",
        "area": 8101.28
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0295687,
          38.2867081
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "af1ecd745-19c2-4e14-b570-3d0a0cce9900",
        "mwhDesign": 206.6,
        "mwhTarget": 206.6,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Religious facility",
        "address": "4800 Horse Creek Drive",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.47699E+12",
        "originSeconds": 1476985103,
        "cumulativeKwh": 1650.12,
        "designCity": "",
        "designState": "",
        "area": 11723.41
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9509036,
          38.38842752
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "ad1c38aca-46b9-4d29-8a91-4e1d18e4e61a",
        "mwhDesign": 148.46,
        "mwhTarget": 72.55,
        "mwhSavings": 75.92,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 95.02,
        "type": "Restaurant",
        "address": "1300 Georgia",
        "city": "Vallejo",
        "state": "CA",
        "zip": 94590,
        "originDate": "1.477E+12",
        "originSeconds": 1476999524,
        "cumulativeKwh": 1726.03,
        "designCity": "",
        "designState": "",
        "area": 1097
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.237745,
          38.10169261
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a4ee975ff-6d79-46da-95e9-bfe849fa34ae",
        "mwhDesign": 365.79,
        "mwhTarget": 255.45,
        "mwhSavings": 110.35,
        "autoOff": 0.56,
        "daylighting": 0,
        "powerAdjust": 135.28,
        "lpd": 0,
        "type": "All other",
        "address": "995 Oliver Rd",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94534,
        "originDate": "1.47707E+12",
        "originSeconds": 1477070542,
        "cumulativeKwh": 1836.38,
        "designCity": "",
        "designState": "",
        "area": 7199.44
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0589664,
          38.23702184
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a4afa545e-05f9-405b-9f02-eca66de22424",
        "mwhDesign": 64.75,
        "mwhTarget": 63.4,
        "mwhSavings": 1.35,
        "autoOff": 0.69,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 1.25,
        "type": "Retail and wholesale store",
        "address": "2701 N. Texas St",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.47707E+12",
        "originSeconds": 1477073648,
        "cumulativeKwh": 1837.73,
        "designCity": "",
        "designState": "",
        "area": 2433.13
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0521134,
          38.27857719
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "ab38a37f2-1f9f-419a-a839-b3420e5ff35e",
        "mwhDesign": 192.38,
        "mwhTarget": 81,
        "mwhSavings": 111.39,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 148.3,
        "type": "Restaurant",
        "address": "2150 Redwood St",
        "city": "Vallejo",
        "state": "CA",
        "zip": 94590,
        "originDate": "1.47708E+12",
        "originSeconds": 1477075675,
        "cumulativeKwh": 1949.12,
        "designCity": "",
        "designState": "",
        "area": 1207.13
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2338491,
          38.11736896
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a070442f4-a049-4534-87e8-40acb14fee50-6a138660-9d39-11e6-ae60-4d725dfa7ee9",
        "mwhDesign": 81.59,
        "mwhTarget": 66.31,
        "mwhSavings": 15.28,
        "autoOff": 13.97,
        "daylighting": 1.58,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Financial institution",
        "address": "640 E. Main St",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.47741E+12",
        "originSeconds": 1477414170,
        "cumulativeKwh": 1964.4,
        "designCity": "",
        "designState": "",
        "area": 6281.25
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.996262,
          38.36221971
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a7c67c754-187f-44be-bf97-7d0017e38ff2",
        "mwhDesign": 130.37,
        "mwhTarget": 130.37,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "1240 Oliver Road",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.4788E+12",
        "originSeconds": 1478804415,
        "cumulativeKwh": 1964.4,
        "designCity": "",
        "designState": "",
        "area": 6702.44
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0501869,
          38.25364947
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a65e38da3-70fb-4282-96b3-9d961e32ea5b-17d4f110-ae8a-11e6-94d0-4d725dfa7ee9",
        "mwhDesign": 238.75,
        "mwhTarget": 173.82,
        "mwhSavings": 64.93,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 75.82,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "100 Allison Pkwy",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.4789E+12",
        "originSeconds": 1478900575,
        "cumulativeKwh": 2029.33,
        "designCity": "",
        "designState": "",
        "area": 9279.88
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9621799,
          38.35652668
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "aee52ebe0-49ab-47a6-87f1-ab0452fb438c-aeb10df0-abb8-11e6-9298-4d725dfa7ee9",
        "mwhDesign": 187.02,
        "mwhTarget": 183.51,
        "mwhSavings": 3.52,
        "autoOff": 1.2,
        "daylighting": 0.09,
        "powerAdjust": 2.85,
        "lpd": 0,
        "type": "Commercial and industrial work bldgs",
        "address": "1097 Nimitz Ave",
        "city": "Vallejo",
        "state": "CA",
        "zip": 94592,
        "originDate": "1.47924E+12",
        "originSeconds": 1479243358,
        "cumulativeKwh": 2032.85,
        "designCity": "",
        "designState": "",
        "area": 21230.31
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2652078,
          38.0933718
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "abd1f4eb3-056c-429b-91a1-2c1f4260c2ab-894e4a20-b0d9-11e6-8cd1-4d725dfa7ee9",
        "mwhDesign": 100.28,
        "mwhTarget": 100.28,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Commercial and industrial work bldgs",
        "address": "1097 Nimitz Ave",
        "city": "Vallejo",
        "state": "CA",
        "zip": 94592,
        "originDate": "1.47942E+12",
        "originSeconds": 1479423726,
        "cumulativeKwh": 2032.85,
        "designCity": "",
        "designState": "",
        "area": 15879.44
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2758217,
          38.10633193
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "aecc00fb9-4077-4e76-beeb-93f9ce8602c6-d295dfd0-c2dc-11e6-9656-4d725dfa7ee9",
        "mwhDesign": 619.27,
        "mwhTarget": 533.19,
        "mwhSavings": 86.08,
        "autoOff": 0.88,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 110.22,
        "type": "Retail and wholesale store",
        "address": "321 Nut Tree Road",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.47985E+12",
        "originSeconds": 1479847827,
        "cumulativeKwh": 2118.93,
        "designCity": "",
        "designState": "",
        "area": 6220.5
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.941879,
          38.37087674
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "ae4ad95fa-e1d9-4771-81ae-1d34398694b4-56a1f190-baa6-11e6-9656-4d725dfa7ee9",
        "mwhDesign": 336.72,
        "mwhTarget": 133.72,
        "mwhSavings": 203,
        "autoOff": 51.27,
        "daylighting": 0,
        "powerAdjust": 97.98,
        "lpd": 115.31,
        "type": "Hotel and motel",
        "address": "4775 Business Center Dr",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.4807E+12",
        "originSeconds": 1480701846,
        "cumulativeKwh": 2321.93,
        "designCity": "",
        "designState": "",
        "area": 3982.31
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1243581,
          38.2256607
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a31767a13-67a4-46df-8161-83a4a3b2b699",
        "mwhDesign": 274.64,
        "mwhTarget": 196.83,
        "mwhSavings": 77.81,
        "autoOff": 12.47,
        "daylighting": 0,
        "powerAdjust": 81.74,
        "lpd": 0,
        "type": "Hotel and motel",
        "address": "4775 Business Center Dr",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.48114E+12",
        "originSeconds": 1481141400,
        "cumulativeKwh": 2399.74,
        "designCity": "",
        "designState": "",
        "area": 10899.13
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1470069,
          38.21413873
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a94dc7575-ac37-49e3-9cee-5784db9eb6c0",
        "mwhDesign": 67.32,
        "mwhTarget": 67.32,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "2700 N Texas St",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.48156E+12",
        "originSeconds": 1481558644,
        "cumulativeKwh": 2399.74,
        "designCity": "",
        "designState": "",
        "area": 1575.13
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0339713,
          38.26081697
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a41508501-cb2f-494e-a805-9b79a7b46d33",
        "mwhDesign": 2262.39,
        "mwhTarget": 2262.39,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "1071 Helen Power Dr.",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95687,
        "originDate": "1.48158E+12",
        "originSeconds": 1481580853,
        "cumulativeKwh": 2399.74,
        "designCity": "",
        "designState": "",
        "area": 37608.88
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9576083,
          38.35254541
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a28b1b2e2-96f8-4ad4-8081-86d4251b9132",
        "mwhDesign": 741.78,
        "mwhTarget": 288.81,
        "mwhSavings": 452.97,
        "autoOff": 108.3,
        "daylighting": 0,
        "powerAdjust": 231.04,
        "lpd": 252.84,
        "type": "All other",
        "address": "90 Orange Tree Cir",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.48228E+12",
        "originSeconds": 1482276057,
        "cumulativeKwh": 2852.71,
        "designCity": "",
        "designState": "",
        "area": 11960.31
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9618037,
          38.36521393
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "af29e296f-183b-469e-93eb-f8437684454d",
        "mwhDesign": 66.78,
        "mwhTarget": 64.57,
        "mwhSavings": 2.21,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 3.84,
        "type": "All other",
        "address": "90 Orange Tree Cir",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.48228E+12",
        "originSeconds": 1482282593,
        "cumulativeKwh": 2854.92,
        "designCity": "",
        "designState": "",
        "area": 2354
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9406557,
          38.37630374
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "abb19f75f-433d-40ac-81c1-3ad7468def47",
        "mwhDesign": 166.63,
        "mwhTarget": 166.63,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Office building",
        "address": "555 Mason St",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.48407E+12",
        "originSeconds": 1484073599,
        "cumulativeKwh": 2854.92,
        "designCity": "",
        "designState": "",
        "area": 3043.34
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9778239,
          38.34846493
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a2cfc0c09-dcd1-4f60-9711-bea9e11668d5",
        "mwhDesign": 947.63,
        "mwhTarget": 932.82,
        "mwhSavings": 14.81,
        "autoOff": 14.81,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Office building",
        "address": "1010 Vaquero Circle",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.48599E+12",
        "originSeconds": 1485992031,
        "cumulativeKwh": 2869.72,
        "designCity": "",
        "designState": "",
        "area": 18559.5
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9535142,
          38.37066254
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "add819626-a1c3-4205-9be8-12c08e80b2e5",
        "mwhDesign": 2926.27,
        "mwhTarget": 2922.81,
        "mwhSavings": 3.47,
        "autoOff": 3.47,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "1451 Gateway Blvd",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.48632E+12",
        "originSeconds": 1486322248,
        "cumulativeKwh": 2873.19,
        "designCity": "",
        "designState": "",
        "area": 41269.75
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.049136,
          38.24782636
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "afdb8f93b-3f7b-4095-96b2-298b559237a8",
        "mwhDesign": 291.54,
        "mwhTarget": 291.54,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "1330 Travis Blvd",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.48769E+12",
        "originSeconds": 1487694541,
        "cumulativeKwh": 2873.19,
        "designCity": "",
        "designState": "",
        "area": 3168
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0570207,
          38.24999676
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "aaf4fb2d3-9a24-4a07-9562-e7e631fccbfa",
        "mwhDesign": 384.89,
        "mwhTarget": 291.15,
        "mwhSavings": 93.74,
        "autoOff": 65.68,
        "daylighting": 17.86,
        "powerAdjust": 10.21,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "1340 East Monte Vista",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.4884E+12",
        "originSeconds": 1488403698,
        "cumulativeKwh": 2966.93,
        "designCity": "",
        "designState": "",
        "area": 6092.75
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9786874,
          38.34447623
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a736c6074-8981-4299-b778-4d101fa7dae8",
        "mwhDesign": 153.74,
        "mwhTarget": 147.39,
        "mwhSavings": 6.35,
        "autoOff": 2.27,
        "daylighting": 0,
        "powerAdjust": 4.08,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "10815 N. Wolfe Road",
        "city": "Cupertino",
        "state": "CA",
        "zip": 95014,
        "originDate": "1.48841E+12",
        "originSeconds": 1488409201,
        "cumulativeKwh": 2973.28,
        "designCity": "",
        "designState": "",
        "area": 2332.38
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0029742,
          37.34597187
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a1e4bad9b-704d-41f4-9b23-5a56408d2d4b",
        "mwhDesign": 188.92,
        "mwhTarget": 179.91,
        "mwhSavings": 9.01,
        "autoOff": 9.01,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Office building",
        "address": "19419 Stevens Creek Blvd, 200",
        "city": "Cupertino",
        "state": "CA",
        "zip": 95014,
        "originDate": "1.48847E+12",
        "originSeconds": 1488471874,
        "cumulativeKwh": 2982.29,
        "designCity": "",
        "designState": "",
        "area": 3569.63
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9946617,
          37.3364544
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a898f2be4-e9af-4c75-8346-f25f48698e4d",
        "mwhDesign": 429.22,
        "mwhTarget": 406.68,
        "mwhSavings": 22.54,
        "autoOff": 21.23,
        "daylighting": 0,
        "powerAdjust": 1.31,
        "lpd": 0,
        "type": "Classroom bldg (class w/ little ancillary)",
        "address": "Business Center Drive",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.48858E+12",
        "originSeconds": 1488581817,
        "cumulativeKwh": 3004.83,
        "designCity": "",
        "designState": "",
        "area": 5868.44
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1377869,
          38.23542937
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "ac69b015c-157d-4ef9-85bd-95af5136c514",
        "mwhDesign": 2886.25,
        "mwhTarget": 2886.25,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Commercial and industrial storage bldg",
        "address": "2041 Sesna Drive",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.48901E+12",
        "originSeconds": 1489008517,
        "cumulativeKwh": 3004.83,
        "designCity": "",
        "designState": "",
        "area": 76355.94
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9642997,
          38.37217743
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "aadb90ec2-b5fb-43a3-99cf-4043c643a9a4",
        "mwhDesign": 285.45,
        "mwhTarget": 262.44,
        "mwhSavings": 23,
        "autoOff": 17.92,
        "daylighting": 0,
        "powerAdjust": 5.08,
        "lpd": 0,
        "type": "All other",
        "address": "1350 Travis Blvd",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.48943E+12",
        "originSeconds": 1489431262,
        "cumulativeKwh": 3027.83,
        "designCity": "",
        "designState": "",
        "area": 4657.56
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.066394,
          38.27605097
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "ae6912fd5-42f4-4d67-a0d7-2ea7ea045161-d99632",
        "mwhDesign": 986.52,
        "mwhTarget": 937.5,
        "mwhSavings": 49.01,
        "autoOff": 6.46,
        "daylighting": 42.56,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Hotel and motel",
        "address": "610 Orange Drive",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95687,
        "originDate": "1.48979E+12",
        "originSeconds": 1489791631,
        "cumulativeKwh": 3076.85,
        "designCity": "",
        "designState": "",
        "area": 19707.63
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9579986,
          38.37293669
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a9694a679-f464-4d2f-a354-d8b10c8a9d75",
        "mwhDesign": 118.76,
        "mwhTarget": 113.47,
        "mwhSavings": 5.29,
        "autoOff": 0,
        "daylighting": 5.29,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Restaurant",
        "address": "196 Nut Tree Pkwy, Ste F",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95687,
        "originDate": "1.49014E+12",
        "originSeconds": 1490136499,
        "cumulativeKwh": 3082.14,
        "designCity": "",
        "designState": "",
        "area": 1720.94
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9798232,
          38.35923791
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a08544f6e-546b-4d8b-9caa-98a29a29f217-d06644",
        "mwhDesign": 215.68,
        "mwhTarget": 174.86,
        "mwhSavings": 40.81,
        "autoOff": 11.25,
        "daylighting": 29.57,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Office building",
        "address": "1499 Olvier Rd",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.49031E+12",
        "originSeconds": 1490308913,
        "cumulativeKwh": 3122.95,
        "designCity": "",
        "designState": "",
        "area": 3522.13
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0605886,
          38.25774994
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a5e4dc456-a278-4c32-b3ca-25d1299f3b91",
        "mwhDesign": 124.23,
        "mwhTarget": 118.68,
        "mwhSavings": 5.56,
        "autoOff": 0,
        "daylighting": 5.56,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Restaurant",
        "address": "21666 Stevens Creek Blvd",
        "city": "Cupertino",
        "state": "CA",
        "zip": 95608,
        "originDate": "1.49037E+12",
        "originSeconds": 1490369358,
        "cumulativeKwh": 3128.51,
        "designCity": "",
        "designState": "",
        "area": 1686.44
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.044874,
          37.31620285
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a2b438511-f8e8-4632-8588-d338ac19f85e",
        "mwhDesign": 375.96,
        "mwhTarget": 289.36,
        "mwhSavings": 86.6,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 62.66,
        "lpd": 23.94,
        "type": "Commercial and industrial work bldgs",
        "address": "2011 N Texas St",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.49142E+12",
        "originSeconds": 1491416246,
        "cumulativeKwh": 3215.11,
        "designCity": "",
        "designState": "",
        "area": 5103.38
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0326344,
          38.27582866
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "ab6c82028-18db-4232-b7e5-c22a73d0eab3",
        "mwhDesign": 213.81,
        "mwhTarget": 213.81,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Office building",
        "address": "2920 Cordelia Rd",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.49185E+12",
        "originSeconds": 1491847750,
        "cumulativeKwh": 3215.11,
        "designCity": "",
        "designState": "",
        "area": 4098.44
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0809872,
          38.2223172
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a48a99e3f-50ec-4c25-a7b0-7cfc7520c87e",
        "mwhDesign": 252.3,
        "mwhTarget": 243.6,
        "mwhSavings": 8.7,
        "autoOff": 7.45,
        "daylighting": 0,
        "powerAdjust": 1.25,
        "lpd": 0,
        "type": "Office building",
        "address": "2020 Harbison Drive",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.49247E+12",
        "originSeconds": 1492468039,
        "cumulativeKwh": 3223.81,
        "designCity": "",
        "designState": "",
        "area": 4511.94
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9778123,
          38.34861846
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a97b3cf90-8196-4617-b20e-338f5120d693-d23165",
        "mwhDesign": 301.47,
        "mwhTarget": 301.47,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "131 Nut Tree Rd, #H",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.49385E+12",
        "originSeconds": 1493853695,
        "cumulativeKwh": 3223.81,
        "designCity": "",
        "designState": "",
        "area": 2810.88
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9421993,
          38.35302181
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a97b3cf90-8196-4617-b20e-338f5120d693",
        "mwhDesign": 301.47,
        "mwhTarget": 301.47,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "131 Nut Tree Rd, #H",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.49385E+12",
        "originSeconds": 1493853695,
        "cumulativeKwh": 3223.81,
        "designCity": "",
        "designState": "",
        "area": 2810.88
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9408064,
          38.36144193
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a81da38f2-3039-483b-8b3b-9a3ade83d455",
        "mwhDesign": 264.91,
        "mwhTarget": 238.35,
        "mwhSavings": 26.56,
        "autoOff": 2.55,
        "daylighting": 17.71,
        "powerAdjust": 6.3,
        "lpd": 0,
        "type": "Restaurant",
        "address": "739 West Texas St, Ste A",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.49453E+12",
        "originSeconds": 1494532905,
        "cumulativeKwh": 3250.36,
        "designCity": "",
        "designState": "",
        "area": 3178.63
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0342644,
          38.23705479
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "abfe6fd5e-3e6f-4f2a-89bd-39e163a8a02f",
        "mwhDesign": 28.08,
        "mwhTarget": 28.08,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Office building",
        "address": "821 Eubanks Drive",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.49462E+12",
        "originSeconds": 1494622630,
        "cumulativeKwh": 3250.36,
        "designCity": "",
        "designState": "",
        "area": 643.38
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9672081,
          38.40561883
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a2b0f18f3-d4ea-4ae9-8907-63464051b522",
        "mwhDesign": 87.39,
        "mwhTarget": 87.39,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Office building",
        "address": "3332 N Texas St, A & B",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.49512E+12",
        "originSeconds": 1495122943,
        "cumulativeKwh": 3250.36,
        "designCity": "",
        "designState": "",
        "area": 1792.5
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0388981,
          38.28308545
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a8a875a89-c50e-4745-a533-1f7eef6aabb0",
        "mwhDesign": 556.12,
        "mwhTarget": 556.12,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Office building",
        "address": "4940 Allison Parkway",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.49627E+12",
        "originSeconds": 1496268800,
        "cumulativeKwh": 3250.36,
        "designCity": "",
        "designState": "",
        "area": 7356.13
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9774534,
          38.37321214
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "acc66bc0d-f69c-4427-87ed-61de9bce9071",
        "mwhDesign": 943.07,
        "mwhTarget": 886.58,
        "mwhSavings": 56.48,
        "autoOff": 10.36,
        "daylighting": 42.49,
        "powerAdjust": 3.63,
        "lpd": 0,
        "type": "Medical buildings and clinic",
        "address": "2500 Hillborn Rd",
        "city": "Fairfield",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.49668E+12",
        "originSeconds": 1496683513,
        "cumulativeKwh": 3306.85,
        "designCity": "",
        "designState": "",
        "area": 14072.75
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0466633,
          38.28460867
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "ad4fae20f-71bb-451b-8e75-7794c21e2695",
        "mwhDesign": 109.05,
        "mwhTarget": 94.58,
        "mwhSavings": 14.48,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 14.48,
        "type": "Restaurant",
        "address": "661 Elmira Rd, #120",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95687,
        "originDate": "1.49677E+12",
        "originSeconds": 1496773642,
        "cumulativeKwh": 3321.32,
        "designCity": "",
        "designState": "",
        "area": 1364.75
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.961033,
          38.34745003
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a6735c9a5-1a44-4b89-88ae-e656cdb990f1",
        "mwhDesign": 2303.41,
        "mwhTarget": 2299.11,
        "mwhSavings": 4.3,
        "autoOff": 4.3,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "1621 E Monte Vista Avenue C",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.49685E+12",
        "originSeconds": 1496853829,
        "cumulativeKwh": 3325.62,
        "designCity": "",
        "designState": "",
        "area": 27454.13
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9697399,
          38.37930097
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a19e0a6fe-33d2-492c-bb56-de64fe280d60",
        "mwhDesign": 614.84,
        "mwhTarget": 614.84,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "311 Nut Tree Rd",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95687,
        "originDate": "1.49695E+12",
        "originSeconds": 1496951004,
        "cumulativeKwh": 3325.62,
        "designCity": "",
        "designState": "",
        "area": 6198.25
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9619148,
          38.37762115
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a184f1b71-60aa-4169-af9e-5df7ad7240c9",
        "mwhDesign": 919.33,
        "mwhTarget": 919.33,
        "mwhSavings": 0,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "324 Nut Tree Rd",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95687,
        "originDate": "1.49705E+12",
        "originSeconds": 1497048614,
        "cumulativeKwh": 3325.62,
        "designCity": "",
        "designState": "",
        "area": 11314.5
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.966302,
          38.38134839
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a0754541e-b648-4c62-8c6e-59629974b8ed",
        "mwhDesign": 308.65,
        "mwhTarget": 301.25,
        "mwhSavings": 7.4,
        "autoOff": 7.4,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Religious facility",
        "address": "4593 Central Way",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94534,
        "originDate": "1.49738E+12",
        "originSeconds": 1497383647,
        "cumulativeKwh": 3333.02,
        "designCity": "",
        "designState": "",
        "area": 3358.84
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1208236,
          38.21944913
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "aac60ffd0-bc6c-489a-bb50-6c63936fd8dd",
        "mwhDesign": 267.32,
        "mwhTarget": 202.85,
        "mwhSavings": 64.46,
        "autoOff": 35.23,
        "daylighting": 14.11,
        "powerAdjust": 15.12,
        "lpd": 0,
        "type": "Restaurant",
        "address": "1121 Texas St.",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.49739E+12",
        "originSeconds": 1497392713,
        "cumulativeKwh": 3397.49,
        "designCity": "",
        "designState": "",
        "area": 2968.94
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0532079,
          38.24573243
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a20fc223d-415b-435b-a117-ba04b8f23e3a",
        "mwhDesign": 731.04,
        "mwhTarget": 690.91,
        "mwhSavings": 40.12,
        "autoOff": 8.66,
        "daylighting": 0,
        "powerAdjust": 31.46,
        "lpd": 0,
        "type": "Commercial and industrial work bldgs",
        "address": "300 Crocker",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.49755E+12",
        "originSeconds": 1497549051,
        "cumulativeKwh": 5257.24,
        "designCity": "",
        "designState": "",
        "area": 13410.94
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9391978,
          38.38537463
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a57060f23-d2c7-48cc-a7ed-193cd4c9419f",
        "mwhDesign": 143.91,
        "mwhTarget": 116.71,
        "mwhSavings": 27.2,
        "autoOff": 18.19,
        "daylighting": 0,
        "powerAdjust": 9.01,
        "lpd": 0,
        "type": "All other",
        "address": "1350 Travis Bld",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.49765E+12",
        "originSeconds": 1497645691,
        "cumulativeKwh": 5284.44,
        "designCity": "",
        "designState": "",
        "area": 2127.31
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0411215,
          38.25893453
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a6132a2a4-635b-42d4-a73c-146898a26e9e",
        "mwhDesign": 50.91,
        "mwhTarget": 43.37,
        "mwhSavings": 7.54,
        "autoOff": 4.84,
        "daylighting": 0,
        "powerAdjust": 2.71,
        "lpd": 0,
        "type": "Restaurant",
        "address": "101 Peabody Rd",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95687,
        "originDate": "1.498E+12",
        "originSeconds": 1497996890,
        "cumulativeKwh": 5291.98,
        "designCity": "",
        "designState": "",
        "area": 921.69
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9598732,
          38.367452
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "abb7c3695-50b3-4622-abaf-45f675a3c4b4",
        "mwhDesign": 577.01,
        "mwhTarget": 566.69,
        "mwhSavings": 10.32,
        "autoOff": 0,
        "daylighting": 5.03,
        "powerAdjust": 5.29,
        "lpd": 0,
        "type": "Restaurant",
        "address": "200 Nut Tree Pkwy",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95687,
        "originDate": "1.49869E+12",
        "originSeconds": 1498693026,
        "cumulativeKwh": 5302.3,
        "designCity": "",
        "designState": "",
        "area": 7192.84
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.976008,
          38.35476383
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a8924af5c-8ac5-4353-85db-c203ea20723a",
        "mwhDesign": 155.84,
        "mwhTarget": 150.46,
        "mwhSavings": 5.39,
        "autoOff": 5.39,
        "daylighting": 0,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Office building",
        "address": "1499 Olver Rd",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.49877E+12",
        "originSeconds": 1498773008,
        "cumulativeKwh": 5307.69,
        "designCity": "",
        "designState": "",
        "area": 3047.44
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.073018,
          38.25604748
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a7b0d7379-9045-4a23-8851-42c4c3f34f66",
        "mwhDesign": 180.06,
        "mwhTarget": 176.66,
        "mwhSavings": 3.4,
        "autoOff": 0,
        "daylighting": 0,
        "powerAdjust": 3.4,
        "lpd": 0,
        "type": "Retail and wholesale store",
        "address": "1350 Travis, #1464B",
        "city": "Fairfield",
        "state": "CA",
        "zip": 94533,
        "originDate": "1.49979E+12",
        "originSeconds": 1499790235,
        "cumulativeKwh": 5311.09,
        "designCity": "",
        "designState": "",
        "area": 968.84
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.059421,
          38.26230307
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "a7ddd61de-d517-4997-9d86-840f4ffd0f70",
        "mwhDesign": 17756.51,
        "mwhTarget": 15936.88,
        "mwhSavings": 1819.63,
        "autoOff": 0,
        "daylighting": 1819.63,
        "powerAdjust": 0,
        "lpd": 0,
        "type": "Commercial and industrial work bldgs",
        "address": "300 Crocker",
        "city": "Vacaville",
        "state": "CA",
        "zip": 95688,
        "originDate": "1.49739E+12",
        "originSeconds": 1497392860,
        "cumulativeKwh": 5217.12,
        "designCity": "",
        "designState": "",
        "area": 299375.84
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.9455058,
          38.39546527
        ]
      }
    }
  ]
}

   map.on('load', function(e) {
   // Add the data as a layer
    map.addLayer({
      id: 'locations',
      type: 'circle',
      // Add a GeoJSON source containing place coordinates and information.
      source: {
        type: 'geojson',
        data: buildings
        // data: 'data/code_cycle_faux2.geojson'
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
