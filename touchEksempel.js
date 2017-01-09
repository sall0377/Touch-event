//teori om touch event er beskrevet godt her: 
// https://mobiforge.com/design-development/html5-mobile-web-touch-events

function init() {
  // Get a reference to our touch-sensitive element
  var touchzone = document.getElementById("touchzone");
  // Add an event handler for the touchstart event
  touchzone.addEventListener("touchstart", touchHandler, false);
}


function touchHandler(event) {
  // Write the coordinates of the touch to the div (id = koordinater)
  //pageX	horizontal coordinate of point relative to page, including scroll offset
  //pageY	vertical coordinate of point relative to page, including scroll offset
  document.getElementById("koordinater").innerHTML = 'x: ' + event.touches[0].pageX + ', y: ' + event.touches[0].pageY;
}