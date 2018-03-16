/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */
//Global Variables
var data;
var stringFilter1 = "";
var stringFilter2 = "";
var stringFilter3 = "";
var valueFilter1 = "";
var valueFilter2 = "";
var valueFilter3 = "";
var selectValue = 'All';

/* =====================
  Map Setup
===================== */
var mapOpts = {
  center: [0, 0],
  zoom: 2,
  zoomDelta: 3
};
var map = L.map('map', mapOpts);

// Another options object
var tileOpts = {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
};
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', tileOpts).addTo(map);
/* =====================
  Parse and store data for later use
===================== */
var getData = $.ajax('');

data = _.chain(parsedRes)
  .map(function(datum) {
    return datum;

  }).groupBy(function(datum) {

    // groupBy breaks the data up into groups (grouped by continent name here)
    return datum;

  }).mapObject(function(group) {

    return {
      data: group,
      features: L.featureGroup(markerArray)
        .on('click', function() {  // Bind a function onto any click on this `featureGroup`
          map.fitBounds(this.getBounds(), fitBoundsOptions);
        })
    };
  }).value();

/* =====================
    Prepare Some Statistics Functions
  ===================== */
var MedianValue= ;
var MedianSize=  ;
var MedianUnits= ;

// Add the featureGroups to our map
_.each(data, function(datum) { datum.features.addTo(map);});
};

/*
* This function filters our data and plots it
*/
var filterAndPlot = function() {
_.each(data, function() {
  var markerArray =
  _.each(markerArray, function(marker) {.addLayer(marker); });
});
};

var onStringFilterChange = function(e) {
stringFilter = e.target.value.toLowerCase();
filterAndPlot();
};

var onSelectChange = function(e) {
selectValue = e.target.value;
filterAndPlot();
};


/* =====================
Events to bind when the page is loaded - we're using the functions defined just above
===================== */
var bindEvents = function() {
// the `keyup` event fires after a keypress is lifted
$('#str').keyup(onStringFilterChange);

// the `change` event fires whenever the input it is bound to changes
$('#sel').change(onSelectChange);
};


/* =====================
Application execution
===================== */
$(document).ready(function() {

});
