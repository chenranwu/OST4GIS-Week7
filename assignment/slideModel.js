/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */
var slideExample = {
  slideNumber: 1,
  title: "My first slide",
  filter: function(geojsonFeature) { return true; }
};

var MySlide1 = {
  slideNumber: 1,
  title: "Market Overview",
  filter: function(geojsonFeature) { return true ;}
};

var MySlide2 = {
  slideNumber: 2,
  title: "Segment Market One: Size",
  filter: function(geojsonFeature) { return true ;}
};

var MySlide3 = {
  slideNumber: 3,
  title: "Segment Market Two: Price",
  filter: function(geojsonFeature) { return true ;}
};

var MySlide4 = {
  slideNumber: 4,
  title: "Segment Market Three: Units",
  filter: function(geojsonFeature) { return true ;}
};

var MySlide5 = {
  slideNumber: 5,
  title: "Segment Market Four: Location",
  filter: function(geojsonFeature) { return true ;}
};

var MySlide6 = {
  slideNumber: 6,
  title: "Summary",
  filter: function(geojsonFeature) { return true ;}
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
//var slideDeck = [slideExample1, slideExample2, slideExample3]
var MyDeck = [MySlide1, MySlide2, MySlide3, MySlide4, MySlide5, MySlide6];
